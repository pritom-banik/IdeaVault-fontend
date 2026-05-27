# IdeaVault

IdeaVault is a modern web platform for sharing, validating, and engaging with startup ideas. Users can explore ideas, bookmark promising concepts, comment and interact with posts, and publish their own ideas. The platform emphasizes collaboration, feedback, and idea refinement rather than booking or scheduling.

## Project Theme

IdeaVault is designed as a community-driven idea validation platform. It helps users:

- discover trending startup ideas
- post and share concept details
- provide feedback through comments
- manage ideas and bookmarks
- update profile information and monitor interaction history

## Key Features

- User authentication and session management
- Registration with email/password and social sign-in support
- Idea browsing and detail view
- Create and share new ideas
- View and manage personal ideas
- Bookmark ideas for later validation and review
- Comment management and interaction history
- Profile editing and logout
- Dark/light theme toggle
- Responsive navigation and mobile-friendly UI

## Pages and Responsibilities

### `/` — Home
- Shows the landing experience with hero and introductory sections
- Displays trending or highlighted idea cards
- Includes charts and startup community statistics


### `/ideas` — Ideas Listing
- Lists available ideas from the backend


### `/ideas/[id]` — Idea Details
- Displays a single idea with full details
- Shows problem statement, proposed solution, detailed description, tags, stats, and author info


### `/shareideas` — Share Ideas
- Displays a form to submit a new startup idea
- Collects title, short description, problem, solution, category, tags, budget, image, audience, and detailed description
- Sends idea data to the backend API

### `/myideas` — My Ideas
- Shows ideas created by the current signed-in user
- Allows users to manage their own shared ideas

### `/bookmarks` — My Bookmarks
- Displays bookmarked ideas for the signed-in user
- Allows users to remove bookmarks
- Fetches bookmarks from the backend 

### `/interactions` — My Interactions
- Shows the user's comment history and interactions
- Supports editing and deleting comments


### `/profile` — Profile
- Shows the signed-in user's profile details
- Allows updating name and profile image
- Provides quick links to My Ideas, Share Ideas, Bookmarks, and Interactions


### `/login` — Login
- Displays the login form from
- Authenticates via Better Auth and redirects after login and also Google social login

### `/registration` — Registration
- Displays the signup form from 
- Supports email/password registration and Google social login
- Validates password strength before signup

## External Libraries and Dependencies

### Core Framework
- `next` — React framework for server-side rendering and routing
- `react`, `react-dom` — React UI library
- `tailwindcss` — Utility-first CSS framework
- `daisyui` — Tailwind component utilities


### UI and Styling
- `@heroui/react` — UI components such as Modal, Button, Dropdown, Avatar
- `@heroui/styles` — styles for Hero UI components
- `react-icons` — icon library
- `react-toastify` — toast notifications
- `next-themes` — theme switching (dark/light)

### Data Visualization and UX
- `react-fast-marquee` — animated marquees and featured sections
- `recharts` — charts and data visualization
- `swiper` — carousel/swiper UI

### Authentication and Backend
- `better-auth` — authentication client and session handling
- `@better-auth/mongo-adapter` — MongoDB adapter for Better Auth
- `mongodb` — MongoDB driver for backend connectivity

## Important Project Files

- `src/app/layout.js` — root layout, theme provider, navbar, footer, and toast container
- `src/app/page.js` — home page composition
- `src/app/ideas/page.jsx` — list of published ideas
- `src/app/ideas/[id]/page.jsx` — idea details page
- `src/app/shareideas/page.jsx` — idea submission form
- `src/app/myideas/page.jsx` — current user ideas
- `src/app/bookmarks/page.jsx` — user bookmarks
- `src/app/interactions/page.jsx` — user comments / interactions
- `src/app/profile/page.jsx` — profile display and update
- `src/components/Navbar.jsx` — navigation links and auth menu
- `src/components/ThemeProvider.jsx` — theme context provider
- `src/lib/auth-client.js` — frontend auth client integration
- `src/lib/auth.js` — server-side auth helper functions

## Environment Variables




##  Environment Variables

The `.env` file structure :

```env
API_ENDPOINT=backend_api_url
NEXT_PUBLIC_API_ENDPOINT=public_api_url

BETTER_AUTH_SECRET=better_auth_secret
BETTER_AUTH_URL=app_url

MONGODB_URI=mongodb_connection_string

GOOGLE_CLIENT_ID=google_client_id
GOOGLE_CLIENT_SECRET=google_client_secret
```



## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Setup the Backend Server. Link :

```bash
https://github.com/pritom-banik/IdeaVault-backend.git
```

2. Create a `.env` file with backend API endpoint values.

3. Run the development server:

```bash
npm run dev
```

4. Open `http://localhost:3000`

##  Live Demo

 Frontend Live Link:  
https://idea-vault-fontend.vercel.app/

[![Live Site](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge&logo=vercel)](https://idea-vault-fontend.vercel.app/)



##  Backend Repository

Backend Source Code:  
https://github.com/pritom-banik/IdeaVault-backend


[![Backend Repo](https://img.shields.io/badge/Backend-GitHub-black?style=for-the-badge&logo=github)](https://github.com/pritom-banik/IdeaVault-backend)


---

- Pritom Banik
 (May 26, 2026)
 
