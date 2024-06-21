# FoodMine-MERN App

FoodMine is a comprehensive food ordering application built using the MERN stack (MongoDB, Express, React, and Node.js). This application allows users to browse food items, add them to their cart, and place orders. It also includes user authentication, profile management, and order tracking.

## Hosted Link: https://foodmine-mern-app.onrender.com/

## Features

1. **User Authentication**: Login and registration functionalities.
2. **Food Browsing**: Users can browse through different food items.
3. **Search and Filter**: Search functionality and tag-based filtering.
4. **Order Management**: Users can add food items to their cart, place orders, and track them.
5. **Profile Management**: Users can update their profile and change their password.
6. **Admin Features**: Admin can manage food items and view all orders.

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/foodmine-mern.git
    cd foodmine-mern
    ```

2. Install dependencies:

    ```bash
    npm run prebuild
    ```

3. Start the development server:

    ```bash
    npm start
    ```

## Project Structure

### Frontend

- `Header.js`: The header component with navigation links.
- `HomePage.js`: The homepage displaying food thumbnails.
- `AppRoutes.js`: Manages the routing of the application.
- `data.js`: Contains sample data for foods and tags.
- `foodService.js`: Provides functions to interact with the backend API for food-related operations.
- `Thumbnails.js`: Component to display food thumbnails.
- `StarRating.js`: Component to display star ratings.
- `Search Component`: Component to search for food items.
- `Tags Component`: Component to filter food items by tags.
- `FoodPage Component`: Component to display details of a single food item.
- `Cart Page Component`: Component to manage the user's cart.
- `NotFound Component`: Component to display a 404 error.

### Backend

- `server.js`: Main server file.
- `food.router.js`: Router for food-related API endpoints.
- `user.router.js`: Router for user-related API endpoints.
- `order.router.js`: Router for order-related API endpoints.
- `FoodModel.js`: Mongoose model for food items.
- `UserModel.js`: Mongoose model for users.
- `OrderModel.js`: Mongoose model for orders.
- `database.config.js`: Configuration for connecting to MongoDB.
- `auth.middleware.js`: Middleware for user authentication.

## Detailed Steps

### Adding Header

1. **Add `Header.js`**
2. **Use `Header` in `App.js`**
3. **Install `react-router-dom` in frontend**
4. **Add `header.module.css`**
5. **Use `BrowserRouter` inside `index.js`**
6. **Update `Header.js`**
7. **Update `header.module.css`**

### Adding Thumbnails

1. **Add `HomePage` component**
2. **Add `AppRoutes` component**
3. **Use `AppRoutes` in `App.js`**
4. **Add `data.js`**
5. **Add food images**
6. **Add `foodService.js`**
7. **Update `HomePage.js`**
8. **Add Reducer**
9. **Load foods**
10. **Add `Thumbnails.js`**
11. **Add CSS file**
12. **Add image**
13. **Add title**
14. **Add favorite icon**
15. **Add `StarRating.js`**
16. **Add star images**
17. **Add CSS**
18. **Add origins**
19. **Add cook time**
20. **Add `Price.js`**
21. **Update CSS file**

### Adding Search

1. **Add search route to `AppRoutes.js`**
2. **Add search function to `foodService.js`**
3. **Use search inside `HomePage.js`**
4. **Add search component**
5. **Add CSS**

### Adding Tags Bar

1. **Showing the Tags**:
    - Add `sample_tags` to `data.js`
    - Add `getAllTags` function to `foodService.js`
    - Add `Tags` component
    - Add CSS
    - Use `Tags` component in `HomePage.js`
2. **Showing Foods by Tag**:
    - Add tag route to `AppRoutes.js`
    - Add `getAllByTag` function to `foodService.js`
    - Use tag param in `HomePage.js`

### Food Page

1. **Create `FoodPage` component**
2. **Add route to `AppRoutes.js`**
3. **Add `getById` function to `foodService.js`**
4. **Update `FoodPage` component**
5. **Load food**
6. **Create template**
7. **Add CSS**

### Cart Page

1. **Create `CartPage` component**
2. **Create CSS**
3. **Add cart route to the routes**
4. **Create `useCart` hook**
5. **Add `CartProvider` to `index.js`**
6. **Initialize cart with sample foods**
7. **Update `CartPage` component**
8. **Use `useCart` hook**
9. **Add title component**
10. **Add JSX**
11. **Add CSS**
12. **Update `useCart` hook**
13. **Add to cart**
14. **Remove from cart**
15. **Change quantity**
16. **Saving to LocalStorage**
17. **In `FoodPage`, use `useCart` for add to cart buttons**
18. **In `Header`, use `useCart` for cart total count**

### Not Found

1. **Create `NotFound` component**
2. **Add CSS**
3. **Add Not Found to**:
    - Home Page
    - Food Page
    - Cart Page
4. **Fixing search issue**

### Connect to Backend

1. **Create `backend` folder**
2. **Initialize NPM project**
3. **Copy `data.ts` to `backend/src`**
4. **Install express and cors**
5. **Create `.gitignore`**
6. **Create `server.js`**
7. **Add & config express**
8. **Add & config cors**
9. **Add food router**
10. **Add `jsconfig.json`**
11. **Add APIs**
12. **Install nodemon**
13. **Add `dev` script into the `package.json`**
14. **Run `npm run dev`**
15. **Add axios package**
16. **Create `axiosConfig.js` file**
17. **Connect food service to the APIs**

### Login Page

**Backend**:
1. **Create user router**
2. **Install jsonwebtoken**
3. **Add login API**
4. **Add `sample_users` to `data.js`**
5. **Add `httpStatus.js`**
6. **Add `generateTokenResponse` function**
7. **Add user router to `server.js`**

**Frontend**:
1. **Create user service**
2. **Add `getUser` function**
3. **Add `login` function**
4. **Add `logout` function**
5. **Install react-toastify**
6. **Create `useAuth` hook**
7. **Add user state**
8. **Add login function**
9. **Add logout function**
10. **Create `LoginPage` component**
11. **Add to `AppRoutes.js`**
12. **Create custom components**
    - Input Container
    - CSS
    - Input
    - CSS
    - Button
    - CSS
13. **Add `useAuth` to the `Header` component**

### Connecting MongoDB

**Installation**:
1. **Install MongoDB Community**
    - Windows
    - MacOS

**Coding**:
1. **Install mongoose**
2. **Add `UserModel`**
3. **Add `FoodModel`**
4. **Add `.env` file**
5. **Install dotenv**
6. **Add `MONGO_URI`**
7. **Add to `.gitignore`**
8. **Add `database.config.js`**
9. **Connect to MongoDB**
10. **Seed users**
11. **Install bcryptjs for password hashing**
12. **Seed foods**
13. **Update `user.router` (using `UserModel`)**:
    - Login API
    - `generateTokenResponse`
14. **Update `food.router` (using `FoodModel`)**:
    - Root API (loading all foods)
    - Tags API
    - Search API
    - FoodId API (finding food by ID)
15. **Fix image URL in**:
    - Thumbnails component
    - Food Page component
    - Cart Page component

### Register Page

1. **Add `RegisterPage` component**
2. **Add to `AppRoutes`**
3. **Add link to login page**
4. **Add CSS**
5. **Add '/register' API to `user.router.js`**
6. **Add register function in userService**
7. **Add register function in `useAuth` hook**
8. **Add to Register page**

### Loading

1. **Create `useLoading` hook**
2. **Add `LoadingProvider` to `index.js`**
3. **Create `Loading` component**
4. **Add to `App.js`**
5. **Add image**
6. **Add CSS**
7. **Create loading interceptor**

### Checkout Page

1. **Fixing loading problem**
2. **Create `CheckoutPage` component**
3. **Create `AuthRoute`**
4. **Add to routes**
5. **Add CSS**
6. **Create order items list**
7. **Create maps component**
8. **Install leaflet & react-leaflet**
9. **Add images to public folder**
10. **Fixing header menu problem with map**
11. **Create order router**
12. **Create auth middleware**
13. **Add UNAUTHORIZED HTTP status**
14. **Add to order router**
15. **Create order model**
16. **Create order status**
17. **Add to `server.js`**
18. **Connecting frontend to backend**:
    - Create order service
    - Add create function
    - Create auth interceptor
    - Add to `index.js`

### Payment Page

1. **Create `PaymentPage` component**
2. **Add to routes**
3. **Add CSS**
4. **Update order router**
5. **Add `newOrderForCurrentUser`**
6. **Add pay API**
7. **Create `PaypalButtons` component**
8. **Install `@paypal/react-paypal-js`**
9. **Add `clearCart` to `useCart`**
10. **Get clientId**
11. **Create sandbox user for testing**

### Order Track Page

1. **Create `OrderTrackPage`**
2. **Add to routes**
3. **Add CSS**
4. **Create `DateTime` component**
5. **Complete**:
    - Map
    - Fixing marker icon issue
6. **Update order router**:
    - Add `track/:id` API
7. **Add to orderService**

### Profile Page

1. **Create `ProfilePage` component**
2. **Add CSS**
3. **Update profile**
4. **Create `ChangePassword` component**
5. **Update `useAuth` hook**:
    - Add `updateProfile` function
    - Add `changePassword` function
6. **Update userService**:
    - Add `updateProfile` function
    - Add `changePassword` function
7. **Update user router**:
    - Add `updateProfile` API
    - Add `changePassword` API

### Orders Page

1. **Create `OrdersPage`**
2. **Add to routes**
3. **Add CSS**
4. **Update order service**:
    - Add `getAll` function
    - Add `getAllStatus` function
5. **Update order router**:
    - Add `/:status?`
    - Add `/allStatus/:id`

## Technology Stack

- **Frontend**: React, React Router, Axios, React Toastify, Leaflet, React Leaflet
- **Backend**: Node.js, Express.js, Mongoose, MongoDB, JWT, bcryptjs
- **Styling**: CSS Modules
- **State Management**: React hooks (useState, useEffect, useReducer, useContext)

## Screenshots

![s1](https://github.com/Rachitgarg56/foodmine-mern-app/assets/112542259/97490685-58b2-4797-9be0-1fe0180053ec)
![s2](https://github.com/Rachitgarg56/foodmine-mern-app/assets/112542259/44d600ca-f928-448a-8de9-984fc45240eb)
![s3](https://github.com/Rachitgarg56/foodmine-mern-app/assets/112542259/1368a648-7992-4719-ae87-906c83698bf7)
![s4](https://github.com/Rachitgarg56/foodmine-mern-app/assets/112542259/df1fba8e-8636-4a59-98a9-e0e102f7ae8c)
![s5](https://github.com/Rachitgarg56/foodmine-mern-app/assets/112542259/8b79f6b9-2224-4c84-82dc-216612d886ce)
![s6](https://github.com/Rachitgarg56/foodmine-mern-app/assets/112542259/2f9d6ce9-9d32-47c4-a946-eddd64afabf9)
![s7](https://github.com/Rachitgarg56/foodmine-mern-app/assets/112542259/5ec0d95b-d6f0-497d-bfde-ed95feb35d68)


## License

This project is licensed under the MIT License.

## Acknowledgements

- Thanks to the MERN stack community for the resources and support.
- Special thanks to all the contributors and testers.

## Contact

For more information, contact [Rachit Garg](mailto:rachitgarg56@gmail.com).

