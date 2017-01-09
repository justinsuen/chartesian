### Chartesian

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

A Chartio Clone is a web application inspired by [Chartio](https://www.chartio.com) built using Ruby on Rails backend and React/Redux frontend.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and
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

* Functional
  * Sign up
  * Sign In
  * Demo
* Visual
  * Splash page
  * Pick font and color

### Phase 2: Upload Data (1 day)

**Objective:** Data can be uploaded for users and data will be persisted in database.

* Functional
  * Store data with user in database
  * Support JSON, TSV, CSV
  * Create usable and query-able states
* Visual
  * Upload form

### Phase 3: Charts Model, API, and components (3 days)

**Objective:** Charts can be created, read, edited and destroyed through the API.

* Functional
  * API Util to get data from database
  * Charts using [Victory.js](http://formidable.com/open-source/victory/) or [React D3](http://www.reactd3.org/)
  * Display charts and desired information
* Visual
  * Chart styling
  * Information layout and display

### Phase 4: Notebooks (2 day)

**Objective:** Notes belong to Notebooks that can be created, read, edited and destroyed through the API.

### Phase 5: Tags (1 days)

**Objective:** Notes can be tagged with multiple tags, and tags are searchable.

### Phase 6: Allow Complex Styling in Notes (1 days, W2 Th 6pm)

**objective:** Allow rich text editing of notes.

### Phase 7: - Pagination / infinite scroll for Notes Index (1 day, W2 F 6pm)

**objective:** Add infinite scroll to Notes Index

### Bonus Features (TBD)
- [ ] Search notes by content
- [ ] Set reminders on notes
- [ ] Changelogs for Notes
- [ ] Multiple sessions
