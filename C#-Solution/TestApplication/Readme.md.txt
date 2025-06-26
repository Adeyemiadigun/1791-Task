


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

