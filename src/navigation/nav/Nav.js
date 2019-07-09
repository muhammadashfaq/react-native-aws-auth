import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "./Home";

const routeConfig = {
  Home: { screen: Home }
};

const StackNav = createStackNavigator(routeConfig);

class Nav extends React.Component {
  render() {
    return <StackNav />;
  }
}

export default createAppContainer(StackNav);
