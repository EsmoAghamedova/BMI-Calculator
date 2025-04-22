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

ფუნქციური მიდგომა (arrow functions, template literals, rest/spread operators)

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

categoryClassifier.js
classifyBMI(bmi, age, gender):

თუ ასაკი < 18 — აბრუნებს "Check with pediatrician"

თუ ქალი და BMI ≥ 25 — "Overweight"

თუ მამაკაცი და BMI ≥ 27 — "Overweight"

სხვა შემთხვევებში — ჩვეულებრივი კატეგორიების მიხედვით

🧪 გამოყენების მაგალითი
const user = {
  height: { feet: 5, inches: 7 },
  weight: 160,
  units: 'imperial',
  age: 20,
  gender: 'female'
};

შედეგი ტერმინში:
Your BMI is 25.06 (Overweight).
Age: 20, Gender: female
Classified Category: Overweight


💡 რისთვის შეიძლება გამოიყენო ეს პროექტი?
სასკოლო ან სასწავლო პროექტად

პრაქტიკისთვის JavaScript მოდულების გამოყენებაში

BMI გამოთვლის ბოტის ან ვებსაიტის საწყის სტადიად

📄 ლიცენზია
ეს პროექტი შექმნილია მხოლოდ საგანმანათლებლო მიზნებისთვის. შეგიძლია გამოიყენო, შეცვალო და გაავრცელო თავისუფლად.

დამზადებულია სიყვარულით,
Esmira Aghamedova 💖



