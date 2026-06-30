# Inventory Management System

A full-stack inventory management web application built with **Next.js 16**, **Prisma 7**, **Neon PostgreSQL**, and **Hexclave Auth**. Track products, monitor stock levels, and visualize inventory trends through an analytics dashboard.

---

## Preview

![App Screenshot](./public/preview.png)

---

## Tech Stack

### Core
- **Next.js 16** — App Router, Server Components, Server Actions
- **React 19**
- **TypeScript 5** — Type safety across the app

### Database & ORM
- **Neon** — Serverless PostgreSQL database
- **Prisma 7** — ORM with the new `prisma-client` generator
- **@prisma/adapter-pg** — Driver adapter for connecting Prisma to PostgreSQL via connection pooling

### Authentication
- **Hexclave** (`@hexclave/next`) — Handles sign-in, sign-up, OAuth, session management, and account settings

### UI & Styling
- **Tailwind CSS v4**
- **Lucide React** — Icon library
- **Recharts** — Dashboard charts and data visualization

---

## Features

- 🔐 Authentication with email/password and OAuth, powered by Hexclave
- 📊 Dashboard with key metrics, weekly trends, and stock distribution charts
- 📦 Full product management — add, view, search, and delete inventory items
- 📄 Server-side pagination for large product lists
- ⚠️ Low stock and out-of-stock indicators
- ⚙️ Account settings (profile, display name, account deletion)
- 📱 Fully responsive design

---

## Prerequisites

Before you start, make sure you have:

- **Node.js 18+** installed
- A free **[Neon](https://neon.tech)** account (PostgreSQL database)
- A free **[Hexclave](https://hexclave.com)** account (authentication)
- **Git** installed

---

## Getting Started

This project depends on two external services — a database and an auth provider — that need to be configured before the app will run. Follow these steps in order.

### 1. Clone the repository

```bash
git clone https://github.com/mobina-violet/Build-an-Inventory-Management-Website.git
cd Build-an-Inventory-Management-Website
npm install
```

### 2. Set up Neon (Database)

1. Go to [neon.tech](https://neon.tech) and create a free account.
2. Create a new project (choose any region close to you).
3. From the project dashboard, copy the **pooled connection string**. It looks like:
   ```
   postgresql://user:password@ep-xxxx-pooler.region.neon.tech/neondb?sslmode=require
   ```
   > Use the **pooled** connection string, not the direct one — this project uses `@prisma/adapter-pg`, which works best with Neon's connection pooler for serverless environments.

### 3. Set up Hexclave (Authentication)

1. Go to [hexclave.com](https://hexclave.com) and create a free account.
2. Create a new project.
3. From the project dashboard, copy these three values:
   - **Project ID**
   - **Publishable Client Key**
   - **Secret Server Key**
4. In your Hexclave project settings, make sure the redirect URLs allow `http://localhost:3000` for local development.

### 4. Configure environment variables

Create a `.env.local` file in the root of the project:

```env
# Neon Database (pooled connection string)
DATABASE_URL="your_neon_pooled_connection_string"

# Hexclave Auth
NEXT_PUBLIC_STACK_PROJECT_ID=your_project_id
NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY=your_publishable_key
STACK_SECRET_SERVER_KEY=your_secret_key
```

### 5. Set up the database schema

Push the Prisma schema to your Neon database, then generate the Prisma Client:

```bash
npx prisma db push
npx prisma generate
```

`db push` creates the tables defined in `prisma/schema.prisma` directly in your Neon database. `generate` builds the type-safe Prisma Client used throughout the app.

### 6. (Optional) Seed the database

To populate the database with sample products for testing:

```bash
npm run db:seed
```

### 7. Run the app

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000), sign up for an account, and you'll be redirected to the dashboard.

---

## Building for Production

Development mode (`npm run dev`) is unoptimized and not representative of real-world performance. To test or deploy a production build:

```bash
npm run build
npm run start
```

Re-run both commands after any code change you want reflected in the production build.

---

## Project Structure

```
├── app/
│   ├── add-product/         # Add new product page
│   ├── components/          # Shared UI components (Sidebar, charts, settings, etc.)
│   ├── dashboard/           # Dashboard with metrics and charts
│   ├── handler/[...stack]/  # Hexclave auth handler (sign-in, sign-up, etc.)
│   ├── inventory/           # Inventory list, search, and pagination
│   ├── lib/
│   │   ├── actions/          # Server Actions (product CRUD)
│   │   ├── auth.ts           # Auth helper functions
│   │   └── prisma.ts         # Prisma Client singleton
│   └── settings/            # Account settings page
├── stack/
│   ├── client.tsx           # Hexclave client-side configuration
│   └── server.tsx           # Hexclave server-side configuration
├── prisma/
│   ├── schema.prisma         # Database schema and models
│   └── seed.ts                # Sample seed data
└── src/generated/prisma/    # Auto-generated Prisma Client (do not edit)
```

---

## How Authentication and the Database Connect

- **`stack/client.tsx`** configures the Hexclave client app, including redirect URLs (`afterSignIn`, `afterSignUp`, `afterSignOut`).
- **`stack/server.tsx`** creates the server-side Hexclave instance, used to verify the logged-in user inside Server Components and Server Actions.
- **`app/lib/prisma.ts`** exports a single, reused Prisma Client instance (a singleton) connected to Neon through `@prisma/adapter-pg`. Reusing this instance avoids opening a new database connection on every request.
- Every product is linked to a `userId`, so each user only sees their own inventory.

---

## Notes

This project was originally built by following a tutorial by [Pedro Technologies](https://www.youtube.com/@pedrotechnologies), then adapted to use **Hexclave** (the renamed, updated version of Stack Auth) and **Neon's serverless PostgreSQL adapter** for Prisma.

---

## License

MIT
