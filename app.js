// ==========================================
// 1. THÔNG TIN CHI TI?T V? CÁC NGÔN NG? L?P TR?NH
// ==========================================
const languageInfo = {
    javascript: {
        name: "JavaScript",
        description: "Ngôn ng? l?p tr?nh cho Web",
        overview: "JavaScript là ngôn ng? ph? bi?n nh?t cho phát tri?n web. Nó ch?y trên tr?nh duy?t và có th? týõng tác tr?c ti?p v?i ngý?i dùng. JavaScript ðý?c s? d?ng ð? t?o các hi?u ?ng ð?ng, x? l? s? ki?n, và làm cho trang web tr? nên s?ng ð?ng.",
        useCases: [
            "?? Phát tri?n website (Frontend)",
            "?? Xây d?ng server backend (Node.js)",
            "?? Phát tri?n ?ng d?ng mobile (React Native)",
            "?? T?o tr? chõi web",
            "?? Machine Learning trên web (TensorFlow.js)"
        ],
        features: "D? h?c, linh ho?t, ch?y trên m?i tr?nh duy?t, h? tr? hàm cao c?p",
        installGuide: "B?n không c?n cài ð?t g? c?! JavaScript ð? có s?n trong m?i tr?nh duy?t web."
    },
    python: {
        name: "Python",
        description: "Ngôn ng? ðõn gi?n nh?t và m?nh m? nh?t",
        overview: "Python là ngôn ng? l?p tr?nh ph? bi?n nh?t hi?n nay, n?i ti?ng v? cú pháp ðõn gi?n và d? hi?u. Nó ðý?c dùng trong h?u h?t m?i l?nh v?c t? phát tri?n web, khoa h?c d? li?u, ð?n trí tu? nhân t?o.",
        useCases: [
            "?? Trí tu? nhân t?o & Machine Learning",
            "?? Phân tích d? li?u & Data Science",
            "?? Phát tri?n web (Django, Flask)",
            "?? Tính toán khoa h?c",
            "?? T? ð?ng hóa & Scripting"
        ],
        features: "Cú pháp ðõn gi?n, m?nh m?, thý vi?n phong phú, c?ng ð?ng l?n",
        installGuide: "T?i t? https://python.org, sau ðó ch?y 'python main.py' trong terminal"
    },
    cpp: {
        name: "C++",
        description: "Ngôn ng? cao hi?u su?t cho h? th?ng",
        overview: "C++ là ngôn ng? m?nh m? cho l?p tr?nh h? th?ng, game engine, và ?ng d?ng yêu c?u hi?u su?t cao. M?c dù ph?c t?p hõn, C++ mang l?i t?c ð? và ki?m soát b? nh? tuy?t ð?i.",
        useCases: [
            "?? Phát tri?n game (Unreal Engine)",
            "?? L?p tr?nh h? th?ng & OS",
            "?? Ph?n m?m hi?u su?t cao",
            "?? Thý vi?n & Framework",
            "?? Ph?n m?m desktop"
        ],
        features: "Hi?u su?t cao, ki?m soát b? nh?, h? tr? OOP, biên d?ch thành machine code",
        installGuide: "Windows: MinGW, Visual Studio | Mac: Clang | Linux: g++ (gcc)"
    },
    java: {
        name: "Java",
        description: "Ngôn ng? doanh nghi?p & Android",
        overview: "Java là ngôn ng? hý?ng ð?i tý?ng m?nh m?, s? d?ng r?ng r?i trong doanh nghi?p và phát tri?n ?ng d?ng Android. Java ch?y trên JVM (Java Virtual Machine) nên có th? ch?y trên b?t k? n?n t?ng nào.",
        useCases: [
            "?? Phát tri?n ?ng d?ng Android",
            "?? Ph?n m?m doanh nghi?p (ERP, CRM)",
            "?? Backend web services",
            "?? Microservices & API",
            "?? Cloud computing (AWS, Azure)"
        ],
        features: "M?nh m?, hý?ng ð?i tý?ng, b?o m?t cao, h? tr? ða lu?ng (multithreading)",
        installGuide: "Cài JDK t? oracle.com, sau ðó ch?y 'javac Main.java' và 'java Main'"
    },
    csharp: {
        name: "C#",
        description: "Ngôn ng? c?a Microsoft & Unity",
        overview: "C# là ngôn ng? hi?n ð?i ðý?c phát tri?n b?i Microsoft. Nó ðý?c dùng r?ng r?i trong phát tri?n game v?i Unity và xây d?ng ?ng d?ng Windows. C# k?t h?p tính ðõn gi?n c?a Python v?i s?c m?nh c?a Java.",
        useCases: [
            "?? Phát tri?n game (Unity Engine)",
            "?? ?ng d?ng Windows Desktop",
            "?? Phát tri?n web (.NET)",
            "?? Azure Cloud Services",
            "?? ?ng d?ng mobile (Xamarin)"
        ],
        features: "Hi?n ð?i, an toàn ki?u d? li?u, h? tr? async/await, tích h?p sâu v?i Windows",
        installGuide: "Cài .NET t? dotnet.microsoft.com, sau ðó ch?y 'dotnet run'"
    }
};

const langNames = { javascript: "JavaScript", python: "Python", cpp: "C++", java: "Java", csharp: "C#" };
const editorModes = { javascript: "javascript", python: "python", cpp: "text/x-c++src", java: "text/x-java", csharp: "text/x-csharp" };
const fileExtensions = { javascript: "main.js", python: "main.py", cpp: "main.cpp", java: "Main.java", csharp: "Program.cs" };

// ==========================================
// CUSTOM LESSONS - 10 BÀI CHO M?I NGÔN NG?
// ==========================================
const lessonsDB = {
    javascript: [
        { id: "js1", title: "Bài 1: In ra HelloWorld", theory: `<strong>Gi?i thi?u console.log()</strong><br/>console.log() dùng ð? in d? li?u ra console.`, hints: "S? d?ng d?u ngo?c kép ho?c ðõn bao quanh vãn b?n.", examples: "console.log('Xin chào');", task: "In ra: <strong>Hello World</strong>", minExpRequired: 0, expReward: 20, checkLogic: (code) => code.includes('console.log') && code.includes('Hello World') },
        { id: "js2", title: "Bài 2: Khai báo Bi?n", theory: `<strong>Bi?n trong JavaScript</strong><br/>S? d?ng let, const ho?c var ð? khai báo bi?n.`, hints: "Khai báo bi?n r?i dùng console.log() ð? in.", examples: "let age = 25; console.log(age);", task: "T?o bi?n <code>age = 18</code> và in ra.", minExpRequired: 20, expReward: 30, checkLogic: (code) => code.includes('let age') && code.includes('18') && code.includes('console.log') },
        { id: "js3", title: "Bài 3: Phép toán c?ng tr?", theory: `<strong>Phép toán s? h?c</strong><br/>JavaScript h? tr? +, -, *, /, %.`, hints: "T?o 2 bi?n s?, c?ng chúng, r?i in k?t qu?.", examples: "let a = 10; let b = 5; let sum = a + b; console.log(sum);", task: "T?o <code>num1 = 15, num2 = 7</code>, c?ng và in.", minExpRequired: 50, expReward: 30, checkLogic: (code) => code.includes('num1') && code.includes('15') && code.includes('num2') && code.includes('7') && code.includes('console.log') },
        { id: "js4", title: "Bài 4: Chu?i (String)", theory: `<strong>Làm vi?c v?i chu?i k? t?</strong><br/>N?i chu?i b?ng + ho?c template literals.`, hints: "Dùng + ð? n?i 2 chu?i l?i.", examples: "let first = 'Hello'; let second = 'World'; console.log(first + ' ' + second);", task: "T?o <code>first = 'Code', second = '4Fun'</code>, n?i và in.", minExpRequired: 80, expReward: 30, checkLogic: (code) => code.includes('first') && code.includes('Code') && code.includes('second') && code.includes('4Fun') && code.includes('console.log') },
        { id: "js5", title: "Bài 5: Ði?u ki?n If-Else", theory: `<strong>C?u trúc if-else</strong><br/>Ki?m tra ði?u ki?n và th?c hi?n code khác nhau.`, hints: "S? d?ng >=, <=, ==, != ð? so sánh.", examples: "let age = 20; if (age >= 18) { console.log('Adult'); }", task: "Khai báo <code>score = 85</code>, n?u >= 80 in 'Ð?t', else 'Không ð?t'.", minExpRequired: 110, expReward: 40, checkLogic: (code) => code.includes('score') && code.includes('85') && code.includes('if') && code.includes('console.log') },
        { id: "js6", title: "Bài 6: V?ng l?p For", theory: `<strong>V?ng l?p For</strong><br/>L?p code nhi?u l?n. for (let i = 0; i < 5; i++)`, hints: "S? d?ng for ð? in 10 s? t? 1 ð?n 10.", examples: "for (let i = 1; i <= 5; i++) { console.log(i); }", task: "Dùng for in các s? t? 1 ð?n 10.", minExpRequired: 150, expReward: 40, checkLogic: (code) => code.includes('for') && code.includes('i++') && code.includes('console.log') },
        { id: "js7", title: "Bài 7: M?ng (Array)", theory: `<strong>M?ng - T?p h?p d? li?u</strong><br/>Khai báo: let arr = [1, 2, 3]; Truy c?p: arr[0]`, hints: "T?o m?ng, truy c?p ph?n t? ð?u tiên.", examples: "let numbers = [10, 20, 30]; console.log(numbers[0]);", task: "T?o m?ng <code>colors = ['red', 'green', 'blue']</code>, in ph?n t? [1].", minExpRequired: 190, expReward: 40, checkLogic: (code) => code.includes('[') && code.includes('colors') && code.includes('console.log') },
        { id: "js8", title: "Bài 8: Hàm (Function)", theory: `<strong>Hàm - Tái s? d?ng code</strong><br/>function tênHàm(thamS?) { return k?t qu?; }`, hints: "T?o hàm nhân 2 s?, g?i và in.", examples: "function multiply(a, b) { return a * b; } console.log(multiply(4, 5));", task: "T?o hàm <code>divide(a, b)</code>, g?i v?i 20 và 4.", minExpRequired: 230, expReward: 50, checkLogic: (code) => code.includes('function') && code.includes('console.log') },
        { id: "js9", title: "Bài 9: Object (Ð?i tý?ng)", theory: `<strong>Ð?i tý?ng - Nhóm d? li?u</strong><br/>let obj = { name: 'John', age: 25 }; Truy c?p: obj.name`, hints: "T?o object v?i 2 thu?c tính, in thu?c tính.", examples: "let person = { name: 'Alice', age: 20 }; console.log(person.name);", task: "T?o object <code>car</code> v?i brand='Toyota', in brand.", minExpRequired: 280, expReward: 50, checkLogic: (code) => code.includes('{') && code.includes('car') && code.includes('brand') && code.includes('console.log') },
        { id: "js10", title: "Bài 10: V?ng l?p While", theory: `<strong>V?ng l?p While</strong><br/>while (ði?u ki?n) { code; i++; }`, hints: "T?o while in t? 1 ð?n 5, nh? tãng bi?n!", examples: "let i = 1; while (i <= 5) { console.log(i); i++; }", task: "Dùng while in các s? t? 10 ð?n 15.", minExpRequired: 330, expReward: 50, checkLogic: (code) => code.includes('while') && code.includes('console.log') && (code.includes('++') || code.includes('+=')) }
    ],
    python: [
        { id: "py1", title: "Bài 1: In ra HelloWorld", theory: `<strong>Hàm print() trong Python</strong><br/>print('N?i dung') - ðõn gi?n và không c?n d?u ch?m ph?y.`, hints: "S? d?ng d?u ngo?c kép ho?c ðõn.", examples: "print('Xin chào')", task: "In ra: <strong>Hello World</strong>", minExpRequired: 0, expReward: 20, checkLogic: (code) => code.includes('print') && code.includes('Hello World') },
        { id: "py2", title: "Bài 2: Khai báo Bi?n", theory: `<strong>Bi?n trong Python</strong><br/>Gán tr?c ti?p: age = 18. Python t? ð?ng nh?n di?n ki?u.`, hints: "T?o bi?n, dùng print() ð? in.", examples: "age = 25\nprint(age)", task: "T?o bi?n <code>age = 18</code> và in ra.", minExpRequired: 20, expReward: 30, checkLogic: (code) => code.includes('age') && code.includes('18') && code.includes('print') },
        { id: "py3", title: "Bài 3: Phép toán c?ng tr?", theory: `<strong>Phép toán s? h?c</strong><br/>+, -, *, /, //, % ðý?c Python h? tr?.`, hints: "T?o 2 bi?n, c?ng, r?i in.", examples: "a = 15\nb = 7\nsum = a + b\nprint(sum)", task: "T?o <code>num1 = 20, num2 = 8</code>, c?ng và in.", minExpRequired: 50, expReward: 30, checkLogic: (code) => code.includes('num1') && code.includes('20') && code.includes('num2') && code.includes('8') && code.includes('print') },
        { id: "py4", title: "Bài 4: Chu?i (String)", theory: `<strong>Làm vi?c v?i chu?i</strong><br/>N?i: first + ' ' + second. Ð? dài: len(text)`, hints: "Dùng + ð? n?i chu?i.", examples: "first = 'Hello'\nsecond = 'World'\nprint(first + ' ' + second)", task: "T?o <code>first = 'Python', second = 'Love'</code>, n?i và in.", minExpRequired: 80, expReward: 30, checkLogic: (code) => code.includes('first') && code.includes('Python') && code.includes('second') && code.includes('Love') && code.includes('print') },
        { id: "py5", title: "Bài 5: Ði?u ki?n If-Else", theory: `<strong>C?u trúc if-else trong Python</strong><br/>if ði?u_ki?n:\n    code\nelse:\n    code`, hints: "Nh? dùng : sau if/else và indent.", examples: "age = 20\nif age >= 18:\n    print('Adult')\nelse:\n    print('Child')", task: "T?o <code>score = 90</code>, n?u >= 80 in 'Xu?t s?c'.", minExpRequired: 110, expReward: 40, checkLogic: (code) => code.includes('score') && code.includes('90') && code.includes('if') && code.includes('print') },
        { id: "py6", title: "Bài 6: V?ng l?p For", theory: `<strong>For loop trong Python</strong><br/>for i in range(5): - l?p t? 0 ð?n 4.`, hints: "Dùng range() ð? t?o d?y s?.", examples: "for i in range(5):\n    print(i)", task: "Dùng for in các s? t? 1 ð?n 10.", minExpRequired: 150, expReward: 40, checkLogic: (code) => code.includes('for') && code.includes('range') && code.includes('print') },
        { id: "py7", title: "Bài 7: Danh sách (List)", theory: `<strong>List - Danh sách d? li?u</strong><br/>numbers = [1, 2, 3]; Truy c?p: numbers[0]`, hints: "T?o list, truy c?p ph?n t?.", examples: "numbers = [10, 20, 30]\nprint(numbers[0])", task: "T?o list <code>colors = ['red', 'green', 'blue']</code>, in [1].", minExpRequired: 190, expReward: 40, checkLogic: (code) => code.includes('[') && code.includes('colors') && code.includes('print') },
        { id: "py8", title: "Bài 8: Hàm (Function)", theory: `<strong>Hàm trong Python</strong><br/>def tênHàm(thamS?):\n    return k?t qu?`, hints: "T?o hàm nhân 2 s?, g?i và in.", examples: "def multiply(a, b):\n    return a * b\nprint(multiply(4, 5))", task: "T?o hàm <code>divide(a, b)</code>, g?i v?i 20 / 4.", minExpRequired: 230, expReward: 50, checkLogic: (code) => code.includes('def') && code.includes('print') },
        { id: "py9", title: "Bài 9: T? ði?n (Dictionary)", theory: `<strong>Dictionary - D? li?u có khóa</strong><br/>person = {'name': 'John', 'age': 25}; Truy c?p: person['name']`, hints: "T?o dict, truy c?p giá tr?.", examples: "student = {'name': 'Alice', 'age': 20}\nprint(student['name'])", task: "T?o dict <code>car</code> v?i brand='Tesla', in brand.", minExpRequired: 280, expReward: 50, checkLogic: (code) => code.includes('{') && code.includes('car') && code.includes('brand') && code.includes('print') },
        { id: "py10", title: "Bài 10: V?ng l?p While", theory: `<strong>While loop trong Python</strong><br/>while ði?u_ki?n:\n    code\n    i += 1`, hints: "Nh? tãng bi?n ð? tránh v?ng vô h?n!", examples: "i = 1\nwhile i <= 5:\n    print(i)\n    i += 1", task: "Dùng while in t? 10 ð?n 15.", minExpRequired: 330, expReward: 50, checkLogic: (code) => code.includes('while') && code.includes('print') && (code.includes('+=') || code.includes('+')) }
    ],
    cpp: [
        { id: "cpp1", title: "Bài 1: In ra HelloWorld", theory: `<strong>cout trong C++</strong><br/>#include <iostream><br/>std::cout << "Text";`, hints: "Nh? #include, using namespace std, return 0.", examples: "#include <iostream>\nusing namespace std;\nint main() { cout << \"Hello\"; return 0; }", task: "In ra: <strong>Hello World</strong>", minExpRequired: 0, expReward: 20, checkLogic: (code) => code.includes('cout') && code.includes('Hello World') },
        { id: "cpp2", title: "Bài 2: Khai báo Bi?n", theory: `<strong>Bi?n trong C++ - Ph?i khai báo ki?u</strong><br/>int age = 18; string name = "John";`, hints: "Khai báo ki?u d? li?u r?i tên bi?n.", examples: "int age = 20;\nstring name = \"Alice\";\ncout << age;", task: "Khai báo <code>int age = 25</code> và in ra.", minExpRequired: 20, expReward: 30, checkLogic: (code) => code.includes('int') && code.includes('age') && code.includes('25') && code.includes('cout') },
        { id: "cpp3", title: "Bài 3: Phép toán c?ng tr?", theory: `<strong>Phép toán s? h?c</strong><br/>+, -, *, /, % ð?u ðý?c h? tr?.`, hints: "Khai báo 2 bi?n, c?ng, in k?t qu?.", examples: "int a = 15;\nint b = 7;\nint sum = a + b;\ncout << sum;", task: "Khai báo <code>num1 = 12, num2 = 8</code>, c?ng và in.", minExpRequired: 50, expReward: 30, checkLogic: (code) => code.includes('int') && code.includes('num1') && code.includes('12') && code.includes('cout') },
        { id: "cpp4", title: "Bài 4: Chu?i (String)", theory: `<strong>String trong C++</strong><br/>#include <string><br/>string text = "Hello";`, hints: "Dùng + ð? n?i, nh? #include <string>.", examples: "#include <string>\nstring first = \"Code\";\nstring second = \"4Fun\";\ncout << first + second;", task: "Khai báo <code>first = \"Hello\", second = \"World\"</code>, n?i và in.", minExpRequired: 80, expReward: 30, checkLogic: (code) => code.includes('string') && code.includes('Hello') && code.includes('cout') },
        { id: "cpp5", title: "Bài 5: Ði?u ki?n If-Else", theory: `<strong>If-Else trong C++</strong><br/>if (ði?u_ki?n) { code } else { code }`, hints: "S? d?ng >=, <=, ==, != ð? so sánh.", examples: "int age = 20;\nif (age >= 18) {\n  cout << \"Adult\";\n}", task: "Khai báo <code>score = 75</code>, n?u >= 80 in 'Pass'.", minExpRequired: 110, expReward: 40, checkLogic: (code) => code.includes('if') && code.includes('score') && code.includes('75') && code.includes('cout') },
        { id: "cpp6", title: "Bài 6: V?ng l?p For", theory: `<strong>For loop trong C++</strong><br/>for (int i = 0; i < 5; i++) { cout << i; }`, hints: "Dùng for in 10 s? t? 1 ð?n 10.", examples: "for (int i = 1; i <= 10; i++) {\n  cout << i << \" \";\n}", task: "Dùng for in các s? t? 5 ð?n 15.", minExpRequired: 150, expReward: 40, checkLogic: (code) => code.includes('for') && code.includes('i++') && code.includes('cout') },
        { id: "cpp7", title: "Bài 7: M?ng (Array)", theory: `<strong>M?ng trong C++</strong><br/>int arr[5] = {1, 2, 3, 4, 5}; Truy c?p: arr[0]`, hints: "T?o m?ng, in ph?n t? ð?u.", examples: "int arr[5] = {10, 20, 30, 40, 50};\ncout << arr[0];", task: "Khai báo m?ng ch?a 3 ph?n t?, in ph?n t? 0.", minExpRequired: 190, expReward: 40, checkLogic: (code) => code.includes('[') && code.includes('{') && code.includes('cout') },
        { id: "cpp8", title: "Bài 8: Hàm (Function)", theory: `<strong>Hàm trong C++</strong><br/>int tênHàm(int a, int b) { return a + b; }`, hints: "T?o hàm nhân 2 s?, g?i và in.", examples: "#include <iostream>\nusing namespace std;\nint multiply(int a, int b) { return a * b; }\nint main() { cout << multiply(4, 5); return 0; }", task: "T?o hàm <code>divide(int a, int b)</code>, g?i 20/4.", minExpRequired: 230, expReward: 50, checkLogic: (code) => code.includes('int') && code.includes('cout') },
        { id: "cpp9", title: "Bài 9: Struct (C?u trúc)", theory: `<strong>Struct trong C++</strong><br/>struct Person { string name; int age; };`, hints: "T?o struct, t?o object, in thu?c tính.", examples: "struct Car { string brand; };\nCar c;\nc.brand = \"Toyota\";\ncout << c.brand;", task: "T?o struct Student v?i name, gán giá tr? r?i in.", minExpRequired: 280, expReward: 50, checkLogic: (code) => code.includes('struct') && code.includes('string') && code.includes('cout') },
        { id: "cpp10", title: "Bài 10: Vector (M?ng ð?ng)", theory: `<strong>Vector - M?ng linh ho?t</strong><br/>#include <vector><br/>vector<int> v = {1, 2, 3};`, hints: "T?o vector, thêm ph?n t?, duy?t.", examples: "#include <vector>\nvector<int> nums = {10, 20, 30};\nnums.push_back(40);\nfor (int n : nums) cout << n;", task: "T?o vector, thêm 1, 2, 3, in kích thý?c.", minExpRequired: 330, expReward: 50, checkLogic: (code) => code.includes('vector') && code.includes('push_back') && code.includes('cout') }
    ],
    java: [
        { id: "java1", title: "Bài 1: In ra HelloWorld", theory: `<strong>System.out.println() trong Java</strong><br/>System.out.println("Hello");`, hints: "Nh? class, main method, t? khóa public static void.", examples: "class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Hello\");\n  }\n}", task: "In ra: <strong>Hello World</strong>", minExpRequired: 0, expReward: 20, checkLogic: (code) => code.includes('System.out.println') && code.includes('Hello World') },
        { id: "java2", title: "Bài 2: Khai báo Bi?n", theory: `<strong>Bi?n trong Java - Ph?i khai báo ki?u</strong><br/>int age = 18; String name = "John";`, hints: "Khai báo ki?u r?i tên bi?n.", examples: "String name = \"Alice\";\nint age = 20;\nSystem.out.println(age);", task: "Khai báo <code>int age = 25</code> và in ra.", minExpRequired: 20, expReward: 30, checkLogic: (code) => code.includes('int') && code.includes('age') && code.includes('25') && code.includes('System.out.println') },
        { id: "java3", title: "Bài 3: Phép toán c?ng tr?", theory: `<strong>Phép toán s? h?c</strong><br/>+, -, *, /, % ð?u ðý?c h? tr?.`, hints: "T?o 2 bi?n, c?ng, in k?t qu?.", examples: "int a = 15;\nint b = 7;\nint sum = a + b;\nSystem.out.println(sum);", task: "Khai báo <code>num1 = 12, num2 = 8</code>, c?ng và in.", minExpRequired: 50, expReward: 30, checkLogic: (code) => code.includes('int') && code.includes('num1') && code.includes('12') && code.includes('System.out.println') },
        { id: "java4", title: "Bài 4: Chu?i (String)", theory: `<strong>String trong Java</strong><br/>String text = "Hello"; String name = "World";`, hints: "Dùng + ð? n?i chu?i.", examples: "String first = \"Java\";\nString second = \"Programming\";\nString full = first + \" \" + second;\nSystem.out.println(full);", task: "Khai báo <code>first = \"Hello\", second = \"World\"</code>, n?i và in.", minExpRequired: 80, expReward: 30, checkLogic: (code) => code.includes('String') && code.includes('Hello') && code.includes('System.out.println') },
        { id: "java5", title: "Bài 5: Ði?u ki?n If-Else", theory: `<strong>If-Else trong Java</strong><br/>if (ði?u_ki?n) { code } else { code }`, hints: "S? d?ng >=, <=, ==, != ð? so sánh.", examples: "int score = 85;\nif (score >= 80) {\n  System.out.println(\"Pass\");\n}", task: "Khai báo <code>age = 16</code>, n?u >= 18 in 'Adult'.", minExpRequired: 110, expReward: 40, checkLogic: (code) => code.includes('if') && code.includes('age') && code.includes('16') && code.includes('System.out.println') },
        { id: "java6", title: "Bài 6: V?ng l?p For", theory: `<strong>For loop trong Java</strong><br/>for (int i = 0; i < 5; i++) { System.out.println(i); }`, hints: "Dùng for in 10 s? t? 1 ð?n 10.", examples: "for (int i = 1; i <= 10; i++) {\n  System.out.println(i);\n}", task: "Dùng for in các s? t? 5 ð?n 15.", minExpRequired: 150, expReward: 40, checkLogic: (code) => code.includes('for') && code.includes('System.out.println') && (code.includes('i++') || code.includes('i+=')) },
        { id: "java7", title: "Bài 7: M?ng (Array)", theory: `<strong>M?ng trong Java</strong><br/>int[] arr = {1, 2, 3, 4, 5}; Truy c?p: arr[0]`, hints: "T?o m?ng, in ph?n t?.", examples: "int[] arr = {10, 20, 30, 40, 50};\nSystem.out.println(arr[0]);", task: "Khai báo m?ng 3 ph?n t?, in ph?n t? 0.", minExpRequired: 190, expReward: 40, checkLogic: (code) => code.includes('[') && code.includes('{') && code.includes('System.out.println') },
        { id: "java8", title: "Bài 8: Phýõng th?c (Method)", theory: `<strong>Method trong Java</strong><br/>static int tênMethod(int a, int b) { return a + b; }`, hints: "T?o method nhân 2 s?, g?i trong main.", examples: "static int multiply(int a, int b) {\n  return a * b;\n}\nSystem.out.println(multiply(4, 5));", task: "T?o method <code>divide(int a, int b)</code>, g?i 20/4.", minExpRequired: 230, expReward: 50, checkLogic: (code) => code.includes('static') && code.includes('int') && code.includes('System.out.println') },
        { id: "java9", title: "Bài 9: Class và Object", theory: `<strong>Class và Object trong Java</strong><br/>class Person { String name; int age; }`, hints: "T?o class, t?o object, gán giá tr?.", examples: "class Car { String brand; }\nCar c = new Car();\nc.brand = \"Toyota\";\nSystem.out.println(c.brand);", task: "T?o class Student v?i name, t?o object r?i in.", minExpRequired: 280, expReward: 50, checkLogic: (code) => code.includes('class') && code.includes('new') && code.includes('System.out.println') },
        { id: "java10", title: "Bài 10: ArrayList (Danh sách ð?ng)", theory: `<strong>ArrayList - Danh sách linh ho?t</strong><br/>ArrayList<Integer> numbers = new ArrayList<>();`, hints: "T?o ArrayList, thêm ph?n t?, duy?t.", examples: "import java.util.ArrayList;\nArrayList<Integer> nums = new ArrayList<>();\nnums.add(10);\nnums.add(20);\nfor (int n : nums) System.out.println(n);", task: "T?o ArrayList, thêm 1, 2, 3, in kích thý?c.", minExpRequired: 330, expReward: 50, checkLogic: (code) => code.includes('ArrayList') && code.includes('add') && code.includes('System.out.println') }
    ],
    csharp: [
        { id: "cs1", title: "Bài 1: In ra HelloWorld", theory: `<strong>Console.WriteLine() trong C#</strong><br/>using System;<br/>Console.WriteLine("Hello");`, hints: "Nh? using System, Main method.", examples: "using System;\nclass Program {\n  static void Main() {\n    Console.WriteLine(\"Hello\");\n  }\n}", task: "In ra: <strong>Hello World</strong>", minExpRequired: 0, expReward: 20, checkLogic: (code) => code.includes('Console.WriteLine') && code.includes('Hello World') },
        { id: "cs2", title: "Bài 2: Khai báo Bi?n", theory: `<strong>Bi?n trong C# - Ph?i khai báo ki?u</strong><br/>int age = 18; string name = "John";`, hints: "Khai báo ki?u r?i tên bi?n.", examples: "string name = \"Alice\";\nint age = 20;\nConsole.WriteLine(age);", task: "Khai báo <code>int age = 25</code> và in ra.", minExpRequired: 20, expReward: 30, checkLogic: (code) => code.includes('int') && code.includes('age') && code.includes('25') && code.includes('Console.WriteLine') },
        { id: "cs3", title: "Bài 3: Phép toán c?ng tr?", theory: `<strong>Phép toán s? h?c</strong><br/>+, -, *, /, % ð?u ðý?c h? tr?.`, hints: "T?o 2 bi?n, c?ng, in k?t qu?.", examples: "int a = 15;\nint b = 7;\nint sum = a + b;\nConsole.WriteLine(sum);", task: "Khai báo <code>num1 = 12, num2 = 8</code>, c?ng và in.", minExpRequired: 50, expReward: 30, checkLogic: (code) => code.includes('int') && code.includes('num1') && code.includes('12') && code.includes('Console.WriteLine') },
        { id: "cs4", title: "Bài 4: Chu?i (String)", theory: `<strong>String trong C#</strong><br/>string text = "Hello"; string name = "World";`, hints: "Dùng + ð? n?i chu?i.", examples: "string first = \"C Sharp\";\nstring second = \"Programming\";\nConsole.WriteLine(first + \" \" + second);", task: "Khai báo <code>first = \"Hello\", second = \"C#\"</code>, n?i và in.", minExpRequired: 80, expReward: 30, checkLogic: (code) => code.includes('string') && code.includes('Hello') && code.includes('Console.WriteLine') },
        { id: "cs5", title: "Bài 5: Ði?u ki?n If-Else", theory: `<strong>If-Else trong C#</strong><br/>if (ði?u_ki?n) { code } else { code }`, hints: "S? d?ng >=, <=, ==, != ð? so sánh.", examples: "int score = 85;\nif (score >= 80) {\n  Console.WriteLine(\"Pass\");\n}", task: "Khai báo <code>age = 16</code>, n?u >= 18 in 'Adult'.", minExpRequired: 110, expReward: 40, checkLogic: (code) => code.includes('if') && code.includes('age') && code.includes('16') && code.includes('Console.WriteLine') },
        { id: "cs6", title: "Bài 6: V?ng l?p For", theory: `<strong>For loop trong C#</strong><br/>for (int i = 0; i < 5; i++) { Console.WriteLine(i); }`, hints: "Dùng for in 10 s? t? 1 ð?n 10.", examples: "for (int i = 1; i <= 10; i++) {\n  Console.WriteLine(i);\n}", task: "Dùng for in các s? t? 5 ð?n 15.", minExpRequired: 150, expReward: 40, checkLogic: (code) => code.includes('for') && code.includes('Console.WriteLine') && (code.includes('i++') || code.includes('i+=')) },
        { id: "cs7", title: "Bài 7: M?ng (Array)", theory: `<strong>M?ng trong C#</strong><br/>int[] arr = {1, 2, 3, 4, 5}; Truy c?p: arr[0]`, hints: "T?o m?ng, in ph?n t?.", examples: "int[] arr = {10, 20, 30, 40, 50};\nConsole.WriteLine(arr[0]);", task: "Khai báo m?ng 3 ph?n t?, in ph?n t? 0.", minExpRequired: 190, expReward: 40, checkLogic: (code) => code.includes('[') && code.includes('{') && code.includes('Console.WriteLine') },
        { id: "cs8", title: "Bài 8: Phýõng th?c (Method)", theory: `<strong>Method trong C#</strong><br/>static int tênMethod(int a, int b) { return a + b; }`, hints: "T?o method nhân 2 s?, g?i trong Main.", examples: "static int Multiply(int a, int b) {\n  return a * b;\n}\nConsole.WriteLine(Multiply(4, 5));", task: "T?o method <code>Divide(int a, int b)</code>, g?i 20/4.", minExpRequired: 230, expReward: 50, checkLogic: (code) => code.includes('static') && code.includes('int') && code.includes('Console.WriteLine') },
        { id: "cs9", title: "Bài 9: Class và Object", theory: `<strong>Class và Object trong C#</strong><br/>class Person { public string Name; public int Age; }`, hints: "T?o class, t?o object, gán giá tr?.", examples: "class Car { public string Brand; }\nCar c = new Car();\nc.Brand = \"Toyota\";\nConsole.WriteLine(c.Brand);", task: "T?o class Student v?i Name, t?o object r?i in.", minExpRequired: 280, expReward: 50, checkLogic: (code) => code.includes('class') && code.includes('new') && code.includes('Console.WriteLine') },
        { id: "cs10", title: "Bài 10: List (Danh sách ð?ng)", theory: `<strong>List - Danh sách linh ho?t</strong><br/>List<int> numbers = new List<int>();`, hints: "T?o List, thêm ph?n t?, duy?t.", examples: "using System;\nusing System.Collections.Generic;\nList<int> nums = new List<int>();\nnums.Add(10);\nnums.Add(20);\nforeach (int n in nums) Console.WriteLine(n);", task: "T?o List<int>, thêm 1, 2, 3, in kích thý?c.", minExpRequired: 330, expReward: 50, checkLogic: (code) => code.includes('List') && code.includes('Add') && code.includes('Console.WriteLine') }
    ]
};

// ==========================================
// 2. CÕ CH? TR?C NGHI?M - MULTIPLE CHOICE QUIZ
// ==========================================
// quizDB (50 câu h?i cho m?i ngôn ng?) ðý?c import t? quiz-data.js
const quizDB = {
    javascript: [
        { q: "Câu l?nh nào dùng ð? in d? li?u ra console?", a: ["console.log()", "print()", "cout", "System.out.println()"], c: 0 },
        { q: "Khai báo bi?n trong JS, cái nào ðý?c dùng nhi?u nh?t hi?n ð?i?", a: ["var age = 25", "let age = 25", "const age = 25", "c? B và C ð?u ðúng"], c: 3 },
        { q: "K?t qu? c?a 10 + '5' trong JavaScript là g??", a: ["15", "105", "L?i", "undefined"], c: 1 },
        { q: "Hàm nào ðý?c dùng ð? ki?m tra ð? dài chu?i?", a: ["length()", ".length", ".size()", ".count()"], c: 1 },
        { q: "Cú pháp v?ng l?p for ðúng là?", a: ["for(let i=0 i<5 i++)", "for(let i=0; i<5; i++)", "for i in range(5)", "while(i<5)"], c: 1 },
        { q: "Array trong JS ðý?c khai báo nhý th? nào?", a: ["let arr = (1,2,3)", "let arr = [1,2,3]", "let arr = {1,2,3}", "let arr = 1,2,3"], c: 1 },
        { q: "Hàm trong JS b?t ð?u b?ng t? khóa nào?", a: ["func", "function", "def", "method"], c: 1 },
        { q: "1 === '1' s? tr? v? g??", a: ["true", "false", "1", "undefined"], c: 1 },
        { q: "Ð? n?i chu?i, ta dùng k? t? nào?", a: ["-", "*", "+", "&"], c: 2 },
        { q: "undefined có ph?i là ki?u d? li?u trong JS không?", a: ["Không", "Có", "Có nhýng hi?m", "Tùy trý?ng h?p"], c: 1 }
    ],
    python: [
        { q: "Hàm nào dùng ð? in d? li?u ra console?", a: ["cout", "print()", "System.out.println()", "puts"], c: 1 },
        { q: "Cú pháp khai báo bi?n nào ðúng?", a: ["int age = 25", "age: int = 25", "age = 25", "var age = 25"], c: 2 },
        { q: "Cách t?o list trong Python?", a: ["list = (1,2,3)", "list = {1,2,3}", "list = [1,2,3]", "list = 1,2,3"], c: 2 },
        { q: "Hàm l?p for trong Python dùng t? khóa nào?", a: ["for", "while", "loop", "repeat"], c: 0 },
        { q: "range(5) s? sinh ra d?y s? nào?", a: ["1,2,3,4,5", "0,1,2,3,4", "1,2,3,4", "0,1,2,3,4,5"], c: 1 },
        { q: "Cách l?y ð? dài list là?", a: [".length()", "len(list)", ".size()", ".count()"], c: 1 },
        { q: "Comment trong Python dùng k? t? nào?", a: ["//", "/**/", "#", "--"], c: 2 },
        { q: "Dictionary trong Python khai báo nhý th? nào?", a: ["dict = (key: value)", "dict = {key: value}", "dict = [key, value]", "dict = key, value"], c: 1 },
        { q: "Hàm dùng ð? ki?m tra ki?u d? li?u?", a: ["typeof", "isinstance()", "getType()", "checkType()"], c: 1 },
        { q: "Ð? t?o hàm, t? khóa nào ðý?c dùng?", a: ["function", "fun", "def", "method"], c: 2 }
    ],
    cpp: [
        { q: "Câu l?nh nào dùng ð? in d? li?u ra?", a: ["cout", "print()", "printf()", "System.out"], c: 0 },
        { q: "Ð? s? d?ng cout, ph?i include g??", a: ["#include <stdio.h>", "#include <iostream>", "#include <cstdlib>", "#include <vector>"], c: 1 },
        { q: "KUI khai báo bi?n trong C++?", a: ["int age = 25;", "int age: 25;", "var age = 25;", "age: int = 25"], c: 0 },
        { q: "Array trong C++ ðý?c khai báo?", a: ["int arr = [1,2,3]", "int arr[3] = {1,2,3}", "array arr = {1,2,3}", "let arr = [1,2,3]"], c: 1 },
        { q: "Cú pháp v?ng l?p for ðúng là?", a: ["for i in range(10)", "for(int i=0; i<10; i++)", "for(i<10)", "repeat(10) {"], c: 1 },
        { q: "Ð? t?o hàm, cú pháp là?", a: ["func name() {}", "def name():", "type name() {}", "method name() {}"], c: 2 },
        { q: "String trong C++ ph?i include g??", a: ["#include <string>", "#include <cstring>", "#include <stdio.h>", "Không c?n"], c: 0 },
        { q: "Struct dùng ð? làm g??", a: ["Khai báo hàm", "Nhóm d? li?u", "T?o loop", "Khai báo m?ng"], c: 1 },
        { q: "Vector trong C++ là g??", a: ["Bi?n thý?ng", "M?ng ð?ng", "Hàm", "Ki?u bool"], c: 1 },
        { q: "nullptr dùng trong C++ nhý th? nào?", a: ["Giá tr? 0", "Con tr? r?ng", "T? khóa", "L?i cú pháp"], c: 1 }
    ],
    java: [
        { q: "Câu l?nh in d? li?u trong Java?", a: ["print()", "cout", "System.out.println()", "printf()"], c: 2 },
        { q: "Khai báo bi?n ðúng trong Java?", a: ["int age = 25", "age: int = 25", "var age = 25", "age = int 25"], c: 0 },
        { q: "Array trong Java?", a: ["int[] arr = [1,2,3]", "int arr[] = {1,2,3}", "array arr = {1,2,3}", "List arr = {1,2,3}"], c: 1 },
        { q: "V?ng l?p for trong Java?", a: ["for i in range(10)", "for(int i=0; i<10; i++)", "for(i<10)", "repeat(10) {"], c: 1 },
        { q: "Class trong Java b?t ð?u b?ng?", a: ["class Main {", "Class Main {", "public class Main {", "C? A và C ðúng"], c: 3 },
        { q: "Method main trong Java?", a: ["public static void main()", "public void main(String[])", "public static void main(String[])", "static main()"], c: 2 },
        { q: "ArrayList là g??", a: ["M?ng thý?ng", "M?ng ð?ng", "List t?nh", "Hàm trong java.util"], c: 1 },
        { q: "Ð? import m?t package?", a: ["import java.util", "include java.util", "using java.util", "include <java.util>"], c: 0 },
        { q: "String immutable trong Java?", a: ["Không", "Có", "Tùy trý?ng h?p", "Ch? khi ðý?c kh?i t?o"], c: 1 },
        { q: "new t? khóa dùng ð??", a: ["T?o bi?n", "T?o object", "Import class", "Khai báo hàm"], c: 1 }
    ],
    csharp: [
        { q: "Hàm in d? li?u trong C#?", a: ["print()", "cout", "Console.WriteLine()", "printf()"], c: 2 },
        { q: "Khai báo bi?n C#?", a: ["int age = 25", "age: int = 25", "var age = 25", "C? A và C"], c: 3 },
        { q: "Array trong C#?", a: ["int[] arr = [1,2,3]", "int arr[] = new int[3]", "array arr = {1,2,3}", "List<int> arr = {1,2,3}"], c: 1 },
        { q: "For loop trong C#?", a: ["for i in range(10)", "for(int i=0; i<10; i++)", "for(i<10)", "repeat 10"], c: 1 },
        { q: "List trong C# là g??", a: ["Array c? ð?nh", "Array ð?ng", "Hàm", "Namespace"], c: 1 },
        { q: "Namespace dùng ð??", a: ["Import class", "Nhóm code", "Khai báo hàm", "T?o bi?n"], c: 1 },
        { q: "Property trong C#?", a: ["Bi?n public", "Bi?n v?i getter/setter", "Hàm", "Constant"], c: 1 },
        { q: "async/await là g??", a: ["V?ng l?p", "L?p tr?nh không ð?ng b?", "Khai báo hàm", "Ði?u ki?n"], c: 1 },
        { q: "LINQ là g??", a: ["Namespace", "Phýõng pháp truy v?n d? li?u", "Type d? li?u", "Hàm"], c: 1 },
        { q: "Nullable type trong C#?", a: ["Bi?n có th? null", "Bi?n không th? null", "Bi?n ki?u Integer", "Bi?n t?nh"], c: 0 }
    ]
};

// ==========================================
// 3. QU?N L? BI?N TOÀN C?C
// ==========================================
let currentUser = null;
let quizState = {
    currentLang: null,
    questions: [],
    currentIndex: 0,
    usedQuestions: new Set(),
    correct: 0,
    incorrect: 0,
    correctQuestions: [],
    selectedAnswer: -1
};
let currentLangWorkspace = null;
let currentLessonId = null;
let filteredHistoryLang = '';
let editor;

// ==========================================
// 4. CÁC HÀM X? L? L?CH S? TR?C NGHI?M
// ==========================================

function saveQuizHistory(lang, score, correct, incorrect) {
    if (!currentUser.quizHistory) currentUser.quizHistory = {};
    if (!currentUser.quizHistory[lang]) currentUser.quizHistory[lang] = [];
    
    const historyRecord = {
        type: 'quiz',
        date: new Date().toISOString(),
        score: score,
        correct: correct,
        incorrect: incorrect,
        percentage: Math.round((correct / (correct + incorrect)) * 100),
        expEarned: score,
        title: `Tr?c Nghi?m ${langNames[lang]}`
    };
    
    currentUser.quizHistory[lang].push(historyRecord);
    saveUserProgress();
}

function saveLessonCode(lang, lessonId, lessonTitle, code) {
    if (!currentUser.savedCodes) currentUser.savedCodes = {};
    if (!currentUser.savedCodes[lang]) currentUser.savedCodes[lang] = {};
    
    currentUser.savedCodes[lang][lessonId] = {
        code: code,
        title: lessonTitle,
        date: new Date().toISOString(),
        codeLength: code.length
    };
}

function saveLessonHistory(lang, lessonId, lessonTitle, expReward) {
    if (!currentUser.quizHistory) currentUser.quizHistory = {};
    if (!currentUser.quizHistory[lang]) currentUser.quizHistory[lang] = [];
    
    const historyRecord = {
        type: 'lesson',
        date: new Date().toISOString(),
        lessonId: lessonId,
        title: `?? ${lessonTitle}`,
        expEarned: expReward,
        percentage: 100
    };
    
    currentUser.quizHistory[lang].push(historyRecord);
    saveUserProgress();
}

function saveQuestHistory(lang, questId, questTitle, expEarned) {
    if (!currentUser.quizHistory) currentUser.quizHistory = {};
    if (!currentUser.quizHistory[lang]) currentUser.quizHistory[lang] = [];
    
    const historyRecord = {
        type: 'quest',
        date: new Date().toISOString(),
        questId: questId,
        title: questTitle,
        expEarned: expEarned,
        percentage: 100
    };
    
    currentUser.quizHistory[lang].push(historyRecord);
    saveUserProgress();
}

function loadQuizHistory(lang) {
    if (!currentUser.quizHistory) return [];
    return currentUser.quizHistory[lang] || [];
}

function displayQuizHistory() {
    const historyContainer = document.getElementById('history-list');
    const selectedLang = filteredHistoryLang || 'all';
    
    let allHistory = [];
    if (selectedLang === 'all') {
        for (const lang in currentUser.quizHistory || {}) {
            const records = currentUser.quizHistory[lang] || [];
            records.forEach(record => {
                allHistory.push({ ...record, lang: lang });
            });
        }
    } else {
        const records = currentUser.quizHistory?.[selectedLang] || [];
        records.forEach(record => {
            allHistory.push({ ...record, lang: selectedLang });
        });
    }
    
    // S?p x?p theo ngày m?i nh?t trý?c
    allHistory.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    if (allHistory.length === 0) {
        historyContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted); background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(236, 72, 153, 0.08)); border-radius: 8px; border: 1px solid rgba(99, 102, 241, 0.15);">Chýa có l?ch s? h?c t?p</p>';
        return;
    }
    
    historyContainer.innerHTML = allHistory.map((record, index) => {
        const date = new Date(record.date);
        const dateStr = date.toLocaleDateString('vi-VN') + ' ' + date.toLocaleTimeString('vi-VN');
        const langMap = { javascript: 'JavaScript', python: 'Python', cpp: 'C++', java: 'Java', csharp: 'C#' };
        
        let scoreDetailsHTML = '';
        let typeIcon = '';
        let onClickHandler = '';
        
        if (record.type === 'quiz') {
            typeIcon = '??';
            scoreDetailsHTML = `<div class="score-details">${record.correct}/${record.correct + record.incorrect} câu ðúng</div>`;
        } else if (record.type === 'lesson') {
            typeIcon = '??';
            scoreDetailsHTML = `<div class="score-details" style="color: #10b981;">? Hoàn Thành</div>`;
            onClickHandler = `onclick="viewSavedCode('${record.lang}', '${record.lessonId}')" style="cursor: pointer;"`;
        } else if (record.type === 'quest') {
            typeIcon = '??';
            scoreDetailsHTML = `<div class="score-details" style="color: #10b981;">? Hoàn Thành</div>`;
        }
        
        return `
            <div class="history-card" ${onClickHandler}>
                <div class="history-header">
                    <span class="history-lang">${langMap[record.lang]}</span>
                    <span class="history-date">${dateStr}</span>
                </div>
                <div class="history-title" style="margin: 10px 0; color: var(--text-main); font-weight: 500;">
                    ${typeIcon} ${record.title || 'Unknown'}
                </div>
                <div class="history-score">
                    <div class="score-big">${record.percentage}%</div>
                    ${scoreDetailsHTML}
                </div>
                <div class="history-exp" style="color: #10b981; font-weight: 600;">+${record.expEarned} EXP</div>
                ${record.type === 'lesson' ? '<div style="margin-top: 8px; font-size: 0.9rem; color: #06b6d4;">??? Click ð? xem code</div>' : ''}
            </div>
        `;
    }).join('');
}

function viewSavedCode(lang, lessonId) {
    const savedCode = currentUser.savedCodes?.[lang]?.[lessonId];
    if (!savedCode) {
        alert('? Không t?m th?y code ð? lýu!');
        return;
    }
    
    const lesson = lessonsDB[lang].find(l => l.id === lessonId);
    const langNames = { javascript: 'JavaScript', python: 'Python', cpp: 'C++', java: 'Java', csharp: 'C#' };
    
    // Hi?n th? code viewer
    document.getElementById('saved-code-lang').innerText = langNames[lang];
    document.getElementById('saved-code-title').innerText = lesson.title;
    const saveDate = new Date(savedCode.date);
    document.getElementById('saved-code-date').innerText = 'Lýu: ' + saveDate.toLocaleDateString('vi-VN') + ' ' + saveDate.toLocaleTimeString('vi-VN');
    document.getElementById('saved-code-content').innerText = savedCode.code;
    document.getElementById('saved-code-length').innerText = `${savedCode.codeLength} k? t?`;
    
    showView('view-saved-code');
}

function copySavedCode() {
    const codeContent = document.getElementById('saved-code-content').innerText;
    navigator.clipboard.writeText(codeContent).then(() => {
        alert('? Ð? copy code vào clipboard!');
    }).catch(() => {
        alert('? Không th? copy code!');
    });
}

function filterQuizHistory() {
    const filterSelect = document.getElementById('history-filter');
    filteredHistoryLang = filterSelect.value === 'all' ? '' : filterSelect.value;
    displayQuizHistory();
}

// ==========================================
// 5. QU?N L? BI?N VÀ KH?I Ð?NG
// ==========================================

window.onload = () => {
    editor = CodeMirror.fromTextArea(document.getElementById("code-editor"), {
        theme: "dracula", lineNumbers: true, autoCloseBrackets: true
    });

    const activeEmail = localStorage.getItem('code4students_active_user');
    if (activeEmail) {
        const users = JSON.parse(localStorage.getItem('code4students_users')) || {};
        currentUser = users[activeEmail];
        
        if(currentUser) {
            checkAndInitStats();
            showView('view-dashboard');
            updateDashboard();
        }
    }
};

function showView(viewId) {
    document.querySelectorAll('.view-section').forEach(el => { 
        el.classList.remove('active'); 
        el.classList.add('hidden'); 
    });
    document.getElementById(viewId).classList.remove('hidden');
    document.getElementById(viewId).classList.add('active');
    document.getElementById('user-nav').classList.toggle('hidden', viewId === 'view-auth');
    
    // C?p nh?t dashboard khi quay l?i
    if (viewId === 'view-dashboard' && currentUser) {
        updateDashboard();
    }
}

function checkAndInitStats() {
    if (!currentUser.stats) currentUser.stats = {};
    if (!currentUser.quizHistory) currentUser.quizHistory = {};
    for (const lang in lessonsDB) {
        if (!currentUser.stats[lang]) {
            currentUser.stats[lang] = { exp: 0, completedLessons: [], errors: 0 };
        }
        if (!currentUser.quizHistory[lang]) {
            currentUser.quizHistory[lang] = [];
        }
    }
}

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

    if (!name || !email || !password) return alert("? Vui l?ng ði?n ð? thông tin!");
    let users = JSON.parse(localStorage.getItem('code4students_users')) || {};
if (users[email]) return alert("?? Email ð? t?n t?i!");

    users[email] = { email, password, name, stats: {} };
    localStorage.setItem('code4students_users', JSON.stringify(users));
    
    alert("? Ðãng k? thành công!");
    switchAuthTab('login');
    document.getElementById('login-email').value = email;
}

function login() {
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    let users = JSON.parse(localStorage.getItem('code4students_users')) || {};
    
    if (users[email] && users[email].password === password) {
        currentUser = users[email];
        checkAndInitStats();
        localStorage.setItem('code4students_active_user', email);
        showView('view-dashboard');
        updateDashboard();
    } else { alert("? Sai email ho?c m?t kh?u!"); }
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

function updateDashboard() {
    document.getElementById('user-greeting').innerText = `Chào, ${currentUser.name}`;
    
    const container = document.getElementById('language-tracks-container');
    container.innerHTML = '';

    for (const [lang, lessons] of Object.entries(lessonsDB)) {
        const stats = currentUser.stats[lang];
        
        const level = Math.floor(stats.exp / 50) + 1;
        const progressPercent = (stats.exp % 50) / 50 * 100;
        
        const availableLesson = lessons.find(l => !stats.completedLessons.includes(l.id) && stats.exp >= l.minExpRequired);

        let actionHTML = '';
        let lessonTitleHTML = '';
        if (availableLesson) {
             lessonTitleHTML = `<strong>Bài ti?p theo:</strong> ${availableLesson.title}`;
             actionHTML = `<div style="display: flex; gap: 10px;"><button onclick="viewLanguageOverview('${lang}')" class="btn-outline" style="flex: 1;">T?ng Quan</button><button onclick="startQuiz('${lang}')" class="btn-outline" style="flex: 1; background: linear-gradient(135deg, #6366f1 0%, #ec4899 100%); color: white; border: none;">Tr?c Nghi?m ??</button><button onclick="startLesson('${lang}', '${availableLesson.id}')" class="btn-primary" style="flex: 1;">Vào H?c</button></div>`;
        } else {
             lessonTitleHTML = `<strong style="color: #10b981; text-shadow: 0 0 10px rgba(16, 185, 129, 0.3);">?? Ð? hoàn thành m?i bài h?c!</strong>`;
             actionHTML = `<div style="display: flex; gap: 10px;"><button onclick="viewLanguageOverview('${lang}')" class="btn-outline" style="flex: 1;">T?ng Quan</button><button onclick="startQuiz('${lang}')" class="btn-outline" style="flex: 1; background: linear-gradient(135deg, #6366f1 0%, #ec4899 100%); color: white; border: none;">Tr?c Nghi?m ??</button></div>`;
        }

        const cardHTML = `<div class="track-card"><div class="track-header"><div class="track-title">${langNames[lang]}</div><div class="track-stats"><span class="stat-badge stat-level">C?p ${level}</span><span class="stat-badge">${stats.exp} EXP</span><span class="stat-badge stat-error">Sai: ${stats.errors} l?n</span></div></div><div class="track-body"><div class="progress-bar"><div class="progress-fill" style="width: ${progressPercent}%"></div></div><div class="track-footer"><div class="lesson-info">${lessonTitleHTML}</div>${actionHTML}</div></div></div>`;
        container.innerHTML += cardHTML;
    }
}

function startLesson(lang, lessonId) {
    currentLangWorkspace = lang;
    currentLessonId = lessonId;
    const lesson = lessonsDB[lang].find(l => l.id === lessonId);
    
    editor.setOption("mode", editorModes[lang]);
    document.getElementById('file-name').innerText = fileExtensions[lang];

    document.getElementById('lesson-title').innerText = lesson.title;
    document.getElementById('lesson-theory').innerHTML = lesson.theory;
    document.getElementById('lesson-hints').innerText = lesson.hints || "Không có g?i ? thêm.";
    document.getElementById('lesson-examples').innerText = lesson.examples || "Không có ví d?.";
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

function runCode() {
    const code = editor.getValue();
    const terminal = document.getElementById('terminal-output');
    const lang = currentLangWorkspace;

    terminal.style.color = "#888"; terminal.innerText = "Ðang biên d?ch...\n";
    
    setTimeout(() => {
        terminal.style.color = "var(--terminal-text)"; terminal.innerText = ""; 
        if (lang === 'javascript') {
            let output = []; const originalConsoleLog = console.log; 
            console.log = (...args) => { output.push(args.join(' ')); };
            try { eval(code); terminal.innerText = output.length > 0 ? output.join('\n') : "(Ch?y thành công)"; } 
            catch (error) { terminal.style.color = "#EF4444"; terminal.innerText = "? L?i: " + error.message; }
            console.log = originalConsoleLog;
        } else {
            let simulatedOutput = "";
            try {
                if (lang === 'python') { const match = code.match(/print\s*\(\s*(['"]?)(.*?)\1\s*\)/); if (match) simulatedOutput = match[2]; }
                else if (lang === 'cpp') { const match = code.match(/cout\s*<<\s*(['"]?)(.*?)\1/); if (match) simulatedOutput = match[2]; }
                else if (lang === 'java') { const match = code.match(/System\.out\.println\s*\(\s*(['"]?)(.*?)\1\s*\)/); if (match) simulatedOutput = match[2]; }
                else if (lang === 'csharp') { const match = code.match(/Console\.WriteLine\s*\(\s*(['"]?)(.*?)\1\s*\)/); if (match) simulatedOutput = match[2]; }
                terminal.innerText = simulatedOutput !== "" ? simulatedOutput.replace(/^["']|["']$/g, '') : "Ch?y xong. B?m n?p bài ð? ki?m tra.";
            } catch(e) { terminal.style.color = "#EF4444"; terminal.innerText = "? L?i cú pháp!"; }
        }
    }, 600);
}

function submitCode() {
    const code = editor.getValue();
    const lesson = lessonsDB[currentLangWorkspace].find(l => l.id === currentLessonId);
    const terminal = document.getElementById('terminal-output');

    terminal.innerText = "Ðang ch?m ði?m...";
    
    setTimeout(() => {
        if (lesson.checkLogic(code)) {
            terminal.style.color = "#00FF41";
            terminal.innerText = `? CHÍNH XÁC!\n+${lesson.expReward} EXP nh?n ðý?c!`;
            
            if (!currentUser.stats[currentLangWorkspace].completedLessons.includes(lesson.id)) {
                currentUser.stats[currentLangWorkspace].completedLessons.push(lesson.id);
                currentUser.stats[currentLangWorkspace].exp += lesson.expReward;
                
                // Lýu code vào kho lýu tr?
                saveLessonCode(currentLangWorkspace, lesson.id, lesson.title, code);
                
                // Lýu l?ch s? làm bài t?p
                saveLessonHistory(currentLangWorkspace, lesson.id, lesson.title, lesson.expReward);
                
                saveUserProgress();
                
                // Ki?m tra n?u hoàn thành 10 bài h?c
                setTimeout(() => {
                evaluateCompetency(currentLangWorkspace);
            }, 2500);
            }
            setTimeout(() => { showLessonCompletionScreen(lesson); }, 1500);
            
        } else {
            terminal.style.color = "#FF5555";
            terminal.innerText = "? Code chýa chính xác!\nB?n ð? b? ghi nh?n 1 l?i.";
            
            currentUser.stats[currentLangWorkspace].errors += 1;
            saveUserProgress();
        }
    }, 800);
}

function viewLanguageOverview(lang) {
    const info = languageInfo[lang];
    
    document.getElementById('lang-overview-title').innerText = info.name;
    document.getElementById('lang-overview-description').innerText = info.description;
    document.getElementById('lang-overview-text').innerText = info.overview;
    document.getElementById('lang-features').innerText = info.features;
    document.getElementById('lang-install-guide').innerText = info.installGuide;
    
    const useCasesContainer = document.getElementById('lang-use-cases');
    useCasesContainer.innerHTML = '';
    info.useCases.forEach(useCase => {
        const card = document.createElement('div');
        card.style.cssText = 'background: linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(236, 72, 153, 0.1)); padding: 20px; border-radius: 8px; border: 1px solid rgba(99, 102, 241, 0.2); text-align: center; color: var(--text-main); transition: all 0.3s ease;';
        card.innerText = useCase;
        card.onmouseover = () => { card.style.borderColor = '#6366f1'; card.style.boxShadow = '0 0 15px rgba(99, 102, 241, 0.3)'; };
        card.onmouseout = () => { card.style.borderColor = 'rgba(99, 102, 241, 0.2)'; card.style.boxShadow = 'none'; };
        useCasesContainer.appendChild(card);
    });
    
    const lessons = lessonsDB[lang];
    const firstAvailableLesson = lessons[0];
    document.getElementById('btn-start-learning').onclick = () => startLesson(lang, firstAvailableLesson.id);
    
    showView('view-language-overview');
}

// ==========================================
// QUIZ FUNCTIONS
// ==========================================
function startQuiz(lang) {
    quizState.currentLang = lang;
    quizState.questions = [];
    quizState.currentIndex = 0;
    quizState.usedQuestions = new Set();
    quizState.correct = 0;
    quizState.incorrect = 0;
    quizState.correctQuestions = [];
    quizState.selectedAnswer = -1;
    
    // L?y 5 câu h?i ng?u nhiên không l?p l?i
    const allQuestions = quizDB[lang];
    const totalQuestions = Math.min(5, allQuestions.length);
    
    while (quizState.questions.length < totalQuestions) {
        const randomIndex = Math.floor(Math.random() * allQuestions.length);
        if (!quizState.usedQuestions.has(randomIndex)) {
            quizState.usedQuestions.add(randomIndex);
            quizState.questions.push(allQuestions[randomIndex]);
        }
    }
    
    document.getElementById('quiz-lang-name').innerText = langNames[lang];
    showView('view-quiz');
    showQuizQuestion();
}

function showQuizQuestion() {
    const questionIndex = quizState.currentIndex;
    if (questionIndex >= quizState.questions.length) {
        showQuizResult();
        return;
    }
    
    const question = quizState.questions[questionIndex];
    const progressPercent = ((questionIndex + 1) / quizState.questions.length) * 100;
    
    document.getElementById('quiz-counter').innerText = `${questionIndex + 1}`;
    document.getElementById('quiz-progress-bar').style.width = progressPercent + '%';
    document.getElementById('question-text').innerText = question.q;
    document.getElementById('quiz-result').classList.add('hidden');
    document.getElementById('question-container').classList.remove('hidden');
    
    // Reset selected answer
    quizState.selectedAnswer = -1;
    const nextBtn = document.getElementById('btn-next-question');
    nextBtn.disabled = true;
    nextBtn.style.opacity = '0.5';
    nextBtn.style.cursor = 'not-allowed';
    
    const answersContainer = document.getElementById('answers-container');
    answersContainer.innerHTML = '';
    
    question.a.forEach((answer, index) => {
        const answerBtn = document.createElement('button');
        answerBtn.classList.add('quiz-answer-btn');
        answerBtn.dataset.index = index;
        answerBtn.style.cssText = `
            background: linear-gradient(135deg, rgba(20, 25, 50, 0.8), rgba(30, 40, 70, 0.8));
            border: 2px solid rgba(99, 102, 241, 0.3);
            padding: 15px;
            border-radius: 8px;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            text-align: left;
            font-weight: 500;
            color: var(--text-main);
        `;
        answerBtn.innerText = String.fromCharCode(65 + index) + '. ' + answer;
        answerBtn.onmouseover = () => { if (quizState.selectedAnswer !== index) { answerBtn.style.borderColor = '#6366f1'; answerBtn.style.background = 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(6, 182, 212, 0.15))'; answerBtn.style.boxShadow = '0 0 15px rgba(99, 102, 241, 0.3)'; } };
        answerBtn.onmouseout = () => { if (quizState.selectedAnswer !== index) { answerBtn.style.borderColor = 'rgba(99, 102, 241, 0.3)'; answerBtn.style.background = 'linear-gradient(135deg, rgba(20, 25, 50, 0.8), rgba(30, 40, 70, 0.8))'; answerBtn.style.boxShadow = 'none'; } };
        answerBtn.onclick = () => selectQuizAnswer(index);
        answersContainer.appendChild(answerBtn);
    });
}

function selectQuizAnswer(index) {
    quizState.selectedAnswer = index;
    const buttons = document.querySelectorAll('.quiz-answer-btn');
    
    // Remove highlight from all buttons
    buttons.forEach((btn, i) => {
        if (i === index) {
            // Highlight selected button
            btn.style.background = 'linear-gradient(135deg, #6366f1, #ec4899)';
            btn.style.borderColor = '#6366f1';
            btn.style.color = 'white';
            btn.style.boxShadow = '0 0 20px rgba(99, 102, 241, 0.5)';
        } else {
            // Reset other buttons
            btn.style.background = 'linear-gradient(135deg, rgba(20, 25, 50, 0.8), rgba(30, 40, 70, 0.8))';
            btn.style.borderColor = 'rgba(99, 102, 241, 0.3)';
            btn.style.color = 'var(--text-main)';
            btn.style.boxShadow = 'none';
        }
    });
    
    // Enable next button
    const nextBtn = document.getElementById('btn-next-question');
    nextBtn.disabled = false;
    nextBtn.style.opacity = '1';
    nextBtn.style.cursor = 'pointer';
}

function submitSelectedAnswer() {
    if (quizState.selectedAnswer === -1) {
        alert('?? Vui l?ng ch?n m?t ðáp án!');
        return;
    }
    submitQuizAnswer(quizState.selectedAnswer);
}

function submitQuizAnswer(answerIndex) {
    const question = quizState.questions[quizState.currentIndex];
    const buttons = document.querySelectorAll('.quiz-answer-btn');
    
    // Vô hi?u hóa t?t c? các nút
    buttons.forEach(btn => { btn.style.pointerEvents = 'none'; });
    
    if (answerIndex === question.c) {
        quizState.correct++;
        quizState.correctQuestions.push({
            q: question.q,
            correct: true
        });
        buttons[answerIndex].style.backgroundColor = '#4CAF50';
        buttons[answerIndex].style.borderColor = '#4CAF50';
        buttons[answerIndex].style.color = 'white';
    } else {
        quizState.incorrect++;
        quizState.correctQuestions.push({
            q: question.q,
            correct: false,
            userAnswer: question.a[answerIndex],
            correctAnswer: question.a[question.c]
        });
        buttons[answerIndex].style.backgroundColor = '#EF4444';
        buttons[answerIndex].style.borderColor = '#EF4444';
        buttons[answerIndex].style.color = 'white';
        buttons[question.c].style.backgroundColor = '#4CAF50';
        buttons[question.c].style.borderColor = '#4CAF50';
        buttons[question.c].style.color = 'white';
    }
    
    updateQuizStats();
    
    setTimeout(() => {
        quizState.currentIndex++;
        if (quizState.currentIndex < quizState.questions.length) {
            showQuizQuestion();
        } else {
            showQuizResult();
        }
    }, 2000);
}

function updateQuizStats() {
    document.getElementById('quiz-stats').innerText = 
        `Ðúng: ${quizState.correct} | Sai: ${quizState.incorrect} | Ði?m: ${Math.round((quizState.correct / (quizState.correct + quizState.incorrect)) * 100)}%`;
}

function showQuizResult() {
    document.getElementById('question-container').classList.add('hidden');
    document.getElementById('quiz-result').classList.remove('hidden');
    
    const totalQuestions = quizState.questions.length;
    const correct = quizState.correct;
    const percentage = Math.round((correct / totalQuestions) * 100);
    const expReward = Math.floor((correct / totalQuestions) * 100);
    
    let resultTitle = '';
    let resultMessage = '';
    
    if (percentage === 100) {
        resultTitle = '?? TUY?T V?I!';
        resultMessage = `B?n tr? l?i ðúng c? 5 câu h?i! Nh?n +${expReward} EXP`;
    } else if (percentage >= 80) {
        resultTitle = '? XU?T S?C!';
        resultMessage = `B?n ð?t ${percentage}%. Nh?n +${expReward} EXP`;
    } else if (percentage >= 60) {
        resultTitle = '?? T?T!';
        resultMessage = `B?n ð?t ${percentage}%. Nh?n +${expReward} EXP`;
    } else if (percentage >= 40) {
        resultTitle = '?? C? G?NG HÕN N?A!';
        resultMessage = `B?n ð?t ${percentage}%. Nh?n +${expReward} EXP`;
    } else {
        resultTitle = '?? H?Y TI?P T?C LUY?N T?P!';
        resultMessage = `B?n ð?t ${percentage}%. H?y ôn l?i l? thuy?t và th? l?i!`;
    }
    
    document.getElementById('result-title').innerText = resultTitle;
    document.getElementById('result-message').innerText = resultMessage;
    
    // C?ng EXP cho ngý?i dùng
    if (expReward > 0) {
        currentUser.stats[quizState.currentLang].exp += expReward;
        saveUserProgress();
    }
}

function finishQuiz() {
    // Lýu l?ch s? tr?c nghi?m
    saveQuizHistory(quizState.currentLang, quizState.correct * 20, quizState.correct, quizState.incorrect);
    
    // Reset l?i b? câu h?i
    quizState = {
        currentLang: null,
        questions: [],
        currentIndex: 0,
        usedQuestions: new Set(),
        correct: 0,
        incorrect: 0,
        correctQuestions: []
    };
    
    showView('view-dashboard');
    updateDashboard();
}

// ==========================================
// EVALUATION & ADAPTIVE QUEST SYSTEM
// ==========================================

/**
 * Ðánh giá nãng l?c ngý?i dùng d?a trên k?t qu? h?c t?p
 * Thu?t toán xét các y?u t?:
 * - T? l? câu tr? l?i quiz ðúng
 * - S? l?i khi làm bài t?p
 * - EXP tích l?y
 * - T?c ð? hoàn thành bài h?c
 */
function evaluateCompetency(lang) {
    const stats = currentUser.stats[lang];
    const quizHistory = currentUser.quizHistory[lang] || [];
    
    if (!stats || stats.completedLessons.length < 10) return null;
    
    // 1. Tính t? l? thành công t? quiz
    let quizSuccessRate = 0;
    if (quizHistory.length > 0) {
        const avgQuizScore = quizHistory.reduce((sum, q) => sum + q.percentage, 0) / quizHistory.length;
        quizSuccessRate = avgQuizScore / 100; // 0-1
    } else {
        quizSuccessRate = 0.5; // M?c ð?nh n?u chýa làm quiz
    }
    
    // 2. Tính ði?m l?i (càng ít l?i càng t?t)
    const errorPenalty = Math.min(stats.errors / 10, 0.5); // T?i ða tr? 50%
    
    // 3. Tính EXP score (d?a trên EXP tích l?y)
    // Max EXP cho 10 bài = 20+30+30+30+40+40+40+50+50+50 = 380
    const maxExpFor10Lessons = 380;
    const expScore = Math.min(stats.exp / maxExpFor10Lessons, 1); // 0-1
    
    // 4. Công th?c ðánh giá nãng l?c (0-100)
    // Weight: Quiz 40%, EXP 40%, Errors 20%
    const competencyScore = (quizSuccessRate * 0.4 + expScore * 0.4 - errorPenalty * 0.2) * 100;
    
    const level = getCompetencyLevel(competencyScore);
    
    // Lýu k?t qu? ðánh giá
    if (!currentUser.competencies) currentUser.competencies = {};
    currentUser.competencies[lang] = {
        score: Math.round(competencyScore),
        level: level,
        evaluatedAt: new Date().toISOString(),
        quizRate: Math.round(quizSuccessRate * 100),
        errorCount: stats.errors,
        expTotal: stats.exp
    };
    
    saveUserProgress();
    showCompetencyAlert(lang, level, competencyScore);
    generateAdaptiveQuests(lang, level, competencyScore);
    
    return { score: competencyScore, level };
}

/**
 * Xác ð?nh m?c ð? nãng l?c
 * Beginner: 0-40 (M?i b?t ð?u)
 * Intermediate: 40-70 (Trung b?nh)
 * Advanced: 70-100 (Nâng cao)
 */
function getCompetencyLevel(score) {
    if (score < 40) return 'beginner';
    if (score < 70) return 'intermediate';
    return 'advanced';
}

/**
 * Hi?n th? thông báo k?t qu? ðánh giá
 */
function showCompetencyAlert(lang, level, score) {
    const levelNames = {
        beginner: '?? Cõ B?n',
        intermediate: '? Trung B?nh',
        advanced: '?? Nâng Cao'
    };
    
    const messages = {
        beginner: 'B?n c?n ôn l?i các ki?n th?c cõ b?n trý?c khi ti?n b?.',
        intermediate: 'B?n ð? n?m v?ng ki?n th?c cõ b?n. H?y ti?p t?c luy?n t?p ð? c?i thi?n!',
        advanced: 'B?n ð? ð?t tr?nh ð? cao! H?y th? nh?ng th? thách nâng cao hõn.'
    };
    
    alert(`?? K?T QU? ÐÁNH GIÁ\n\n` +
          `Ngôn ng?: ${langNames[lang]}\n` +
          `M?c ð?: ${levelNames[level]}\n` +
          `Ði?m: ${Math.round(score)}/100\n\n` +
          `${messages[level]}`);
}

/**
 * T?o bài t?p thích ?ng d?a trên m?c ð? nãng l?c
 * M?i level có ð? khó tãng d?n
 */
function generateAdaptiveQuests(lang, level, score) {
    // Ð?nh ngh?a bài t?p cho m?i ngôn ng? ? các m?c ð? khác nhau
    const adaptiveQuests = defineAdaptiveQuests(lang);
    
    if (!currentUser.adaptiveQuests) currentUser.adaptiveQuests = {};
    if (!currentUser.adaptiveQuests[lang]) currentUser.adaptiveQuests[lang] = [];
    
    // Ch?n quests phù h?p v?i level
    const selectedQuests = adaptiveQuests[level];
    
    // Shuffle quests
    const shuffledQuests = selectedQuests.sort(() => 0.5 - Math.random());
    
    // Thêm vào danh sách bài t?p c?a ngý?i dùng (t?i ða 5 bài/level)
    currentUser.adaptiveQuests[lang] = [
        ...currentUser.adaptiveQuests[lang],
        ...shuffledQuests.slice(0, 5).map((quest, idx) => ({
            ...quest,
            id: `${lang}-adaptive-${level}-${idx}-${Date.now()}`,
            level: level,
            unlocked: true,
            completed: false,
            createdAt: new Date().toISOString()
        }))
    ];
    
    saveUserProgress();
    showAdaptiveQuestsUnlocked(lang, level);
}

/**
 * Ð?nh ngh?a các bài t?p thích ?ng cho t?ng ngôn ng?
 */
function defineAdaptiveQuests(lang) {
    const questsMap = {
        javascript: {
            beginner: [
                { 
                    title: "Quest 1: In b?ng c?u chýõng 7", 
                    description: "S? d?ng v?ng l?p ð? in b?ng c?u chýõng 7 (7x1=7 ... 7x10=70)",
                    difficulty: 1,
                    expReward: 60,
                    checkLogic: (code) => code.includes('for') && code.includes('7') && code.includes('console.log')
                },
                { 
                    title: "Quest 2: T?m s? l?n nh?t", 
                    description: "T?o hàm t?m s? l?n nh?t trong m?ng [10, 45, 23, 78, 34]",
                    difficulty: 1,
                    expReward: 60,
                    checkLogic: (code) => code.includes('function') || code.includes('=>') && code.includes('[') && code.includes('Math.max')
                },
                { 
                    title: "Quest 3: Ð?o chu?i", 
                    description: "Vi?t code ð?o ngý?c chu?i 'HELLO' thành 'OLLEH'",
                    difficulty: 1,
                    expReward: 60,
                    checkLogic: (code) => (code.includes('reverse') || code.includes('split')) && code.includes('HELLO')
                }
            ],
            intermediate: [
                { 
                    title: "Quest 4: Ki?m tra s? nguyên t?", 
                    description: "Vi?t hàm ki?m tra xem m?t s? có ph?i s? nguyên t? không",
                    difficulty: 2,
                    expReward: 80,
                    checkLogic: (code) => code.includes('function') && code.includes('for') && (code.includes('%') || code.includes('modulo'))
                },
                { 
                    title: "Quest 5: L?c d? li?u", 
                    description: "S? d?ng filter() ð? l?y t?t c? các s? ch?n t? m?ng",
                    difficulty: 2,
                    expReward: 80,
                    checkLogic: (code) => code.includes('filter') && code.includes('%')
                },
                { 
                    title: "Quest 6: T?o máy tính ", 
                    description: "T?o object calculator v?i các phýõng th?c add, subtract, multiply, divide",
                    difficulty: 2,
                    expReward: 80,
                    checkLogic: (code) => code.includes('{') && code.includes('add') && code.includes('subtract')
                }
            ],
            advanced: [
                { 
                    title: "Quest 7: Xây d?ng Closure", 
                    description: "T?o hàm counter() s? d?ng closure ð? lýu gi? state",
                    difficulty: 3,
                    expReward: 120,
                    checkLogic: (code) => code.includes('function') && code.includes('return') && code.includes('function')
                },
                { 
                    title: "Quest 8: Quy ho?ch ð?ng", 
                    description: "Tính fibonacci th? n s? d?ng memoization (t?i ýu hi?u su?t)",
                    difficulty: 3,
                    expReward: 120,
                    checkLogic: (code) => (code.includes('fibonacci') || code.includes('fib')) && (code.includes('cache') || code.includes('memo'))
                },
                { 
                    title: "Quest 9: Async/Promise", 
                    description: "Vi?t hàm fetchData() s? d?ng Promise ho?c async/await",
                    difficulty: 3,
                    expReward: 120,
                    checkLogic: (code) => (code.includes('Promise') || code.includes('async')) && (code.includes('fetch') || code.includes('then'))
                }
            ]
        },
        python: {
            beginner: [
                { 
                    title: "Quest 1: Tính t?ng danh sách", 
                    description: "Tính t?ng các ph?n t? trong danh sách [1, 2, 3, 4, 5]",
                    difficulty: 1,
                    expReward: 60,
                    checkLogic: (code) => code.includes('sum') || code.includes('for') && code.includes('[')
                },
                { 
                    title: "Quest 2: Ki?m tra palindrome", 
                    description: "Ki?m tra xem chu?i 'racecar' có ph?i palindrome không",
                    difficulty: 1,
                    expReward: 60,
                    checkLogic: (code) => (code.includes('==') || code.includes('==')) && (code.includes('[') || code.includes('reverse') || code.includes('[::-1]'))
                },
                { 
                    title: "Quest 3: Nhân m?ng", 
                    description: "T?o list ch?a b?nh phýõng c?a [1, 2, 3, 4, 5]",
                    difficulty: 1,
                    expReward: 60,
                    checkLogic: (code) => code.includes('[') && code.includes('**2') || code.includes('**2') || code.includes('pow')
                }
            ],
            intermediate: [
                { 
                    title: "Quest 4: S?p x?p t? ði?n", 
                    description: "S?p x?p danh sách t? theo th? t? ch? cái",
                    difficulty: 2,
                    expReward: 80,
                    checkLogic: (code) => code.includes('sorted') || code.includes('sort')
                },
                { 
                    title: "Quest 5: Ð?m t?n su?t", 
                    description: "Ð?m t?n su?t xu?t hi?n c?a m?i k? t? trong chu?i",
                    difficulty: 2,
                    expReward: 80,
                    checkLogic: (code) => code.includes('for') && (code.includes('dict') || code.includes('{}') || code.includes('count'))
                },
                { 
                    title: "Quest 6: T?o class", 
                    description: "T?o l?p Student v?i các thu?c tính name, age, gpa",
                    difficulty: 2,
                    expReward: 80,
                    checkLogic: (code) => code.includes('class ') && code.includes('__init__')
                }
            ],
            advanced: [
                { 
                    title: "Quest 7: Generator", 
                    description: "Vi?t generator ð? t?o s? Fibonacci",
                    difficulty: 3,
                    expReward: 120,
                    checkLogic: (code) => code.includes('yield') && (code.includes('fibonacci') || code.includes('fib'))
                },
                { 
                    title: "Quest 8: Decorator", 
                    description: "T?o decorator @timer ð? ðo th?i gian th?c hi?n hàm",
                    difficulty: 3,
                    expReward: 120,
                    checkLogic: (code) => code.includes('def') && code.includes('wrapper') && code.includes('@')
                },
                { 
                    title: "Quest 9: Web Scraping", 
                    description: "Vi?t script scrape d? li?u t? trang web ðõn gi?n",
                    difficulty: 3,
                    expReward: 120,
                    checkLogic: (code) => (code.includes('requests') || code.includes('urllib')) && code.includes('get')
                }
            ]
        },
        cpp: {
            beginner: [
                { 
                    title: "Quest 1: S? hoàn h?o", 
                    description: "T?m t?t c? s? hoàn h?o nh? hõn 1000 (ví d?: 6, 28)",
                    difficulty: 1,
                    expReward: 60,
                    checkLogic: (code) => code.includes('for') && code.includes('cout')
                },
                { 
                    title: "Quest 2: Ma tr?n chuy?n v?", 
                    description: "Tính chuy?n v? c?a ma tr?n 3x3",
                    difficulty: 1,
                    expReward: 60,
                    checkLogic: (code) => code.includes('[') && code.includes('for') && code.includes('cout')
                },
                { 
                    title: "Quest 3: GCD & LCM", 
                    description: "Tính GCD và LCM c?a hai s?",
                    difficulty: 1,
                    expReward: 60,
                    checkLogic: (code) => (code.includes('gcd') || code.includes('GCD')) && code.includes('function')
                }
            ],
            intermediate: [
                { 
                    title: "Quest 4: Quick Sort", 
                    description: "Cài ð?t thu?t toán QuickSort",
                    difficulty: 2,
                    expReward: 80,
                    checkLogic: (code) => code.includes('quicksort') || code.includes('partition')
                },
                { 
                    title: "Quest 5: Binary Search", 
                    description: "T?m ki?m nh? phân trong m?ng ð? s?p x?p",
                    difficulty: 2,
                    expReward: 80,
                    checkLogic: (code) => code.includes('int mid') && code.includes('binary')
                },
                { 
                    title: "Quest 6: Linked List", 
                    description: "T?o c?u trúc d? li?u Linked List v?i insert, delete, display",
                    difficulty: 2,
                    expReward: 80,
                    checkLogic: (code) => code.includes('struct') && code.includes('next')
                }
            ],
            advanced: [
                { 
                    title: "Quest 7: BST (Binary Search Tree)", 
                    description: "Xây d?ng và qu?n l? cây nh? phân t?m ki?m",
                    difficulty: 3,
                    expReward: 120,
                    checkLogic: (code) => code.includes('struct') && (code.includes('left') && code.includes('right'))
                },
                { 
                    title: "Quest 8: Graph DFS/BFS", 
                    description: "Cài ð?t DFS và BFS cho ð? th?",
                    difficulty: 3,
                    expReward: 120,
                    checkLogic: (code) => (code.includes('DFS') || code.includes('BFS')) && code.includes('vector')
                },
                { 
                    title: "Quest 9: Dynamic Programming", 
                    description: "Gi?i bài toán Coin Change s? d?ng DP",
                    difficulty: 3,
                    expReward: 120,
                    checkLogic: (code) => code.includes('dp[') && code.includes('for')
                }
            ]
        }
    };
    
    // M?c ð?nh cho các ngôn ng? khác
    if (!questsMap[lang]) {
        questsMap[lang] = questsMap.javascript; // Dùng JavaScript làm template
    }
    
    return questsMap[lang];
}

/**
 * Hi?n th? notification bài t?p thích ?ng ðý?c m? khóa
 */
function showAdaptiveQuestsUnlocked(lang, level) {
    const levelNames = {
        beginner: '?? Cõ B?n',
        intermediate: '? Trung B?nh',
        advanced: '?? Nâng Cao'
    };
    
    alert(`?? B?CH T?P THÍCH ?NG Ð? M? KHÓA!\n\n` +
          `B?n có th? b?t ð?u các quest ? m?c ð? ${levelNames[level]} ngay bây gi?!\n\n` +
          `Hoàn thành các quest ð? nh?n EXP và c?i thi?n k? nãng.`);
}



// ==========================================
// LESSON COMPLETION FEATURES (Next & Redo)
// ==========================================

function showLessonCompletionScreen(lesson) {
    // ?n practice section
    document.getElementById('practice-section').classList.add('hidden');
    document.getElementById('btn-submit').classList.add('hidden');
    
    // Hi?n th? completion screen
    document.getElementById('lesson-completion-section').classList.remove('hidden');
    document.getElementById('lesson-completion-exp').innerText = `+${lesson.expReward}`;
    
    // Ki?m tra n?u có bài ti?p theo
    const lessons = lessonsDB[currentLangWorkspace];
    const currentIndex = lessons.findIndex(l => l.id === currentLessonId);
    const hasNextLesson = currentIndex < lessons.length - 1;
    
    // Hi?n/?n nút bài ti?p theo
    const nextBtn = document.getElementById('btn-next-lesson');
    if (hasNextLesson) {
        nextBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.add('hidden');
    }
}

function redoCurrentLesson() {
    // Reset editor, terminal, ?n completion screen
    editor.setValue("");
    const terminal = document.getElementById('terminal-output');
    terminal.innerText = "Ready...";
    terminal.style.color = "var(--terminal-text)";
    
    document.getElementById('lesson-completion-section').classList.add('hidden');
    document.getElementById('practice-section').classList.remove('hidden');
    document.getElementById('btn-submit').classList.remove('hidden');
    
    editor.focus();
}

function goToNextLesson() {
    const lessons = lessonsDB[currentLangWorkspace];
    const currentIndex = lessons.findIndex(l => l.id === currentLessonId);
    
    if (currentIndex < lessons.length - 1) {
        const nextLesson = lessons[currentIndex + 1];
        startLesson(currentLangWorkspace, nextLesson.id);
    } else {
        alert("?? B?n ð? hoàn thành t?t c? bài h?c trong ngôn ng? này!");
        showView('view-dashboard');
        updateDashboard();
    }
}

