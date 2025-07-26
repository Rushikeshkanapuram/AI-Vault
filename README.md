
#  AI Vault – AI Finance Tracker

AI Vault is a smart finance tracker that helps users manage their money efficiently. It combines intuitive UI, AI-powered features, and modern authentication to give you complete control over your finances.

---

##  Features

-  **Clerk Authentication** – Secure sign-in with Clerk
-  **Account Management** – Create & manage multiple financial accounts (e.g., Personal, Savings)
-  **Transaction Tracking** – Record income & expenses with categories
-  **Finance Dashboard** – View summaries, recent transactions, and insights
-  **Receipt Scanner** – Upload receipts and extract data using AI (OCR)
-  **Monthly Reports** – Automatically emailed to users summarizing their finances
-  **Background Jobs** – Powered by Inngest (serverless background tasks)
-  **Smart Categorization** – Auto-categorize expenses using AI (optional extension)

---

## 🛠 Tech Stack

| Tech               | Purpose                          |
|--------------------|----------------------------------|
| **Next.js (App Router)** | Frontend & Backend (SSR + API Routes) |
| **Clerk**          | User authentication              |
| **Prisma**         | ORM for PostgreSQL/PlanetScale   |
| **Zod**            | Schema validation                |
| **React Hook Form**| Form handling                    |
| **Inngest**        | Background tasks (serverless)    |
| **Tailwind CSS**   | Styling                          |
| **ShadCN UI**      | Component library                |
| **Cloudinary**     | File uploads (receipts/images)   |

---

##  Folder Structure

```

/app
/dashboard
/api
/accounts
/prisma
schema.prisma
/lib
/components
/constants
/hooks
/public
/styles

````

---

## 🔧 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Rushikeshkanapuram/AI-Vault.git
cd AI-Vault
````

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root and add the following:

```env
DATABASE_URL=your_database_url
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLOUDINARY_URL=your_cloudinary_url
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Setup Prisma

```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 5. Run the development server

```bash
npm run dev
```

Then go to [http://localhost:3000](http://localhost:3000)

---

##  Testing the App

1. Sign in using Clerk
2. Create financial accounts like "Personal", "Savings", etc.
3. Add income and expense transactions
4. Upload a receipt and let AI parse it
5. View monthly summaries and insights
6. Check your inbox for the automated financial report (triggered by Inngest)

---

##  Security

* Authentication is managed by Clerk.
* User data is stored securely with Prisma ORM.
* Uploaded media is hosted on Cloudinary using secure tokens.

---

##  Future Enhancements

* AI-generated financial advice
* Google Calendar reminders for bill due dates
* Export transactions to PDF or CSV
* International currency support

---



##  Author

Made  by [Rushikesh Kanapuram](https://github.com/Rushikeshkanapuram)


