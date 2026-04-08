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
        { id: "py2", title: "Bài 2: Khai báo Biến", theory: `<strong>Biến trong Python</strong><br/>Gán trực tiếp: age = 18. Python tự động nhận diện kiểu.`, hints: "Tạo biến, dùng print() để in.", examples: "age = 25\nprint(age)", task: "Tạo biến <code>age = 18</code> và in ra.", minExpRequired: 20, expReward: 30, checkLogic: (code) => code.includes('age') && code.includes('18') && code.includes('print(age)') || code.includes('print(age)') },
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
        { id: "cpp8", title: "Bài 8: Hàm (Function)", theory: `<strong>Hàm trong C++</strong><br/>int tênHàm(int a, int b) { return a + b; }`, hints: "Tạo hàm nhân 2 số, gọi và in.", examples: "int multiply(int a, int b) {\n  return a * b;\n}\nmain { cout << multiply(4, 5); }", task: "Tạo hàm <code>divide(int a, int b)</code>, gọi 20/4.", minExpRequired: 230, expReward: 50, checkLogic: (code) => code.includes('int') && code.includes('cout') },
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
        { id: "java10", title: "Bài 10: ArrayList (Danh sách động)", theory: `<strong>ArrayList - Danh sách linh hoạt</strong><br/>ArrayList<Integer> numbers = new ArrayList<>();`, hints: "Tạo ArrayList, thêm phần tử, duyệt.", examples: "ArrayList<Integer> nums = new ArrayList<>();\nnums.add(10);\nnums.add(20);\nfor (int n : nums) System.out.println(n);", task: "Tạo ArrayList, thêm 1, 2, 3, in kích thước.", minExpRequired: 330, expReward: 50, checkLogic: (code) => code.includes('ArrayList') && code.includes('add') && code.includes('System.out.println') }
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
        { id: "cs10", title: "Bài 10: List (Danh sách động)", theory: `<strong>List - Danh sách linh hoạt</strong><br/>List<int> numbers = new List<int>();`, hints: "Tạo List, thêm phần tử, duyệt.", examples: "List<int> nums = new List<int>();\nnums.Add(10);\nnums.Add(20);\nforeach (int n in nums) Console.WriteLine(n);", task: "Tạo List<int>, thêm 1, 2, 3, in kích thước.", minExpRequired: 330, expReward: 50, checkLogic: (code) => code.includes('List') && code.includes('Add') && code.includes('Console.WriteLine') }
    ]
};

// ==========================================
// 2. QUẢN LÝ BIẾN TOÀN CỤC
// ==========================================
let currentUser = null;
let currentLangWorkspace = null;
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

function checkAndInitStats() {
    if (!currentUser.stats) currentUser.stats = {};
    for (const lang in lessonsDB) {
        if (!currentUser.stats[lang]) {
            currentUser.stats[lang] = { exp: 0, completedLessons: [], errors: 0 };
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

    if (!name || !email || !password) return alert("Vui lòng điền đủ thông tin!");
    let users = JSON.parse(localStorage.getItem('code4students_users')) || {};
    if (users[email]) return alert("Email đã tồn tại!");

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
        checkAndInitStats();
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
             actionHTML = `<div style="display: flex; gap: 10px;"><button onclick="viewLanguageOverview('${lang}')" class="btn-outline" style="flex: 1;">Tổng Quan</button><button onclick="startLesson('${lang}', '${availableLesson.id}')" class="btn-primary" style="flex: 1;">Vào Học</button></div>`;
        } else {
             lessonTitleHTML = `<strong style="color: var(--success-color)">🎉 Đã hoàn thành mọi bài học!</strong>`;
             actionHTML = `<div style="display: flex; gap: 10px;"><button onclick="viewLanguageOverview('${lang}')" class="btn-outline" style="flex: 1;">Tổng Quan</button><button disabled class="btn-outline" style="flex: 1;">Chờ bài mới...</button></div>`;
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
            terminal.innerText = `✅ CHÍNH XÁC!\nBạn nhận được +${lesson.expReward} EXP.`;
            
            if (!currentUser.stats[currentLangWorkspace].completedLessons.includes(lesson.id)) {
                currentUser.stats[currentLangWorkspace].completedLessons.push(lesson.id);
                currentUser.stats[currentLangWorkspace].exp += lesson.expReward;
                saveUserProgress();
            }
            setTimeout(() => { showView('view-dashboard'); updateDashboard(); }, 2000);
            
        } else {
            terminal.style.color = "#FF5555";
            terminal.innerText = "❌ Code chưa chính xác! Bạn đã bị ghi nhận 1 lỗi.";
            
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
        card.style.cssText = 'background: white; padding: 15px; border-radius: 8px; border: 1px solid var(--border-color); text-align: center;';
        card.innerText = useCase;
        useCasesContainer.appendChild(card);
    });
    
    const lessons = lessonsDB[lang];
    const firstAvailableLesson = lessons[0];
    document.getElementById('btn-start-learning').onclick = () => startLesson(lang, firstAvailableLesson.id);
    
    showView('view-language-overview');
}
