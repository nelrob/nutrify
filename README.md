This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install all project dependencies in the root directory:

```
npm install
```

To get the proper JWT's,
- Configure a new GoogleOAuth from the Google Cloud API
- Create a MongoDB database with the "drivers" configuration 

Create an `.env` file with all the following keys (ignore the <>'s):
```
GOOGLE_CLIENT_ID=<GOOGLE_CLIENT_ID>
GOOGLE_SECRET_ID=<GOOGLE_SECRET_ID>
MONGODB_URI=<MONGODB_URI>
MONGODB_DB=<DATABASE_NAME>
NEXTAUTH_URL=<BASE_URL> // can be http://localhost:3000
NEXTAUTH_URL_INTERNAL=<BASE_URL> // can be http://localhost:3000
NEXTAUTH_SECRET=<SECRET> // generate one using openssl (`openssl rand -base64 32`)
```
  
Then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
