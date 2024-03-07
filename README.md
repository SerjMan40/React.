Мета: Створення базового React проекту з компонентом кнопки та / або текстового поля.

Інструкції:

Ініціалізація проекту:Використовуючи npx або yarn, створіть новий React проект:
З create-react-app: npx create-react-app ваш_проект або yarn create react-app ваш_проект.
З Vite: npm create vite@latest ваш_проект -- --template react або yarn create vite ваш_проект --template react.
Перейдіть до каталогу проекту (cd ваш_проект) та встановіть залежності (npm install або yarn).
Створення компоненту:У src/components створіть файл Button.jsx або Input.jsx.
Реалізуйте компонент, який приймає і використовує props (text і onClick для кнопки, placeholder і onChange для поля введення).
Використання компоненту:Імпортуйте та використовуйте ваш компонент у App.js (або App.jsx), передаючи необхідні props.
Тестування проекту:Запустіть проект (npm run dev або yarn dev для Vite, npm start або yarn start для create-react-app) та перевірте роботу компонента.