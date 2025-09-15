# Connect - Referral System

A modern, full-stack referral system built with TypeScript that enables users to generate unique invite links, track clicks, manage registrations, and view real-time rankings.

## 🚀 Project Overview

**Connect** is a comprehensive referral platform designed to help organizations build and manage invitation-based growth systems. Users can create personalized invite links, monitor engagement metrics, and compete on dynamic leaderboards.

### ✨ Key Features

- 🔗 **Unique Invite Link Generation** - Create personalized referral links for each user
- 📊 **Real-time Click Tracking** - Monitor invite link performance and engagement
- 👥 **Registration Management** - Handle new user subscriptions through referral system
- 🏆 **Dynamic Ranking System** - Live leaderboards showing top referrers and their positions
- 📈 **Comprehensive Analytics** - Track invite counts, clicks, and conversion rates
- ⚡ **Fast Performance** - Redis caching for optimal response times
- 🔐 **Secure Authentication** - JWT-based authentication system
- 📱 **Responsive Design** - Modern UI that works across all devices

## 🛠 Technologies Used

### Monorepo Setup
- **Turborepo** - High-performance monorepo build system
- **pnpm** - Fast, disk space efficient package manager

### Frontend
- **React 19** - Latest React with concurrent features
- **Vite** - Lightning fast build tool and dev server
- **TanStack Router** - Type-safe file-based routing
- **TanStack Query** - Powerful data synchronization for React
- **Tailwind CSS v4** - Utility-first CSS framework
- **React Hook Form** - Performant forms with easy validation
- **Zod** - TypeScript-first schema validation
- **Lucide React** - Beautiful & consistent icon library

### Backend
- **Fastify** - Fast and low overhead web framework
- **TypeScript** - Static type checking
- **Drizzle ORM** - Type-safe SQL toolkit
- **PostgreSQL** - Robust relational database
- **Redis** - In-memory data structure store for caching
- **JWT** - JSON Web Token authentication
- **bcryptjs** - Password hashing
- **Swagger/OpenAPI** - API documentation

### Development Tools
- **Docker** - Containerization for local development
- **ESLint** - Code linting and quality
- **Prettier** - Code formatting
- **Vitest** - Fast unit testing framework
- **tsup** - TypeScript bundler
- **Orval** - Generate type-safe API clients from OpenAPI specs

## 📁 Monorepo Structure

```
connect/
├── apps/
│   ├── web/                    # React frontend application
│   │   ├── src/
│   │   │   ├── routes/         # File-based routing (TanStack Router)
│   │   │   ├── components/     # Reusable React components
│   │   │   ├── http/          # API client (auto-generated)
│   │   │   ├── models/        # TypeScript type definitions
│   │   │   └── lib/           # Utility functions
│   │   ├── orval.config.ts    # API client generation config
│   │   └── package.json
│   │
│   └── api/                    # Fastify backend API
│       ├── src/
│       │   ├── http/routes/    # API route handlers
│       │   ├── functions/      # Business logic functions
│       │   ├── database/       # Database connections & schema
│       │   └── server.ts       # Application entry point
│       ├── drizzle.config.ts   # Database configuration
│       └── package.json
│
├── packages/
│   └── env/                    # Shared environment validation
│       └── index.ts            # Zod schemas for env variables
│
├── config/                     # Shared configuration packages
│   ├── eslint-config/          # ESLint configurations
│   ├── prettier-config/        # Prettier configuration
│   └── typescript-config/      # TypeScript configurations
│
├── docker-compose.yml          # Local development services
├── turbo.json                  # Turborepo configuration
├── pnpm-workspace.yaml         # pnpm workspace configuration
└── CLAUDE.md                   # AI assistant guidance
```

## 🚀 Setup Instructions

### Prerequisites
- **Node.js** >= 18
- **pnpm** 9.0.0
- **Docker** and Docker Compose

### 1. Clone the Repository
```bash
git clone <repository-url>
cd connect
```

### 2. Install Dependencies
```bash
pnpm install
```

### 3. Environment Setup
Copy the example environment file and configure your variables:

```bash
cp .env.example .env
```

Configure your `.env` file:
```env
# Application
NODE_ENV=development
PORT=3333

# PostgreSQL Database
DATABASE_URL=postgresql://postgres:password@localhost:5432/connect
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=password
DATABASE_NAME=connect

# Redis
REDIS_URL=redis://localhost:6379
REDIS_PASSWORD=your_redis_password

# Frontend
CLIENT_URL=http://localhost:3000

# API URL for frontend
VITE_API_URL=http://localhost:3333
```

### 4. Start Development Services
Start PostgreSQL and Redis containers:
```bash
pnpm --filter @connect/api predev
```

### 5. Database Setup
Generate and run database migrations:
```bash
cd apps/api
pnpm generate:db
pnpm migrate:db
```

### 6. Start Development Servers
Start both frontend and backend in development mode:
```bash
pnpm dev
```

This will start:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:3333
- **API Docs**: http://localhost:3333/docs

## 🗄 Database

### PostgreSQL with Drizzle ORM

The project uses **Drizzle ORM** for type-safe database operations with PostgreSQL.

#### Database Commands
```bash
# Generate migration files
pnpm --filter @connect/api generate:db

# Apply migrations
pnpm --filter @connect/api migrate:db

# Open Drizzle Studio (Database GUI)
pnpm --filter @connect/api studio:db
```

#### Schema Structure
- **subscriptions** - User subscriptions and referral data
- Includes tracking for invite links, clicks, and registration metrics

### Example Database Configuration
```typescript
// drizzle.config.ts
export default {
  schema: './src/database/drizzle/schema/*',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
}
```

## 📖 API Documentation

The API is fully documented using **Swagger/OpenAPI** specification.

### Access API Documentation
- **Local Development**: http://localhost:3333/docs
- **Interactive UI**: Swagger UI with live API testing
- **JSON Spec**: http://localhost:3333/docs/json

### Key Endpoints
- `POST /subscriptions` - Create new subscription
- `GET /invites/:inviteId/access` - Access invite link
- `GET /subscribers/:subscriberId/invites/count` - Get invite count
- `GET /subscribers/:subscriberId/invites/clicks` - Get click metrics
- `GET /ranking` - Get global ranking
- `GET /subscribers/:subscriberId/ranking` - Get user ranking position

### Type-Safe API Client
The frontend automatically generates a type-safe API client from the OpenAPI specification:

```bash
# Regenerate API client after backend changes
pnpm --filter web generate:api
```

## 🔧 Development Workflow

### Code Quality
```bash
# Run linting across all packages
pnpm lint

# Format code
pnpm format

# Type checking
pnpm check-types
```

### Testing
```bash
# Run all tests
pnpm --filter web test

# Run tests in watch mode
pnpm --filter web test --watch
```

### Building
```bash
# Build all applications
pnpm build

# Build specific app
pnpm --filter @connect/api build
pnpm --filter web build
```

### Docker Development
```bash
# Start services
docker-compose -p connect-stack --env-file .env up -d

# Stop services
docker-compose -p connect-stack --env-file .env stop

# View logs
docker-compose -p connect-stack logs -f
```

### Database Management
```bash
# Reset database (careful - this deletes data!)
pnpm --filter @connect/api db:reset

# Seed database with sample data
pnpm --filter @connect/api db:seed
```

## 🚢 Deployment

### Backend Deployment
1. Build the API application:
   ```bash
   pnpm --filter @connect/api build
   ```

2. Set production environment variables

3. Run database migrations:
   ```bash
   pnpm --filter @connect/api migrate:db
   ```

4. Start the production server:
   ```bash
   pnpm --filter @connect/api start
   ```

### Frontend Deployment
1. Build the web application:
   ```bash
   pnpm --filter web build
   ```

2. Deploy the `dist/` folder to your hosting platform

### Environment Variables
Ensure all production environment variables are properly configured:
- Database connection strings
- Redis configuration
- CORS origins
- JWT secrets
- API URLs

## 🔮 Future Improvements

### Performance & Scalability
- **Redis Caching Layer** - Cache frequently accessed rankings and metrics
- **Background Job Processing** - Queue system for heavy operations
- **Database Indexing** - Optimize queries for large datasets
- **CDN Integration** - Asset delivery optimization

### Features
- **Real-time Notifications** - WebSocket integration for live updates
- **Email Campaigns** - Automated email sequences for referrals
- **Advanced Analytics** - Detailed conversion funnels and metrics
- **Mobile App** - React Native companion application
- **Admin Dashboard** - Comprehensive management interface

### Infrastructure
- **Microservices Architecture** - Split into smaller, focused services
- **API Rate Limiting** - Prevent abuse and ensure fair usage
- **Monitoring & Logging** - Application performance monitoring
- **CI/CD Pipeline** - Automated testing and deployment

### Security
- **OAuth Integration** - Social login providers
- **Two-Factor Authentication** - Enhanced security options
- **Audit Logging** - Track all system changes
- **Data Encryption** - Encrypt sensitive user data

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 👥 Contributors

- **[Your Name]** - Project Creator & Maintainer

---

<div align="center">
  <strong>Built with ❤️ using modern TypeScript stack</strong>
</div>

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow existing code style and conventions
- Write tests for new features
- Update documentation as needed
- Ensure all CI checks pass before submitting PR

### Reporting Issues
Please use the GitHub Issues tab to report bugs or request features. Include:
- Detailed description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)