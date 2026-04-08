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

const langNames = { javascript: "JavaScript", python: "Python", cpp: "C++", java: "Java", csharp: "C#" };
const editorModes = { javascript: "javascript", python: "python", cpp: "text/x-c++src", java: "text/x-java", csharp: "text/x-csharp" };
const fileExtensions = { javascript: "main.js", python: "main.py", cpp: "main.cpp", java: "Main.java", csharp: "Program.cs" };

// ==========================================
// CUSTOM LESSONS - 10 BÀI CHO MỖI NGÔN NGỮ
// ==========================================
const lessonsDB = {
    javascript: [
        { id: "js1", title: "Bài 1: In ra HelloWorld", theory: `<strong>Giới thiệu console.log()</strong><br/>console.log() dùng để in dữ liệu ra console.`, hints: "Sử dụng dấu ngoặc kép hoặc đơn bao quanh văn bản.", examples: "console.log('Xin chào');", task: "In ra: <strong>Hello World</strong>", minExpRequired: 0, expReward: 20, checkLogic: (code) => code.includes('console.log') && code.includes('Hello World') },
        { id: "js2", title: "Bài 2: Khai báo Biến", theory: `<strong>Biến trong JavaScript</strong><br/>Sử dụng let, const hoặc var để khai báo biến.`, hints: "Khai báo biến rồi dùng console.log() để in.", examples: "let age = 25; console.log(age);", task: "Tạo biến <code>age = 18</code> và in ra.", minExpRequired: 20, expReward: 30, checkLogic: (code) => code.includes('let age') && code.includes('18') && code.includes('console.log') },
        { id: "js3", title: "Bài 3: Phép toán cộng trừ", theory: `<strong>Phép toán số học</strong><br/>JavaScript hỗ trợ +, -, *, /, %.`, hints: "Tạo 2 biến số, cộng chúng, rồi in kết quả.", examples: "let a = 10; let b = 5; let sum = a + b; console.log(sum);", task: "Tạo <code>num1 = 15, num2 = 7</code>, cộng và in.", minExpRequired: 50, expReward: 30, checkLogic: (code) => code.includes('num1') && code.includes('15') && code.includes('num2') && code.includes('7') && code.includes('console.log') },
        { id: "js4", title: "Bài 4: Chuỗi (String)", theory: `<strong>Làm việc với chuỗi ký tự</strong><br/>Nối chuỗi bằng + hoặc template literals.`, hints: "Dùng + để nối 2 chuỗi lại.", examples: "let first = 'Hello'; let second = 'World'; console.log(first + ' ' + second);", task: "Tạo <code>first = 'Code', second = '4Fun'</code>, nối và in.", minExpRequired: 80, expReward: 30, checkLogic: (code) => code.includes('first') && code.includes('Code') && code.includes('second') && code.includes('4Fun') && code.includes('console.log') },
        { id: "js5", title: "Bài 5: Điều kiện If-Else", theory: `<strong>Cấu trúc if-else</strong><br/>Kiểm tra điều kiện và thực hiện code khác nhau.`, hints: "Sử dụng >=, <=, ==, != để so sánh.", examples: "let age = 20; if (age >= 18) { console.log('Adult'); }", task: "Khai báo <code>score = 85</code>, nếu >= 80 in 'Đạt', else 'Không đạt'.", minExpRequired: 110, expReward: 40, checkLogic: (code) => code.includes('score') && code.includes('85') && code.includes('if') && code.includes('console.log') },
        { id: "js6", title: "Bài 6: Vòng lặp For", theory: `<strong>Vòng lặp For</strong><br/>Lặp code nhiều lần. for (let i = 0; i < 5; i++)`, hints: "Sử dụng for để in 10 số từ 1 đến 10.", examples: "for (let i = 1; i <= 5; i++) { console.log(i); }", task: "Dùng for in các số từ 1 đến 10.", minExpRequired: 150, expReward: 40, checkLogic: (code) => code.includes('for') && code.includes('i++') && code.includes('console.log') },
        { id: "js7", title: "Bài 7: Mảng (Array)", theory: `<strong>Mảng - Tập hợp dữ liệu</strong><br/>Khai báo: let arr = [1, 2, 3]; Truy cập: arr[0]`, hints: "Tạo mảng, truy cập phần tử đầu tiên.", examples: "let numbers = [10, 20, 30]; console.log(numbers[0]);", task: "Tạo mảng <code>colors = ['red', 'green', 'blue']</code>, in phần tử [1].", minExpRequired: 190, expReward: 40, checkLogic: (code) => code.includes('[') && code.includes('colors') && code.includes('console.log') },
        { id: "js8", title: "Bài 8: Hàm (Function)", theory: `<strong>Hàm - Tái sử dụng code</strong><br/>function tênHàm(thamSố) { return kết quả; }`, hints: "Tạo hàm nhân 2 số, gọi và in.", examples: "function multiply(a, b) { return a * b; } console.log(multiply(4, 5));", task: "Tạo hàm <code>divide(a, b)</code>, gọi với 20 và 4.", minExpRequired: 230, expReward: 50, checkLogic: (code) => code.includes('function') && code.includes('console.log') },
        { id: "js9", title: "Bài 9: Object (Đối tượng)", theory: `<strong>Đối tượng - Nhóm dữ liệu</strong><br/>let obj = { name: 'John', age: 25 }; Truy cập: obj.name`, hints: "Tạo object với 2 thuộc tính, in thuộc tính.", examples: "let person = { name: 'Alice', age: 20 }; console.log(person.name);", task: "Tạo object <code>car</code> với brand='Toyota', in brand.", minExpRequired: 280, expReward: 50, checkLogic: (code) => code.includes('{') && code.includes('car') && code.includes('brand') && code.includes('console.log') },
        { id: "js10", title: "Bài 10: Vòng lặp While", theory: `<strong>Vòng lặp While</strong><br/>while (điều kiện) { code; i++; }`, hints: "Tạo while in từ 1 đến 5, nhớ tăng biến!", examples: "let i = 1; while (i <= 5) { console.log(i); i++; }", task: "Dùng while in các số từ 10 đến 15.", minExpRequired: 330, expReward: 50, checkLogic: (code) => code.includes('while') && code.includes('console.log') && (code.includes('++') || code.includes('+=')) }
    ],
    python: [
        { id: "py1", title: "Bài 1: In ra HelloWorld", theory: `<strong>Hàm print() trong Python</strong><br/>print('Nội dung') - đơn giản và không cần dấu chấm phẩy.`, hints: "Sử dụng dấu ngoặc kép hoặc đơn.", examples: "print('Xin chào')", task: "In ra: <strong>Hello World</strong>", minExpRequired: 0, expReward: 20, checkLogic: (code) => code.includes('print') && code.includes('Hello World') },
        { id: "py2", title: "Bài 2: Khai báo Biến", theory: `<strong>Biến trong Python</strong><br/>Gán trực tiếp: age = 18. Python tự động nhận diện kiểu.`, hints: "Tạo biến, dùng print() để in.", examples: "age = 25\nprint(age)", task: "Tạo biến <code>age = 18</code> và in ra.", minExpRequired: 20, expReward: 30, checkLogic: (code) => code.includes('age') && code.includes('18') && code.includes('print') },
        { id: "py3", title: "Bài 3: Phép toán cộng trừ", theory: `<strong>Phép toán số học</strong><br/>+, -, *, /, //, % được Python hỗ trợ.`, hints: "Tạo 2 biến, cộng, rồi in.", examples: "a = 15\nb = 7\nsum = a + b\nprint(sum)", task: "Tạo <code>num1 = 20, num2 = 8</code>, cộng và in.", minExpRequired: 50, expReward: 30, checkLogic: (code) => code.includes('num1') && code.includes('20') && code.includes('num2') && code.includes('8') && code.includes('print') },
        { id: "py4", title: "Bài 4: Chuỗi (String)", theory: `<strong>Làm việc với chuỗi</strong><br/>Nối: first + ' ' + second. Độ dài: len(text)`, hints: "Dùng + để nối chuỗi.", examples: "first = 'Hello'\nsecond = 'World'\nprint(first + ' ' + second)", task: "Tạo <code>first = 'Python', second = 'Love'</code>, nối và in.", minExpRequired: 80, expReward: 30, checkLogic: (code) => code.includes('first') && code.includes('Python') && code.includes('second') && code.includes('Love') && code.includes('print') },
        { id: "py5", title: "Bài 5: Điều kiện If-Else", theory: `<strong>Cấu trúc if-else trong Python</strong><br/>if điều_kiện:\n    code\nelse:\n    code`, hints: "Nhớ dùng : sau if/else và indent.", examples: "age = 20\nif age >= 18:\n    print('Adult')\nelse:\n    print('Child')", task: "Tạo <code>score = 90</code>, nếu >= 80 in 'Xuất sắc'.", minExpRequired: 110, expReward: 40, checkLogic: (code) => code.includes('score') && code.includes('90') && code.includes('if') && code.includes('print') },
        { id: "py6", title: "Bài 6: Vòng lặp For", theory: `<strong>For loop trong Python</strong><br/>for i in range(5): - lặp từ 0 đến 4.`, hints: "Dùng range() để tạo dãy số.", examples: "for i in range(5):\n    print(i)", task: "Dùng for in các số từ 1 đến 10.", minExpRequired: 150, expReward: 40, checkLogic: (code) => code.includes('for') && code.includes('range') && code.includes('print') },
        { id: "py7", title: "Bài 7: Danh sách (List)", theory: `<strong>List - Danh sách dữ liệu</strong><br/>numbers = [1, 2, 3]; Truy cập: numbers[0]`, hints: "Tạo list, truy cập phần tử.", examples: "numbers = [10, 20, 30]\nprint(numbers[0])", task: "Tạo list <code>colors = ['red', 'green', 'blue']</code>, in [1].", minExpRequired: 190, expReward: 40, checkLogic: (code) => code.includes('[') && code.includes('colors') && code.includes('print') },
        { id: "py8", title: "Bài 8: Hàm (Function)", theory: `<strong>Hàm trong Python</strong><br/>def tênHàm(thamSố):\n    return kết quả`, hints: "Tạo hàm nhân 2 số, gọi và in.", examples: "def multiply(a, b):\n    return a * b\nprint(multiply(4, 5))", task: "Tạo hàm <code>divide(a, b)</code>, gọi với 20 / 4.", minExpRequired: 230, expReward: 50, checkLogic: (code) => code.includes('def') && code.includes('print') },
        { id: "py9", title: "Bài 9: Từ điển (Dictionary)", theory: `<strong>Dictionary - Dữ liệu có khóa</strong><br/>person = {'name': 'John', 'age': 25}; Truy cập: person['name']`, hints: "Tạo dict, truy cập giá trị.", examples: "student = {'name': 'Alice', 'age': 20}\nprint(student['name'])", task: "Tạo dict <code>car</code> với brand='Tesla', in brand.", minExpRequired: 280, expReward: 50, checkLogic: (code) => code.includes('{') && code.includes('car') && code.includes('brand') && code.includes('print') },
        { id: "py10", title: "Bài 10: Vòng lặp While", theory: `<strong>While loop trong Python</strong><br/>while điều_kiện:\n    code\n    i += 1`, hints: "Nhớ tăng biến để tránh vòng vô hạn!", examples: "i = 1\nwhile i <= 5:\n    print(i)\n    i += 1", task: "Dùng while in từ 10 đến 15.", minExpRequired: 330, expReward: 50, checkLogic: (code) => code.includes('while') && code.includes('print') && (code.includes('+=') || code.includes('+')) }
    ],
    cpp: [
        { id: "cpp1", title: "Bài 1: In ra HelloWorld", theory: `<strong>cout trong C++</strong><br/>#include <iostream><br/>std::cout << "Text";`, hints: "Nhớ #include, using namespace std, return 0.", examples: "#include <iostream>\nusing namespace std;\nint main() { cout << \"Hello\"; return 0; }", task: "In ra: <strong>Hello World</strong>", minExpRequired: 0, expReward: 20, checkLogic: (code) => code.includes('cout') && code.includes('Hello World') },
        { id: "cpp2", title: "Bài 2: Khai báo Biến", theory: `<strong>Biến trong C++ - Phải khai báo kiểu</strong><br/>int age = 18; string name = "John";`, hints: "Khai báo kiểu dữ liệu rồi tên biến.", examples: "int age = 20;\nstring name = \"Alice\";\ncout << age;", task: "Khai báo <code>int age = 25</code> và in ra.", minExpRequired: 20, expReward: 30, checkLogic: (code) => code.includes('int') && code.includes('age') && code.includes('25') && code.includes('cout') },
        { id: "cpp3", title: "Bài 3: Phép toán cộng trừ", theory: `<strong>Phép toán số học</strong><br/>+, -, *, /, % đều được hỗ trợ.`, hints: "Khai báo 2 biến, cộng, in kết quả.", examples: "int a = 15;\nint b = 7;\nint sum = a + b;\ncout << sum;", task: "Khai báo <code>num1 = 12, num2 = 8</code>, cộng và in.", minExpRequired: 50, expReward: 30, checkLogic: (code) => code.includes('int') && code.includes('num1') && code.includes('12') && code.includes('cout') },
        { id: "cpp4", title: "Bài 4: Chuỗi (String)", theory: `<strong>String trong C++</strong><br/>#include <string><br/>string text = "Hello";`, hints: "Dùng + để nối, nhớ #include <string>.", examples: "#include <string>\nstring first = \"Code\";\nstring second = \"4Fun\";\ncout << first + second;", task: "Khai báo <code>first = \"Hello\", second = \"World\"</code>, nối và in.", minExpRequired: 80, expReward: 30, checkLogic: (code) => code.includes('string') && code.includes('Hello') && code.includes('cout') },
        { id: "cpp5", title: "Bài 5: Điều kiện If-Else", theory: `<strong>If-Else trong C++</strong><br/>if (điều_kiện) { code } else { code }`, hints: "Sử dụng >=, <=, ==, != để so sánh.", examples: "int age = 20;\nif (age >= 18) {\n  cout << \"Adult\";\n}", task: "Khai báo <code>score = 75</code>, nếu >= 80 in 'Pass'.", minExpRequired: 110, expReward: 40, checkLogic: (code) => code.includes('if') && code.includes('score') && code.includes('75') && code.includes('cout') },
        { id: "cpp6", title: "Bài 6: Vòng lặp For", theory: `<strong>For loop trong C++</strong><br/>for (int i = 0; i < 5; i++) { cout << i; }`, hints: "Dùng for in 10 số từ 1 đến 10.", examples: "for (int i = 1; i <= 10; i++) {\n  cout << i << \" \";\n}", task: "Dùng for in các số từ 5 đến 15.", minExpRequired: 150, expReward: 40, checkLogic: (code) => code.includes('for') && code.includes('i++') && code.includes('cout') },
        { id: "cpp7", title: "Bài 7: Mảng (Array)", theory: `<strong>Mảng trong C++</strong><br/>int arr[5] = {1, 2, 3, 4, 5}; Truy cập: arr[0]`, hints: "Tạo mảng, in phần tử đầu.", examples: "int arr[5] = {10, 20, 30, 40, 50};\ncout << arr[0];", task: "Khai báo mảng chứa 3 phần tử, in phần tử 0.", minExpRequired: 190, expReward: 40, checkLogic: (code) => code.includes('[') && code.includes('{') && code.includes('cout') },
        { id: "cpp8", title: "Bài 8: Hàm (Function)", theory: `<strong>Hàm trong C++</strong><br/>int tênHàm(int a, int b) { return a + b; }`, hints: "Tạo hàm nhân 2 số, gọi và in.", examples: "#include <iostream>\nusing namespace std;\nint multiply(int a, int b) { return a * b; }\nint main() { cout << multiply(4, 5); return 0; }", task: "Tạo hàm <code>divide(int a, int b)</code>, gọi 20/4.", minExpRequired: 230, expReward: 50, checkLogic: (code) => code.includes('int') && code.includes('cout') },
        { id: "cpp9", title: "Bài 9: Struct (Cấu trúc)", theory: `<strong>Struct trong C++</strong><br/>struct Person { string name; int age; };`, hints: "Tạo struct, tạo object, in thuộc tính.", examples: "struct Car { string brand; };\nCar c;\nc.brand = \"Toyota\";\ncout << c.brand;", task: "Tạo struct Student với name, gán giá trị rồi in.", minExpRequired: 280, expReward: 50, checkLogic: (code) => code.includes('struct') && code.includes('string') && code.includes('cout') },
        { id: "cpp10", title: "Bài 10: Vector (Mảng động)", theory: `<strong>Vector - Mảng linh hoạt</strong><br/>#include <vector><br/>vector<int> v = {1, 2, 3};`, hints: "Tạo vector, thêm phần tử, duyệt.", examples: "#include <vector>\nvector<int> nums = {10, 20, 30};\nnums.push_back(40);\nfor (int n : nums) cout << n;", task: "Tạo vector, thêm 1, 2, 3, in kích thước.", minExpRequired: 330, expReward: 50, checkLogic: (code) => code.includes('vector') && code.includes('push_back') && code.includes('cout') }
    ],
    java: [
        { id: "java1", title: "Bài 1: In ra HelloWorld", theory: `<strong>System.out.println() trong Java</strong><br/>System.out.println("Hello");`, hints: "Nhớ class, main method, từ khóa public static void.", examples: "class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Hello\");\n  }\n}", task: "In ra: <strong>Hello World</strong>", minExpRequired: 0, expReward: 20, checkLogic: (code) => code.includes('System.out.println') && code.includes('Hello World') },
        { id: "java2", title: "Bài 2: Khai báo Biến", theory: `<strong>Biến trong Java - Phải khai báo kiểu</strong><br/>int age = 18; String name = "John";`, hints: "Khai báo kiểu rồi tên biến.", examples: "String name = \"Alice\";\nint age = 20;\nSystem.out.println(age);", task: "Khai báo <code>int age = 25</code> và in ra.", minExpRequired: 20, expReward: 30, checkLogic: (code) => code.includes('int') && code.includes('age') && code.includes('25') && code.includes('System.out.println') },
        { id: "java3", title: "Bài 3: Phép toán cộng trừ", theory: `<strong>Phép toán số học</strong><br/>+, -, *, /, % đều được hỗ trợ.`, hints: "Tạo 2 biến, cộng, in kết quả.", examples: "int a = 15;\nint b = 7;\nint sum = a + b;\nSystem.out.println(sum);", task: "Khai báo <code>num1 = 12, num2 = 8</code>, cộng và in.", minExpRequired: 50, expReward: 30, checkLogic: (code) => code.includes('int') && code.includes('num1') && code.includes('12') && code.includes('System.out.println') },
        { id: "java4", title: "Bài 4: Chuỗi (String)", theory: `<strong>String trong Java</strong><br/>String text = "Hello"; String name = "World";`, hints: "Dùng + để nối chuỗi.", examples: "String first = \"Java\";\nString second = \"Programming\";\nString full = first + \" \" + second;\nSystem.out.println(full);", task: "Khai báo <code>first = \"Hello\", second = \"World\"</code>, nối và in.", minExpRequired: 80, expReward: 30, checkLogic: (code) => code.includes('String') && code.includes('Hello') && code.includes('System.out.println') },
        { id: "java5", title: "Bài 5: Điều kiện If-Else", theory: `<strong>If-Else trong Java</strong><br/>if (điều_kiện) { code } else { code }`, hints: "Sử dụng >=, <=, ==, != để so sánh.", examples: "int score = 85;\nif (score >= 80) {\n  System.out.println(\"Pass\");\n}", task: "Khai báo <code>age = 16</code>, nếu >= 18 in 'Adult'.", minExpRequired: 110, expReward: 40, checkLogic: (code) => code.includes('if') && code.includes('age') && code.includes('16') && code.includes('System.out.println') },
        { id: "java6", title: "Bài 6: Vòng lặp For", theory: `<strong>For loop trong Java</strong><br/>for (int i = 0; i < 5; i++) { System.out.println(i); }`, hints: "Dùng for in 10 số từ 1 đến 10.", examples: "for (int i = 1; i <= 10; i++) {\n  System.out.println(i);\n}", task: "Dùng for in các số từ 5 đến 15.", minExpRequired: 150, expReward: 40, checkLogic: (code) => code.includes('for') && code.includes('System.out.println') && (code.includes('i++') || code.includes('i+=')) },
        { id: "java7", title: "Bài 7: Mảng (Array)", theory: `<strong>Mảng trong Java</strong><br/>int[] arr = {1, 2, 3, 4, 5}; Truy cập: arr[0]`, hints: "Tạo mảng, in phần tử.", examples: "int[] arr = {10, 20, 30, 40, 50};\nSystem.out.println(arr[0]);", task: "Khai báo mảng 3 phần tử, in phần tử 0.", minExpRequired: 190, expReward: 40, checkLogic: (code) => code.includes('[') && code.includes('{') && code.includes('System.out.println') },
        { id: "java8", title: "Bài 8: Phương thức (Method)", theory: `<strong>Method trong Java</strong><br/>static int tênMethod(int a, int b) { return a + b; }`, hints: "Tạo method nhân 2 số, gọi trong main.", examples: "static int multiply(int a, int b) {\n  return a * b;\n}\nSystem.out.println(multiply(4, 5));", task: "Tạo method <code>divide(int a, int b)</code>, gọi 20/4.", minExpRequired: 230, expReward: 50, checkLogic: (code) => code.includes('static') && code.includes('int') && code.includes('System.out.println') },
        { id: "java9", title: "Bài 9: Class và Object", theory: `<strong>Class và Object trong Java</strong><br/>class Person { String name; int age; }`, hints: "Tạo class, tạo object, gán giá trị.", examples: "class Car { String brand; }\nCar c = new Car();\nc.brand = \"Toyota\";\nSystem.out.println(c.brand);", task: "Tạo class Student với name, tạo object rồi in.", minExpRequired: 280, expReward: 50, checkLogic: (code) => code.includes('class') && code.includes('new') && code.includes('System.out.println') },
        { id: "java10", title: "Bài 10: ArrayList (Danh sách động)", theory: `<strong>ArrayList - Danh sách linh hoạt</strong><br/>ArrayList<Integer> numbers = new ArrayList<>();`, hints: "Tạo ArrayList, thêm phần tử, duyệt.", examples: "import java.util.ArrayList;\nArrayList<Integer> nums = new ArrayList<>();\nnums.add(10);\nnums.add(20);\nfor (int n : nums) System.out.println(n);", task: "Tạo ArrayList, thêm 1, 2, 3, in kích thước.", minExpRequired: 330, expReward: 50, checkLogic: (code) => code.includes('ArrayList') && code.includes('add') && code.includes('System.out.println') }
    ],
    csharp: [
        { id: "cs1", title: "Bài 1: In ra HelloWorld", theory: `<strong>Console.WriteLine() trong C#</strong><br/>using System;<br/>Console.WriteLine("Hello");`, hints: "Nhớ using System, Main method.", examples: "using System;\nclass Program {\n  static void Main() {\n    Console.WriteLine(\"Hello\");\n  }\n}", task: "In ra: <strong>Hello World</strong>", minExpRequired: 0, expReward: 20, checkLogic: (code) => code.includes('Console.WriteLine') && code.includes('Hello World') },
        { id: "cs2", title: "Bài 2: Khai báo Biến", theory: `<strong>Biến trong C# - Phải khai báo kiểu</strong><br/>int age = 18; string name = "John";`, hints: "Khai báo kiểu rồi tên biến.", examples: "string name = \"Alice\";\nint age = 20;\nConsole.WriteLine(age);", task: "Khai báo <code>int age = 25</code> và in ra.", minExpRequired: 20, expReward: 30, checkLogic: (code) => code.includes('int') && code.includes('age') && code.includes('25') && code.includes('Console.WriteLine') },
        { id: "cs3", title: "Bài 3: Phép toán cộng trừ", theory: `<strong>Phép toán số học</strong><br/>+, -, *, /, % đều được hỗ trợ.`, hints: "Tạo 2 biến, cộng, in kết quả.", examples: "int a = 15;\nint b = 7;\nint sum = a + b;\nConsole.WriteLine(sum);", task: "Khai báo <code>num1 = 12, num2 = 8</code>, cộng và in.", minExpRequired: 50, expReward: 30, checkLogic: (code) => code.includes('int') && code.includes('num1') && code.includes('12') && code.includes('Console.WriteLine') },
        { id: "cs4", title: "Bài 4: Chuỗi (String)", theory: `<strong>String trong C#</strong><br/>string text = "Hello"; string name = "World";`, hints: "Dùng + để nối chuỗi.", examples: "string first = \"C Sharp\";\nstring second = \"Programming\";\nConsole.WriteLine(first + \" \" + second);", task: "Khai báo <code>first = \"Hello\", second = \"C#\"</code>, nối và in.", minExpRequired: 80, expReward: 30, checkLogic: (code) => code.includes('string') && code.includes('Hello') && code.includes('Console.WriteLine') },
        { id: "cs5", title: "Bài 5: Điều kiện If-Else", theory: `<strong>If-Else trong C#</strong><br/>if (điều_kiện) { code } else { code }`, hints: "Sử dụng >=, <=, ==, != để so sánh.", examples: "int score = 85;\nif (score >= 80) {\n  Console.WriteLine(\"Pass\");\n}", task: "Khai báo <code>age = 16</code>, nếu >= 18 in 'Adult'.", minExpRequired: 110, expReward: 40, checkLogic: (code) => code.includes('if') && code.includes('age') && code.includes('16') && code.includes('Console.WriteLine') },
        { id: "cs6", title: "Bài 6: Vòng lặp For", theory: `<strong>For loop trong C#</strong><br/>for (int i = 0; i < 5; i++) { Console.WriteLine(i); }`, hints: "Dùng for in 10 số từ 1 đến 10.", examples: "for (int i = 1; i <= 10; i++) {\n  Console.WriteLine(i);\n}", task: "Dùng for in các số từ 5 đến 15.", minExpRequired: 150, expReward: 40, checkLogic: (code) => code.includes('for') && code.includes('Console.WriteLine') && (code.includes('i++') || code.includes('i+=')) },
        { id: "cs7", title: "Bài 7: Mảng (Array)", theory: `<strong>Mảng trong C#</strong><br/>int[] arr = {1, 2, 3, 4, 5}; Truy cập: arr[0]`, hints: "Tạo mảng, in phần tử.", examples: "int[] arr = {10, 20, 30, 40, 50};\nConsole.WriteLine(arr[0]);", task: "Khai báo mảng 3 phần tử, in phần tử 0.", minExpRequired: 190, expReward: 40, checkLogic: (code) => code.includes('[') && code.includes('{') && code.includes('Console.WriteLine') },
        { id: "cs8", title: "Bài 8: Phương thức (Method)", theory: `<strong>Method trong C#</strong><br/>static int tênMethod(int a, int b) { return a + b; }`, hints: "Tạo method nhân 2 số, gọi trong Main.", examples: "static int Multiply(int a, int b) {\n  return a * b;\n}\nConsole.WriteLine(Multiply(4, 5));", task: "Tạo method <code>Divide(int a, int b)</code>, gọi 20/4.", minExpRequired: 230, expReward: 50, checkLogic: (code) => code.includes('static') && code.includes('int') && code.includes('Console.WriteLine') },
        { id: "cs9", title: "Bài 9: Class và Object", theory: `<strong>Class và Object trong C#</strong><br/>class Person { public string Name; public int Age; }`, hints: "Tạo class, tạo object, gán giá trị.", examples: "class Car { public string Brand; }\nCar c = new Car();\nc.Brand = \"Toyota\";\nConsole.WriteLine(c.Brand);", task: "Tạo class Student với Name, tạo object rồi in.", minExpRequired: 280, expReward: 50, checkLogic: (code) => code.includes('class') && code.includes('new') && code.includes('Console.WriteLine') },
        { id: "cs10", title: "Bài 10: List (Danh sách động)", theory: `<strong>List - Danh sách linh hoạt</strong><br/>List<int> numbers = new List<int>();`, hints: "Tạo List, thêm phần tử, duyệt.", examples: "using System;\nusing System.Collections.Generic;\nList<int> nums = new List<int>();\nnums.Add(10);\nnums.Add(20);\nforeach (int n in nums) Console.WriteLine(n);", task: "Tạo List<int>, thêm 1, 2, 3, in kích thước.", minExpRequired: 330, expReward: 50, checkLogic: (code) => code.includes('List') && code.includes('Add') && code.includes('Console.WriteLine') }
    ]
};

// ==========================================
// 2. CƠ CHẾ TRẮC NGHIỆM - MULTIPLE CHOICE QUIZ
// ==========================================
// quizDB (50 câu hỏi cho mỗi ngôn ngữ) được import từ quiz-data.js
const quizDB = {
    javascript: [
        { q: "Câu lệnh nào dùng để in dữ liệu ra console?", a: ["console.log()", "print()", "cout", "System.out.println()"], c: 0 },
        { q: "Khai báo biến trong JS, cái nào được dùng nhiều nhất hiện đại?", a: ["var age = 25", "let age = 25", "const age = 25", "cả B và C đều đúng"], c: 3 },
        { q: "Kết quả của 10 + '5' trong JavaScript là gì?", a: ["15", "105", "Lỗi", "undefined"], c: 1 },
        { q: "Hàm nào được dùng để kiểm tra độ dài chuỗi?", a: ["length()", ".length", ".size()", ".count()"], c: 1 },
        { q: "Cú pháp vòng lặp for đúng là?", a: ["for(let i=0 i<5 i++)", "for(let i=0; i<5; i++)", "for i in range(5)", "while(i<5)"], c: 1 },
        { q: "Array trong JS được khai báo như thế nào?", a: ["let arr = (1,2,3)", "let arr = [1,2,3]", "let arr = {1,2,3}", "let arr = 1,2,3"], c: 1 },
        { q: "Hàm trong JS bắt đầu bằng từ khóa nào?", a: ["func", "function", "def", "method"], c: 1 },
        { q: "1 === '1' sẽ trả về gì?", a: ["true", "false", "1", "undefined"], c: 1 },
        { q: "Để nối chuỗi, ta dùng ký tự nào?", a: ["-", "*", "+", "&"], c: 2 },
        { q: "undefined có phải là kiểu dữ liệu trong JS không?", a: ["Không", "Có", "Có nhưng hiếm", "Tùy trường hợp"], c: 1 }
    ],
    python: [
        { q: "Hàm nào dùng để in dữ liệu ra console?", a: ["cout", "print()", "System.out.println()", "puts"], c: 1 },
        { q: "Cú pháp khai báo biến nào đúng?", a: ["int age = 25", "age: int = 25", "age = 25", "var age = 25"], c: 2 },
        { q: "Cách tạo list trong Python?", a: ["list = (1,2,3)", "list = {1,2,3}", "list = [1,2,3]", "list = 1,2,3"], c: 2 },
        { q: "Hàm lặp for trong Python dùng từ khóa nào?", a: ["for", "while", "loop", "repeat"], c: 0 },
        { q: "range(5) sẽ sinh ra dãy số nào?", a: ["1,2,3,4,5", "0,1,2,3,4", "1,2,3,4", "0,1,2,3,4,5"], c: 1 },
        { q: "Cách lấy độ dài list là?", a: [".length()", "len(list)", ".size()", ".count()"], c: 1 },
        { q: "Comment trong Python dùng ký tự nào?", a: ["//", "/**/", "#", "--"], c: 2 },
        { q: "Dictionary trong Python khai báo như thế nào?", a: ["dict = (key: value)", "dict = {key: value}", "dict = [key, value]", "dict = key, value"], c: 1 },
        { q: "Hàm dùng để kiểm tra kiểu dữ liệu?", a: ["typeof", "isinstance()", "getType()", "checkType()"], c: 1 },
        { q: "Để tạo hàm, từ khóa nào được dùng?", a: ["function", "fun", "def", "method"], c: 2 }
    ],
    cpp: [
        { q: "Câu lệnh nào dùng để in dữ liệu ra?", a: ["cout", "print()", "printf()", "System.out"], c: 0 },
        { q: "Để sử dụng cout, phải include gì?", a: ["#include <stdio.h>", "#include <iostream>", "#include <cstdlib>", "#include <vector>"], c: 1 },
        { q: "KUI khai báo biến trong C++?", a: ["int age = 25;", "int age: 25;", "var age = 25;", "age: int = 25"], c: 0 },
        { q: "Array trong C++ được khai báo?", a: ["int arr = [1,2,3]", "int arr[3] = {1,2,3}", "array arr = {1,2,3}", "let arr = [1,2,3]"], c: 1 },
        { q: "Cú pháp vòng lặp for đúng là?", a: ["for i in range(10)", "for(int i=0; i<10; i++)", "for(i<10)", "repeat(10) {"], c: 1 },
        { q: "Để tạo hàm, cú pháp là?", a: ["func name() {}", "def name():", "type name() {}", "method name() {}"], c: 2 },
        { q: "String trong C++ phải include gì?", a: ["#include <string>", "#include <cstring>", "#include <stdio.h>", "Không cần"], c: 0 },
        { q: "Struct dùng để làm gì?", a: ["Khai báo hàm", "Nhóm dữ liệu", "Tạo loop", "Khai báo mảng"], c: 1 },
        { q: "Vector trong C++ là gì?", a: ["Biến thường", "Mảng động", "Hàm", "Kiểu bool"], c: 1 },
        { q: "nullptr dùng trong C++ như thế nào?", a: ["Giá trị 0", "Con trỏ rỗng", "Từ khóa", "Lỗi cú pháp"], c: 1 }
    ],
    java: [
        { q: "Câu lệnh in dữ liệu trong Java?", a: ["print()", "cout", "System.out.println()", "printf()"], c: 2 },
        { q: "Khai báo biến đúng trong Java?", a: ["int age = 25", "age: int = 25", "var age = 25", "age = int 25"], c: 0 },
        { q: "Array trong Java?", a: ["int[] arr = [1,2,3]", "int arr[] = {1,2,3}", "array arr = {1,2,3}", "List arr = {1,2,3}"], c: 1 },
        { q: "Vòng lặp for trong Java?", a: ["for i in range(10)", "for(int i=0; i<10; i++)", "for(i<10)", "repeat(10) {"], c: 1 },
        { q: "Class trong Java bắt đầu bằng?", a: ["class Main {", "Class Main {", "public class Main {", "Cả A và C đúng"], c: 3 },
        { q: "Method main trong Java?", a: ["public static void main()", "public void main(String[])", "public static void main(String[])", "static main()"], c: 2 },
        { q: "ArrayList là gì?", a: ["Mảng thường", "Mảng động", "List tĩnh", "Hàm trong java.util"], c: 1 },
        { q: "Để import một package?", a: ["import java.util", "include java.util", "using java.util", "include <java.util>"], c: 0 },
        { q: "String immutable trong Java?", a: ["Không", "Có", "Tùy trường hợp", "Chỉ khi được khởi tạo"], c: 1 },
        { q: "new từ khóa dùng để?", a: ["Tạo biến", "Tạo object", "Import class", "Khai báo hàm"], c: 1 }
    ],
    csharp: [
        { q: "Hàm in dữ liệu trong C#?", a: ["print()", "cout", "Console.WriteLine()", "printf()"], c: 2 },
        { q: "Khai báo biến C#?", a: ["int age = 25", "age: int = 25", "var age = 25", "Cả A và C"], c: 3 },
        { q: "Array trong C#?", a: ["int[] arr = [1,2,3]", "int arr[] = new int[3]", "array arr = {1,2,3}", "List<int> arr = {1,2,3}"], c: 1 },
        { q: "For loop trong C#?", a: ["for i in range(10)", "for(int i=0; i<10; i++)", "for(i<10)", "repeat 10"], c: 1 },
        { q: "List trong C# là gì?", a: ["Array cố định", "Array động", "Hàm", "Namespace"], c: 1 },
        { q: "Namespace dùng để?", a: ["Import class", "Nhóm code", "Khai báo hàm", "Tạo biến"], c: 1 },
        { q: "Property trong C#?", a: ["Biến public", "Biến với getter/setter", "Hàm", "Constant"], c: 1 },
        { q: "async/await là gì?", a: ["Vòng lặp", "Lập trình không đồng bộ", "Khai báo hàm", "Điều kiện"], c: 1 },
        { q: "LINQ là gì?", a: ["Namespace", "Phương pháp truy vấn dữ liệu", "Type dữ liệu", "Hàm"], c: 1 },
        { q: "Nullable type trong C#?", a: ["Biến có thể null", "Biến không thể null", "Biến kiểu Integer", "Biến tĩnh"], c: 0 }
    ]
};

// ==========================================
// 3. QUẢN LÝ BIẾN TOÀN CỤC
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
// 4. CÁC HÀM XỬ LÝ LỊCH SỬ TRẮC NGHIỆM
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
        title: `Trắc Nghiệm ${langNames[lang]}`
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
        title: `💻 ${lessonTitle}`,
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
    
    // Sắp xếp theo ngày mới nhất trước
    allHistory.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    if (allHistory.length === 0) {
        historyContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted); background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(236, 72, 153, 0.08)); border-radius: 8px; border: 1px solid rgba(99, 102, 241, 0.15);">Chưa có lịch sử học tập</p>';
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
            typeIcon = '📝';
            scoreDetailsHTML = `<div class="score-details">${record.correct}/${record.correct + record.incorrect} câu đúng</div>`;
        } else if (record.type === 'lesson') {
            typeIcon = '💻';
            scoreDetailsHTML = `<div class="score-details" style="color: #10b981;">✅ Hoàn Thành</div>`;
            onClickHandler = `onclick="viewSavedCode('${record.lang}', '${record.lessonId}')" style="cursor: pointer;"`;
        } else if (record.type === 'quest') {
            typeIcon = '🏆';
            scoreDetailsHTML = `<div class="score-details" style="color: #10b981;">✅ Hoàn Thành</div>`;
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
                ${record.type === 'lesson' ? '<div style="margin-top: 8px; font-size: 0.9rem; color: #06b6d4;">👁️ Click để xem code</div>' : ''}
            </div>
        `;
    }).join('');
}

function viewSavedCode(lang, lessonId) {
    const savedCode = currentUser.savedCodes?.[lang]?.[lessonId];
    if (!savedCode) {
        alert('❌ Không tìm thấy code đã lưu!');
        return;
    }
    
    const lesson = lessonsDB[lang].find(l => l.id === lessonId);
    const langNames = { javascript: 'JavaScript', python: 'Python', cpp: 'C++', java: 'Java', csharp: 'C#' };
    
    // Hiển thị code viewer
    document.getElementById('saved-code-lang').innerText = langNames[lang];
    document.getElementById('saved-code-title').innerText = lesson.title;
    const saveDate = new Date(savedCode.date);
    document.getElementById('saved-code-date').innerText = 'Lưu: ' + saveDate.toLocaleDateString('vi-VN') + ' ' + saveDate.toLocaleTimeString('vi-VN');
    document.getElementById('saved-code-content').innerText = savedCode.code;
    document.getElementById('saved-code-length').innerText = `${savedCode.codeLength} ký tự`;
    
    showView('view-saved-code');
}

function copySavedCode() {
    const codeContent = document.getElementById('saved-code-content').innerText;
    navigator.clipboard.writeText(codeContent).then(() => {
        alert('✅ Đã copy code vào clipboard!');
    }).catch(() => {
        alert('❌ Không thể copy code!');
    });
}

function filterQuizHistory() {
    const filterSelect = document.getElementById('history-filter');
    filteredHistoryLang = filterSelect.value === 'all' ? '' : filterSelect.value;
    displayQuizHistory();
}

// ==========================================
// 5. QUẢN LÝ BIẾN VÀ KHỞI ĐỘNG
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
    
    // Cập nhật dashboard khi quay lại
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

    if (!name || !email || !password) return alert("❌ Vui lòng điền đủ thông tin!");
    let users = JSON.parse(localStorage.getItem('code4students_users')) || {};
if (users[email]) return alert("⚠️ Email đã tồn tại!");

    users[email] = { email, password, name, stats: {} };
    localStorage.setItem('code4students_users', JSON.stringify(users));
    
    alert("✅ Đăng ký thành công!");
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
    } else { alert("❌ Sai email hoặc mật khẩu!"); }
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
             lessonTitleHTML = `<strong>Bài tiếp theo:</strong> ${availableLesson.title}`;
             actionHTML = `<div style="display: flex; gap: 10px;"><button onclick="viewLanguageOverview('${lang}')" class="btn-outline" style="flex: 1;">Tổng Quan</button><button onclick="startQuiz('${lang}')" class="btn-outline" style="flex: 1; background: linear-gradient(135deg, #6366f1 0%, #ec4899 100%); color: white; border: none;">Trắc Nghiệm 📝</button><button onclick="startLesson('${lang}', '${availableLesson.id}')" class="btn-primary" style="flex: 1;">Vào Học</button></div>`;
        } else {
             lessonTitleHTML = `<strong style="color: #10b981; text-shadow: 0 0 10px rgba(16, 185, 129, 0.3);">🎉 Đã hoàn thành mọi bài học!</strong>`;
             actionHTML = `<div style="display: flex; gap: 10px;"><button onclick="viewLanguageOverview('${lang}')" class="btn-outline" style="flex: 1;">Tổng Quan</button><button onclick="startQuiz('${lang}')" class="btn-outline" style="flex: 1; background: linear-gradient(135deg, #6366f1 0%, #ec4899 100%); color: white; border: none;">Trắc Nghiệm 📝</button></div>`;
        }

        const cardHTML = `<div class="track-card"><div class="track-header"><div class="track-title">${langNames[lang]}</div><div class="track-stats"><span class="stat-badge stat-level">Cấp ${level}</span><span class="stat-badge">${stats.exp} EXP</span><span class="stat-badge stat-error">Sai: ${stats.errors} lần</span></div></div><div class="track-body"><div class="progress-bar"><div class="progress-fill" style="width: ${progressPercent}%"></div></div><div class="track-footer"><div class="lesson-info">${lessonTitleHTML}</div>${actionHTML}</div></div></div>`;
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

function runCode() {
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
            terminal.innerText = `✅ CHÍNH XÁC!\n+${lesson.expReward} EXP nhận được!`;
            
            if (!currentUser.stats[currentLangWorkspace].completedLessons.includes(lesson.id)) {
                currentUser.stats[currentLangWorkspace].completedLessons.push(lesson.id);
                currentUser.stats[currentLangWorkspace].exp += lesson.expReward;
                
                // Lưu code vào kho lưu trữ
                saveLessonCode(currentLangWorkspace, lesson.id, lesson.title, code);
                
                // Lưu lịch sử làm bài tập
                saveLessonHistory(currentLangWorkspace, lesson.id, lesson.title, lesson.expReward);
                
                saveUserProgress();
                
                // Kiểm tra nếu hoàn thành 10 bài học
                setTimeout(() => {
                evaluateCompetency(currentLangWorkspace);
            }, 2500);
            }
            setTimeout(() => { showView('view-dashboard'); updateDashboard(); }, 2000);
            
        } else {
            terminal.style.color = "#FF5555";
            terminal.innerText = "❌ Code chưa chính xác!\nBạn đã bị ghi nhận 1 lỗi.";
            
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
    
    // Lấy 5 câu hỏi ngẫu nhiên không lặp lại
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
        alert('⚠️ Vui lòng chọn một đáp án!');
        return;
    }
    submitQuizAnswer(quizState.selectedAnswer);
}

function submitQuizAnswer(answerIndex) {
    const question = quizState.questions[quizState.currentIndex];
    const buttons = document.querySelectorAll('.quiz-answer-btn');
    
    // Vô hiệu hóa tất cả các nút
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
        `Đúng: ${quizState.correct} | Sai: ${quizState.incorrect} | Điểm: ${Math.round((quizState.correct / (quizState.correct + quizState.incorrect)) * 100)}%`;
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
        resultTitle = '🎉 TUYỆT VỜI!';
        resultMessage = `Bạn trả lời đúng cả 5 câu hỏi! Nhận +${expReward} EXP`;
    } else if (percentage >= 80) {
        resultTitle = '✅ XUẤT SẮC!';
        resultMessage = `Bạn đạt ${percentage}%. Nhận +${expReward} EXP`;
    } else if (percentage >= 60) {
        resultTitle = '👍 TỐT!';
        resultMessage = `Bạn đạt ${percentage}%. Nhận +${expReward} EXP`;
    } else if (percentage >= 40) {
        resultTitle = '📚 CỐ GẮNG HƠN NỮA!';
        resultMessage = `Bạn đạt ${percentage}%. Nhận +${expReward} EXP`;
    } else {
        resultTitle = '💪 HÃY TIẾP TỤC LUYỆN TẬP!';
        resultMessage = `Bạn đạt ${percentage}%. Hãy ôn lại lý thuyết và thử lại!`;
    }
    
    document.getElementById('result-title').innerText = resultTitle;
    document.getElementById('result-message').innerText = resultMessage;
    
    // Cộng EXP cho người dùng
    if (expReward > 0) {
        currentUser.stats[quizState.currentLang].exp += expReward;
        saveUserProgress();
    }
}

function finishQuiz() {
    // Lưu lịch sử trắc nghiệm
    saveQuizHistory(quizState.currentLang, quizState.correct * 20, quizState.correct, quizState.incorrect);
    
    // Reset lại bộ câu hỏi
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
 * Đánh giá năng lực người dùng dựa trên kết quả học tập
 * Thuật toán xét các yếu tố:
 * - Tỷ lệ câu trả lời quiz đúng
 * - Số lỗi khi làm bài tập
 * - EXP tích lũy
 * - Tốc độ hoàn thành bài học
 */
function evaluateCompetency(lang) {
    const stats = currentUser.stats[lang];
    const quizHistory = currentUser.quizHistory[lang] || [];
    
    if (!stats || stats.completedLessons.length < 10) return null;
    
    // 1. Tính tỷ lệ thành công từ quiz
    let quizSuccessRate = 0;
    if (quizHistory.length > 0) {
        const avgQuizScore = quizHistory.reduce((sum, q) => sum + q.percentage, 0) / quizHistory.length;
        quizSuccessRate = avgQuizScore / 100; // 0-1
    } else {
        quizSuccessRate = 0.5; // Mặc định nếu chưa làm quiz
    }
    
    // 2. Tính điểm lỗi (càng ít lỗi càng tốt)
    const errorPenalty = Math.min(stats.errors / 10, 0.5); // Tối đa trừ 50%
    
    // 3. Tính EXP score (dựa trên EXP tích lũy)
    // Max EXP cho 10 bài = 20+30+30+30+40+40+40+50+50+50 = 380
    const maxExpFor10Lessons = 380;
    const expScore = Math.min(stats.exp / maxExpFor10Lessons, 1); // 0-1
    
    // 4. Công thức đánh giá năng lực (0-100)
    // Weight: Quiz 40%, EXP 40%, Errors 20%
    const competencyScore = (quizSuccessRate * 0.4 + expScore * 0.4 - errorPenalty * 0.2) * 100;
    
    const level = getCompetencyLevel(competencyScore);
    
    // Lưu kết quả đánh giá
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
 * Xác định mức độ năng lực
 * Beginner: 0-40 (Mới bắt đầu)
 * Intermediate: 40-70 (Trung bình)
 * Advanced: 70-100 (Nâng cao)
 */
function getCompetencyLevel(score) {
    if (score < 40) return 'beginner';
    if (score < 70) return 'intermediate';
    return 'advanced';
}

/**
 * Hiển thị thông báo kết quả đánh giá
 */
function showCompetencyAlert(lang, level, score) {
    const levelNames = {
        beginner: '🌱 Cơ Bản',
        intermediate: '⭐ Trung Bình',
        advanced: '🚀 Nâng Cao'
    };
    
    const messages = {
        beginner: 'Bạn cần ôn lại các kiến thức cơ bản trước khi tiến bộ.',
        intermediate: 'Bạn đã nắm vững kiến thức cơ bản. Hãy tiếp tục luyện tập để cải thiện!',
        advanced: 'Bạn đã đạt trình độ cao! Hãy thử những thử thách nâng cao hơn.'
    };
    
    alert(`🎯 KẾT QUẢ ĐÁNH GIÁ\n\n` +
          `Ngôn ngữ: ${langNames[lang]}\n` +
          `Mức độ: ${levelNames[level]}\n` +
          `Điểm: ${Math.round(score)}/100\n\n` +
          `${messages[level]}`);
}

/**
 * Tạo bài tập thích ứng dựa trên mức độ năng lực
 * Mỗi level có độ khó tăng dần
 */
function generateAdaptiveQuests(lang, level, score) {
    // Định nghĩa bài tập cho mỗi ngôn ngữ ở các mức độ khác nhau
    const adaptiveQuests = defineAdaptiveQuests(lang);
    
    if (!currentUser.adaptiveQuests) currentUser.adaptiveQuests = {};
    if (!currentUser.adaptiveQuests[lang]) currentUser.adaptiveQuests[lang] = [];
    
    // Chọn quests phù hợp với level
    const selectedQuests = adaptiveQuests[level];
    
    // Shuffle quests
    const shuffledQuests = selectedQuests.sort(() => 0.5 - Math.random());
    
    // Thêm vào danh sách bài tập của người dùng (tối đa 5 bài/level)
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
 * Định nghĩa các bài tập thích ứng cho từng ngôn ngữ
 */
function defineAdaptiveQuests(lang) {
    const questsMap = {
        javascript: {
            beginner: [
                { 
                    title: "Quest 1: In bảng cửu chương 7", 
                    description: "Sử dụng vòng lặp để in bảng cửu chương 7 (7x1=7 ... 7x10=70)",
                    difficulty: 1,
                    expReward: 60,
                    checkLogic: (code) => code.includes('for') && code.includes('7') && code.includes('console.log')
                },
                { 
                    title: "Quest 2: Tìm số lớn nhất", 
                    description: "Tạo hàm tìm số lớn nhất trong mảng [10, 45, 23, 78, 34]",
                    difficulty: 1,
                    expReward: 60,
                    checkLogic: (code) => code.includes('function') || code.includes('=>') && code.includes('[') && code.includes('Math.max')
                },
                { 
                    title: "Quest 3: Đảo chuỗi", 
                    description: "Viết code đảo ngược chuỗi 'HELLO' thành 'OLLEH'",
                    difficulty: 1,
                    expReward: 60,
                    checkLogic: (code) => (code.includes('reverse') || code.includes('split')) && code.includes('HELLO')
                }
            ],
            intermediate: [
                { 
                    title: "Quest 4: Kiểm tra số nguyên tố", 
                    description: "Viết hàm kiểm tra xem một số có phải số nguyên tố không",
                    difficulty: 2,
                    expReward: 80,
                    checkLogic: (code) => code.includes('function') && code.includes('for') && (code.includes('%') || code.includes('modulo'))
                },
                { 
                    title: "Quest 5: Lọc dữ liệu", 
                    description: "Sử dụng filter() để lấy tất cả các số chẵn từ mảng",
                    difficulty: 2,
                    expReward: 80,
                    checkLogic: (code) => code.includes('filter') && code.includes('%')
                },
                { 
                    title: "Quest 6: Tạo máy tính ", 
                    description: "Tạo object calculator với các phương thức add, subtract, multiply, divide",
                    difficulty: 2,
                    expReward: 80,
                    checkLogic: (code) => code.includes('{') && code.includes('add') && code.includes('subtract')
                }
            ],
            advanced: [
                { 
                    title: "Quest 7: Xây dựng Closure", 
                    description: "Tạo hàm counter() sử dụng closure để lưu giữ state",
                    difficulty: 3,
                    expReward: 120,
                    checkLogic: (code) => code.includes('function') && code.includes('return') && code.includes('function')
                },
                { 
                    title: "Quest 8: Quy hoạch động", 
                    description: "Tính fibonacci thứ n sử dụng memoization (tối ưu hiệu suất)",
                    difficulty: 3,
                    expReward: 120,
                    checkLogic: (code) => (code.includes('fibonacci') || code.includes('fib')) && (code.includes('cache') || code.includes('memo'))
                },
                { 
                    title: "Quest 9: Async/Promise", 
                    description: "Viết hàm fetchData() sử dụng Promise hoặc async/await",
                    difficulty: 3,
                    expReward: 120,
                    checkLogic: (code) => (code.includes('Promise') || code.includes('async')) && (code.includes('fetch') || code.includes('then'))
                }
            ]
        },
        python: {
            beginner: [
                { 
                    title: "Quest 1: Tính tổng danh sách", 
                    description: "Tính tổng các phần tử trong danh sách [1, 2, 3, 4, 5]",
                    difficulty: 1,
                    expReward: 60,
                    checkLogic: (code) => code.includes('sum') || code.includes('for') && code.includes('[')
                },
                { 
                    title: "Quest 2: Kiểm tra palindrome", 
                    description: "Kiểm tra xem chuỗi 'racecar' có phải palindrome không",
                    difficulty: 1,
                    expReward: 60,
                    checkLogic: (code) => (code.includes('==') || code.includes('==')) && (code.includes('[') || code.includes('reverse') || code.includes('[::-1]'))
                },
                { 
                    title: "Quest 3: Nhân mảng", 
                    description: "Tạo list chứa bình phương của [1, 2, 3, 4, 5]",
                    difficulty: 1,
                    expReward: 60,
                    checkLogic: (code) => code.includes('[') && code.includes('**2') || code.includes('**2') || code.includes('pow')
                }
            ],
            intermediate: [
                { 
                    title: "Quest 4: Sắp xếp từ điển", 
                    description: "Sắp xếp danh sách từ theo thứ tự chữ cái",
                    difficulty: 2,
                    expReward: 80,
                    checkLogic: (code) => code.includes('sorted') || code.includes('sort')
                },
                { 
                    title: "Quest 5: Đếm tần suất", 
                    description: "Đếm tần suất xuất hiện của mỗi ký tự trong chuỗi",
                    difficulty: 2,
                    expReward: 80,
                    checkLogic: (code) => code.includes('for') && (code.includes('dict') || code.includes('{}') || code.includes('count'))
                },
                { 
                    title: "Quest 6: Tạo class", 
                    description: "Tạo lớp Student với các thuộc tính name, age, gpa",
                    difficulty: 2,
                    expReward: 80,
                    checkLogic: (code) => code.includes('class ') && code.includes('__init__')
                }
            ],
            advanced: [
                { 
                    title: "Quest 7: Generator", 
                    description: "Viết generator để tạo số Fibonacci",
                    difficulty: 3,
                    expReward: 120,
                    checkLogic: (code) => code.includes('yield') && (code.includes('fibonacci') || code.includes('fib'))
                },
                { 
                    title: "Quest 8: Decorator", 
                    description: "Tạo decorator @timer để đo thời gian thực hiện hàm",
                    difficulty: 3,
                    expReward: 120,
                    checkLogic: (code) => code.includes('def') && code.includes('wrapper') && code.includes('@')
                },
                { 
                    title: "Quest 9: Web Scraping", 
                    description: "Viết script scrape dữ liệu từ trang web đơn giản",
                    difficulty: 3,
                    expReward: 120,
                    checkLogic: (code) => (code.includes('requests') || code.includes('urllib')) && code.includes('get')
                }
            ]
        },
        cpp: {
            beginner: [
                { 
                    title: "Quest 1: Số hoàn hảo", 
                    description: "Tìm tất cả số hoàn hảo nhỏ hơn 1000 (ví dụ: 6, 28)",
                    difficulty: 1,
                    expReward: 60,
                    checkLogic: (code) => code.includes('for') && code.includes('cout')
                },
                { 
                    title: "Quest 2: Ma trận chuyển vị", 
                    description: "Tính chuyển vị của ma trận 3x3",
                    difficulty: 1,
                    expReward: 60,
                    checkLogic: (code) => code.includes('[') && code.includes('for') && code.includes('cout')
                },
                { 
                    title: "Quest 3: GCD & LCM", 
                    description: "Tính GCD và LCM của hai số",
                    difficulty: 1,
                    expReward: 60,
                    checkLogic: (code) => (code.includes('gcd') || code.includes('GCD')) && code.includes('function')
                }
            ],
            intermediate: [
                { 
                    title: "Quest 4: Quick Sort", 
                    description: "Cài đặt thuật toán QuickSort",
                    difficulty: 2,
                    expReward: 80,
                    checkLogic: (code) => code.includes('quicksort') || code.includes('partition')
                },
                { 
                    title: "Quest 5: Binary Search", 
                    description: "Tìm kiếm nhị phân trong mảng đã sắp xếp",
                    difficulty: 2,
                    expReward: 80,
                    checkLogic: (code) => code.includes('int mid') && code.includes('binary')
                },
                { 
                    title: "Quest 6: Linked List", 
                    description: "Tạo cấu trúc dữ liệu Linked List với insert, delete, display",
                    difficulty: 2,
                    expReward: 80,
                    checkLogic: (code) => code.includes('struct') && code.includes('next')
                }
            ],
            advanced: [
                { 
                    title: "Quest 7: BST (Binary Search Tree)", 
                    description: "Xây dựng và quản lý cây nhị phân tìm kiếm",
                    difficulty: 3,
                    expReward: 120,
                    checkLogic: (code) => code.includes('struct') && (code.includes('left') && code.includes('right'))
                },
                { 
                    title: "Quest 8: Graph DFS/BFS", 
                    description: "Cài đặt DFS và BFS cho đồ thị",
                    difficulty: 3,
                    expReward: 120,
                    checkLogic: (code) => (code.includes('DFS') || code.includes('BFS')) && code.includes('vector')
                },
                { 
                    title: "Quest 9: Dynamic Programming", 
                    description: "Giải bài toán Coin Change sử dụng DP",
                    difficulty: 3,
                    expReward: 120,
                    checkLogic: (code) => code.includes('dp[') && code.includes('for')
                }
            ]
        }
    };
    
    // Mặc định cho các ngôn ngữ khác
    if (!questsMap[lang]) {
        questsMap[lang] = questsMap.javascript; // Dùng JavaScript làm template
    }
    
    return questsMap[lang];
}

/**
 * Hiển thị notification bài tập thích ứng được mở khóa
 */
function showAdaptiveQuestsUnlocked(lang, level) {
    const levelNames = {
        beginner: '🌱 Cơ Bản',
        intermediate: '⭐ Trung Bình',
        advanced: '🚀 Nâng Cao'
    };
    
    alert(`🎁 BẠCH TẬP THÍCH ỨNG ĐÃ MỞ KHÓA!\n\n` +
          `Bạn có thể bắt đầu các quest ở mức độ ${levelNames[level]} ngay bây giờ!\n\n` +
          `Hoàn thành các quest để nhận EXP và cải thiện kỹ năng.`);
}

