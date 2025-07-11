# 📱 Mobile Galaxy

A fully functional mobile e-commerce website where users can browse, view, and purchase mobiles. Includes cart management, product listings, and wishlist management.

🧩 Project Function / Purpose
Mobile Galaxy is a full-stack e-commerce web application that:

🔧 Core Functions:
Display Mobile Products: Lists mobile phones with images, specifications, and prices.

Product Management: Admin can add, and delete mobile products.

Add to Cart: Users can add items to the cart and view their selections.

Place Orders : Users can checkout .

Persistent Data: Product and cart data are stored in MongoDB.

🛠️ Backend Functionalities:
GET /products: Fetch all mobile products.

POST /add-to-cart: Add a product to cart.

GET /cart: Get all cart items.

DELETE /cart/:id: Remove item from cart.


🎯 Main Objective:
Build a real-world shopping experience using modern JavaScript technologies, combining frontend and backend skills with database .

## 🚀 Live Demo

[Visit Live Site]( https://my-mobile-galaxy-shop.onrender.com/ )

## 📸 Screenshots

Home Page

<img width="1366" height="768" alt="Image" src="https://github.com/user-attachments/assets/7bd97976-7766-4882-acb9-cd0e0e1d2d21" /> 


Product Page

<img width="1366" height="768" alt="Image" src="https://github.com/user-attachments/assets/54aac57a-7c3e-418a-a84d-72a17d77e51e" /> 


Cart Page

<img width="1366" height="768" alt="Image" src="https://github.com/user-attachments/assets/ecb9b9c9-1ec9-4915-b04f-09bd3111c990" />


SignIn Page

<img width="1366" height="768" alt="Image" src="https://github.com/user-attachments/assets/17f597ad-604b-400e-8d56-ddce198201f4" /> 


Footer Page

<img width="1366" height="768" alt="Image" src="https://github.com/user-attachments/assets/15c5a1dc-0aad-4778-857a-61df63ef18b7" />

<img width="1366" height="768" alt="Image" src="https://github.com/user-attachments/assets/f26c9caf-3e91-4eeb-bb86-4077364bd8bd" />


## 🔧 Tech Stack

**Frontend:**
- React.js
- React Router DOM
- Axios
- Bootstrap / CSS Modules

**Backend:**
- Node.js
- Express.js
- MongoDB Atlas 

**Other Tools:**
- Git & GitHub (Version Control)
- render application

## 🔑 Features

- 🛒 Add to Cart functionality
-  Add to wishlist functionality
- 📱 Mobile product listing with name, model, color, image, price, and specs( ram, storage, camera, battery )
- 🔍 Product detail view
- 🔁 Update/Delete products (Admin)
- new product add
- 🔐 Login/Signup Auth (if implemented)
- 📦 Order confirmation

## 🛠️ Installation

### Prerequisites

- Node.js
-  MongoDB Atlas URI
- Git

### Clone the repo

```bash
git clone https://github.com/Kshirod2002/My-Mobile-Galaxy
cd mobile-galaxy
Setup Backend
bash
Copy
Edit
cd backend
npm install
# Create .env file
PORT=8081
MONGO_URL=your_mongo_connection_string
node index.js

Setup Frontend
bash
Copy
Edit
cd frontend
npm install
npm run dev
Frontend will run at: http://localhost:5173
Backend will run at: http://localhost:8081

🧩 Folder Structure
Copy
Edit
mobile-galaxy/
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── App.js
│   └── ...
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── model/
│   └── ...
│
└── README.md
👨‍💻 Author
@Kshirod chandra swain
