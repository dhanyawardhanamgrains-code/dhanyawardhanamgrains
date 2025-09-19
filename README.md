# Dhanyawardhanam Grains - Premium Rice Processing Company

A modern, responsive website for Dhanyawardhanam Grains Pvt Ltd, showcasing their premium rice processing capabilities, products, and services. Built with React, Vite, and Tailwind CSS.

## 📋 Project Overview

Dhanyawardhanam Grains is a premium rice processing company founded in December 2024, specializing in advanced parboiling technology and high-quality rice varieties. This website serves as a comprehensive digital platform to showcase their products, processing capabilities, and company information.

### Key Features
- **Responsive Design**: Optimized for all device sizes (mobile, tablet, desktop)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Components**: Swiper carousels, hover effects, and smooth scrolling
- **SEO Optimized**: Semantic HTML structure and proper meta tags
- **Performance Optimized**: Fast loading with Vite build system

## 🚀 Setup Instructions

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dhanyawardhanam
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production
```bash
npm run build
# or
yarn build
```

### Preview Production Build
```bash
npm run preview
# or
yarn preview
```

## 📁 Project Structure

```
dhanyawardhanam/
├── public/
│   └── logo.svg
├── src/
│   ├── assets/                 # Static assets
│   │   ├── icon/              # SVG icons
│   │   ├── process/           # Process step images
│   │   ├── about.png          # About section image
│   │   ├── Hero.jpg           # Hero background
│   │   └── logo.svg           # Company logo
│   ├── components/            # Reusable components
│   │   ├── Footer/            # Footer component
│   │   ├── HeroTiles/         # Hero statistics tiles
│   │   ├── NavBar/            # Navigation bar
│   │   └── StepSlide/         # Process step slide component
│   ├── data/                  # Centralized data files
│   │   ├── about.js           # About section data
│   │   ├── benefits.js        # Benefits data
│   │   ├── contact.js         # Contact information
│   │   ├── footer.js          # Footer links
│   │   ├── hero.js            # Hero tiles data
│   │   ├── process.js         # Process steps data
│   │   └── products.js        # Products data
│   ├── sections/              # Main page sections
│   │   ├── About/             # About company section
│   │   ├── Benefits/          # Health benefits section
│   │   ├── Contact/           # Contact form section
│   │   ├── Hero/              # Hero/landing section
│   │   ├── Process/           # Processing steps section
│   │   └── Products/          # Products showcase section
│   ├── App.jsx                # Main application component
│   ├── App.css                # Global application styles
│   ├── index.css              # Base styles and Tailwind imports
│   └── main.jsx               # Application entry point
├── package.json               # Project dependencies and scripts
├── tailwind.config.js         # Tailwind CSS configuration
├── vite.config.js             # Vite build configuration
└── README.md                  # Project documentation
```

## 🎯 Section Overview

### 1. **Hero Section** (`/src/sections/Hero/`)
- **Purpose**: Main landing area with company tagline and key statistics
- **Features**: 
  - Compelling headline: "Nurturing Tradition, Delivering Quality"
  - Interactive statistics tiles (4+ Years Experience, 100% Quality Assured, etc.)
  - Responsive design with background image

### 2. **Products Section** (`/src/sections/Products/`)
- **Purpose**: Showcase different rice varieties and processing types
- **Features**:
  - 4 main product categories (Basmati Rice, Premium Varieties, IR 64 & Others, Brown Rice)
  - Detailed variety listings and processing types
  - Card-based layout with hover effects

### 3. **Process Section** (`/src/sections/Process/`)
- **Purpose**: Demonstrate the 8-step rice processing workflow
- **Features**:
  - Interactive Swiper carousel with process steps
  - Detailed information about each processing stage
  - Equipment specifications and capacity details
  - Responsive slide navigation

### 4. **Benefits Section** (`/src/sections/Benefits/`)
- **Purpose**: Highlight health and nutritional benefits of parboiled rice
- **Features**:
  - 9 key health benefits with detailed descriptions
  - Grid layout optimized for different screen sizes
  - Call-to-action button for inquiries

### 5. **About Section** (`/src/sections/About/`)
- **Purpose**: Company information, leadership, and certifications
- **Features**:
  - Company story and founding details
  - Leadership team profiles with contact information
  - Legal documentation and certifications
  - "What Makes Us Different" feature highlights

### 6. **Contact Section** (`/src/sections/Contact/`)
- **Purpose**: Contact information and inquiry form
- **Features**:
  - Contact details (address, phone, email, support)
  - Business hours information
  - Comprehensive contact form with validation
  - Responsive form layout

### 7. **Footer** (`/src/components/Footer/`)
- **Purpose**: Site navigation and company information
- **Features**:
  - Quick links navigation
  - Product categories
  - Certifications and legal details
  - Copyright and policy links

## 🔄 Application Flow

### User Journey
1. **Landing**: Users arrive at the Hero section with compelling messaging
2. **Product Discovery**: Browse through different rice varieties and processing types
3. **Process Understanding**: Learn about the 8-step processing methodology
4. **Benefits Recognition**: Understand health and nutritional advantages
5. **Company Trust**: Learn about leadership, certifications, and company values
6. **Contact Action**: Reach out through contact form or direct contact information

### Technical Flow
1. **Initial Load**: `main.jsx` renders `App.jsx`
2. **Component Rendering**: Each section component renders independently
3. **Data Management**: Components import data from centralized `/src/data/` files
4. **Responsive Behavior**: CSS media queries adapt layout for different screen sizes
5. **Interactive Elements**: Swiper carousels and hover effects enhance user experience

### Data Flow
```
Data Files (/src/data/) → Section Components → UI Rendering
```

## 🛠️ Technologies Used

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.2
- **Styling**: Tailwind CSS 4.1.13
- **Carousel**: Swiper 12.0.1
- **Development**: ESLint for code quality
- **Package Manager**: npm/yarn

## 📱 Responsive Design

The application is built with a mobile-first approach:
- **Mobile (< 768px)**: Single column layouts, stacked components
- **Tablet (768px - 1023px)**: 2-column grids, optimized spacing
- **Desktop (1024px+)**: Multi-column layouts, full feature set

## 🎨 Design System

- **Color Palette**: Green (#76A63F) primary, with complementary colors
- **Typography**: Poppins font family for modern, clean appearance
- **Spacing**: Consistent rem-based spacing system
- **Components**: Reusable, modular component architecture

## 📈 Performance Features

- **Optimized Images**: Properly sized and compressed assets
- **Lazy Loading**: Images load as needed for better performance
- **Code Splitting**: Modular component structure for efficient bundling
- **CSS Optimization**: Tailwind CSS for minimal bundle size

## 🔧 Development Guidelines

### Code Organization
- **Components**: Each component has its own folder with JSX and CSS files
- **Data**: Centralized data management in `/src/data/` directory
- **Assets**: Organized by type (icons, images, etc.)
- **Styling**: Component-specific CSS with global Tailwind utilities

### Best Practices
- **Semantic HTML**: Proper use of HTML5 semantic elements
- **Accessibility**: Alt text, ARIA labels, and keyboard navigation
- **Performance**: Optimized images and efficient rendering
- **Maintainability**: Clean, documented code structure

---

## 👨‍💻 Developer

**Developed by Sachin Pal**

---

*This project represents a modern, professional web presence for Dhanyawardhanam Grains, showcasing their commitment to quality and innovation in the rice processing industry.*