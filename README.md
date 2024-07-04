
## Problem statement
Halloween is coming, and The NYT is preparing for a major new data investment. We’ll be tracking how much candy kids across NYC get in real time. Our reporters have lined up several thousand kids across the city. Each kid will tally the candy received in their neighborhood, by candy type. They’ll upload their reports, allowing us to display counts of which neighborhoods are giving out which type of candy.

Our Graphics department is interested in making a leaderboard graphic, displaying how much candy has been collected in each borough. You’re responsible producing an API that will power our graphics, and a table for data review. Specifically, your tasks are:

* Complete the `/api/stats` endpoint in `src/server/server.js` to return JSON data containing how much candy was collected for each borough, in descending order.
* Add a new client-side route and a view in the React app to display the data returned from your new endpoint above. (We aren't grading on style of the UI here, so fine to keep it as a bare-bones table)

## Technical details
### Prerequisites

Make sure you have Node v20.10 installed, which can be installed following these
[instructions](https://nodejs.org/en/download/package-manager).


### Quick start

1. Install packages

```sh
cd candy-app
npm install
```

2. Run the server and client

```sh
# From the project root
npm run watch
```

This will run the server on port 3000 and the client on port 5173.

### Data

Sample data is available for use in tk file.

### Installed libraries
- Feel free to install other libraries if you want
- [Express](https://expressjs.com/) to build APIs in the server
- [MaterialUI](https://mui.com/material-ui/) to help build styled UI components
  - NOTE: You do not need to use Material UI for CSS if you prefer another approach
