import React, { Component } from "react";

class Resource extends Component {
  state = {
    loading: false,
    payload: [],
  };

  componentDidMount() {
    const { path } = this.props;
    
    this.setState({ loading: true });
    fetch(path)
      .then((res) => res.json())
      .then((data) => this.setState({ payload: data.message, loading: false }));
  }

  render() {
    const { render } = this.props;
    const { state } = this;
    return render(state);
  }
}

export default Resource;
