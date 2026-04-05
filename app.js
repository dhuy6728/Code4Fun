// ==========================================
// 1. DATABASE BÀI HỌC (Giữ nguyên)
// ==========================================
const lessonsDB = {
    javascript: [
        { id: "js1", title: "Bài 1: Cú pháp đầu tiên", theory: "Sử dụng <code>console.log()</code> để in ra màn hình.", task: "In ra: <strong>Hello World</strong>", minExpRequired: 0, expReward: 20, checkLogic: (code) => code.includes('console.log') && code.includes('Hello World') },
        { id: "js2", title: "Bài 2: Khai báo Biến", theory: "Sử dụng từ khóa <code>let</code> để tạo biến chứa dữ liệu.", task: "Tạo biến <code>age = 18</code> và in nó ra màn hình.", minExpRequired: 20, expReward: 30, checkLogic: (code) => code.includes('let age') && code.includes('18') && code.includes('console.log(age)') }
    ],
    python: [
        { id: "py1", title: "Bài 1: Làm quen Python", theory: "Dùng hàm <code>print()</code> cực kỳ ngắn gọn.", task: "In ra: <strong>Hello World</strong>", minExpRequired: 0, expReward: 20, checkLogic: (code) => code.includes('print') && code.includes('Hello World') },
        { id: "py2", title: "Bài 2: Biến trong Python", theory: "Cứ gán trực tiếp: <code>tuoi = 18</code>", task: "Tạo biến <code>age = 18</code> và in nó ra.", minExpRequired: 20, expReward: 30, checkLogic: (code) => code.includes('age') && code.includes('18') && code.includes('print(age)') }
    ],
    cpp: [
        { id: "cpp1", title: "Bài 1: Cấu trúc C++", theory: "Dùng <code>std::cout</code> để xuất dữ liệu ra màn hình.", task: "Viết lệnh <code>std::cout << \"Hello World\";</code>", minExpRequired: 0, expReward: 20, checkLogic: (code) => code.includes('cout') && code.includes('Hello World') }
    ],
    java: [
        { id: "java1", title: "Bài 1: Xin chào Java", theory: "Lệnh in cơ bản là <code>System.out.println()</code>.", task: "In ra: <strong>Hello World</strong>", minExpRequired: 0, expReward: 20, checkLogic: (code) => code.includes('System.out.println') && code.includes('Hello World') }
    ],
    csharp: [
        { id: "cs1", title: "Bài 1: Console C#", theory: "Dùng <code>Console.WriteLine()</code> để in nội dung.", task: "In ra: <strong>Hello World</strong>", minExpRequired: 0, expReward: 20, checkLogic: (code) => code.includes('Console.WriteLine') && code.includes('Hello World') }
    ]
};

const langNames = { javascript: "JavaScript", python: "Python", cpp: "C++", java: "Java", csharp: "C#" };
const editorModes = { javascript: "javascript", python: "python", cpp: "text/x-c++src", java: "text/x-java", csharp: "text/x-csharp" };
const fileExtensions = { javascript: "main.js", python: "main.py", cpp: "main.cpp", java: "Main.java", csharp: "Program.cs" };

// ==========================================
// 2. QUẢN LÝ BIẾN TOÀN CỤC
// ==========================================
let currentUser = null;
let currentLangWorkspace = null; // Biến xác định user đang code ngôn ngữ nào
let currentLessonId = null;
let editor;

window.onload = () => {
    editor = CodeMirror.fromTextArea(document.getElementById("code-editor"), {
        theme: "dracula", lineNumbers: true, autoCloseBrackets: true
    });

    const activeEmail = localStorage.getItem('code4students_active_user');
    if (activeEmail) {
        const users = JSON.parse(localStorage.getItem('code4students_users')) || {};
        currentUser = users[activeEmail];
        
        // Cơ chế đồng bộ dữ liệu cho User cũ (nếu mở rộng thêm ngôn ngữ)
        if(currentUser) {
            checkAndInitStats();
            showView('view-dashboard');
            updateDashboard();
        }
    }
};

function showView(viewId) {
    document.querySelectorAll('.view-section').forEach(el => { el.classList.remove('active'); el.classList.add('hidden'); });
    document.getElementById(viewId).classList.remove('hidden');
    document.getElementById(viewId).classList.add('active');
    document.getElementById('user-nav').classList.toggle('hidden', viewId === 'view-auth');
}

// Khởi tạo Object cấu trúc đa ngôn ngữ
function checkAndInitStats() {
    if (!currentUser.stats) currentUser.stats = {};
    for (const lang in lessonsDB) {
        if (!currentUser.stats[lang]) {
            currentUser.stats[lang] = { exp: 0, completedLessons: [], errors: 0 };
        }
    }
}

// ==========================================
// 3. LOGIC XÁC THỰC
// ==========================================
function switchAuthTab(tab) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`tab-${tab}`).classList.add('active');
    document.querySelectorAll('.auth-form').forEach(form => { form.classList.remove('active'); form.classList.add('hidden'); });
    document.getElementById(`form-${tab}`).classList.remove('hidden');
    document.getElementById(`form-${tab}`).classList.add('active');
}

function register() {
    const name = document.getElementById('reg-name').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const password = document.getElementById('reg-password').value;

    if (!name || !email || !password) return alert("Vui lòng điền đủ thông tin!");
    let users = JSON.parse(localStorage.getItem('code4students_users')) || {};
    if (users[email]) return alert("Email đã tồn tại!");

    // Cấu trúc Data Mới: Lưu thống kê cho MỌI ngôn ngữ
    users[email] = { email, password, name, stats: {} };
    localStorage.setItem('code4students_users', JSON.stringify(users));
    
    alert("Đăng ký thành công!");
    switchAuthTab('login');
    document.getElementById('login-email').value = email;
}

function login() {
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    let users = JSON.parse(localStorage.getItem('code4students_users')) || {};
    
    if (users[email] && users[email].password === password) {
        currentUser = users[email];
        checkAndInitStats(); // Đảm bảo cấu trúc data không bị lỗi
        localStorage.setItem('code4students_active_user', email);
        showView('view-dashboard');
        updateDashboard();
    } else { alert("Sai email hoặc mật khẩu!"); }
}

function logout() {
    localStorage.removeItem('code4students_active_user');
    currentUser = null; showView('view-auth');
}

function saveUserProgress() {
    let users = JSON.parse(localStorage.getItem('code4students_users')) || {};
    users[currentUser.email] = currentUser;
    localStorage.setItem('code4students_users', JSON.stringify(users));
}

// ==========================================
// 4. RENDER DASHBOARD TỰ ĐỘNG
// ==========================================
function updateDashboard() {
    document.getElementById('user-greeting').innerText = `Chào, ${currentUser.name}`;
    
    const container = document.getElementById('language-tracks-container');
    container.innerHTML = ''; // Xóa sạch để render lại

    // Vòng lặp quét qua toàn bộ ngôn ngữ có trong Database
    for (const [lang, lessons] of Object.entries(lessonsDB)) {
        const stats = currentUser.stats[lang];
        
        // Tính toán thông số
        const level = Math.floor(stats.exp / 50) + 1;
        const progressPercent = (stats.exp % 50) / 50 * 100;
        
        // Tìm bài học đang tới lượt
        const availableLesson = lessons.find(l => !stats.completedLessons.includes(l.id) && stats.exp >= l.minExpRequired);

        // Nút bấm tùy trạng thái hoàn thành
        let actionHTML = '';
        let lessonTitleHTML = '';
        if (availableLesson) {
             lessonTitleHTML = `<strong>Bài tiếp theo:</strong> ${availableLesson.title}`;
             actionHTML = `<button onclick="startLesson('${lang}', '${availableLesson.id}')" class="btn-primary">Vào Học</button>`;
        } else {
             lessonTitleHTML = `<strong style="color: var(--success-color)">🎉 Đã hoàn thành mọi bài học!</strong>`;
             actionHTML = `<button disabled class="btn-outline">Chờ bài mới...</button>`;
        }

        // Tạo thẻ HTML cho Lộ trình
        const cardHTML = `
            <div class="track-card">
                <div class="track-header">
                    <div class="track-title">${langNames[lang]}</div>
                    <div class="track-stats">
                        <span class="stat-badge stat-level">Cấp ${level}</span>
                        <span class="stat-badge">${stats.exp} EXP</span>
                        <span class="stat-badge stat-error">Sai: ${stats.errors} lần</span>
                    </div>
                </div>
                <div class="track-body">
                    <div class="progress-bar"><div class="progress-fill" style="width: ${progressPercent}%"></div></div>
                    <div class="track-footer">
                        <div class="lesson-info">${lessonTitleHTML}</div>
                        ${actionHTML}
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    }
}

// ==========================================
// 5. WORKSPACE VÀ CHẤM ĐIỂM
// ==========================================
function startLesson(lang, lessonId) {
    currentLangWorkspace = lang;
    currentLessonId = lessonId;
    const lesson = lessonsDB[lang].find(l => l.id === lessonId);
    
    editor.setOption("mode", editorModes[lang]);
    document.getElementById('file-name').innerText = fileExtensions[lang];

    document.getElementById('lesson-title').innerText = lesson.title;
    document.getElementById('lesson-theory').innerHTML = lesson.theory;
    document.getElementById('lesson-task').innerHTML = lesson.task;
    
    document.getElementById('theory-section').classList.remove('hidden');
    document.querySelector('#theory-section button').classList.remove('hidden');
    document.getElementById('practice-section').classList.add('hidden');
    document.getElementById('btn-submit').classList.add('hidden');
    document.getElementById('editor-wrapper').classList.add('locked-editor');
    
    editor.setValue("");
    const terminal = document.getElementById('terminal-output');
    terminal.innerText = "Ready..."; terminal.style.color = "var(--terminal-text)";
    
    showView('view-workspace');
    setTimeout(() => editor.refresh(), 100);
}

function startPracticeMode() {
    document.querySelector('#theory-section button').classList.add('hidden');
    document.getElementById('practice-section').classList.remove('hidden');
    document.getElementById('editor-wrapper').classList.remove('locked-editor');
    document.getElementById('btn-submit').classList.remove('hidden');
    editor.focus();
}

function runCode() { /* Logic chạy code giữ nguyên như trước, dùng currentLangWorkspace thay vì currentUser.language */
    const code = editor.getValue();
    const terminal = document.getElementById('terminal-output');
    const lang = currentLangWorkspace;

    terminal.style.color = "#888"; terminal.innerText = "Đang biên dịch...\n";
    
    setTimeout(() => {
        terminal.style.color = "var(--terminal-text)"; terminal.innerText = ""; 
        if (lang === 'javascript') {
            let output = []; const originalConsoleLog = console.log; 
            console.log = (...args) => { output.push(args.join(' ')); };
            try { eval(code); terminal.innerText = output.length > 0 ? output.join('\n') : "(Chạy thành công)"; } 
            catch (error) { terminal.style.color = "#EF4444"; terminal.innerText = "❌ Lỗi: " + error.message; }
            console.log = originalConsoleLog;
        } else {
            let simulatedOutput = "";
            try {
                if (lang === 'python') { const match = code.match(/print\s*\(\s*(['"]?)(.*?)\1\s*\)/); if (match) simulatedOutput = match[2]; }
                else if (lang === 'cpp') { const match = code.match(/cout\s*<<\s*(['"]?)(.*?)\1/); if (match) simulatedOutput = match[2]; }
                else if (lang === 'java') { const match = code.match(/System\.out\.println\s*\(\s*(['"]?)(.*?)\1\s*\)/); if (match) simulatedOutput = match[2]; }
                else if (lang === 'csharp') { const match = code.match(/Console\.WriteLine\s*\(\s*(['"]?)(.*?)\1\s*\)/); if (match) simulatedOutput = match[2]; }
                terminal.innerText = simulatedOutput !== "" ? simulatedOutput.replace(/^["']|["']$/g, '') : "Chạy xong. Bấm nộp bài để kiểm tra.";
            } catch(e) { terminal.style.color = "#EF4444"; terminal.innerText = "❌ Lỗi cú pháp!"; }
        }
    }, 600);
}

function submitCode() {
    const code = editor.getValue();
    const lesson = lessonsDB[currentLangWorkspace].find(l => l.id === currentLessonId);
    const terminal = document.getElementById('terminal-output');

    terminal.innerText = "Đang chấm điểm...";
    
    setTimeout(() => {
        if (lesson.checkLogic(code)) {
            terminal.style.color = "#00FF41";
            terminal.innerText = `✅ CHÍNH XÁC!\nBạn nhận được +${lesson.expReward} EXP.`;
            
            // Cập nhật thống kê khi ĐÚNG
            if (!currentUser.stats[currentLangWorkspace].completedLessons.includes(lesson.id)) {
                currentUser.stats[currentLangWorkspace].completedLessons.push(lesson.id);
                currentUser.stats[currentLangWorkspace].exp += lesson.expReward;
                saveUserProgress();
            }
            setTimeout(() => { showView('view-dashboard'); updateDashboard(); }, 2000);
            
        } else {
            terminal.style.color = "#FF5555";
            terminal.innerText = "❌ Code chưa chính xác! Bạn đã bị ghi nhận 1 lỗi.";
            
            // TĂNG BỘ ĐẾM KHI SAI
            currentUser.stats[currentLangWorkspace].errors += 1;
            saveUserProgress();
        }
    }, 800);
}