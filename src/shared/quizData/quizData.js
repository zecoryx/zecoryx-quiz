const quizData = {
    html: [
      {
        question: "HTML qisqartmasi nimani anglatadi?",
        options: [
          "Hyper Text Markup Language",
          "High Tech Modern Language",
          "Hyperlink and Text Markup Language",
          "Home Tool Markup Language",
        ],
        correctAnswer: 0,
      },
      {
        question: "Qaysi HTML elementi ichki uslublar jadvalini belgilash uchun ishlatiladi?",
        options: ["<css>", "<script>", "<style>", "<link>"],
        correctAnswer: 2,
      },
      {
        question: "Qaysi HTML atributi inline uslublarni belgilash uchun ishlatiladi?",
        options: ["class", "styles", "font", "style"],
        correctAnswer: 3,
      },
      {
        question: "Qaysi HTML elementi hujjat yoki bo'lim uchun sarlavhani belgilash uchun ishlatiladi?",
        options: ["<head>", "<header>", "<top>", "<heading>"],
        correctAnswer: 1,
      },
      {
        question: "HTML-da qaysi atribut kiritish maydoni to'ldirilishi kerakligini belgilaydi?",
        options: ["validate", "placeholder", "required", "important"],
        correctAnswer: 2,
      },
      {
        question: "Qaysi HTML elementi giperhavolani yaratish uchun ishlatiladi?",
        options: ["<a>", "<link>", "<href>", "<hyperlink>"],
        correctAnswer: 0,
      },
      {
        question: "Qaysi HTML elementi hujjat sarlavhasini belgilaydi?",
        options: ["<meta>", "<head>", "<title>", "<header>"],
        correctAnswer: 2,
      },
      {
        question: "Qaysi HTML elementi tartibsiz ro'yxat yaratish uchun ishlatiladi?",
        options: ["<ol>", "<list>", "<ul>", "<dl>"],
        correctAnswer: 2,
      },
      {
        question: "Qaysi HTML elementi muhim matnni belgilash uchun ishlatiladi?",
        options: ["<important>", "<strong>", "<b>", "<em>"],
        correctAnswer: 1,
      },
      {
        question: "Qaysi HTML elementi tashqi kontentni joylash uchun ishlatiladi?",
        options: ["<iframe>", "<frame>", "<section>", "<embed>"],
        correctAnswer: 0,
      },
      {
        question: "HTML5 da qaysi element audio fayllarni o'ynash uchun ishlatiladi?",
        options: ["<audio>", "<sound>", "<mp3>", "<music>"],
        correctAnswer: 0,
      },
      {
        question: "HTML-da jadval yaratish uchun qaysi element ishlatiladi?",
        options: ["<table>", "<grid>", "<tab>", "<spreadsheet>"],
        correctAnswer: 0,
      },
      {
        question: "HTML-da formani yuborish tugmasini yaratish uchun qaysi atribut ishlatiladi?",
        options: ["type='send'", "type='submit'", "method='post'", "action='submit'"],
        correctAnswer: 1,
      },
      {
        question: "HTML-da sahifa ichidagi havolani (anchor) yaratish uchun qaysi atribut ishlatiladi?",
        options: ["href='#id'", "src='#id'", "link='#id'", "target='#id'"],
        correctAnswer: 0,
      },
      {
        question: "HTML5-da video joylash uchun qaysi element ishlatiladi?",
        options: ["<movie>", "<media>", "<video>", "<play>"],
        correctAnswer: 2,
      },
    ],
    css: [
      {
        question: "CSS qisqartmasi nimani anglatadi?",
        options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        correctAnswer: 1,
      },
      {
        question: "Fon rangini o'zgartirish uchun qaysi xususiyat ishlatiladi?",
        options: ["color", "bgcolor", "background-color", "background"],
        correctAnswer: 2,
      },
      {
        question: "'demo' identifikatorli elementni qanday tanlaysiz?",
        options: ["#demo", ".demo", "*demo", "demo"],
        correctAnswer: 0,
      },
      {
        question: "Qaysi CSS xususiyati matn o'lchamini boshqaradi?",
        options: ["text-size", "font-style", "font-size", "text-style"],
        correctAnswer: 2,
      },
      {
        question: "Barcha <p> elementlarini qalin qilish uchun to'g'ri CSS sintaksisi qanday?",
        options: [
          "p {text-size: bold;}",
          "p {font-weight: bold;}",
          "<p style='font-size: bold;'>",
          "p.all {font-weight: bold;}",
        ],
        correctAnswer: 1,
      },
      {
        question: "Qanday qilib 'Qattiq qizil chegara' kabi chegarani ko'rsatasiz?",
        options: [
          "border: solid red;",
          "border-color: red solid;",
          "border-color: red; border-style: solid;",
          "border: red solid;",
        ],
        correctAnswer: 0,
      },
      {
        question: "Elementning shriftini o'zgartirish uchun qaysi xususiyat ishlatiladi?",
        options: ["font-style", "font-family", "font-weight", "font-size"],
        correctAnswer: 1,
      },
      {
        question: "Matndagi har bir so'zni bosh harf bilan boshlashni qanday qilasiz?",
        options: [
          "text-transform: capitalize;",
          "text-style: capital;",
          "transform: capitalize;",
          "CSS bilan buni qila olmaysiz",
        ],
        correctAnswer: 0,
      },
      {
        question: "Elementning chap chekkasini o'zgartirish uchun qaysi xususiyat ishlatiladi?",
        options: ["padding-left", "margin-left", "indent", "left-margin"],
        correctAnswer: 1,
      },
      {
        question: "'test' sinf nomiga ega elementlarni qanday tanlaysiz?",
        options: ["#test", "*test", "test", ".test"],
        correctAnswer: 3,
      },
      {
        question: "CSS-da elementni markazlashtirish uchun qaysi xususiyat ishlatiladi?",
        options: ["align: center;", "text-align: center;", "margin: auto;", "position: center;"],
        correctAnswer: 2,
      },
      {
        question: "Flexbox-da elementlarni asosiy o'q bo'ylab markazlashtirish uchun qaysi xususiyat ishlatiladi?",
        options: ["align-items: center;", "justify-content: center;", "flex-align: center;", "flex-justify: center;"],
        correctAnswer: 1,
      },
      {
        question: "CSS-da soyani qo'shish uchun qaysi xususiyat ishlatiladi?",
        options: ["shadow-effect", "box-shadow", "element-shadow", "drop-shadow"],
        correctAnswer: 1,
      },
      {
        question: "CSS-da animatsiyalarni yaratish uchun qaysi xususiyat ishlatiladi?",
        options: ["motion", "transform", "animate", "animation"],
        correctAnswer: 3,
      },
      {
        question: "CSS Grid-da ustunlar o'lchamini belgilash uchun qaysi xususiyat ishlatiladi?",
        options: ["grid-template-columns", "grid-columns", "grid-column-size", "column-template"],
        correctAnswer: 0,
      },
    ],
    javascript: [
      {
        question: "JavaScript-ni qaysi HTML elementiga joylashtiramiz?",
        options: ["<javascript>", "<scripting>", "<script>", "<js>"],
        correctAnswer: 2,
      },
      {
        question: "JavaScript-da funksiyani qanday yaratasiz?",
        options: [
          "function myFunction()",
          "function:myFunction()",
          "function = myFunction()",
          "function => myFunction()",
        ],
        correctAnswer: 0,
      },
      {
        question: "'myFunction' nomli funksiyani qanday chaqirasiz?",
        options: ["call myFunction()", "myFunction()", "call function myFunction()", "Call.myFunction()"],
        correctAnswer: 1,
      },
      {
        question: "JavaScript-da IF operatorini qanday yozasiz?",
        options: ["if i = 5 then", "if i == 5 then", "if (i == 5)", "if i = 5"],
        correctAnswer: 2,
      },
      {
        question: "'i' 5 ga teng bo'lmasa, ba'zi kodni bajarish uchun IF operatorini qanday yozasiz?",
        options: ["if (i != 5)", "if i <> 5", "if i =! 5 then", "if (i <> 5)"],
        correctAnswer: 0,
      },
      {
        question: "WHILE sikli qanday boshlanadi?",
        options: ["while (i <= 10)", "while i = 1 to 10", "while (i <= 10; i++)", "while i <= 10"],
        correctAnswer: 0,
      },
      {
        question: "FOR sikli qanday boshlanadi?",
        options: ["for i = 1 to 5", "for (i = 0; i <= 5)", "for (i = 0; i <= 5; i++)", "for (i <= 5; i++)"],
        correctAnswer: 2,
      },
      {
        question: "JavaScript-da izohni qanday qo'shasiz?",
        options: ["<!--Bu izoh-->", "//Bu izoh", "'Bu izoh", "/* Bu izoh */"],
        correctAnswer: 1,
      },
      {
        question: "JavaScript massivini yozishning to'g'ri usuli qanday?",
        options: [
          "var colors = 'red', 'green', 'blue'",
          "var colors = (1:'red', 2:'green', 3:'blue')",
          "var colors = ['red', 'green', 'blue']",
          "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
        ],
        correctAnswer: 2,
      },
      {
        question: "7.25 sonini eng yaqin butun songa qanday yaxlitlaysiz?",
        options: ["Math.round(7.25)", "round(7.25)", "Math.rnd(7.25)", "rnd(7.25)"],
        correctAnswer: 0,
      },
      {
        question: "JavaScript-da obyektni qanday yaratasiz?",
        options: ["var person = Object();", "var person = {};", "var person = new Person();", "var person = [];"],
        correctAnswer: 1,
      },
      {
        question: "JavaScript-da massivning uzunligini qanday olasiz?",
        options: ["array.size()", "array.length", "array.count()", "array.dimension"],
        correctAnswer: 1,
      },
      {
        question: "JavaScript-da DOM elementini ID bo'yicha qanday olasiz?",
        options: [
          "document.getElementById('id')",
          "document.getElement('id')",
          "document.querySelector('#id')",
          "document.findElement('id')",
        ],
        correctAnswer: 0,
      },
      {
        question: "JavaScript-da hodisani (event) qanday qo'shasiz?",
        options: [
          "element.addEventListener('click', function)",
          "element.onClick = function",
          "element.event('click', function)",
          "element.listenTo('click', function)",
        ],
        correctAnswer: 0,
      },
      {
        question: "JavaScript-da JSON ma'lumotlarini qanday tahlil qilasiz?",
        options: ["JSON.parse(data)", "data.toJSON()", "JSON.stringify(data)", "JSON.convert(data)"],
        correctAnswer: 0,
      },
    ],
    react: [
      {
        question: "React nima?",
        options: [
          "Server tomonidagi dasturlash tili",
          "Foydalanuvchi interfeysi yaratish uchun JavaScript kutubxonasi",
          "Ma'lumotlar bazasi boshqaruv tizimi",
          "CSS freymvorki",
        ],
        correctAnswer: 1,
      },
      {
        question: "React-da 'state' nima?",
        options: [
          "Komponentning xususiy ma'lumotlari",
          "Global o'zgaruvchilar to'plami",
          "CSS uslublari to'plami",
          "Serverdan olingan ma'lumotlar",
        ],
        correctAnswer: 0,
      },
      {
        question: "React-da 'props' nima?",
        options: [
          "Komponentning ichki o'zgaruvchilari",
          "Ota-komponentdan bola-komponentga uzatiladigan ma'lumotlar",
          "Serverga so'rovlar yuborish usuli",
          "CSS xususiyatlari",
        ],
        correctAnswer: 1,
      },
      {
        question: "React-da 'hooks' nima?",
        options: [
          "Funksional komponentlarda holatni boshqarish imkonini beruvchi funksiyalar",
          "React-ni boshqa kutubxonalar bilan bog'lash usuli",
          "Komponentlar orasidagi aloqa kanallari",
          "Xatoliklarni bartaraf etish vositalari",
        ],
        correctAnswer: 0,
      },
      {
        question: "React-da 'useEffect' hook-i nima uchun ishlatiladi?",
        options: [
          "Komponent holatini o'zgartirish uchun",
          "Komponentning hayot sikli hodisalarini boshqarish uchun",
          "Formalarni tekshirish uchun",
          "Animatsiyalarni yaratish uchun",
        ],
        correctAnswer: 1,
      },
      {
        question: "React-da 'virtual DOM' nima?",
        options: [
          "Haqiqiy DOM-ning xotiradagi nusxasi",
          "Brauzerning maxsus rejimi",
          "JavaScript-ni o'chirib qo'yish usuli",
          "Serverda ishlaydigan DOM",
        ],
        correctAnswer: 0,
      },
      {
        question: "React-da komponentni qanday yaratish mumkin?",
        options: [
          "createComponent() funksiyasidan foydalanish",
          "Funksiya yoki klass yordamida",
          "Faqat HTML yozish orqali",
          "Faqat new Component() konstruktoridan foydalanish",
        ],
        correctAnswer: 1,
      },
      {
        question: "React-da 'key' atributi nima uchun ishlatiladi?",
        options: [
          "Komponentni yashirish uchun",
          "Ro'yxat elementlarini noyob identifikatsiyalash uchun",
          "Ma'lumotlarni shifrlash uchun",
          "CSS uslublarini qo'llash uchun",
        ],
        correctAnswer: 1,
      },
      {
        question: "React-da 'context API' nima uchun ishlatiladi?",
        options: [
          "Komponentlar orasida ma'lumotlarni global almashish uchun",
          "Serverga so'rovlar yuborish uchun",
          "Komponentlarni animatsiya qilish uchun",
          "Formalarni tekshirish uchun",
        ],
        correctAnswer: 0,
      },
      {
        question: "React-da 'controlled component' nima?",
        options: [
          "Faqat bir marta ko'rsatiladigan komponent",
          "React tomonidan boshqariladigan forma elementi",
          "Faqat adminlar ko'ra oladigan komponent",
          "Avtomatik yangilanadigan komponent",
        ],
        correctAnswer: 1,
      },
      {
        question: "React-da 'fragment' nima?",
        options: [
          "Ma'lumotlar bazasining bir qismi",
          "DOM-ga qo'shimcha element qo'shmasdan bir nechta elementlarni guruhlash usuli",
          "Katta komponentning bir qismi",
          "JavaScript kodi parchasi",
        ],
        correctAnswer: 1,
      },
      {
        question: "React-da 'memo' nima uchun ishlatiladi?",
        options: [
          "Xotiradan foydalanishni kamaytirish uchun",
          "Komponentni qayta renderingdan saqlash uchun",
          "Xatolarni qayd qilish uchun",
          "Komponentlar orasida xabarlar yuborish uchun",
        ],
        correctAnswer: 1,
      },
      {
        question: "React-da 'useReducer' hook-i nima uchun ishlatiladi?",
        options: [
          "Komponent o'lchamini kamaytirish uchun",
          "Murakkab holat mantiqini boshqarish uchun",
          "Komponentni tezroq qilish uchun",
          "API so'rovlarini yuborish uchun",
        ],
        correctAnswer: 1,
      },
      {
        question: "React-da 'prop drilling' muammosi nima?",
        options: [
          "Juda ko'p props yuborish",
          "Props-ni chuqur joylashgan komponentlarga uzatish uchun oraliq komponentlardan o'tkazish",
          "Noto'g'ri props turlari",
          "Props-ni o'zgartirish",
        ],
        correctAnswer: 1,
      },
      {
        question: "React-da 'lazy loading' nima?",
        options: [
          "Komponentlarni faqat kerak bo'lganda yuklash",
          "Rasmlarni sekin yuklash",
          "Komponentlarni kechiktirib ko'rsatish",
          "Serverdan ma'lumotlarni asta-sekin yuklash",
        ],
        correctAnswer: 0,
      },
    ],
    typescript: [
      {
        question: "TypeScript nima?",
        options: [
          "JavaScript-ning statik tipli kengaytmasi",
          "Yangi dasturlash tili",
          "JavaScript-ning server tomoni",
          "JavaScript-ning o'rnini bosuvchi til",
        ],
        correctAnswer: 0,
      },
      {
        question: "TypeScript-da o'zgaruvchini qanday e'lon qilasiz?",
        options: [
          "var name: string = 'John'",
          "string name = 'John'",
          "name: string = 'John'",
          "let name as string = 'John'",
        ],
        correctAnswer: 0,
      },
      {
        question: "TypeScript-da interfeys nima?",
        options: [
          "Obyekt tuzilishini ta'riflash uchun tip",
          "Grafik foydalanuvchi interfeysi",
          "Serverga ulanish uchun protokol",
          "Funksiyalar to'plami",
        ],
        correctAnswer: 0,
      },
      {
        question: "TypeScript-da 'any' tipi nima?",
        options: [
          "Har qanday tipni qabul qilishi mumkin bo'lgan tip",
          "Faqat raqamlarni qabul qiladigan tip",
          "Faqat satrlarni qabul qiladigan tip",
          "Faqat massivlarni qabul qiladigan tip",
        ],
        correctAnswer: 0,
      },
      {
        question: "TypeScript-da 'enum' nima?",
        options: ["Nomlangan konstantalar to'plami", "Xatolik turi", "Funksiya turi", "Massiv turi"],
        correctAnswer: 0,
      },
      {
        question: "TypeScript-da 'generics' nima?",
        options: [
          "Turli xil tiplar bilan ishlaydigan komponentlarni yaratish imkoniyati",
          "Umumiy funksiyalar kutubxonasi",
          "Avtomatik kod generatsiyasi",
          "Tiplarni avtomatik aniqlash",
        ],
        correctAnswer: 0,
      },
      {
        question: "TypeScript-da 'union' tipi qanday yoziladi?",
        options: ["string | number", "string && number", "string + number", "string || number"],
        correctAnswer: 0,
      },
      {
        question: "TypeScript-da 'type assertion' nima?",
        options: [
          "Kompilyatorga o'zgaruvchi tipini aytish usuli",
          "Xatoliklarni tekshirish",
          "Tiplarni avtomatik o'zgartirish",
          "Tiplarni tekshirish",
        ],
        correctAnswer: 0,
      },
      {
        question: "TypeScript-da 'readonly' kalit so'zi nima qiladi?",
        options: [
          "O'zgaruvchini faqat o'qish uchun qiladi",
          "O'zgaruvchini yashiradi",
          "O'zgaruvchini global qiladi",
          "O'zgaruvchini avtomatik e'lon qiladi",
        ],
        correctAnswer: 0,
      },
      {
        question: "TypeScript-da 'interface' va 'type' o'rtasidagi asosiy farq nima?",
        options: [
          "Interfeys kengaytirilishi mumkin, tip esa yo'q",
          "Tip kengaytirilishi mumkin, interfeys esa yo'q",
          "Interfeys faqat obyektlar uchun, tip esa har qanday ma'lumot uchun",
          "Ular bir xil, farqi yo'q",
        ],
        correctAnswer: 0,
      },
      {
        question: "TypeScript-da 'namespace' nima?",
        options: ["Kod bloklarini guruhlash usuli", "Fayl tizimi", "Xotira boshqaruvi", "Serverga ulanish usuli"],
        correctAnswer: 0,
      },
      {
        question: "TypeScript-da 'decorator' nima?",
        options: [
          "Sinf, metod yoki xususiyatga meta-ma'lumotlar qo'shish usuli",
          "Dizayn pattern",
          "Kod formatlash usuli",
          "Xatoliklarni qayd qilish usuli",
        ],
        correctAnswer: 0,
      },
      {
        question: "TypeScript-da 'tuple' nima?",
        options: ["Belgilangan uzunlik va tipdagi elementlar to'plami", "Obyekt turi", "Funksiya turi", "Xatolik turi"],
        correctAnswer: 0,
      },
      {
        question: "TypeScript-da 'never' tipi nima?",
        options: [
          "Hech qachon qaytmaydigan funksiyalar uchun tip",
          "Bo'sh massiv uchun tip",
          "Null qiymatlar uchun tip",
          "Xatoliklar uchun tip",
        ],
        correctAnswer: 0,
      },
      {
        question: "TypeScript-da 'keyof' operatori nima qiladi?",
        options: ["Obyekt kalitlarini tip sifatida oladi", "Obyektni ochadi", "Obyektni yopadi", "Obyektni nusxalaydi"],
        correctAnswer: 0,
      },
    ],
    nodejs: [
      {
        question: "Node.js nima?",
        options: ["JavaScript runtime muhiti", "Dasturlash tili", "Veb-brauzer", "Ma'lumotlar bazasi"],
        correctAnswer: 0,
      },
      {
        question: "Node.js-da modul import qilish uchun qaysi funksiya ishlatiladi?",
        options: ["require()", "import()", "include()", "attach()"],
        correctAnswer: 0,
      },
      {
        question: "Node.js-da fayl tizimi bilan ishlash uchun qaysi modul ishlatiladi?",
        options: ["fs", "file", "filesystem", "fileio"],
        correctAnswer: 0,
      },
      {
        question: "Node.js-da HTTP server yaratish uchun qaysi modul ishlatiladi?",
        options: ["http", "server", "web", "net"],
        correctAnswer: 0,
      },
      {
        question: "Node.js-da 'npm' nima?",
        options: ["Node Package Manager", "Node Programming Module", "Node Process Manager", "Node Project Manager"],
        correctAnswer: 0,
      },
      {
        question: "Node.js-da 'package.json' fayli nima uchun ishlatiladi?",
        options: [
          "Loyiha va uning bog'liqliklarini ta'riflash uchun",
          "JavaScript kodini saqlash uchun",
          "Ma'lumotlar bazasi konfiguratsiyasi uchun",
          "Foydalanuvchi ma'lumotlarini saqlash uchun",
        ],
        correctAnswer: 0,
      },
      {
        question: "Node.js-da 'event emitter' nima?",
        options: [
          "Hodisalarni e'lon qilish va ularga quloq solish uchun pattern",
          "Xatoliklarni qayd qilish tizimi",
          "Animatsiyalarni boshqarish tizimi",
          "Ma'lumotlar bazasi bilan bog'lanish usuli",
        ],
        correctAnswer: 0,
      },
      {
        question: "Node.js-da 'middleware' nima?",
        options: [
          "So'rov va javob o'rtasida ishlaydigan funksiya",
          "Ma'lumotlar bazasi bilan bog'lanish usuli",
          "Fayllarni saqlash tizimi",
          "Xatoliklarni qayd qilish tizimi",
        ],
        correctAnswer: 0,
      },
      {
        question: "Node.js-da 'Express' nima?",
        options: [
          "Veb-ilovalar uchun freymvork",
          "Ma'lumotlar bazasi",
          "Testlash tizimi",
          "Xatoliklarni qayd qilish tizimi",
        ],
        correctAnswer: 0,
      },
      {
        question: "Node.js-da 'callback hell' nima?",
        options: [
          "Ko'p darajali callback funksiyalar tufayli murakkablashgan kod",
          "Xotira sizib chiqishi",
          "Serverning ishdan chiqishi",
          "Ma'lumotlar bazasi xatosi",
        ],
        correctAnswer: 0,
      },
      {
        question: "Node.js-da 'Promise' nima?",
        options: [
          "Asinxron operatsiyalar natijasini ifodalovchi obyekt",
          "Ma'lumotlar bazasi so'rovi",
          "Xatoliklarni qayd qilish tizimi",
          "Foydalanuvchi interfeysi elementi",
        ],
        correctAnswer: 0,
      },
      {
        question: "Node.js-da 'async/await' nima?",
        options: [
          "Promise-lar bilan ishlashni osonlashtiruvchi sintaksis",
          "Ma'lumotlar bazasi bilan bog'lanish usuli",
          "Fayllarni saqlash tizimi",
          "Xatoliklarni qayd qilish tizimi",
        ],
        correctAnswer: 0,
      },
      {
        question: "Node.js-da 'cluster' moduli nima uchun ishlatiladi?",
        options: [
          "Bir nechta protsessorlardan foydalanish uchun",
          "Ma'lumotlar bazasini klasterlash uchun",
          "Fayllarni guruhlash uchun",
          "Xatoliklarni qayd qilish uchun",
        ],
        correctAnswer: 0,
      },
      {
        question: "Node.js-da 'Buffer' nima?",
        options: [
          "Xotiraning bir qismi bo'lib, ikkilik ma'lumotlar bilan ishlash uchun",
          "Ma'lumotlar bazasi",
          "Xatoliklarni qayd qilish tizimi",
          "Foydalanuvchi interfeysi elementi",
        ],
        correctAnswer: 0,
      },
      {
        question: "Node.js-da 'stream' nima?",
        options: [
          "Ma'lumotlarni kichik qismlarga bo'lib uzatish usuli",
          "Video uzatish protokoli",
          "Ma'lumotlar bazasi turi",
          "Foydalanuvchi interfeysi elementi",
        ],
        correctAnswer: 0,
      },
    ],
  }
  
  export default quizData