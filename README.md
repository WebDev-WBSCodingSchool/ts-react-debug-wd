# Events SPA + TypeScript

This application should feel familiar. You worked on creating a front end app with React as a client to the [Events API](https://github.com/WebDev-WBSCodingSchool/events-api). Today we have a new challenge: Add type annotations to the app until the build process throws no errors!

You'll see, this app works but since it lacks type annotations, the TypeScript compiler is not happy. Your job is to add those annotations so scaling this app and adding new features is better for you as a developer and less error prone.

## Setup

1. Make sure to setup the [Events API](https://github.com/WebDev-WBSCodingSchool/events-api), you'll need that app running and it's base URL, e.g. `http://localhost:3001/api`
2. Clone this repo into your local computer
3. Create a `.env.development.local` file with a `VITE_EVENTS_API_URL` pointing to the base URL of your events API
4. Install dependencies and spin up the development server
5. The app should work!

## Task

Stop the development server and try to build the app with `npm run build` Aaaaaand... it doesn't work 👁️👄👁️

`TS2339` here, `TS2322` over there. You need to fix those errors. How? well go to each line on each file mentioned in the terminal output and add the pertinent type annotations.

If you can run the build command without errors, you're a done!

P.S. Avoid using `any` or the `// @ts-expect-error` directive because what's the point? You want the application to truly be resilient and scalable!

Have fun!
