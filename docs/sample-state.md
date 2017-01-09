# Sample State

```
{
  session: {
    currentUser
    errors: []
  }

  dashboards: {
    1: {
      title: ...
      preview_img_url: ...
    }
    2: {
      title: ...
      preview_img_url: ...
    }
  }

  dashboard: {
    charts: {
      1: {
        x: 200 //position on dashboard
        y: 500
      }
    }
  }

  charts: {
    1: {
      title: "Tweet mentions in 2016"
      type: "bar"
      axes: {
        {
          x: {
            title: "Month"
            type: "date"
            options: {
              tick: "month"
              ... //other options
            }
          }
          y: {
            title: "Tweet count"
            type: "integer"
            options: {
              tick: 1000
              ...
            }
          }
        }
      }
      data: 1 //reference to data id
    }
  }

  chart_data: {
    1: {
        source_url: //url to file saved on deployment disk
        query_string: "count(*)"
        loaded: true
        values: [
          [JAN_2016, 23409]
          [FEB_2016, 70745]
          [MAR_2016, 93412]
        ]
      }
  }

  data: {
    1: {
      columns: ["created_at", "updated_at", "username", "email"]
      types: ["date", "date", "string", "string"]
      data: [
        [...]
        [...]
      ]
      url: //url to data file
    }
  }
}
```
