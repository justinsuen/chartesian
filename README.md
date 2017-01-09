# Chartesian

## Links

### General
* [Heroku][heroku]
* [Trello][trello]

[heroku]: http://www.herokuapp.com
[trello]: https://trello.com

### Documentation
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/component-hierarchy.md
[sample-state]: docs/sample-state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Minimum Viable Product

Chartesian is a web application inspired by [Chartio](https://www.chartio.com) built using Ruby on Rails backend and React/Redux frontend.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and
sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Upload data and visualize it with a variety of charts
- [ ] Logged in users can persist their data
- [ ] Share charts with other users
- [ ] Supports JSON, TSV, and CSV formats
- [ ] [Production README](docs/production_readme.md)

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (2 days)

**Objective:** Working authentication for both front and backend. Users created are persisted in database.

- [ ] Functional
  - [ ] Sign up
  - [ ] Sign In
  - [ ] Demo
- [ ] Visual
  - [ ] Splash page
  - [ ] Pick font and color

### Phase 2: Upload Data (1 day)

**Objective:** Data can be uploaded for users and data will be persisted in database.

- [ ] Functional
  - [ ] Store data with user in database
  - [ ] Support JSON, TSV, CSV
  - [ ] Create usable and query-able states
- [ ] Visual
  - [ ] Upload form

### Phase 3: Charts Model, API, and components (3 days)

**Objective:** Charts can be created, read, edited and destroyed through the API.

- [ ] Functional
  - [ ] API Util to get data from database
  - [ ] Charts using [Victory.js](http://formidable.com/open-source/victory/) or [React D3](http://www.reactd3.org/)
  - [ ] Display charts using desired information
  - [ ] Enable bar, line, and dot charts
- [ ] Visual
  - [ ] Chart styling
  - [ ] Information layout and display

### Phase 4: Chart Sharing (2 day)

**Objective:** Charts can be shared with other users in database and users can view all charts shared with them.

- [ ] Functional
  - [ ] Allow shared users to see charts
  - [ ] See charts shared with current user
  - [ ] Fetch all charts shared
  - [ ] Ajax enabled search
- [ ] Visual
  - [ ] Style list of shared charts
  - [ ] Sharing form styling
  - [ ] Format list of users
  - [ ] Style search form and display

### Phase 5: Additional Styling (1.5 days)

**Objective:** Extra styling to make everything look nice.

- [ ] Make charts look nice
- [ ] Make data display look nice
- [ ] Make menu and splash look nice
- [ ] Make things look nice with icons

### Phase 6: User Experience Testing (0.5 day)

**Objective:** To understand how bad my app is.

- [ ] Minor improvements after hearing scathing feedback
- [ ] Be devastated

### Bonus Features (TBD)
- [ ] Search graph by different fields
- [ ] More charts (histograms, pie charts, heat maps, etc)
- [ ] Notebook/report creating for charts and data
- [ ] Combine similar plots
- [ ] Extract data from interacting with graphs
