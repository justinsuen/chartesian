# Chartesian

[Chartesian][chartesian] is a web application for users to build charts using uploaded data sources. Inspired by Chartio, Chartesian allows users to upload their own data sources and create charts.

Chartesian is a personal project by Justin Suen.

## Features

- Hosting on Heroku
- New account creation and login
- Guest/demo account
- Upload data and visualize it with a variety of charts
- Logged in users can persist their data
- Supports JSON, TSV, and CSV formats

## Project Design

Chartesian was designed and built in two weeks.

A [proposal] was drafted to help provide an implementation timeline during the development process.

A [database schema][schema] was prepared alongside the design proposal.

## Design Features

When visited, a simple, minimal splash page is displayed along with a sample chart of the site's capabilities.

![Chartesian home page: http://www.chartesian.com][home page]

After signing in or using one of 50 independent demo accounts, the user is greeted with their list of uploaded data sources.

![source index]

To preview, a user can click on the individual rows to retrieve the desired table.

![source preview]

To upload, the user can navigate using the sidebar. The upload page supports JSON, CSV, and TSV files through selecting or drag and drop.

![source drop]

![source form preview]

To build charts, navigate to the create chart page. From here, users can select a source to use using the dropdown menu. The attributes will be loaded once the user selects a source. Then, users can drag and drop their desired attributes to the drop zones.

![chart build]

After pressing preview chart, the chart will be created using those axes. Chart types can be selected using the intuitive icons on the bottom.

![chart build preview]

After saving, the user will be redirected to the manage charts page where they can preview all their created charts.

![chart index]

![chart preview]

## Technology

Chartesian is a single-page application built on Rails and React.js, with many dependencies in both the backend and the frontend.

Here's a list of components and packages I used for this project.

- [React DnD](http://gaearon.github.io/react-dnd/)
- [Recharts.js](http://recharts.org/#/en-US) The charting library used is [Recharts.js](http://recharts.org/#/en-US/). It provides tooltip components for graphs along with responsive containers and axes.
- [Superagent](https://visionmedia.github.io/superagent/)
- [React Collapse](https://github.com/nkbt/react-collapse)
- [React Dropzone](https://github.com/okonet/react-dropzone)

## Future Implementations

Currently, Chartesian can only support data upload and charting using one x-axis and one y-axis.

The features that will be added later to a [future] readme.

[chartesian]: https://www.chartesian.com
[home page]: ./docs/production/images/splash.png "Chartesian Splash"
[source index]: ./docs/production/images/source-index.png
[source preview]: ./docs/production/images/source-preview.png
[source drop]: ./docs/production/images/source-drop.png
[source form preview]: ./docs/production/images/source-form-preview.png
[chart build]: ./docs/production/images/chart-build.png
[chart build preview]: ./docs/production/images/chart-build-preview.png
[chart index]: ./docs/production/images/chart-index.png
[chart preview]: ./docs/production/images/chart-preview.png
[proposal]: ./docs/README.md
[schema]: ./docs/schema.md
[future]: ./docs/future.md
