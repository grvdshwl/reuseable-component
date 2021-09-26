import React from "react";
import { ContainerContext } from "../../Context/Context";
import Wrapper from "./Wrapper";

class ContextApi extends React.Component {
  state = {
    name: "Anuj",
    age: 25,
  };
  render() {
    return (
      <ContainerContext.Provider value={this.state}>
        <Wrapper />
      </ContainerContext.Provider>
    );
  }
}

export default ContextApi;
