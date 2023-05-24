# Music-Instruments-Shop

## :pencil2: About The Project 

This is a web application for a Music Instruments Shop that specializes in selling and buying second-hand instruments. The web application is built using the JavaScript, the React framework for the frontend, and Node, Express and Mongoose for the backend. The application provides a user-friendly interface for customers to browse through the inventory, sell their instruments, buy instruments online, and manage their account information.


## Live-demo

**[Music-Instrument-Shop](https://music-intruments-shop-client.onrender.com/)**

## Demo Authentication :
  > account: peter@abv.bg 

  > password: 1234

##  

![APP](https://github.com/PeterMonev/Music-Instruments-App-React/blob/master/ScreenShotGit/HomeGit.PNG)

## Installation and usage

**Clone respository:**

 ```
https://github.com/PeterMonev/Music-Instruments-App-React.git

 ```

# * To run client app
   <br/>

 ```
    cd client 
    npm install
    npm start

 ```
# * To run server app


 ```    
    cd server
    npm install
    npm run dev

 ```
 
 <br/>

 # :computer:  Built With

## Front-end

- [HTML5](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/en/main)
- [Font Awesome](https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react)

## Back-end

- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [JsonWebToken](https://github.com/auth0/node-jsonwebtoken)
- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js)
- [Cookie Parser](https://github.com/expressjs/cookie-parser)
- [Cors](https://github.com/expressjs/cors)
- [Nodemon](https://github.com/remy/nodemon)

## Deployment
**[RENDER](https://render.com/)**

##

 | **Permissions for shop**    | User | Guest | 
| :--------------------------    | :---: | :---: |
| View Home page                 | ✅   | ✅   |
| View About page                | ✅   | ✅   |
| See All Offers                 | ✅   | ✅   |
| See Offer Details Page         | ✅   | ✅   |
| Search for Offer               | ✅   | ✅   |
| Create new Offer               | ✅   | ❌   |
| Edit Offer * owner             | ✅   | ❌   |
| Delete Offer * owner           | ✅   | ❌   |
| See all Comments               | ✅   | ✅   |
| Create a Comment               | ✅   | ❌   |
| Login                          | ❌   | ✅   |
| Register                       | ❌   | ✅   |
| Logout                         | ✅   | ❌   |
| Profile                        | ✅   | ❌   |

# Application Pages    

## Header 

Signed Header
![User Header](https://github.com/PeterMonev/Music-Instruments-App-React/blob/master/ScreenShotGit/Header-User.PNG)

Guest Header
![User Header](https://github.com/PeterMonev/Music-Instruments-App-React/blob/master/ScreenShotGit/Header-Guest.PNG)

## Home
![Home](https://github.com/PeterMonev/Music-Instruments-App-React/blob/master/ScreenShotGit/HomeGit.PNG)

![Home](https://github.com/PeterMonev/Music-Instruments-App-React/blob/master/ScreenShotGit/About1.PNG)


## Register
![Register](https://github.com/PeterMonev/Music-Instruments-App-React/blob/master/ScreenShotGit/Register.PNG)

Register a user inside the database with email, full name, phone number, and password. Password inside the database is hashed (with bcrypt) and both passwords must match!

After successful registration redirects to the Catalog page, with an already logged-in user.


## Login

![Login](https://github.com/PeterMonev/Music-Instruments-App-React/blob/master/ScreenShotGit/Login.PNG)

Login Page (logged out user)
Logging an already registered user with the correct email and password.

After successful login redirects to the Catalog page, with an already logged-in user.


## Logout Page (logged in user)
The logout action is available to logged-in users. Upon success, clear any session information and redirect the user to the Home page


## Catalog (guest and user)

![Catalog](https://github.com/PeterMonev/Music-Instruments-App-React/blob/master/ScreenShotGit/Catalog.PNG)

There is a search field for offer by their category.

List of all offers. Each offer shows information about the title, category, price, year, description. There is a [Detail] button which leads to details page of the chosen offer.

On bottom of Catalog Page has Paginition.

![Catalog](https://github.com/PeterMonev/Music-Instruments-App-React/blob/master/ScreenShotGit/Catalog%202.PNG)


## Details Page

![Details](https://github.com/PeterMonev/Music-Instruments-App-React/blob/master/ScreenShotGit/Details.PNG)

Logged in users and guest, should be able to view details about the offer. Clicking the Details button in a movie card should display the Details page.

If the currently logged-in user is the author of the post, the Edit and Delete buttons should be displayed, otherwise they should not be available.

Also all logged-in users can create comments they also can Edit and Delete they are comments.

Details Page has Author info for login users they can see Author Email, Full Name, Phone Number

Information about the offer:

- Offer title
- Offer category
- Offer price
- Offer year
- Offer created date
- Offer description
- Offer comments
- Offer Author Full Name
- Offer Author Phone Number
- Offer Email


## Comments Page
![Comments](https://github.com/PeterMonev/Music-Instruments-App-React/blob/master/ScreenShotGit/Comments.PNG)

Users can write comments, author on theirs commnets can edit and delete them,Guest Users can't write comments.

## Create Page (logged in user)
![Create](https://github.com/PeterMonev/Music-Instruments-App-React/blob/master/ScreenShotGit/Create.PNG)

The Create page is available to logged-in users. It contains a form for adding new offer.

Upon success, redirect the user to the Catalog page.


Delete Offer (logged in user and creator of the current offer)
Every author should be able to click over the [Delete] button - deleting the current offer from the database and the user should be redirected to the Catalog page.


## Edit Movie (creator of the current offer)
![Edit](https://github.com/PeterMonev/Music-Instruments-App-React/blob/master/ScreenShotGit/Edit.PNG)

The Edit page is available to logged-in users and it allows authors to edit their offer. Clicking the [Edit] button of a particular offer on the Details page should display the Edit page, with all fields filled with the data for the offer. It contains a form with input fields for all relevant properties. The edit operation should be done after change on any field. Upon success, redirect the user to the Details page for the current offer.

## Profile Page (logged in user)
![Profile](https://github.com/PeterMonev/Music-Instruments-App-React/blob/master/ScreenShotGit/Profile.PNG)

Logged-in users can see their profile page which shows information about their offers.

Future update: User can edin and delete they accounts.

## About Page 
![About](https://github.com/PeterMonev/Music-Instruments-App-React/blob/master/ScreenShotGit/About.PNG)


## 404
![404](https://github.com/PeterMonev/Music-Instruments-App-React/blob/master/ScreenShotGit/404.PNG)

If Guests (not logged in) trying to access а page that it should not be able to, you must redirect them to the Login page.

If Users (logged in) trying to access а page that it should not be able to, you must redirect them to the Home page.

Use the following view for invalid paths:

## Validation and Error Handling
The application should notify the users about the result of their actions.

In case of error, you should display div with class "error-message" and button has gone disabled.

## Login / Register
The Email is required and should be valid: "peter@gmail.com"
The Full Name  is required and should be at least 4 characters long.
The Phone Number is required and should be at least 5 characters long.
The password should be equal to the repeat password.

## Offer

- The **Offer tittle** is required and should be at least 3 characters long.
- The **Offer Category** is required and should seleted rigth category.
- The **Offer Addrees** is required and should be at least 10 characters long.
- The **Image Url** is required and should be valid.
- The **Price** is required and should be valid positive number.
- The **Year** is required and should be valid 1901 to 2023(to this current year).
- The **Description** is required and should be at least 10 characters long.

# Responsive Design

## Home Page

![Home](https://github.com/PeterMonev/Music-Instruments-App-React/blob/master/ScreenShotGit/ResponsiveHome1.PNG) ![Home](https://github.com/PeterMonev/Music-Instruments-App-React/blob/master/ScreenShotGit/ResponsiveHome2.PNG)![Home](https://github.com/PeterMonev/Music-Instruments-App-React/blob/master/ScreenShotGit/ResponsiveHome3.PNG)

## Login Page

![Login](https://github.com/PeterMonev/Music-Instruments-App-React/blob/master/ScreenShotGit/ResponsiveLogin.PNG)

## Register Page

![Register](https://github.com/PeterMonev/Music-Instruments-App-React/blob/master/ScreenShotGit/ResponsiveRegister1.PNG) ![Register](https://github.com/PeterMonev/Music-Instruments-App-React/blob/master/ScreenShotGit/ResponsiveRegister2.PNG)

## Catalog Page

![Catalog](https://github.com/PeterMonev/Music-Instruments-App-React/blob/master/ScreenShotGit/ResponsiveCatalog1.PNG) ![Catalog](https://github.com/PeterMonev/Music-Instruments-App-React/blob/master/ScreenShotGit/ResponsiveCatalog2.PNG)

## Details Page

![Details](https://github.com/PeterMonev/Music-Instruments-App-React/blob/master/ScreenShotGit/ResponsiveDetails.PNG) ![Details](https://github.com/PeterMonev/Music-Instruments-App-React/blob/master/ScreenShotGit/ResponsiveDetails2.PNG)

## Comments Page
  
  ### Guest

  ![Comments](https://github.com/PeterMonev/Music-Instruments-App-React/blob/master/ScreenShotGit/ResponsiveCommentsGuest.PNG)

  ### User

  ![Comments](https://github.com/PeterMonev/Music-Instruments-App-React/blob/master/ScreenShotGit/ResposiveCommentsUserEdit.PNG) ![Comments](https://github.com/PeterMonev/Music-Instruments-App-React/blob/master/ScreenShotGit/ResposiveCommentsUserEdit2.PNG) ![Comments](https://github.com/PeterMonev/Music-Instruments-App-React/blob/master/ScreenShotGit/ResposiveCommentsUserEdit3.PNG) 

## Create Page

 ![Create](https://github.com/PeterMonev/Music-Instruments-App-React/blob/master/ScreenShotGit/ResponsiveCreate1.PNG) ![Create](https://github.com/PeterMonev/Music-Instruments-App-React/blob/master/ScreenShotGit/ResponsiveCreate2.PNG)

## Edit Page

![Edit](https://github.com/PeterMonev/Music-Instruments-App-React/blob/master/ScreenShotGit/ResponsiveEdit1.PNG) ![Edit](https://github.com/PeterMonev/Music-Instruments-App-React/blob/master/ScreenShotGit/ResponsiveEdit2.PNG)

## Profile Page

![Profile](https://github.com/PeterMonev/Music-Instruments-App-React/blob/master/ScreenShotGit/ResponsiveProfile1.PNG)