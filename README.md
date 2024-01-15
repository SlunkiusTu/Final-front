Baigiamasis projektas

Šio projekto metu reikės sukurti internetinį forumą naudojant React, NodeJS Express ir MongoDB arba MySQL. Forumo tikslas - leisti užduoti klausimus, į juos atsakinėti bei žymėti patinkančius arba nepatinkančius atsakymus. Galite įsivaizduoti kažką panašaus į https://stackoverflow.com/questions, tik jums rekės padaryt supaprastintą versiją.

Funkcionalumas:
- Registruotis
- Prisijungti
- Užduoti naują klausimą (tik prisijungus)
- Ištrinti klausimą (tik prisiijungus)
- Atsakyti į užduotą klausimą (tik prisijungus)
- Ištrinti atsakymą (tik prisijungus)
- Žymėti/atžymėti patinkačius ir nepatinkančius atsakymus (like/dislike) (tik prisijungus) 
- Peržiūrėti klausimų sąrašą.
- Filtruoti atsakytus arba neatsakytus klausimus
- Peržiūrėti klausimų atsakymus

Forumo projektas sudeda iš frontend'o ir backend'o dalių:
Backend'e naudosime NodeJS Express, MongoDB arba MySQL ir kelis papildomus npm paketus, kuries palengvins darbą.
Frontend'e naudosime React. Kaip ir backend'e node express, taip pat galima naudoti papildomjus npm paketus.

### Frontend'as

Frontend'as neturi nustatyto dizaino , kurį reikia atkartoti. Tačiau jum tenka sunkesnė užduotis - patiems sugalvoti ir sukurti puslapio dizainą. Svarbiausia išpildyti visus funkcinius reikalavimus ir validuoti vartotojo įvedamus duomenis.

***

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
