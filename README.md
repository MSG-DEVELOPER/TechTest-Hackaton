# Prova Frontend Hackató - Mini Pokédex

**Project deployed:** [https://tech-test-hackaton.vercel.app/](https://tech-test-hackaton.vercel.app/)

## Description
This is a Mini Pokédex web application built for a frontend hackathon. The app allows users to browse, search, and filter the first 50 Pokémon, view their details, and interact with their types.

**Key features:**
- Retrieve the first 50 Pokémon.
- Display Pokémon name, image, and types as labels.
- Search Pokémon by name with partial matches (case-insensitive) and display a message if none are found.
- Filter Pokémon by type with horizontal scrolling if there are many types.
- Pokémon detail view includes:
  - Main image 
  - Name and types
  - Weight and height
  - Button to return to the main list

## Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)
- Modern browser (Chrome, Edge, Firefox, etc.)

## Installation and Running the Project

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd vite-project
   ```
2. Run the project locally:
  ```bash
  npm run dev
   ```
3. Open your browser:
  ```bash
  http://localhost:5173
   ```


## Project Structure

```bash
vite-project/
├─ src/
│  ├─ api/                 # API calls
│  ├─ components/          # React components (Header, RenderZone, SearchBar, etc.)
│  ├─ pages/               # Page components (HomePage, DetailPage)
│  ├─ utils/               # Utility functions (e.g., getTypeColor)
│  └─ index.tsx            # React entry point
├─ public/                 # Static assets
├─ package.json
├─ vite.config.ts
└─ tsconfig.json


```

## Recommended Manual Tests
* Check that the first 50 Pokémon are displayed correctly.

* Verify Pokémon names, images, and type labels.

* Test the search bar for partial and case-insensitive matches.

* Test the type filter and horizontal scroll if necessary.

* Open a Pokémon detail page and check image, name, type, weight, height, and back button.

* Ensure proper navigation between pages.


