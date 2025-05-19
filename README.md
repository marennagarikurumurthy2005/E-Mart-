
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




This is the File Structure and based on the Image names in the data folder  store the images in the assets folder of your own ex: assets/Ac/1.png ( NOTE: The image names should be matched with the names of images present in src/data/ac.js  ) as images , node modules and some other  is not provide in the repository due to large storage


E-mart/
├── public/
│   ├── assets/
│   │   ├── Ac/
│   │   ├── Books/
│   │   ├── Computers/
│   │   ├── fridge/
│   │   ├── Furniture/
│   │   ├── Kitchen/
│   │   ├── Landing/
│   │   ├── MenWear/
│   │   ├── Mobiles/
│   │   ├── NewMobile/
│   │   ├── speakers/
│   │   ├── TV/
│   │   ├── Watch/
│   │   ├── Woman/
│   ├── images/
│   │   └── e-mart-logo.jpeg
├── src/
│   ├── stores/
│   │   ├── UserCart.jsx
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Products.jsx
│   │   │   ├── (individual category components like Ac.jsx, Books.jsx, etc.)
│   │   ├── context/
│   │   │   └── CartContext.jsx
│   │   ├── data/
│   │   │   └── (data files like mobiles.js, books.js, furniture.js, etc.)
│   │   ├── pages/
│   │   │   └── (pages for each category like MobilePage.jsx, BooksPage.jsx, etc.)
│   │   ├── singles/
│   │   │   └── (single product pages like MobileSingle.jsx, BookSingle.jsx, etc.)
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   ├── index.css
│   ├── prevcss.txt
├── package.json
├── README.md
├── LICENSE


🛒 E-Mart - React.js Frontend Project
E-Mart is a simple and responsive e-commerce frontend project built using React.js.
I developed this project as part of my learning journey in frontend development with React, focusing on building dynamic UIs, component structuring, and responsive design.

✨ Features
Fully responsive Navbar with Searchbar, Login/Sign-in, and Cart icons

Dynamic product listing with horizontal scrolling categories

Product grid view with hover animations

Single product detailed view page

Add to Cart button UI

Shopping Cart page to display added products

Product filter sidebar (checkboxes)

Smooth transitions and UI interactions

⚙️ Tech Stack
React.js

CSS3 (custom, fully responsive)

JavaScript (ES6+)

React Router (for navigation between pages)

📚 What I Learned
Building and structuring reusable React components

Implementing navigation using React Router

Managing props and basic component state

Applying responsive design principles with pure CSS

Creating user-friendly and accessible UIs

Working with flexbox, grid, and media queries in React apps



🚀 How to Run Locally

# Clone the repository
git clone https://marennagarikurumurthy2005/E-Mart.git

# Navigate to the project directory
cd e-mart

# Install dependencies
npm install

# Start the development server
npm start
Then open http://localhost:3000 to view it in your browser.
