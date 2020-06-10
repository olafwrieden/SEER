# Software Engineering Research Repository (SEER)
> When you need to verify a software engineering-related claim, we are your curated evidence repository.

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Heroku](http://heroku-badge.herokuapp.com/?app=seer-repo&style=flat&svg=1)

**Problem:** Have you ever wondered if Test-Driven Development actually improves code quality? There is a lot of evidence documented in Research papers but this is unavailable to many commercial software engineers because it is behind a paywall, is written in unfamiliar academic language and it is high effort to find the trends.

**Solve it with SEER:** Simply search for "TDD" and "code quality", then browse a list of empirical research articles related to this with a summary of each related to the study, the measures and the results.

![SEER Homepage](https://i.imgur.com/AelgmLJ.png)

## Getting up and running (locally)

### Architecture
We have designed SEER in a monorepo, meaning API and Client-side code are contained within the same repository. Knowing that Heroku puts apps to sleep after 30 minutes of inactivity, this setup ensures the API is always accessible when called by the frontend (instead of timining out due to being 'snoozed' by Heroku). In fact, at build time Heroku ensures the API serves both the frontend as well as the API routes in one service. Though not scalable in larger production apps, it is appropriate for this project.

![SEER Product Architecture](https://i.imgur.com/gRbN0Ew.png)

### Prerequisites
1. This project is built on [Node JS](https://nodejs.org/en/), which must be installed on your device.
2. You must create a [MongoDB](https://www.mongodb.com) instance (Free) and copy your database connection string.

### Setting up
1. Clone the repository to your local machine and open the project in you IDE of choice, e.g. Visual Studio Code.
2. Navigate to [/api](/api/) directory and create a file called `.env`
3. Copy the contents of [/api/.env.example](/api/.env.example) into the newly created `.env` file, replacing the variable values with your own (e.g. database connection string copied earlier).
4. Open the integrated terminal in split view (showing two windows side-by-side). We will start the API in the first, and the frontend in the other allowing us to cleanly separate these in development.

#### Starting the API in Development
5. In the first terminal window, type: `cd /api` to change into the /api directory.
6. Install the API dependencies by running `npm install`
7. Start the API in development mode by running `npm run dev`

#### Starting the React.js Frontend in Development
8. In the second terminal window, type `cd /client` to change into the /client directory.
9. Install the React.js dependencies by running `npm install`
10. Start the frontend server in development by running `npm start` - a browser window should automatically appear.
