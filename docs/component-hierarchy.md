# Component Hierarchy

**AuthFormContainer**
- AuthForm

**NavBar**
- NavBar

**UploadContainer**
- Upload

**ShareContainer**
- Share
  + ShareSearch
  + SharedUsers

**DashboardIndexContainer**
- DashboardsIndex
  + DashboardItem

**DashboardContainer**
- DashboardHeader
- Dashboard

**DashboardFormContainer**
- ChartAdd
- ChartEdit
- ChartDelete

**ChartCreatorContainer**
- ChartCreator
  + ChartPreview
  + ChartDetails

**ChartIndexContainer**
- ChartIndex
  + ChartItem

**ChartContainer**
- ChartItem
- ChartDetails
- ChartFormContainer
  + ChartForm

**DataIndexContainer**
- DataIndex
- DataFormContainer
  + DataForm

## Routes

Path                                     | Component
---------------------------------------- | ---------------------------------
/                                        | redirect to /session or /dashboards
/session                                 | AuthFormContainer
/dashboards                              | DashboardIndexContainer
/dashboards/:dashboardId                 | DashboardContainer
/dashboards/new                          | DashboardFormContainer
/dashboards/:dashboardId/edit            | DashboardFormContainer
/dashboards/:dashboardId/new             | ChartCreatorContainer
/dashboards/:dashboardId/charts/:chartId | ChartCreatorContainer
/data                                    | DataIndexContainer
/data/new                                | DataFormContainer
