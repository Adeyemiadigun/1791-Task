My Tracking Id - e007be62-8624-40c3-96cb-04f22ce107aa

For c# solution
📝 Task Management API
A production-ready Task Management RESTful API built with C# (.NET 8) and PostgreSQL, following Hexagonal (Ports & Adapters) Architecture. It supports robust user management, secure authentication, role-based access control, task operations, real-time notifications, and enterprise-grade features.

🚀 Features
🔐 User Authentication (JWT-based)

🧑‍💼 Role-Based Authorization (Admin, User)

✅ Task CRUD (Create, Read, Update, Delete)

👥 Task Assignment & Status Tracking

🔔 Notifications (Task Assigned, Status Updated)

🧾 Swagger/OpenAPI API Documentation

⚠️ Global Error Handling

📏 FluentValidation for Request Validation

🚦 Rate Limiting

🧠 In-Memory Caching with IMemoryCache

📣 Domain Events (decoupled notifications and triggers)

⚙️ Clean, Async, Secure, and Scalable Code

📦 Tech Stack Overview
Concern	Technology Used
Language	C# (.NET 8)
Database	PostgreSQL
ORM	Entity Framework Core
Authentication	JWT, ASP.NET Identity, IPasswordHasher
API	Minimal APIs, Swagger, MediatR
Validation	FluentValidation
Architecture	Hexagonal (Ports and Adapters)
Caching	IMemoryCache
Rate Limiting	ASP.NET Rate Limiting Middleware
Utilities	IHttpContextAccessor, Domain Events

📁 Project Structure (Hexagonal Architecture)
bash
Copy
Edit
/TaskManagerApi
├── /TaskManagerApi              # API Entrypoint (Web Layer - HTTP Adapter)
│   ├── Program.cs               # App configuration and middleware
│   ├── DependencyInjection.cs   # Modular service registrations
│   └── Controllers/             # API Endpoints (only calls Use Cases)
│
├── /Application                 # Application Core (Ports + Use Cases)
│   ├── Interfaces/              # Input and output ports (e.g., ITaskService)
│   ├── DTOs/                    # Request and Response models
│   ├── Features/                # Use case handlers (CQRS pattern)
│   └── Validators/              # FluentValidation classes
│
├── /Domain                     # Domain Core (Enterprise Business Rules)
│   ├── Entities/                # Core business models (e.g., Task, User)
│   ├── ValueObjects/            # Strong types (e.g., TaskStatus, Role)
│   ├── Events/                  # Domain events
│   └── Enums/                   # Enumerations (e.g., TaskPriority)
│
├── /Infrastructure              # External Adapters (e.g., DB, Auth, Caching)
│   ├── Persistence/             # EF Core DbContext, Migrations, Repositories
│   ├── Authentication/          # JWT/Identity configuration
│   ├── Services/                # External services (e.g., Email, Cache)
│   └── Configuration/           # EntityTypeConfigurations
│
├── /Shared                      # Cross-cutting Concerns
│   ├── Middleware/              # Error handling, Rate limiting, etc.
│   ├── Caching/                 # IMemoryCache utilities
│   └── Extensions/              # Reusable extension methods
│
├── /Tests                       # Unit and Integration Tests
│   ├── Application.Tests/       # Tests for use cases and logic
│   └── Api.Tests/               # Integration tests for endpoints
│
└── TaskManagerApi.sln           # Solution file
📖 API Documentation
🔍 Swagger UI available at: https://<your-host>/swagger

Versioning supported via api/v{version} route pattern

=========================================

For nodejs Solution

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
git clone github.com/Adeyemiadigun/1791-Task/tree/main/Nodejs%20Best%20Api%20Practices%20Solution
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
