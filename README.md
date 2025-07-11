




# 📱 Mobile Galaxy

A fully functional mobile e-commerce website where users can browse, view, and purchase mobiles. Includes cart management, product listings, and wishlist management.

## 🚀 Live Demo

[Visit Live Site]( https://my-mobile-galaxy-shop.onrender.com/ )

## 📸 Screenshots

![Home Page]
( <img width="1366" height="768" alt="Image" src="https://github.com/user-attachments/assets/7bd97976-7766-4882-acb9-cd0e0e1d2d21" /> )
![Product Page]
( <img width="1366" height="768" alt="Image" src="https://github.com/user-attachments/assets/54aac57a-7c3e-418a-a84d-72a17d77e51e" /> )
![Cart Page]
(<img width="1366" height="768" alt="Image" src="https://github.com/user-attachments/assets/ecb9b9c9-1ec9-4915-b04f-09bd3111c990" />)
![SignIn Page]
( <img width="1366" height="768" alt="Image" src="https://github.com/user-attachments/assets/17f597ad-604b-400e-8d56-ddce198201f4" /> )
![Footer Page]
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
- MongoDB (Native Driver)

**Other Tools:**
- Razorpay (for payment integration)
- Git & GitHub (Version Control)

## 🔑 Features

- 🛒 Add to Cart functionality
- 📱 Mobile product listing with image, price, and specs
- 🔍 Product detail view
- 🔁 Update/Delete products (Admin)
- 💳 Payment Gateway (Razorpay)
- 🔐 Login/Signup/Google Auth (if implemented)
- 📦 Order confirmation

## 🛠️ Installation

### Prerequisites

- Node.js
- MongoDB installed or MongoDB Atlas URI
- Git

### Clone the repo

```bash
git clone https://github.com/yourusername/mobile-galaxy.git
cd mobile-galaxy
Setup Backend
bash
Copy
Edit
cd backend
npm install
# Create .env file
PORT=5000
MONGO_URL=your_mongo_connection_string
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
npm start
Setup Frontend
bash
Copy
Edit
cd frontend
npm install
npm start
Frontend will run at: http://localhost:3000
Backend will run at: http://localhost:5000

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
│   ├── db/
│   └── ...
│
└── README.md
👨‍💻 Author
@yourname

📃 License
This project is licensed under the MIT License. See the LICENSE file for details.
