You can visit the working prototype site on: [PLT Shopping Cart](https://alexcsanyi.github.io/shopping_cart/)

## App.js
#### Event Handlers:
`handleChangeColour`: sort items by colour
`handleAddToCart`: adds items to cart and increases quantity, if a type of item is already in the basket only the quantity of that item changes, it sotres it in localStorage so after refresh the data persits
`handleRemoveFromCart`: decreases the quantity and once we reach 0 it removes this type of item from the cart, updates state and localStorage
`handleDeleteFromCart`: deletes item entirely from cart regardless of quantity and returns count to 0, updates localStorage

## Listings.js
Lists items, img, name, price and quantity in basket

## Filter.js
Responsible for filtering takes in `handleChangecolour` as a prop

## Basket.js
Responsible for showing how many types of items we have in the basket and what the total is (I would list the names and quantity of each of the items here).
Displayes the total amount.
If there is an item in the basket a check-out button is available -> takes the user to the check-out popup window

## Popup.js
Just a thank you popup window that is visible when the checkout button is clicked and allows the user to return

## utils/currency.js
Just a small utility function to handle the display of the prices and total

# Please let me know any feedback and if you have any questions feel free to contact me anytime
#### Thank you :+1:


##
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
