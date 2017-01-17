import React from 'react';

class ChartForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDataSources();
  }

  render() {
    return (
      <div className="chart-form-container">

      </div>
    );
  }
}

export default ChartForm;
