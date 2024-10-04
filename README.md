# SnapShop - React

**SnapShop** is an e-commerce application built using React with Vite and powered by the [FakeStore API](https://fakestoreapi.com/). This app showcases product listings, allows users to view product details, add items to the wishlist and cart, and proceed through a mock checkout flow. Authentication is simulated with credentials from the FakeStore API.

## Features

- **Responsive Design**: Works across all screen sizes.
- **Product Management**: Fetch and display products, add to cart and wishlist.
- **User Account**: View account details on the Account page.
- **Authentication**: Login only (based on FakeStore API).
- **POST Requests**: Optional and logged to the console.
- **Protected Routes**: Only logged-in users can place orders or access My Orders.
- **Mock Checkout**: Simulate checkout, with order logging.
- **My Orders & Order Details**: View past orders and order-specific details.

## Tech Stack

- **React**: Frontend framework
- **Vite**: Build tool for fast development
- **TypeScript**: Strict type checking
- **Tailwind CSS**: For styling the components
- **React Hook Forms**: Form management
- **Yup**: For form validation
- **React Router**: For routing between pages
- **Redux & RTK Query**: State management and HTTP requests

## Getting Started

### Prerequisites

- Node.js (>= v14.0.0)
- npm or yarn installed

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/samia-nasreen/SnapShop.git

2. Install the dependencies
   ```bash
   npm install

### Running the App

   To start the development server, run:
   ```bash
   npm run dev
   ```

   This will start the app in development mode, and it will be accessible at `http://localhost:3000`.

## API Integration

The app fetches data from the [FakeStore API](https://fakestoreapi.com/) for products, categories, and user data.

- **GET Requests**: Handled using RTK Query to fetch product and user data.
- **POST Requests**: Simulated and logged to the console. No actual data is sent to the API.

## Authentication

To log in, use the credentials available in the FakeStore API documentation. For reference, you can use the following valid credentials:

- **Username**: `mor_2314`
- **Password**: `83r5^_`

## Scripts

- `npm run dev`: Start the app in development mode
- `npm run build`: Create a production build
- `npm start`: Start the production server

---

Happy coding! :)
