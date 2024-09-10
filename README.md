# Next.js Full-Stack Signup Project

This is a simple full-stack project built with Next.js. The project features a user signup functionality where the email and password are stored in a PostgreSQL database, and after successfully signing up, the user is navigated to the home page.

## Features

- User signup form
- Email and password validation
- Data stored in a PostgreSQL database using Prisma ORM
- Upon successful signup, the user is redirected to the home page

## Tech Stack

- **Frontend**: Next.js, React.js
- **Backend**: Node.js (API routes in Next.js)
- **Database**: PostgreSQL (via Prisma ORM)
- **Styling**: Tailwind CSS
- **Data Validation**: Zod
- **HTTP Client**: Axios

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-nextjs-signup-project.git
cd your-nextjs-signup-project
```

## Install Dependencies
```bash
npm install
```

##  Set up environment variables

```bash
DATABASE_URL="postgresql://user:password@localhost:5432/mydatabase"
```

Make sure to replace user, password, localhost, and mydatabase with your actual PostgreSQL credentials.

## Set up Prisma

After configuring your database, run the following commands to set up Prisma and migrate your database schema:

```bash
npx prisma generate
npx prisma migrate dev --name init
```

##  Run the application

```bash
npm run dev
```

The application will be running on http://localhost:3000.