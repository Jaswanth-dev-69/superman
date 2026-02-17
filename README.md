# Kal-El | A Cinematic Superman Experience

A modern, comprehensive tribute website dedicated to the Man of Steel. This project leverages advanced web technologies to create an immersive, cinematic experience that explores the journey of Kal-El, from Smallville to the Fortress of Solitude.

## 🌟 Features

*   **Cinematic "Heroic" Theme**: A custom Tailwind CSS palette (`hero-black`, `hero-steel`, `hero-gold`, `hero-red`) designed to evoke the Snyderverse aesthetic.
*   **Immersive Navigation**:
    *   **Glassmorphic Navbar**: Dynamically adapts as you scroll.
    *   **Smooth Scroll**: Seamless transitions between sections.
*   **Interactive Sections**:
    *   **Home**: High-impact hero section with video backgrounds and GSAP animations.
    *   **Clark (Smallville)**: Parallax storytelling elements exploring his origins.
    *   **The Fortress**: A WebGL-powered **Infinite 3D Menu** archiving Superman's suits. Includes a "Hero Reveal" interaction (hover the Superman emoji 🦸‍♂️).
    *   **Legacy**: A mouse-following **Image Trail** effect showcasing iconic moments.
*   **Advanced Animations**: Powered by **GSAP** (ScrollTrigger, Flip) and **React Bits**.

## �️ Tech Stack

*   **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
*   **Animation**:
    *   [GSAP](https://greensock.com/gsap/) (GreenSock Animation Platform)
    *   [React Spring](https://www.react-spring.dev/)
    *   [React Bits](https://reactbits.dev/) (Image Trail)
*   **Graphics/WebGL**: Custom WebGL shaders for the Infinite Menu component.

## 🚀 Getting Started

### Prerequisites

*   Node.js (v18+ recommended)
*   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/Jaswanth-dev-69/superman.git
    cd superman
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📂 Project Structure

```
src/
├── components/
│   ├── InfiniteMenu.jsx    # WebGL 3D Archive Menu
│   ├── ImageTrail.jsx      # Mouse-follow image effect
│   └── Navbar.jsx          # Responsive, glassmorphic navigation
├── pages/
│   ├── Home.jsx            # Hero section
│   ├── Clark.jsx           # Origin story section
│   ├── Fortress.jsx        # Suit archives
│   └── LastPage.jsx        # Legacy/Ending section
├── index.css               # Tailwind theme configuration
└── App.jsx                 # Main layout and routing
```

## 🎨 Color Palette

The project uses a custom "Heroic" palette defined in `index.css`:

*   **Backgrounds**: `#070A0F` (Hero Black), `#0D1321` (Hero Ink)
*   **Accents**: `#B08D2B` (Hero Gold), `#7A0C12` (Hero Red)
*   **Text**: `#E6E9EF` (Hero Text)

---

Developed with 💥 by Jaswanth
