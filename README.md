# Inventory Management System

A full-stack inventory management web app built with Next.js, Prisma, Neon, and Hexclave Auth.

---

## Preview

<!-- Add a screenshot of your project here -->
![Settings Preview](public/preview.png)

---

## Tech Stack

- **Next.js 16** — App Router, Server Actions
- **TypeScript** — Type safety
- **Tailwind CSS v4** — Styling
- **Prisma 7** — ORM with PostgreSQL adapter
- **Neon** — Serverless PostgreSQL database
- **Hexclave** — Authentication (sign-in, sign-up, OAuth)
- **Recharts** — Dashboard charts
- **Lucide React** — Icons

---

## Features

- 🔐 User authentication (email/password + OAuth)
- 📊 Dashboard with analytics and charts
- 📦 Add, view, and manage inventory products
- 📄 Pagination for large product lists
- ⚠️ Low stock alerts
- 📱 Fully responsive design

---

## Getting Started

To run this project locally, you need to set up two external services: a **Neon** database and a **Hexclave** auth project. Both have free tiers.

### 1. Set up Neon (Database)

1. Go to [neon.tech](https://neon.tech) and create a free account
2. Create a new project
3. Copy the **connection string** from your project dashboard — it looks like:
   ```
   postgresql://user:password@ep-xxxx.neon.tech/neondb?sslmode=require
   ```

### 2. Set up Hexclave (Authentication)

1. Go to [hexclave.com](https://hexclave.com) and create a free account
2. Create a new project
3. From the project dashboard, copy these three values:
   - `Project ID`
   - `Publishable Client Key`
   - `Secret Server Key`

### 3. Clone and install

```bash
git clone https://github.com/mobina-violet/Build-an-Inventory-Management-Website.git
cd Build-an-Inventory-Management-Website
npm install
```

### 4. Configure environment variables

Create a `.env.local` file in the root of the project:

```env
# Neon Database
DATABASE_URL="your_neon_connection_string"

# Hexclave Auth
NEXT_PUBLIC_STACK_PROJECT_ID=your_project_id
NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY=your_publishable_key
STACK_SECRET_SERVER_KEY=your_secret_key
```

### 5. Set up the database

```bash
npx prisma db push
npx prisma generate
```

To seed the database with sample data:

```bash
npm run db:seed
```

### 6. Run the app

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
├── app/
│   ├── add-product/         # Add new product page
│   ├── components/          # Shared UI components
│   ├── dashboard/           # Dashboard with analytics
│   ├── handler/[...stack]/  # Hexclave auth handler
│   ├── inventory/           # Inventory list page
│   ├── lib/
│   │   ├── actions/         # Server Actions (CRUD)
│   │   ├── auth.ts          # Auth helpers
│   │   └── prisma.ts        # Prisma client instance
│   └── settings/            # Account settings page
├── stack/
│   ├── client.tsx           # Hexclave client config
│   └── server.tsx           # Hexclave server config
└── prisma/
    ├── schema.prisma        # Database schema
    └── seed.ts              # Sample seed data
```

---

## Notes

This project was built by following a tutorial by [Pedro Technologies](https://www.youtube.com/@pedrotechnologies) and adapted to use **Hexclave** (the updated version of Stack Auth) and **Neon's serverless PostgreSQL adapter** for Prisma.

---

## License

MIT
