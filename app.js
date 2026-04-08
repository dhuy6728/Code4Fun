// ==========================================
// 1. THÔNG TIN CHI TIẾT VỀ CÁC NGÔN NGỮ LẬP TRÌNH
// ==========================================
const languageInfo = {
    javascript: {
        name: "JavaScript",
        description: "Ngôn ngữ lập trình cho Web",
        overview: "JavaScript là ngôn ngữ phổ biến nhất cho phát triển web. Nó chạy trên trình duyệt và có thể tương tác trực tiếp với người dùng. JavaScript được sử dụng để tạo các hiệu ứng động, xử lý sự kiện, và làm cho trang web trở nên sống động.",
        useCases: [
            "🌐 Phát triển website (Frontend)",
            "⚙️ Xây dựng server backend (Node.js)",
            "📱 Phát triển ứng dụng mobile (React Native)",
            "🎮 Tạo trò chơi web",
            "🤖 Machine Learning trên web (TensorFlow.js)"
        ],
        features: "Dễ học, linh hoạt, chạy trên mọi trình duyệt, hỗ trợ hàm cao cấp",
        installGuide: "Bạn không cần cài đặt gì cả! JavaScript đã có sẵn trong mọi trình duyệt web."
    },
    python: {
        name: "Python",
        description: "Ngôn ngữ đơn giản nhất và mạnh mẽ nhất",
        overview: "Python là ngôn ngữ lập trình phổ biến nhất hiện nay, nổi tiếng vì cú pháp đơn giản và dễ hiểu. Nó được dùng trong hầu hết mọi lĩnh vực từ phát triển web, khoa học dữ liệu, đến trí tuệ nhân tạo.",
        useCases: [
            "🤖 Trí tuệ nhân tạo & Machine Learning",
            "📊 Phân tích dữ liệu & Data Science",
            "🌐 Phát triển web (Django, Flask)",
            "🔬 Tính toán khoa học",
            "🤖 Tự động hóa & Scripting"
        ],
        features: "Cú pháp đơn giản, mạnh mẽ, thư viện phong phú, cộng đồng lớn",
        installGuide: "Tải từ https://python.org, sau đó chạy 'python main.py' trong terminal"
    },
    cpp: {
        name: "C++",
        description: "Ngôn ngữ cao hiệu suất cho hệ thống",
        overview: "C++ là ngôn ngữ mạnh mẽ cho lập trình hệ thống, game engine, và ứng dụng yêu cầu hiệu suất cao. Mặc dù phức tạp hơn, C++ mang lại tốc độ và kiểm soát bộ nhớ tuyệt đối.",
        useCases: [
            "🎮 Phát triển game (Unreal Engine)",
            "⚙️ Lập trình hệ thống & OS",
            "🚀 Phần mềm hiệu suất cao",
            "📦 Thư viện & Framework",
            "💻 Phần mềm desktop"
        ],
        features: "Hiệu suất cao, kiểm soát bộ nhớ, hỗ trợ OOP, biên dịch thành machine code",
        installGuide: "Windows: MinGW, Visual Studio | Mac: Clang | Linux: g++ (gcc)"
    },
    java: {
        name: "Java",
        description: "Ngôn ngữ doanh nghiệp & Android",
        overview: "Java là ngôn ngữ hướng đối tượng mạnh mẽ, sử dụng rộng rãi trong doanh nghiệp và phát triển ứng dụng Android. Java chạy trên JVM (Java Virtual Machine) nên có thể chạy trên bất kỳ nền tảng nào.",
        useCases: [
            "📱 Phát triển ứng dụng Android",
            "💼 Phần mềm doanh nghiệp (ERP, CRM)",
            "🌐 Backend web services",
            "📦 Microservices & API",
            "☁️ Cloud computing (AWS, Azure)"
        ],
        features: "Mạnh mẽ, hướng đối tượng, bảo mật cao, hỗ trợ đa luồng (multithreading)",
        installGuide: "Cài JDK từ oracle.com, sau đó chạy 'javac Main.java' và 'java Main'"
    },
    csharp: {
        name: "C#",
        description: "Ngôn ngữ của Microsoft & Unity",
        overview: "C# là ngôn ngữ hiện đại được phát triển bởi Microsoft. Nó được dùng rộng rãi trong phát triển game với Unity và xây dựng ứng dụng Windows. C# kết hợp tính đơn giản của Python với sức mạnh của Java.",
        useCases: [
            "🎮 Phát triển game (Unity Engine)",
            "💻 Ứng dụng Windows Desktop",
            "🌐 Phát triển web (.NET)",
            "☁️ Azure Cloud Services",
            "📱 Ứng dụng mobile (Xamarin)"
        ],
        features: "Hiện đại, an toàn kiểu dữ liệu, hỗ trợ async/await, tích hợp sâu với Windows",
        installGuide: "Cài .NET từ dotnet.microsoft.com, sau đó chạy 'dotnet run'"
    }
};

// ==========================================
// 1. DATABASE BÀI HỌC (Nâng cấp)
// ==========================================
const lessonsDB = {
    javascript: [
        { 
            id: "js1", 
            title: "Bài 1: Cú pháp đầu tiên", 
            theory: `<strong>Giới thiệu console.log()</strong><br/>
<code>console.log()</code> là hàm dùng để in dữ liệu ra console của trình duyệt. Đây là cách phổ biến nhất để debug code.<br/><br/>
<strong>Cú pháp:</strong> <code>console.log('Nội dung cần in');</code><br/>
<strong>Ví dụ:</strong> <code>console.log('Hello World');</code>`,
            hints: "Hãy nhớ sử dụng dấu ngoặc kép hoặc ngoặc đơn để bao quanh văn bản.",
            examples: "console.log('Xin chào'); // Kết quả: Xin chào",
            task: "In ra: <strong>Hello World</strong>", 
            minExpRequired: 0, 
            expReward: 20, 
            checkLogic: (code) => code.includes('console.log') && code.includes('Hello World') 
        },
        { 
            id: "js2", 
            title: "Bài 2: Khai báo Biến", 
            theory: `<strong>Biến trong JavaScript</strong><br/>
Biến là một nơi lưu trữ dữ liệu. Để khai báo biến, sử dụng từ khóa <code>let</code>, <code>const</code>, hoặc <code>var</code>.<br/><br/>
<strong>Cú pháp:</strong> <code>let tênBiến = giáTrị;</code><br/>
<strong>Ví dụ:</strong> <code>let age = 18;</code><br/>
- <code>let</code>: Dùng cho biến có thể thay đổi giá trị<br/>
- <code>const</code>: Dùng cho hằng số (không thay đổi)<br/>
- <code>var</code>: Cách cũ (nên tránh)`,
            hints: "Sau khi khai báo biến, hãy dùng console.log() để in giá trị của nó ra.",
            examples: "let name = 'Minh'; console.log(name); // Kết quả: Minh",
            task: "Tạo biến <code>age = 18</code> và in nó ra màn hình.", 
            minExpRequired: 20, 
            expReward: 30, 
            checkLogic: (code) => code.includes('let age') && code.includes('18') && code.includes('console.log(age)') 
        }
    ],
    python: [
        { 
            id: "py1", 
            title: "Bài 1: Làm quen Python", 
            theory: `<strong>Hàm print() trong Python</strong><br/>
Python sử dụng hàm <code>print()</code> để in dữ liệu ra màn hình. Cú pháp rất đơn giản và dễ hiểu.<br/><br/>
<strong>Cú pháp:</strong> <code>print('Nội dung cần in')</code><br/>
<strong>Ví dụ:</strong> <code>print('Hello World')</code><br/>
<strong>Lưu ý:</strong> Python không cần dấu chấm phẩy ở cuối dòng`,
            hints: "Trong Python, bạn không cần dấu ngoặc và dấu chấm phẩy như các ngôn ngữ khác.",
            examples: "print('Xin chào') # Kết quả: Xin chào",
            task: "In ra: <strong>Hello World</strong>", 
            minExpRequired: 0, 
            expReward: 20, 
            checkLogic: (code) => code.includes('print') && code.includes('Hello World') 
        },
        { 
            id: "py2", 
            title: "Bài 2: Biến trong Python", 
            theory: `<strong>Khai báo Biến trong Python</strong><br/>
Python rất linh hoạt! Bạn có thể gán giá trị trực tiếp mà không cần khai báo kiểu dữ liệu.<br/><br/>
<strong>Cú pháp:</strong> <code>tênBiến = giáTrị</code><br/>
<strong>Ví dụ:</strong> <code>age = 18</code><br/>
Python tự động nhận diện kiểu dữ liệu: số nguyên, số thập phân, chuỗi, v.v.`,
            hints: "Sau khi tạo biến, dùng print() để in giá trị của nó.",
            examples: "tuoi = 25; print(tuoi) # Kết quả: 25",
            task: "Tạo biến <code>age = 18</code> và in nó ra.", 
            minExpRequired: 20, 
            expReward: 30, 
            checkLogic: (code) => code.includes('age') && code.includes('18') && code.includes('print(age)') 
        }
    ],
    cpp: [
        { 
            id: "cpp1", 
            title: "Bài 1: Cấu trúc C++", 
            theory: `<strong>Xuất dữ liệu với cout</strong><br/>
C++ sử dụng <code>std::cout</code> (hoặc <code>cout</code>) để in dữ liệu ra màn hình. Bạn cần nhớ thêm thư viện <code>#include &lt;iostream&gt;</code>.<br/><br/>
<strong>Cú pháp:</strong> <code>std::cout << "Nội dung";</code><br/>
<strong>Ví dụ:</strong> <code>cout << "Hello World";</code><br/>
<strong>Lưu ý:</strong> Dấu &lt;&lt; dùng để gửi dữ liệu vào cout`,
            hints: "Nhớ thêm #include &lt;iostream&gt; ở đầu file và thêm dấu chấm phẩy ở cuối câu lệnh.",
            examples: "#include <iostream>\nusing namespace std;\nint main() { cout << \"Hello\"; return 0; }",
            task: "Viết lệnh <code>std::cout << \"Hello World\";</code>", 
            minExpRequired: 0, 
            expReward: 20, 
            checkLogic: (code) => code.includes('cout') && code.includes('Hello World') 
        }
    ],
    java: [
        { 
            id: "java1", 
            title: "Bài 1: Xin chào Java", 
            theory: `<strong>Xuất dữ liệu trong Java</strong><br/>
Java sử dụng <code>System.out.println()</code> để in dữ liệu ra console.<br/><br/>
<strong>Cú pháp:</strong> <code>System.out.println("Nội dung");</code><br/>
<strong>Ví dụ:</strong> <code>System.out.println("Hello World");</code><br/>
<strong>Lưu ý:</strong> <code>println</code> tự động xuống dòng sau khi in. Nếu không muốn xuống dòng, dùng <code>print()</code>`,
            hints: "Java là ngôn ngữ hướng đối tượng, vì vậy mọi code phải nằm trong một class.",
            examples: "public class HelloWorld { public static void main(String[] args) { System.out.println(\"Hello World\"); } }",
            task: "In ra: <strong>Hello World</strong>", 
            minExpRequired: 0, 
            expReward: 20, 
            checkLogic: (code) => code.includes('System.out.println') && code.includes('Hello World') 
        }
    ],
    csharp: [
        { 
            id: "cs1", 
            title: "Bài 1: Console C#", 
            theory: `<strong>In dữ liệu với Console.WriteLine()</strong><br/>
C# sử dụng <code>Console.WriteLine()</code> để in dữ liệu ra console. Cú pháp tương tự Java nhưng đơn giản hơn.<br/><br/>
<strong>Cú pháp:</strong> <code>Console.WriteLine("Nội dung");</code><br/>
<strong>Ví dụ:</strong> <code>Console.WriteLine("Hello World");</code><br/>
<strong>Lưu ý:</strong> C# là ngôn ngữ hiện đại của Microsoft, được dùng để phát triển game Unity`,
            hints: "Console.WriteLine() tự động xuống dòng. Sử dụng Console.Write() nếu không muốn xuống dòng.",
            examples: "using System; class Program { static void Main() { Console.WriteLine(\"Hello World\"); } }",
            task: "In ra: <strong>Hello World</strong>", 
            minExpRequired: 0, 
            expReward: 20, 
            checkLogic: (code) => code.includes('Console.WriteLine') && code.includes('Hello World') 
        }
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

function goHome() {
    if (currentUser) {
        showView('view-dashboard');
    } else {
        showView('view-auth');
    }
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
             actionHTML = `
             <div style="display: flex; gap: 10px;">
                <button onclick="viewLanguageOverview('${lang}')" class="btn-outline" style="flex: 1;">Tổng Quan</button>
                <button onclick="startLesson('${lang}', '${availableLesson.id}')" class="btn-primary" style="flex: 1;">Vào Học</button>
             </div>`;
        } else {
             lessonTitleHTML = `<strong style="color: var(--success-color)">🎉 Đã hoàn thành mọi bài học!</strong>`;
             actionHTML = `
             <div style="display: flex; gap: 10px;">
                <button onclick="viewLanguageOverview('${lang}')" class="btn-outline" style="flex: 1;">Tổng Quan</button>
                <button disabled class="btn-outline" style="flex: 1;">Chờ bài mới...</button>
             </div>`;
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
    document.getElementById('lesson-hints').innerText = lesson.hints || "Không có gợi ý thêm.";
    document.getElementById('lesson-examples').innerText = lesson.examples || "Không có ví dụ.";
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

// ==========================================
// 6. XEM TỔNG QUAN NGÔN NGỮ
// ==========================================
function viewLanguageOverview(lang) {
    const info = languageInfo[lang];
    
    // Cập nhật tiêu đề và mô tả
    document.getElementById('lang-overview-title').innerText = info.name;
    document.getElementById('lang-overview-description').innerText = info.description;
    document.getElementById('lang-overview-text').innerText = info.overview;
    document.getElementById('lang-features').innerText = info.features;
    document.getElementById('lang-install-guide').innerText = info.installGuide;
    
    // Render danh sách ứng dụng
    const useCasesContainer = document.getElementById('lang-use-cases');
    useCasesContainer.innerHTML = '';
    info.useCases.forEach(useCase => {
        const card = document.createElement('div');
        card.style.cssText = 'background: white; padding: 15px; border-radius: 8px; border: 1px solid var(--border-color); text-align: center;';
        card.innerText = useCase;
        useCasesContainer.appendChild(card);
    });
    
    // Cập nhật button để bắt đầu học
    const lessons = lessonsDB[lang];
    const firstAvailableLesson = lessons[0];
    document.getElementById('btn-start-learning').onclick = () => startLesson(lang, firstAvailableLesson.id);
    
    showView('view-language-overview');
}