const quizData = {
  html: [
    {
      question: "HTML qisqartmasi nimani anglatadi?",
      options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
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
      question: "HTML-da sahifa ichidagi havolani (anchor) yaratish uchun qaysi atribut ishlatiladi?",
      options: ["href='#id'", "src='#id'", "link='#id'", "target='#id'"],
      correctAnswer: 0,
    },
    {
      question: "HTML5-da video joylash uchun qaysi element ishlatiladi?",
      options: ["<movie>", "<media>", "<video>", "<play>"],
      correctAnswer: 2,
    },
    {
      question: "HTML-da jadval qatorini yaratish uchun qaysi element ishlatiladi?",
      options: ["<tr>", "<td>", "<th>", "<table-row>"],
      correctAnswer: 0,
    },
    {
      question: "HTML-da rasm joylash uchun qaysi element ishlatiladi?",
      options: ["<picture>", "<image>", "<img>", "<src>"],
      correctAnswer: 2,
    },
    {
      question: "HTML-da matnni yangi qatorga o'tkazish uchun qaysi element ishlatiladi?",
      options: ["<newline>", "<break>", "<br>", "<nl>"],
      correctAnswer: 2,
    },
    {
      question: "HTML-da formani qaysi element bilan yaratamiz?",
      options: ["<input>", "<form>", "<formfield>", "<fieldset>"],
      correctAnswer: 1,
    },
    {
      question: "HTML-da foydalanuvchidan matn kiritishni so'rash uchun qaysi element ishlatiladi?",
      options: ["<textfield>", "<input type='text'>", "<textinput>", "<text>"],
      correctAnswer: 1,
    },
    {
      question: "HTML-da semantik ravishda asosiy kontentni belgilash uchun qaysi element ishlatiladi?",
      options: ["<content>", "<main>", "<body>", "<section>"],
      correctAnswer: 1,
    },
    {
      question: "HTML-da sahifa navigatsiyasini belgilash uchun qaysi element ishlatiladi?",
      options: ["<menu>", "<links>", "<nav>", "<navigation>"],
      correctAnswer: 2,
    },
    {
      question: "HTML-da sahifa pastki qismini (footer) belgilash uchun qaysi element ishlatiladi?",
      options: ["<bottom>", "<footer>", "<end>", "<footnote>"],
      correctAnswer: 1,
    },
    {
      question: "HTML-da ro'yxat elementi yaratish uchun qaysi element ishlatiladi?",
      options: ["<li>", "<list>", "<item>", "<element>"],
      correctAnswer: 0,
    },
    {
      question: "HTML-da sahifa sarlavhasini (title) qayerda belgilaysiz?",
      options: ["<body> ichida", "<header> ichida", "<head> ichida", "<meta> ichida"],
      correctAnswer: 2,
    },
    {
      question: "HTML-da izohlarni qanday yozasiz?",
      options: ["// Bu izoh", "/* Bu izoh */", "<!-- Bu izoh -->", "# Bu izoh"],
      correctAnswer: 2,
    },
    {
      question: "HTML-da tanlash ro'yxatini (dropdown) yaratish uchun qaysi element ishlatiladi?",
      options: ["<dropdown>", "<select>", "<option>", "<list>"],
      correctAnswer: 1,
    },
    {
      question: "HTML-da matnni kursiv (italic) qilish uchun qaysi element ishlatiladi?",
      options: ["<italic>", "<i>", "<em>", "<kursiv>"],
      correctAnswer: 1,
    },
    {
      question: "HTML-da sahifa miqyosini (scale) mobil qurilmalarga moslash uchun qaysi meta teg ishlatiladi?",
      options: ["<meta name='scale' content='mobile'>", "<meta name='viewport' content='width=device-width, initial-scale=1.0'>", "<meta name='mobile' content='true'>", "<meta name='device-width' content='100%'>"],
      correctAnswer: 1,
    },
    {
      question: "HTML5-da audio fayllarni o'ynash uchun qaysi element ishlatiladi?",
      options: ["<sound>", "<mp3>", "<music>", "<audio>"],
      correctAnswer: 3,
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
      question: "CSS-da 'box-sizing: border-box' xususiyati nima qiladi?",
      options: ["Elementning chegarasini ko'rsatadi", "Elementning padding va border o'lchamlarini width va height ichiga qo'shadi", "Elementning marjinini o'zgartiradi", "Elementning chegarasini yo'q qiladi"],
      correctAnswer: 1,
    },
    {
      question: "CSS-da 'z-index' xususiyati nima uchun ishlatiladi?",
      options: ["Elementning kengligi va balandligini o'zgartirish uchun", "Elementning joylashuvini o'zgartirish uchun", "Elementlarning bir-birining ustiga chiqish tartibini belgilash uchun", "Elementning shaffofligini o'zgartirish uchun"],
      correctAnswer: 2,
    },
    {
      question: "CSS-da 'display: flex' xususiyati nima qiladi?",
      options: ["Elementni ko'rinmas qiladi", "Elementni blok elementiga aylantiradi", "Elementni flexbox konteyneriga aylantiradi", "Elementni inline elementiga aylantiradi"],
      correctAnswer: 2,
    },
    {
      question: "CSS-da 'position: absolute' xususiyati nima qiladi?",
      options: ["Elementni hujjat oqimidan chiqaradi va eng yaqin joylashgan ota-elementga nisbatan joylashtiriladi", "Elementni hujjat oqimidan chiqaradi va brauzer oynasiga nisbatan joylashtiriladi", "Elementni hujjat oqimida qoldiradi, lekin joylashuvini o'zgartiradi", "Elementni markazga joylashtiriladi"],
      correctAnswer: 0,
    },
    {
      question: "CSS-da 'media query' nima uchun ishlatiladi?",
      options: ["Turli qurilmalar va ekran o'lchamlari uchun turli uslublarni qo'llash uchun", "Rasmlarni yuklash uchun", "Audio va video fayllarni o'ynash uchun", "Ma'lumotlar bazasiga so'rovlar yuborish uchun"],
      correctAnswer: 0,
    },
    {
      question: "CSS-da 'transition' xususiyati nima uchun ishlatiladi?",
      options: ["Elementni ko'rinmas qilish uchun", "Elementning joylashuvini o'zgartirish uchun", "Elementning bir holatdan boshqa holatga o'tishini animatsiya qilish uchun", "Elementning rangini o'zgartirish uchun"],
      correctAnswer: 2,
    },
    {
      question: "CSS-da 'overflow: hidden' xususiyati nima qiladi?",
      options: ["Elementni ko'rinmas qiladi", "Elementning tashqarisiga chiqib ketgan kontentni yashiradi", "Elementning ichidagi barcha kontentni yashiradi", "Elementning chegarasini yashiradi"],
      correctAnswer: 1,
    },
    {
      question: "CSS-da 'float' xususiyati nima uchun ishlatiladi?",
      options: ["Elementni suzuvchi qilish uchun", "Elementni chapga yoki o'ngga surish va matn oqimini uning atrofida o'tkazish uchun", "Elementni markazga joylashtiriladi", "Elementni vertikal ravishda joylashtiriladi"],
      correctAnswer: 1,
    },
    {
      question: "CSS-da 'pseudo-class' nima?",
      options: ["Elementning maxsus holati uchun uslub qo'shish imkonini beruvchi selektor", "Yangi CSS sinfi", "JavaScript bilan yaratilgan sinf", "HTML-da mavjud bo'lmagan element"],
      correctAnswer: 0,
    },
    {
      question: "CSS-da 'opacity' xususiyati nima qiladi?",
      options: ["Elementning rangini o'zgartiradi", "Elementning shaffofligini o'zgartiradi", "Elementning o'lchamini o'zgartiradi", "Elementning chegarasini o'zgartiradi"],
      correctAnswer: 1,
    },
    {
      question: "CSS-da 'flexbox' va 'grid' o'rtasidagi asosiy farq nima?",
      options: ["Flexbox bir o'lchovli, grid esa ikki o'lchovli tartibda ishlaydi", "Flexbox faqat gorizontal, grid esa faqat vertikal tartibda ishlaydi", "Flexbox yangi, grid esa eski texnologiya", "Flexbox faqat matn uchun, grid esa faqat rasmlar uchun"],
      correctAnswer: 0,
    },
    {
      question: "CSS-da 'transform' xususiyati nima uchun ishlatiladi?",
      options: ["Elementning rangini o'zgartirish uchun", "Elementning joylashuvini, o'lchamini, burilishini va boshqa vizual xususiyatlarini o'zgartirish uchun", "Elementning shriftini o'zgartirish uchun", "Elementning chegarasini o'zgartirish uchun"],
      correctAnswer: 1,
    },
    {
      question: "CSS-da 'specificity' (o'ziga xoslik) nima?",
      options: ["CSS faylining hajmi", "Qaysi CSS qoidasi elementga qo'llanishi kerakligini aniqlash uchun ishlatilgan hisoblash", "CSS-ning yangi versiyasi", "CSS-da animatsiyalar yaratish usuli"],
      correctAnswer: 1,
    },
    {
      question: "CSS-da 'rem' o'lchov birligi nimaga asoslangan?",
      options: ["Brauzer oynasining o'lchamiga", "Ota-element shriftining o'lchamiga", "Root element (html) shriftining o'lchamiga", "Ekran o'lchamiga"],
      correctAnswer: 2,
    },
    {
      question: "CSS-da 'box-shadow' xususiyati nima uchun ishlatiladi?",
      options: ["Elementga soya qo'shish uchun", "Elementning chegarasini o'zgartirish uchun", "Elementning orqa fonini o'zgartirish uchun", "Elementning o'lchamini o'zgartirish uchun"],
      correctAnswer: 0,
    },
    {
      question: "CSS-da 'nth-child' pseudo-class nima uchun ishlatiladi?",
      options: ["Birinchi bolani tanlash uchun", "Oxirgi bolani tanlash uchun", "Belgilangan tartib raqamiga ega bolani tanlash uchun", "Barcha bolalarni tanlash uchun"],
      correctAnswer: 2,
    },
    {
      question: "CSS-da 'calc()' funksiyasi nima uchun ishlatiladi?",
      options: ["JavaScript kodini bajarish uchun", "Dinamik hisob-kitoblar asosida CSS qiymatlarini hisoblash uchun", "Ranglarni hisoblash uchun", "Animatsiya tezligini hisoblash uchun"],
      correctAnswer: 1,
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
      options: ["function myFunction()", "function:myFunction()", "function = myFunction()", "function => myFunction()"],
      correctAnswer: 0,
    },
    {
      question: "JavaScript-da 'let' va 'var' o'rtasidagi asosiy farq nima?",
      options: ["let global miqyosda, var esa blok miqyosida", "var global miqyosda, let esa blok miqyosida", "let faqat raqamlar uchun, var esa barcha turlar uchun", "Ular o'rtasida farq yo'q"],
      correctAnswer: 1,
    },
    {
      question: "JavaScript-da 'arrow function' qanday yoziladi?",
      options: ["function() => {}", "=> function() {}", "() => {}", "function => ()"],
      correctAnswer: 2,
    },
    {
      question: "JavaScript-da 'Promise' nima uchun ishlatiladi?",
      options: ["Asinxron operatsiyalarni boshqarish uchun", "Xatoliklarni qayd qilish uchun", "DOM elementlarini yaratish uchun", "Ma'lumotlar bazasiga ulanish uchun"],
      correctAnswer: 0,
    },
    {
      question: "JavaScript-da 'this' kalit so'zi nimani anglatadi?",
      options: ["Joriy funksiyani", "Joriy obyektni", "Joriy faylni", "Joriy o'zgaruvchini"],
      correctAnswer: 1,
    },
    {
      question: "JavaScript-da 'localStorage' nima uchun ishlatiladi?",
      options: ["Serverda ma'lumotlarni saqlash uchun", "Brauzerda ma'lumotlarni saqlash uchun", "Fayllarni saqlash uchun", "Ma'lumotlar bazasiga ulanish uchun"],
      correctAnswer: 1,
    },
    {
      question: "JavaScript-da 'map()' metodi nima qiladi?",
      options: ["Massivni saralaydi", "Massivni filtrlaydi", "Massivning har bir elementi uchun funksiyani bajaradi va yangi massiv qaytaradi", "Massivni teskari tartibda joylashtiradi"],
      correctAnswer: 2,
    },
    {
      question: "JavaScript-da 'async/await' nima uchun ishlatiladi?",
      options: ["Asinxron kodlarni sinxron ko'rinishda yozish uchun", "Funksiyalarni tezroq bajarish uchun", "DOM elementlarini yaratish uchun", "Ma'lumotlar bazasiga ulanish uchun"],
      correctAnswer: 0,
    },
    {
      question: "JavaScript-da 'destructuring' nima?",
      options: ["Obyektlarni o'chirish usuli", "Massiv yoki obyekt qiymatlarini alohida o'zgaruvchilarga ajratish usuli", "Kodni optimallash usuli", "Xotiradan foydalanishni kamaytirish usuli"],
      correctAnswer: 1,
    },
    {
      question: "JavaScript-da 'closure' nima?",
      options: ["Funksiya ichida e'lon qilingan funksiya", "Funksiya o'zining tashqi o'zgaruvchilariga kirish imkoniyatiga ega bo'lgan holat", "Funksiyani yopish usuli", "Obyektni yopish usuli"],
      correctAnswer: 1,
    },
    {
      question: "JavaScript-da 'event bubbling' nima?",
      options: ["Hodisa eng ichki elementdan tashqi elementlarga ko'tarilishi", "Hodisa eng tashqi elementdan ichki elementlarga tushishi", "Hodisani bekor qilish usuli", "Yangi hodisa yaratish usuli"],
      correctAnswer: 0,
    },
    {
      question: "JavaScript-da 'hoisting' nima?",
      options: ["O'zgaruvchilar va funksiyalar e'lonlarini kod bajarilishidan oldin yuqoriga ko'tarish", "Elementlarni sahifada yuqoriga ko'tarish", "Kodni optimallash usuli", "Xotiradan foydalanishni kamaytirish usuli"],
      correctAnswer: 0,
    },
    {
      question: "JavaScript-da 'prototype' nima?",
      options: ["Yangi obyekt yaratish usuli", "Obyektlar o'rtasida meros olish mexanizmi", "Funksiya turi", "Ma'lumotlar turi"],
      correctAnswer: 1,
    },
    {
      question: "JavaScript-da 'strict mode' nima uchun ishlatiladi?",
      options: ["Kodni tezroq bajarish uchun", "Xavfsizroq kod yozish uchun, xatolarni oldini olish uchun", "Kodni qisqartirish uchun", "Xotiradan foydalanishni kamaytirish uchun"],
      correctAnswer: 1,
    },
    {
      question: "JavaScript-da 'fetch()' metodi nima uchun ishlatiladi?",
      options: ["DOM elementlarini tanlash uchun", "Serverdan ma'lumotlarni olish uchun", "Fayllarni yuklash uchun", "Ma'lumotlar bazasiga ulanish uchun"],
      correctAnswer: 1,
    },
    {
      question: "JavaScript-da 'spread' operatori (...) nima qiladi?",
      options: ["Massiv yoki obyektni alohida elementlarga yoyadi", "Massivni saralaydi", "Massivni filtrlaydi", "Massivni teskari tartibda joylashtiradi"],
      correctAnswer: 0,
    },
    {
      question: "JavaScript-da 'callback' funksiya nima?",
      options: ["Boshqa funksiyaga argument sifatida uzatiladigan funksiya", "O'z-o'zini chaqiradigan funksiya", "Avtomatik ravishda chaqiriladigan funksiya", "Xatoliklarni qayd qilish funksiyasi"],
      correctAnswer: 0,
    },
    {
      question: "JavaScript-da 'JSON' nima?",
      options: ["JavaScript Object Notation - ma'lumotlarni saqlash va uzatish uchun format", "JavaScript Online Network - onlayn JavaScript kutubxonasi", "JavaScript Original Notation - JavaScript-ning original sintaksisi", "JavaScript Object Network - obyektlar tarmog'i"],
      correctAnswer: 0,
    },
    {
      question: "JavaScript-da 'setTimeout()' funksiyasi nima qiladi?",
      options: ["Funksiyani darhol bajaradi", "Funksiyani belgilangan vaqtdan keyin bir marta bajaradi", "Funksiyani belgilangan vaqt oralig'ida qayta-qayta bajaradi", "Funksiyani to'xtatadi"],
      correctAnswer: 1,
    },
  ],
  react: [
    {
      question: "React nima?",
      options: ["Server tomonidagi dasturlash tili", "Foydalanuvchi interfeysi yaratish uchun JavaScript kutubxonasi", "Ma'lumotlar bazasi boshqaruv tizimi", "CSS freymvorki"],
      correctAnswer: 1,
    },
    {
      question: "React-da 'state' nima?",
      options: ["Komponentning xususiy ma'lumotlari", "Global o'zgaruvchilar to'plami", "CSS uslublari to'plami", "Serverdan olingan ma'lumotlar"],
      correctAnswer: 0,
    },
    {
      question: "React-da 'JSX' nima?",
      options: ["JavaScript Extension - JavaScript-ning kengaytmasi bo'lib, HTML-ga o'xshash sintaksis", "JavaScript XML - XML fayllarini JavaScript-da qayta ishlash usuli", "JavaScript Extra - JavaScript-ning qo'shimcha funksiyalari", "Java Syntax Extension - Java sintaksisining JavaScript-ga kengaytmasi"],
      correctAnswer: 0,
    },
    {
      question: "React-da 'useEffect' hook-i nima uchun ishlatiladi?",
      options: ["Komponent holatini o'zgartirish uchun", "Komponentning hayot sikli hodisalarini boshqarish uchun", "Formalarni tekshirish uchun", "Animatsiyalarni yaratish uchun"],
      correctAnswer: 1,
    },
    {
      question: "React-da 'props' va 'state' o'rtasidagi asosiy farq nima?",
      options: ["props o'zgarmas, state esa o'zgaruvchan", "state o'zgarmas, props esa o'zgaruvchan", "props faqat funksional komponentlarda, state esa faqat klass komponentlarida ishlatiladi", "props faqat raqamlar uchun, state esa barcha turlar uchun"],
      correctAnswer: 0,
    },
    {
      question: "React-da 'controlled component' nima?",
      options: ["Faqat bir marta ko'rsatiladigan komponent", "React tomonidan boshqariladigan forma elementi", "Faqat adminlar ko'ra oladigan komponent", "Avtomatik yangilanadigan komponent"],
      correctAnswer: 1,
    },
    {
      question: "React-da 'key' atributi nima uchun ishlatiladi?",
      options: ["Komponentni yashirish uchun", "Ro'yxat elementlarini noyob identifikatsiyalash uchun", "Ma'lumotlarni shifrlash uchun", "CSS uslublarini qo'llash uchun"],
      correctAnswer: 1,
    },
    {
      question: "React-da 'useContext' hook-i nima uchun ishlatiladi?",
      options: ["Komponentlar orasida ma'lumotlarni global almashish uchun", "Serverga so'rovlar yuborish uchun", "Komponentlarni animatsiya qilish uchun", "Formalarni tekshirish uchun"],
      correctAnswer: 0,
    },
    {
      question: "React-da 'virtual DOM' nima?",
      options: ["Haqiqiy DOM-ning xotiradagi nusxasi", "Brauzerning maxsus rejimi", "JavaScript-ni o'chirib qo'yish usuli", "Serverda ishlaydigan DOM"],
      correctAnswer: 0,
    },
    {
      question: "React-da 'useReducer' hook-i nima uchun ishlatiladi?",
      options: ["Komponent o'lchamini kamaytirish uchun", "Murakkab holat mantiqini boshqarish uchun", "Komponentni tezroq qilish uchun", "API so'rovlarini yuborish uchun"],
      correctAnswer: 1,
    },
    {
      question: "React-da 'fragment' nima?",
      options: ["Ma'lumotlar bazasining bir qismi", "DOM-ga qo'shimcha element qo'shmasdan bir nechta elementlarni guruhlash usuli", "Katta komponentning bir qismi", "JavaScript kodi parchasi"],
      correctAnswer: 1,
    },
    {
      question: "React-da 'useMemo' hook-i nima uchun ishlatiladi?",
      options: ["Xotiradan foydalanishni kamaytirish uchun", "Qimmat hisob-kitoblarni keshlashtirish uchun", "Xatoliklarni qayd qilish uchun", "Komponentlar orasida xabarlar yuborish uchun"],
      correctAnswer: 1,
    },
    {
      question: "React-da 'prop drilling' muammosi nima?",
      options: ["Juda ko'p props yuborish", "Props-ni chuqur joylashgan komponentlarga uzatish uchun oraliq komponentlardan o'tkazish", "Noto'g'ri props turlari", "Props-ni o'zgartirish"],
      correctAnswer: 1,
    },
    {
      question: "React-da 'lazy loading' nima?",
      options: ["Komponentlarni faqat kerak bo'lganda yuklash", "Rasmlarni sekin yuklash", "Komponentlarni kechiktirib ko'rsatish", "Serverdan ma'lumotlarni asta-sekin yuklash"],
      correctAnswer: 0,
    },
    {
      question: "React-da 'useCallback' hook-i nima uchun ishlatiladi?",
      options: ["Funksiyalarni keshlashtirish uchun", "Komponentlarni keshlashtirish uchun", "Ma'lumotlarni keshlashtirish uchun", "API so'rovlarini keshlashtirish uchun"],
      correctAnswer: 0,
    },
    {
      question: "React-da 'higher-order component (HOC)' nima?",
      options: ["Boshqa komponentlarni qabul qilib, yangi komponent qaytaradigan funksiya", "Sahifaning yuqori qismida joylashgan komponent", "Eng katta komponent", "Eng ko'p ishlatilgan komponent"],
      correctAnswer: 0,
    },
    {
      question: "React-da 'useRef' hook-i nima uchun ishlatiladi?",
      options: ["DOM elementlariga to'g'ridan-to'g'ri kirish uchun", "Komponent holatini o'zgartirish uchun", "Komponentlar orasida ma'lumotlarni almashish uchun", "API so'rovlarini yuborish uchun"],
      correctAnswer: 0,
    },
    {
      question: "React-da 'StrictMode' nima uchun ishlatiladi?",
      options: ["Xavfsizlikni oshirish uchun", "Potentsial muammolarni aniqlash uchun qo'shimcha tekshiruvlarni yoqish uchun", "Kodni tezroq bajarish uchun", "Xotiradan foydalanishni kamaytirish uchun"],
      correctAnswer: 1,
    },
    {
      question: "React-da 'conditional rendering' nima?",
      options: ["Shartlarga asoslangan holda turli komponentlarni ko'rsatish", "Komponentlarni shartli ravishda uslublash", "Komponentlarni shartli ravishda yaratish", "Komponentlarni shartli ravishda o'chirish"],
      correctAnswer: 0,
    },
    {
      question: "React-da 'Redux' nima uchun ishlatiladi?",
      options: ["Ilovaning global holatini boshqarish uchun", "Komponentlarni uslublash uchun", "API so'rovlarini yuborish uchun", "Animatsiyalarni yaratish uchun"],
      correctAnswer: 0,
    },
  ],
  typescript: [
    {
      question: "TypeScript nima?",
      options: ["JavaScript-ning statik tipli kengaytmasi", "Yangi dasturlash tili", "JavaScript-ning server tomoni", "JavaScript-ning o'rnini bosuvchi til"],
      correctAnswer: 0,
    },
    {
      question: "TypeScript-da o'zgaruvchini qanday e'lon qilasiz?",
      options: ["var name: string = 'John'", "string name = 'John'", "name: string = 'John'", "let name as string = 'John'"],
      correctAnswer: 0,
    },
    {
      question: "TypeScript-da interfeys nima?",
      options: ["Obyekt tuzilishini ta'riflash uchun tip", "Grafik foydalanuvchi interfeysi", "Serverga ulanish uchun protokol", "Funksiyalar to'plami"],
      correctAnswer: 0,
    },
    {
      question: "TypeScript-da 'generics' nima?",
      options: ["Turli xil tiplar bilan ishlaydigan komponentlarni yaratish imkoniyati", "Umumiy funksiyalar kutubxonasi", "Avtomatik kod generatsiyasi", "Tiplarni avtomatik aniqlash"],
      correctAnswer: 0,
    },
    {
      question: "TypeScript-da 'enum' nima?",
      options: ["Nomlangan konstantalar to'plami", "Xatolik turi", "Funksiya turi", "Massiv turi"],
      correctAnswer: 0,
    },
    {
      question: "TypeScript-da 'type assertion' nima?",
      options: ["Kompilyatorga o'zgaruvchi tipini aytish usuli", "Xatoliklarni tekshirish", "Tiplarni avtomatik o'zgartirish", "Tiplarni tekshirish"],
      correctAnswer: 0,
    },
    {
      question: "TypeScript-da 'tuple' nima?",
      options: ["Belgilangan uzunlik va tipdagi elementlar to'plami", "Obyekt turi", "Funksiya turi", "Xatolik turi"],
      correctAnswer: 0,
    },
    {
      question: "TypeScript-da 'namespace' nima?",
      options: ["Kod bloklarini guruhlash usuli", "Fayl tizimi", "Xotira boshqaruvi", "Serverga ulanish usuli"],
      correctAnswer: 0,
    },
    {
      question: "TypeScript-da 'readonly' kalit so'zi nima qiladi?",
      options: ["O'zgaruvchini faqat o'qish uchun qiladi", "O'zgaruvchini yashiradi", "O'zgaruvchini global qiladi", "O'zgaruvchini avtomatik e'lon qiladi"],
      correctAnswer: 0,
    },
    {
      question: "TypeScript-da 'never' tipi nima?",
      options: ["Hech qachon qaytmaydigan funksiyalar uchun tip", "Bo'sh massiv uchun tip", "Null qiymatlar uchun tip", "Xatoliklar uchun tip"],
      correctAnswer: 0,
    },
    {
      question: "TypeScript-da 'keyof' operatori nima qiladi?",
      options: ["Obyekt kalitlarini tip sifatida oladi", "Obyektni ochadi", "Obyektni yopadi", "Obyektni nusxalaydi"],
      correctAnswer: 0,
    },
    {
      question: "TypeScript-da 'interface' va 'type' o'rtasidagi asosiy farq nima?",
      options: ["Interfeys kengaytirilishi mumkin, tip esa yo'q", "Tip kengaytirilishi mumkin, interfeys esa yo'q", "Interfeys faqat obyektlar uchun, tip esa har qanday ma'lumot uchun", "Ular bir xil, farqi yo'q"],
      correctAnswer: 0,
    },
    {
      question: "TypeScript-da 'union' tipi qanday yoziladi?",
      options: ["string | number", "string && number", "string + number", "string || number"],
      correctAnswer: 0,
    },
    {
      question: "TypeScript-da 'any' tipi nima?",
      options: ["Har qanday tipni qabul qilishi mumkin bo'lgan tip", "Faqat raqamlarni qabul qiladigan tip", "Faqat satrlarni qabul qiladigan tip", "Faqat massivlarni qabul qiladigan tip"],
      correctAnswer: 0,
    },
    {
      question: "TypeScript-da 'decorator' nima?",
      options: ["Sinf, metod yoki xususiyatga meta-ma'lumotlar qo'shish usuli", "Dizayn pattern", "Kod formatlash usuli", "Xatoliklarni qayd qilish usuli"],
      correctAnswer: 0,
    },
    {
      question: "TypeScript-da 'unknown' tipi nima?",
      options: ["any tipiga o'xshash, lekin xavfsizroq", "Faqat noma'lum tiplarni qabul qiladigan tip", "Faqat null va undefined qiymatlarni qabul qiladigan tip", "Faqat obyektlarni qabul qiladigan tip"],
      correctAnswer: 0,
    },
    {
      question: "TypeScript-da 'as' kalit so'zi nima uchun ishlatiladi?",
      options: ["Tipni o'zgartirish uchun", "Tipni tekshirish uchun", "Tipni e'lon qilish uchun", "Tipni o'chirish uchun"],
      correctAnswer: 0,
    },
    {
      question: "TypeScript-da 'extends' kalit so'zi nima uchun ishlatiladi?",
      options: ["Interfeys yoki sinfni kengaytirish uchun", "Tipni kengaytirish uchun", "Fayl hajmini kengaytirish uchun", "Funksiyani kengaytirish uchun"],
      correctAnswer: 0,
    },
    {
      question: "TypeScript-da 'implements' kalit so'zi nima uchun ishlatiladi?",
      options: ["Sinf interfeys talablarini bajarishi kerakligini ko'rsatish uchun", "Funksiyani amalga oshirish uchun", "Tipni amalga oshirish uchun", "Modulni amalga oshirish uchun"],
      correctAnswer: 0,
    },
    {
      question: "TypeScript-da 'Partial<T>' utility tipi nima qiladi?",
      options: ["T tipidagi barcha xususiyatlarni ixtiyoriy qiladi", "T tipidagi barcha xususiyatlarni majburiy qiladi", "T tipidagi barcha xususiyatlarni o'qish uchun qiladi", "T tipidagi barcha xususiyatlarni yashiradi"],
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
      options: ["Loyiha va uning bog'liqliklarini ta'riflash uchun", "JavaScript kodini saqlash uchun", "Ma'lumotlar bazasi konfiguratsiyasi uchun", "Foydalanuvchi ma'lumotlarini saqlash uchun"],
      correctAnswer: 0,
    },
    {
      question: "Node.js-da 'event emitter' nima?",
      options: ["Hodisalarni e'lon qilish va ularga quloq solish uchun pattern", "Xatoliklarni qayd qilish tizimi", "Animatsiyalarni boshqarish tizimi", "Ma'lumotlar bazasi bilan bog'lanish usuli"],
      correctAnswer: 0,
    },
    {
      question: "Node.js-da 'middleware' nima?",
      options: ["So'rov va javob o'rtasida ishlaydigan funksiya", "Ma'lumotlar bazasi bilan bog'lanish usuli", "Fayllarni saqlash tizimi", "Xatoliklarni qayd qilish tizimi"],
      correctAnswer: 0,
    },
    {
      question: "Node.js-da 'Express' nima?",
      options: ["Veb-ilovalar uchun freymvork", "Ma'lumotlar bazasi", "Testlash tizimi", "Xatoliklarni qayd qilish tizimi"],
      correctAnswer: 0,
    },
    {
      question: "Node.js-da 'callback hell' nima?",
      options: ["Ko'p darajali callback funksiyalar tufayli murakkablashgan kod", "Xotira sizib chiqishi", "Serverning ishdan chiqishi", "Ma'lumotlar bazasi xatosi"],
      correctAnswer: 0,
    },
    {
      question: "Node.js-da 'Promise' nima?",
      options: ["Asinxron operatsiyalar natijasini ifodalovchi obyekt", "Ma'lumotlar bazasi so'rovi", "Xatoliklarni qayd qilish tizimi", "Foydalanuvchi interfeysi elementi"],
      correctAnswer: 0,
    },
    {
      question: "Node.js-da 'async/await' nima?",
      options: ["Promise-lar bilan ishlashni osonlashtiruvchi sintaksis", "Ma'lumotlar bazasi bilan bog'lanish usuli", "Fayllarni saqlash tizimi", "Xatoliklarni qayd qilish tizimi"],
      correctAnswer: 0,
    },
    {
      question: "Node.js-da 'cluster' moduli nima uchun ishlatiladi?",
      options: ["Bir nechta protsessorlardan foydalanish uchun", "Ma'lumotlar bazasini klasterlash uchun", "Fayllarni guruhlash uchun", "Xatoliklarni qayd qilish uchun"],
      correctAnswer: 0,
    },
    {
      question: "Node.js-da 'Buffer' nima?",
      options: ["Xotiraning bir qismi bo'lib, ikkilik ma'lumotlar bilan ishlash uchun", "Ma'lumotlar bazasi", "Xatoliklarni qayd qilish tizimi", "Foydalanuvchi interfeysi elementi"],
      correctAnswer: 0,
    },
    {
      question: "Node.js-da 'stream' nima?",
      options: ["Ma'lumotlarni kichik qismlarga bo'lib uzatish usuli", "Video uzatish protokoli", "Ma'lumotlar bazasi turi", "Foydalanuvchi interfeysi elementi"],
      correctAnswer: 0,
    },
    {
      question: "Node.js-da 'process' obyekti nima uchun ishlatiladi?",
      options: ["Joriy Node.js jarayoni haqida ma'lumot olish va uni boshqarish uchun", "Kompyuter protsessori haqida ma'lumot olish uchun", "Fayllarni qayta ishlash uchun", "Ma'lumotlar bazasi jarayonlarini boshqarish uchun"],
      correctAnswer: 0,
    },
    {
      question: "Node.js-da 'child_process' moduli nima uchun ishlatiladi?",
      options: ["Yangi jarayonlarni yaratish uchun", "Farzand elementlarni yaratish uchun", "Fayllarni nusxalash uchun", "Xotira boshqaruvi uchun"],
      correctAnswer: 0,
    },
    {
      question: "Node.js-da 'path' moduli nima uchun ishlatiladi?",
      options: ["Fayl yo'llarini boshqarish uchun", "Tarmoq yo'llarini boshqarish uchun", "URL yo'llarini boshqarish uchun", "Ma'lumotlar bazasi yo'llarini boshqarish uchun"],
      correctAnswer: 0,
    },
    {
      question: "Node.js-da 'crypto' moduli nima uchun ishlatiladi?",
      options: ["Kriptografik funksiyalarni ta'minlash uchun", "Kriptovalyutalar bilan ishlash uchun", "Ma'lumotlarni zichlash uchun", "Xavfsiz ulanishlarni yaratish uchun"],
      correctAnswer: 0,
    },
    {
      question: "Node.js-da 'dotenv' paketi nima uchun ishlatiladi?",
      options: ["Muhit o'zgaruvchilarini .env faylidan yuklash uchun", "Nuqtali fayllarni yaratish uchun", "Grafik interfeyslarni yaratish uchun", "Ma'lumotlar bazasi sxemalarini yaratish uchun"],
      correctAnswer: 0,
    },
  ],
  expressjs: [
    {
      question: "Express.js nima?",
      options: ["Node.js uchun veb-ilovalar freymvorki", "Frontend JavaScript kutubxonasi", "Ma'lumotlar bazasi boshqaruv tizimi", "JavaScript kompilyatori"],
      correctAnswer: 0,
    },
    {
      question: "Express.js-da yangi ilova yaratish uchun qaysi kod ishlatiladi?",
      options: ["const app = express()", "const app = new Express()", "const app = require('express')", "const app = Express.create()"],
      correctAnswer: 0,
    },
    {
      question: "Express.js-da 'middleware' funksiyasi qanday parametrlarni qabul qiladi?",
      options: ["request, response, next", "req, res", "request, result, next", "req, res, error"],
      correctAnswer: 0,
    },
    {
      question: "Express.js-da statik fayllarni (CSS, JavaScript, rasmlar) uzatish uchun qaysi middleware ishlatiladi?",
      options: ["express.static()", "express.public()", "express.files()", "express.assets()"],
      correctAnswer: 0,
    },
    {
      question: "Express.js-da POST so'rovidan ma'lumotlarni olish uchun qaysi middleware ishlatiladi?",
      options: ["express.json() va express.urlencoded()", "express.body()", "express.post()", "express.data()"],
      correctAnswer: 0,
    },
    {
      question: "Express.js-da marshrutni (route) qanday belgilaysiz?",
      options: ["app.get('/path', callback)", "app.route('/path', callback)", "app.path('/path', callback)", "app.url('/path', callback)"],
      correctAnswer: 0,
    },
    {
      question: "Express.js-da URL parametrlarini qanday olasiz?",
      options: ["req.params", "req.parameters", "req.query", "req.url.params"],
      correctAnswer: 0,
    },
    {
      question: "Express.js-da so'rov tanasidagi (body) ma'lumotlarni qanday olasiz?",
      options: ["req.body", "req.data", "req.content", "req.payload"],
      correctAnswer: 0,
    },
    {
      question: "Express.js-da so'rov URL-idagi query parametrlarini qanday olasiz?",
      options: ["req.query", "req.params", "req.queryParams", "req.urlParams"],
      correctAnswer: 0,
    },
    {
      question: "Express.js-da HTTP javob (response) yuborish uchun qaysi metod ishlatiladi?",
      options: ["res.send()", "res.return()", "res.output()", "res.display()"],
      correctAnswer: 0,
    },
    {
      question: "Express.js-da JSON formatidagi javob yuborish uchun qaysi metod ishlatiladi?",
      options: ["res.json()", "res.sendJSON()", "res.returnJSON()", "res.outputJSON()"],
      correctAnswer: 0,
    },
    {
      question: "Express.js-da faylni javob sifatida yuborish uchun qaysi metod ishlatiladi?",
      options: ["res.sendFile()", "res.file()", "res.download()", "res.attachment()"],
      correctAnswer: 0,
    },
    {
      question: "Express.js-da foydalanuvchini boshqa URL-ga yo'naltirish (redirect) uchun qaysi metod ishlatiladi?",
      options: ["res.redirect()", "res.forward()", "res.sendTo()", "res.location()"],
      correctAnswer: 0,
    },
    {
      question: "Express.js-da marshrutlarni (routes) guruhlash uchun qaysi obyekt ishlatiladi?",
      options: ["express.Router()", "express.Routes()", "express.Group()", "express.Collection()"],
      correctAnswer: 0,
    },
    {
      question: "Express.js-da xatoliklarni qayta ishlash uchun middleware funksiyasi nechta parametr qabul qiladi?",
      options: ["4 (error, request, response, next)", "3 (request, response, next)", "2 (error, next)", "5 (error, request, response, next, app)"],
      correctAnswer: 0,
    },
    {
      question: "Express.js-da 'app.use()' metodi nima uchun ishlatiladi?",
      options: ["Middleware funksiyalarini ro'yxatdan o'tkazish uchun", "Ilovani ishga tushirish uchun", "Marshrutlarni belgilash uchun", "Ma'lumotlar bazasiga ulanish uchun"],
      correctAnswer: 0,
    },
    {
      question: "Express.js-da 'next()' funksiyasi nima uchun ishlatiladi?",
      options: ["Keyingi middleware funksiyasiga o'tish uchun", "Keyingi marshrutga o'tish uchun", "So'rovni tugatish uchun", "Xatolikni qaytarish uchun"],
      correctAnswer: 0,
    },
    {
      question: "Express.js-da 'cookie-parser' middleware nima uchun ishlatiladi?",
      options: ["Cookie-larni tahlil qilish uchun", "Cookie-larni yaratish uchun", "Cookie-larni o'chirish uchun", "Cookie-larni shifrlash uchun"],
      correctAnswer: 0,
    },
    {
      question: "Express.js-da 'express-session' middleware nima uchun ishlatiladi?",
      options: ["Sessiyalarni boshqarish uchun", "Foydalanuvchi autentifikatsiyasi uchun", "Ma'lumotlar bazasiga ulanish uchun", "Xavfsizlikni ta'minlash uchun"],
      correctAnswer: 0,
    },
    {
      question: "Express.js-da 'cors' middleware nima uchun ishlatiladi?",
      options: ["Cross-Origin Resource Sharing (CORS) ni yoqish uchun", "Xavfsizlikni ta'minlash uchun", "So'rovlarni keshlashtirish uchun", "Ma'lumotlarni zichlash uchun"],
      correctAnswer: 0,
    },
  ],
  python: [
    {
      question: "Python-da o'zgaruvchini qanday e'lon qilasiz?",
      options: ["var name = 'John'", "name = 'John'", "string name = 'John'", "declare name = 'John'"],
      correctAnswer: 1,
    },
    {
      question: "Python-da izohlarni qanday yozasiz?",
      options: ["// Bu izoh", "/* Bu izoh */", "# Bu izoh", "<!-- Bu izoh -->"],
      correctAnswer: 2,
    },
    {
      question: "Python-da ro'yxat (list) yaratish uchun qaysi sintaksis ishlatiladi?",
      options: ["list = [1, 2, 3]", "list = (1, 2, 3)", "list = {1, 2, 3}", "list = <1, 2, 3>"],
      correctAnswer: 0,
    },
    {
      question: "Python-da lug'at (dictionary) yaratish uchun qaysi sintaksis ishlatiladi?",
      options: ["dict = {1: 'bir', 2: 'ikki'}", "dict = [1 => 'bir', 2 => 'ikki']", "dict = (1: 'bir', 2: 'ikki')", "dict = <1: 'bir', 2: 'ikki'>"],
      correctAnswer: 0,
    },
    {
      question: "Python-da funksiyani qanday yaratasiz?",
      options: ["function myFunc(): ...", "def myFunc(): ...", "func myFunc(): ...", "create myFunc(): ..."],
      correctAnswer: 1,
    },
    {
      question: "Python-da shart operatorini qanday yozasiz?",
      options: ["if x > 5: ...", "if (x > 5) { ... }", "if x > 5 then ...", "when x > 5: ..."],
      correctAnswer: 0,
    },
    {
      question: "Python-da for sikli qanday yoziladi?",
      options: ["for i in range(5): ...", "for (i = 0; i < 5; i++) { ... }", "for i = 0 to 5: ...", "foreach (i in range(5)) { ... }"],
      correctAnswer: 0,
    },
    {
      question: "Python-da while sikli qanday yoziladi?",
      options: ["while (x > 0) { ... }", "while x > 0: ...", "do { ... } while (x > 0);", "loop while x > 0: ..."],
      correctAnswer: 1,
    },
    {
      question: "Python-da sinf (class) qanday yaratiladi?",
      options: ["class MyClass: ...", "create class MyClass { ... }", "struct MyClass { ... }", "def class MyClass(): ..."],
      correctAnswer: 0,
    },
    {
      question: "Python-da obyekt (object) qanday yaratiladi?",
      options: ["obj = new MyClass()", "obj = MyClass()", "obj = create MyClass()", "obj = instance MyClass()"],
      correctAnswer: 1,
    },
    {
      question: "Python-da ro'yxatga element qo'shish uchun qaysi metod ishlatiladi?",
      options: ["list.add(item)", "list.append(item)", "list.insert(item)", "list.push(item)"],
      correctAnswer: 1,
    },
    {
      question: "Python-da ro'yxatdan element o'chirish uchun qaysi metod ishlatiladi?",
      options: ["list.remove(item)", "list.delete(item)", "list.pop(index)", "list.erase(item)"],
      correctAnswer: 0,
    },
    {
      question: "Python-da satrni (string) bo'lish uchun qaysi metod ishlatiladi?",
      options: ["str.split(delimiter)", "str.divide(delimiter)", "str.cut(delimiter)", "str.break(delimiter)"],
      correctAnswer: 0,
    },
    {
      question: "Python-da faylni o'qish uchun qaysi funksiya ishlatiladi?",
      options: ["open(filename, 'r')", "read(filename)", "file.load(filename)", "import(filename)"],
      correctAnswer: 0,
    },
    {
      question: "Python-da xatoliklarni qayta ishlash uchun qaysi konstruksiya ishlatiladi?",
      options: ["try/except", "try/catch", "if/else", "check/handle"],
      correctAnswer: 0,
    },
    {
      question: "Python-da 'pip' nima uchun ishlatiladi?",
      options: ["Paketlarni o'rnatish uchun", "Kodni formatlash uchun", "Kodni kompilyatsiya qilish uchun", "Testlarni bajarish uchun"],
      correctAnswer: 0,
    },
    {
      question: "Python-da 'lambda' funksiyasi nima?",
      options: ["Anonim funksiya", "Maxsus matematik funksiya", "Yuqori tartibli funksiya", "Rekursiv funksiya"],
      correctAnswer: 0,
    },
    {
      question: "Python-da 'list comprehension' nima?",
      options: ["Ro'yxatlarni yaratishning qisqa usuli", "Ro'yxatlarni tushunish usuli", "Ro'yxatlarni saralash usuli", "Ro'yxatlarni birlashtirish usuli"],
      correctAnswer: 0,
    },
    {
      question: "Python-da 'self' parametri nima uchun ishlatiladi?",
      options: ["Sinf metodlarida joriy obyektga murojaat qilish uchun", "O'z-o'zini chaqiruvchi funksiyalar uchun", "Global o'zgaruvchilarga murojaat qilish uchun", "Xususiy o'zgaruvchilarni belgilash uchun"],
      correctAnswer: 0,
    },
  ],
};

export default quizData;