# Database Setup Guide

## Prerequisites
- PostgreSQL installed and running
- Node.js and npm installed

## Setup Steps

### 1. Environment Variables
Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/ahmadsheikhdev"

# Next Auth
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# Clerk (for authentication)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-clerk-publishable-key"
CLERK_SECRET_KEY="your-clerk-secret-key"
```

### 2. Database Creation
Create a PostgreSQL database:

```sql
CREATE DATABASE ahmadsheikhdev;
```

### 3. Run Database Migrations
```bash
# Generate and run migrations
npx prisma migrate dev --name init

# Or if you want to reset the database
npx prisma migrate reset
```

### 4. Generate Prisma Client
```bash
npx prisma generate
```

### 5. Seed Database (Optional)
```bash
npx prisma db seed
```

## Database Schema

The database includes the following models:

- **Contact**: Contact form submissions
- **User**: User accounts and profiles
- **Course**: Course information and metadata
- **Lesson**: Individual lessons within courses
- **Enrollment**: User course enrollments
- **Review**: Course reviews and ratings

## Development Commands

```bash
# View database in Prisma Studio
npx prisma studio

# Reset database
npx prisma migrate reset

# Generate new migration
npx prisma migrate dev --name migration_name

# Deploy migrations to production
npx prisma migrate deploy
```

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Retrieve contacts (admin only)

## Testing the Contact Form

1. Start the development server: `npm run dev`
2. Navigate to the homepage
3. Scroll to the Contact section
4. Fill out and submit the form
5. Check the database to see the submission

## Production Deployment

For production deployment:

1. Set up a production PostgreSQL database
2. Update the `DATABASE_URL` in your environment variables
3. Run `npx prisma migrate deploy` to apply migrations
4. Ensure your application has access to the database 