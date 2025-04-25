# 🧮 BMI კალკულატორი (Body Mass Index Calculator)

ეს არის მოდულური JavaScript აპლიკაცია, რომელიც ითვლის სხეულის მასის ინდექსს (BMI) მომხმარებლის მიერ შეყვანილი სიმაღლისა და წონის მიხედვით. აპლიკაცია შექმნილია ES6 სტანდარტების გამოყენებით და იყენებს ერთეულების გარდაქმნას, კატეგორიზაციას და მომხმარებლის მონაცემების ანალიზს.

---

## 📌 მიზანი

- მომხმარებლის BMI-ს გამოთვლა
- სიმაღლისა და წონის გარდაქმნა იმპერიულიდან მეტრულ სისტემაში
- BMI კატეგორიის განსაზღვრა (Underweight, Normal, Overweight, Obese)
- მომხმარებლის ასაკისა და სქესის გათვალისწინება კლასიფიკაციისას

---

## 📁 პროექტის სტრუქტურა

bmi-calculator/
├── index.js
├── modules/
│   ├── bmiCalculator.js
│   ├── unitConverter.js
│   └── categoryClassifier.js
└── README.md


---

## ⚙️ ინსტრუქცია გამოყენებისთვის


```bash
1. ✅ გააქტიურე პროექტის საქაღალდე:

git clone https://github.com/შენი-username/bmi-calculator.git
cd bmi-calculator
✅ გაუშვი ფაილი ტერმინში:

(bash)
node index.js

🧠 გამოყენებული ტექნოლოგიები
JavaScript (ES6+)

Node.js (მხოლოდ გაშვებისთვის)

ES6 Modules (import/export)

ფუნქციური მიდგომა (arrow functions, template literals)

📌 აღწერა თითოეული მოდულის
bmiCalculator.js
calculateBMI(height, weight): აბრუნებს BMI-ს ფორმულით: weight / (height ^ 2)

getBMICategory(bmi): აბრუნებს BMI-ის კატეგორიას შემდეგი მიხედვით:

Underweight: < 18.5

Normal: 18.5 – 24.9

Overweight: 25 – 29.9

Obese: >= 30

unitConverter.js
convertHeight(value, fromUnit, toUnit): გარდაქმნის სიმაღლეს იმპერიულიდან მეტრულში (ფუტები + ინჩები -> სანტიმეტრები)

convertWeight(value, fromUnit, toUnit): გარდაქმნის წონას ფუნტიდან კილოგრამში

🧪 გამოყენების მაგალითი
let height = 160; // სმ
let weight = 60;  // კგ
let units = "metric"; // ან "imperial"
let age = 20;
let gender = "female";

შედეგი ტერმინში:
შენი BMI არის: 23.4 → ნორმალური (Normal)
დამატებით ასაკისა და სქესის მიხედვით შეფასება: მოზრდილთა კატეგორია: Normal


💡 რისთვის შეიძლება გამოიყენო ეს პროექტი?
სასკოლო ან სასწავლო პროექტად

პრაქტიკისთვის JavaScript მოდულების გამოყენებაში

BMI გამოთვლის ბოტის ან ვებსაიტის საწყის სტადიად

📄 ლიცენზია
ეს პროექტი შექმნილია მხოლოდ საგანმანათლებლო მიზნებისთვის. შეგიძლია გამოიყენო, შეცვალო და გაავრცელო თავისუფლად.

დამზადებულია სიყვარულით,
Esmira Aghamedova 💖



