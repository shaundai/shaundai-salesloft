## Account-Based Selling with SalesLoft - Front End

#### Full-Stack Web App connected to SalesLoft API

React Web App (front-end) with Node/Express proxy server (back-end) connected to SalesLoft API.  After using OAuth 2.0 to authorize an users, the SalesLoft REST API is accessed over HTTP to push and pull data from SalesLoft.

## Purpose
App allows SalesLoft users to take an account-based approach to their prospecting process.  In the app, reps see a dashboard with their top accounts organized by tier.  Reps can look at each account individually to see where they have the best account penetration by number of people in active cadences.  Users can also take action with the ability to add/remove users from cadences within the app.

#### Live project

Find the full live project on the [live app](https://shaundai-salesloft.surge.sh) or the [demo video of the authorization flow](https://share.vidyard.com/watch/SJDNmtNSmnPKhrdraGQTNM?)!  **Note that you will need a SalesLoft license in order to be authorized.**

Check out the [back-end Node/Express code here](https://github.com/shaundai/shaundai-salesloft-node).

## Installation
To run the front-end locally, clone this git repository to your local machine.  Then follow 6 easy steps:

#### Step 1:
Get your SalesLoft client secret and ID.  Visit https://accounts.salesloft.com/oauth/applications and generate a client secret and ID

#### Step 2:
Create a file in the components folder called "Secrets" and copy the following code into the file:


    export const Secrets = {
        salesloftSecret: 'your-salesloft-secret',
        salesloftClientId:'your-salesloft-client-id',
    }


#### Step 3:
Replace 'your-salesloft-secret' and 'your-salesloft-client-id' with the Secret and Client ID that you generated in Step 1.

#### Step 4:
Change the *redirectUriPath* variable in Login.js from 'https://shaundai-salesloft.surge.sh' to 'http://localhost:3000' (or whichever local path you are using).  *redirectUriPath* should be a string with no slashes at the end.

#### Step 5:
Add the path that you use in Step 4 to your list of whitelisted Callback URLs in your [SalesLoft App Page](https://accounts.salesloft.com/oauth/applications).

#### Step 6:
Run the code locally by running 'npm start' in the terminal.


## Project Screen Shots

#### Homepage
![Homepage screenshot](./public/images/homepage.png?raw=true "Homepage")

#### Dashboard *(Actual Company Information Blurred)*
![Dashboard screenshot](./public/images/dashboard.png?raw=true "Dashboard")

#### Account Page *(Actual Company and Contact Information Blurred)*
![Account Page screenshot](./public/images/account-page.png?raw=true "Account Page")

## Reflection

#### Biggest Learnings

- OAUTH 2.0!  From obtaining an authorization code to getting/using access and refresh tokens to sending back json on different routes, I learned so much about building an API that is connected to SalesLoft’s API.

- Authorization flow and why it’s important for the user.  People expect their apps to behave in a certain way and making sure to build in small visuals that convey to the user that something is doing work behind the scenes is incredibly important for overall user experience

- Deeper knowledge of APIs (both building APIs and setting up clean ways for my front-end to "shake hands" with my API), specifically working with the SalesLoft API.  I learned about Express routing, got a lot of practice with making get and post requests with axios, and figured out which responsibilities my front-end should have vs which my back-end should have.  Learning to debug my Node API allowed me to resolve bugs very quickly.

- Reinforced the importance of UX.  Adding in transitions, animations, and filling in < div > s with something while waiting for a promise to be resolved allows the user to feel confident that your app is working.

#### If I Were to Do This Over...
I'd have testing in mind from the beginning.  In order to do this, I would break my components into even smaller parts that can be tested easily.

I would also plan for more cases where the API does not have certain information available or the user goes to a page that does not exist.

## What to Expect in v2
Additional features that will be available in the next version:

- Ability to sort contacts by seniority
- Checkboxes for selection of multiple contacts - users will be able to perform bulk-actions on contacts such as adding to cadences
- More account stats including number of contacts in cadences by seniority and account penetration