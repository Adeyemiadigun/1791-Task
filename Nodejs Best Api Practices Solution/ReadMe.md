# 🌍 Donation & Campaign REST API

This project is a modular **RESTful API** built with **Express**, **Joi**, and **Swagger**. It supports user creation, campaign management, and donation processing — with full in-memory handling and OpenAPI documentation.

---

## 📁 Project Structure

project-root/
├── middleware/
│ └── error.js # Centralized error handling middleware
├── routes/
│ ├── campaigns.js # Campaign endpoints
│ ├── donations.js # Donation endpoints
│ └── users.js # User endpoints
├── swagger.yaml # OpenAPI 3.0 spec
├── index.js # Main entry point (Express app)
├── package.json
├── package-lock.json

yaml
Copy
Edit

---

## 🚀 Features

- ✅ Modular Express routers (`users`, `campaigns`, `donations`)
- ✅ Input validation via Joi
- ✅ RESTful route conventions
- ✅ Centralized error handling
- ✅ Swagger UI for interactive API documentation
- ✅ Clean project structure & scalability

---

## 🔧 Tech Stack

- **Node.js**
- **Express**
- **Joi** — schema validation
- **Swagger (OpenAPI 3.0)** — API documentation
- **Swagger UI** — visual API explorer

---

## 📦 Installation

```bash
git clone https://github.com/yourusername/donation-api.git
cd donation-api
npm install
▶️ Running the Server
Development
bash
Copy
Edit
npm run dev
Production
bash
Copy
Edit
node index.js
The server starts at:

arduino
Copy
Edit
http://localhost:3000
📮 API Endpoints
All routes are prefixed with /api/v1.

👤 Users
Method	Endpoint	Description
GET	/users	List all users
POST	/users	Create a user

json
Copy
Edit
{
  "name": "Alice",
  "email": "alice@example.com"
}
📢 Campaigns
Method	Endpoint	Description
GET	/campaigns	List all campaigns
POST	/campaigns	Create a new campaign
GET	/campaigns/{id}	Get campaign by ID
PUT	/campaigns/{id}	Update campaign
DELETE	/campaigns/{id}	Delete campaign

json
Copy
Edit
{
  "title": "Clean Water",
  "description": "Help build wells",
  "goal": 1000,
  "end_date": "2025-07-01",
  "email": "org@example.com"
}
💰 Donations
Method	Endpoint	Description
POST	/donations	Make a donation

json
Copy
Edit
{
  "campaignId": 1,
  "amount": 100,
  "donorName": "John Doe",
  "donorEmail": "john@example.com",
  "cardNumber": "4111111111111111",
  "expirationDate": "12/26",
  "cvv": "123"
}
🧪 Swagger API Documentation
Interactive docs available at:

bash
Copy
Edit
http://localhost:3000/api-docs
Swagger file: swagger.yaml

🧹 Notes
Data is stored in-memory — resets when server restarts.

Card info is not stored securely (just for demo).

Easily extendable to use a database like MongoDB or PostgreSQL.

Clean separation of concerns with route, middleware, and spec files.

📄 License
MIT

👨‍💻 Author
Adeyemi Mubarak