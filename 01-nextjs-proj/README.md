This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Api Testing docs

- https://dogapi.dog/docs/api-v2
- https://dogapi.dog/api/v2/breeds?page[number]=1&page[size]=2

- https://api.vercel.app/blog

# API route handlers vs data access layer vs Server actions

Reddit users

> makes sense. it’s just kind of annoying to have to create api routes for just your get requests. and then have a seperate folder for server actions. feel like you might as well just make them all api routes for consistency. guess just something i’ll have to get used to

> Actions seemed promising, but breaking up the get/post is a dealbreaker, the mental overhead of fragmenting api calls is totally dumb... the logic is the same whether it's in /api or in some action file, and doing it right still means making a zod object. [[Link](https://www.reddit.com/r/nextjs/comments/1iw8w1e/comment/medeju6/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button)]

> so then for all my get requests i’d have to create seperate api routes for those? and then all my POST requests are just kept as server actions? [[Link](https://www.reddit.com/r/nextjs/comments/1iw8w1e/comment/medd8ok/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button)]

> Yes. With the card example, I'd expect it to be a single endpoint like /api/cards/[cardId]. I think this should probably be fine. I've done similar, and the pattern works well.
> Another approach would be to make a server component that fetches the data directly from the DB when it renders.
> Or you can just load everything up front and only show it when the cards are clicked on. I wouldn't do that with too many cards though because it will inflate the initial payload. [[Link](https://www.reddit.com/r/nextjs/comments/1iw8w1e/comment/medhg9z/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button)]

# Simple Visual Explanation

## 🍪 HttpOnly Cookies Stored in Browser

```
refreshToken → long life, safe, server-only
accessToken  → short life, used for API calls
```

## The flow:

```
[User logs in]
    ↓
Server sets:
- accessToken (short)
- refreshToken (long)

[Access token expires]
    ↓
Browser automatically sends refreshToken cookie
Server returns NEW access token
```

User stays logged in without logging in again.

# api testing

source: [[DummyJSON - user's credentials](https://dummyjson.com/docs/auth)]

```
{
    "id": 1,
    "firstName": "Emily",
    "lastName": "Johnson",
    "maidenName": "Smith",
    "age": 29,
    "gender": "female",
    "email": "emily.johnson@x.dummyjson.com",
    "phone": "+81 965-431-3024",
    "username": "emilys",
    "password": "emilyspass",
    "birthDate": "1996-5-30",
    "image": "https://dummyjson.com/icon/emilys/128",
    "bloodGroup": "O-",
    "height": 193.24,
    "weight": 63.16,
    "eyeColor": "Green",
    "hair": {
    "color": "Brown",
    "type": "Curly"
    },
    "ip": "42.48.100.32",
    "address": {
    "address": "626 Main Street",
    "city": "Phoenix",
    "state": "Mississippi",
    "stateCode": "MS",
    "postalCode": "29112",
    "coordinates": {
        "lat": -77.16213,
        "lng": -92.084824
    },
    "country": "United States"
    },
    "macAddress": "47:fa:41:18:ec:eb",
    "university": "University of Wisconsin--Madison",
    "bank": {
    "cardExpire": "05/28",
    "cardNumber": "3693233511855044",
    "cardType": "Diners Club International",
    "currency": "GBP",
    "iban": "GB74MH2UZLR9TRPHYNU8F8"
    },
    "company": {
    "department": "Engineering",
    "name": "Dooley, Kozey and Cronin",
    "title": "Sales Manager",
    "address": {
        "address": "263 Tenth Street",
        "city": "San Francisco",
        "state": "Wisconsin",
        "stateCode": "WI",
        "postalCode": "37657",
        "coordinates": {
        "lat": 71.814525,
        "lng": -161.150263
        },
        "country": "United States"
    }
    },
    "ein": "977-175",
    "ssn": "900-590-289",
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
    "crypto": {
    "coin": "Bitcoin",
    "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
    "network": "Ethereum (ERC20)"
    },
    "role": "admin"
}
```

for doing mutations

https://beeceptor.com/


# build info

```
PS F:\VS-Code\frontend-journey\01-nextjs-proj> bun next build
   ▲ Next.js 16.0.3 (Turbopack, Cache Components)
   - Environments: .env.local
   - Experiments (use with caution):
     · serverActions

   Creating an optimized production build ...
 ✓ Compiled successfully in 65s
 ✓ Finished TypeScript in 12.3s
 ✓ Collecting page data using 7 workers in 11.0s    
 ✓ Generating static pages using 7 workers (11/11) in 2.9s
 ✓ Finalizing page optimization in 15.1ms

Route (app)
┌ ○ /
├ ○ /_not-found
├ ƒ /api/auth/me
├ ƒ /api/products
├ ƒ /api/url
├ ○ /error/misconfigured-auth
├ ◐ /home
├ ◐ /home-v2
└ ○ /home/state


ƒ Proxy (Middleware)

○  (Static)             prerendered as static content
◐  (Partial Prerender)  prerendered as static HTML with dynamic server-streamed content
ƒ  (Dynamic)            server-rendered on demand
```