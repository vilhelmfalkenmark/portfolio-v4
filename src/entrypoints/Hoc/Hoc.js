import React from "react";

function Hoc(WrappedComponent) {
  console.log("kallas på!");

  return class extends React.Component {
    componentWillMount() {
      console.log(WrappedComponent.props);

      // WrappedComponent.queryBeforeRender();
    }

    render() {
      return <WrappedComponent />;
    }
  };
}

export default Hoc;
