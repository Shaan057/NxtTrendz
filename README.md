# NxtTrendz APP

### Introduction

> Keywords: `React`, E-commerce Functionality
- Developed the frontend part of the Nxt Trendz online shopping application, which is similar to Amazon.
- This application allows users to log in, search, sort, filter, select products, and add them to the shopping cartconcepts such as authentication, state management, context, page navigation, media queries and flexbox concepts in the code by following the clean code guidelines.

### Technical Aspects
> Keywords: `Authentication`, `Validation`, `Cookies` 
- Implemented a basic authentication flow and handled common errors such as invalid username and invalid password.
- Used cookies to persist user credentials across page reloads.

### State Management and Navigation:
> Keywords: `State management`, `Navigation`, `Protected Route` Used
 - Context for state management for creating a global state to manage cart state across routes.Used React Router for navigation within the application. 
 - Additionally, implemented protected routes to control access based on user roles.`

### API Integration: 
> Keywords: API Integration 
- Integrated mock APIs for displaying data

### Clean Code Guidelines:
> Keywords: `Clean code guidelines`
- Followed clean code guidelines by maintaining a consistent folder structure and used meaningful naming conventions, such as `prefixing` event handlers with `on` and creating `reusable` components throughout the application.

### Responsiveness:
> Keywords: `Responsiveness`, 
- `Flexbox` To ensure a responsive design, used `media queries` and `flexbox` for layouting.


### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-cart-features-sm-output-v0.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-cart-features-lg-output.png)

</details>

### Refer to the video below:
- [Video](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-cart-features-output.mp4)

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Functionalities

- When an unauthenticated user tries to access the **Cart** Route, then the page navigates to **Login** Route

- Following are the features implemented

  - Feature 1

    - When an authenticated user tries to add the same product multiple times
      - The quantity of the product updates accordingly, and the count of the cart items in the header remaines same.

  - Feature 2

    - The total amount and number of items in the cart are displayed in the **Cart** Route

  - Feature 3

    - In each cart item in the cart
      - When the plus icon is clicked, then the quantity of the product is incremented by one
      - When the minus icon is clicked, then the quantity of the product is decremented by one
      - When the quantity of the product is one and the minus icon is clicked, then the respective product is removed from the cart
      - Based on the quantity of the product, the product price and the Cart Summary, i.e the total cost is updated accordingly

  - Feature 4

    - When an authenticated user clicks on the remove button, cart item is removed from the cart list

  - Feature 5

    - When an authenticated user clicks on the **Remove All** button, all the cart items are removed from the cart and [Empty Cart View](https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-cart-features-empty-cart-view.png) is displayed
  
  - Feature 6
    - When the user clicks on checkout button the payment popup opens and lets the user to input payment details/methods and ables to place order successfully.
</details>

<details>
<summary>Components Structure</summary>

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-cart-features-component-structure-breakdown.png" alt="component structure breakdown" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>


### Resources

<details>
<summary>Colors</summary>

<br/>

<div style="background-color: #0b69ff; width: 150px; padding: 10px; color: white">Hex: #0b69ff</div>
<div style="background-color: #171f46; width: 150px; padding: 10px; color: white">Hex: #171f46</div>
<div style="background-color: #616e7c; width: 150px; padding: 10px; color: white">Hex: #616e7c</div>
<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>

</details>


### Future Improvements
Keywords: `Backend` 
> Planned to develop a backend using `Node.js` and `Express.js` to replace the mock API implementation. 
- This will also allow me to have more control over the data and offer more features like user profiles and product recommendations.


### Demo

- ### [Link](https://nxtTrndzrjcbp.ccbp.tech)

- ### [Link](https://nxttrendzshaan.netlify.app/login)
