# ✈️ Google Flights Clone (React + Vite + TailwindCSS)

A modern, responsive flight search interface inspired by [Google Flights](https://www.google.com/flights). This project is built with **React**, **Vite**, and **TailwindCSS**, and fetches real flight data using the [Sky Scrapper API](https://rapidapi.com/apiheya/api/sky-scrapper).

---

## 📸 Demo

https://www.loom.com/share/2f2d298d96b347d1a8a02f2fc9245698

---

## ✨ Features

- Responsive UI for desktop and mobile
- Flight search form (origin, destination, date)
- Styled using TailwindCSS
- Built with React and Vite for speed and modularity
- API integration via Sky Scrapper (in progress)

---

## 🚧 TODO

- [ ] Display flight results from API (solve the captcha issue)
- [ ] Add date picker UI
- [ ] Loading and error states
- [ ] Form validation

---

## 🛠️ Getting Started

### Prerequisites

- Node.js >= 16
- A RapidAPI key for Sky Scrapper

### Installation

```bash
git clone https://github.com/vitorgoathik/google-flights-clone.git
cd google-flights-clone
cd client
npm install
cd ..
cd server
npm install
```

### Running the app

go to /client and 

```bash
npm run dev
```

### API setup

Create a .env file in the server folder.

Add your RapidAPI key:

```bash
VITE_RAPID_API_KEY=key
```

### Running the server

go to /server and

```bash
node index.js
```

## License

MIT