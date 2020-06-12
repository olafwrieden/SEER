# Software Engineering Evidence Repository (SEER)

> When you need to verify a software engineering-related claim, we are your curated evidence repository.

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Heroku](http://heroku-badge.herokuapp.com/?app=seer-repo&style=flat&svg=1)

**Problem:** Have you ever wondered if Test-Driven Development actually improves code quality? There is a lot of evidence documented in Research papers but this is unavailable to many commercial software engineers because it is behind a paywall, is written in unfamiliar academic language and it is high effort to find the trends.

**Solve it with SEER:** Simply search for "TDD" and "code quality", then browse a list of empirical research articles related to this with a summary of each related to the study, the measures and the results.

![SEER Homepage](https://i.imgur.com/AelgmLJ.png)

## Application Flow

### User Roles

SEER features 4 types of users:

1. **Searchers** - Anyone! Searchers can browse (and suggest new evidence) but may only leave reviews after they have registered.
2. **Moderators** - Employees who check submitted articles for quality, relevancy, and validity. The see a queue of evidence pending moderation to either approve or reject submissions.
3. **Analysts** - Employees who analyse articles approved by a moderator, and extract relevant information to enter into SEER before the content goes live.
4. **Admins** - All previous capabilities in addition to viewing the dashboard, and manage users and evidence.

### Evidence States

SEER Evidence can be in one of 5 states:

1. **PENDING_APPROVAL** - All new submissions enter the moderation queue with this status. Moderators can only accept or reject submissions with this status.
2. **REJECTED** - If a submission is rejected (due to either: _UNRELATED_, _POOR_QUALITY_, _DUPLICATE_, _OTHER_), it enters this state and cannot progress in the queue unless actioned on by an admin.
3. **PENDING_ANALYSIS** - If a submission is approved by a moderator, it enters this status and thus becomes available in the analyst's queue.
4. **AVAILABLE** - Once the analyst enters all relevant information for the evidence and approves it, it becomes available to the public.
5. **UNAVAILABLE** - If at any point an admin decides the evidence must be hidden from public search results (perhaps for maintainance or due to questionable validity / poor ratings), this status may be assigned.

### Supported Evidence Types

SEER currently supports 6 types of evidence, thanks to [Mongoose Schema Discriminators](https://mongoosejs.com/docs/discriminators.html) (i.e. schema inheritance):

1. **Books**
2. **Book Sections**
3. **Journals**
4. **Periodicals**
5. **Websites**
6. **Proceedings**

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
