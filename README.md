# Startup

## Elevator Pitch
For my startup, I want to create a website to display my video editing and programming skills. This will be a platform to connect me with people who are in a programming class or starting their own company/business. In essence, this startup will be a startup for other startups. I will edit and/or teach how I am able to do what I do.

## Key Features
- Access on any device
- Free consultation calendar scheduler
- Reminder emails/messages

## Uses of Technology
### Authentication
Users will create an account that will enable them to access different courses/services.

### Database Data
The user will be able to communicate via a message box and be able to save code for me to review.

### WebSocket Data
The program will send out reminder emails/messages as well as promotional offers.

## HTML deliverable
- HTML pages: Home page, login/signup page, about page, and pricing page.
- Links: The home page links to the about page to learn more, GitHub button links to the GitHub repository for the startup.
- Text: Information about the purpose of the website and how to learn more.
- Images: A profile picture for my bio and an icon for the favicon.
- Login: Input boxes for signing up and signing in.
- Database: The pricing page will connect to the database to reflect access to certain pages/features.
- WebSocket: The additional questions box will link to my email and allow me to respond to them.

## CSS deliverable
- Header, footer, and main content body
- Navigation elements: For some reason, I can't figure out how to get Bootstrap to list the elements when the 3-bar icon is pressed.
- Responsive to window resizing: Div's will adjust accordingly to the screen size
- Application elements: Varying colors to avoid blandness.
- Application text content: Varying fonts and font sizes.
- Application images: Added images to showcase AI art and rounded their edges.

## JavaScript deliverable
- Login: Logging in will take you to the pricing page and display the username.
- Database: Stores user's username and displays it on the pricing page.
- WebSocket: The message box to message me via email will be set up eventually as well as a custom GPT bot that will answer questions about my services.
- Application logic: Infinite scrolling visual to display AI art and topics for tutoring.

## Service deliverable
- Node.js/Express HTTP service: Express web service set up.
- Static middleware for frontend: Completed via public folder route.
- Calls to third-party endpoints: Displays a random motivational/inspiring quote at the bottom of every page using an API.
- Backend service endpoints: Stores login information on local API (for now)
- Frontend calls service endpoints: GET and POST functions were implemented for storing and retrieving login information.

## DB deliverable
- MongoDB Atlas database created: completed!
- Provides backend endpoints for manipulating application data: calls /api/messages to post the email and message on the signup page.
- Stores application data in MongoDB: stores the email and message submitted from the signup page in a MongoDB collection.

## Login deliverable
- Supports new user registration: Allows new users to sign up.
- Supports existing user authentication: Prevents the same usernames from being used and recognizes existing users when logging in.
- Stores and retrieves credentials in MongoDB: Stores usernames and encrypted passwords in my MongoDB database. Retrieves user information when logging in and displays their username on the profile page.
- Restricts application functionality based upon authentication: If signed in, the user can access the about page and profile page. If logged out, they can only access the home, sign up/in, and github pages.

## WebSocket deliverable
- Backend listens for WebSocket connection: Check! (adjusts websocket protocol depending on HTTP use)
- Frontend makes WebSocket connection: Check! (shows if the user has connected and when they are disconnected)
- Data sent over WebSocket connection: Check! (sendMessage function in liveChat.js)
- WebSocket data displayed in the application interface: Div element is updated via an event listener to display all existing messages and future messages.

## React deliverable
TBD...
