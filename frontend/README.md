# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


pdfs-to-podcast/
│
├── frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   │    ├── logo.png
│   │   │
│   │   ├── components/
│   │   │    ├── Navbar.jsx
│   │   │    ├── UploadPDF.jsx
│   │   │    ├── PodcastCard.jsx
│   │   │    ├── Loader.jsx
│   │   │
│   │   ├── pages/
│   │   │    ├── Home.jsx
│   │   │    ├── Login.jsx
│   │   │    |-- History.jsx
|   |   |
│   │   ├── services/
│   │   │    ├── api.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
│
├── backend/
│   │
│   ├── controllers/
│   │     ├── pdfController.js
│   │     ├── podcastController.js
│   │
│   ├── routes/
│   │     ├── pdfRoutes.js
│   │     ├── podcastRoutes.js
│   │
│   ├── middleware/
│   │     ├── uploadMiddleware.js
│   │
│   ├── models/
│   │     ├── Podcast.js
│   │
│   ├── uploads/
│   │     ├── pdf/
│   │
│   ├── generatedAudio/
│   │     ├── podcast1.mp3
│   │
│   ├── utils/
│   │     ├── pdfExtractor.js
│   │     ├── openaiService.js
│   │     ├── textToSpeech.js
│   │
│   ├── config/
│   │     ├── db.js
│   │
│   ├── .env
│   ├── server.js
│   └── package.json
│
│
├── README.md
├── .gitignore
└── package.json