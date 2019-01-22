import React, { Component } from "react";
import Home from "./src/categories/Home";
import AccessoriesScreen from "./src/categories/AccessoriesScreen";
import ProductDetails from "./src/views/ProductDetails";
import Cart from "./src/views/Cart";
import {store} from './store'
import { Provider } from "react-redux";

import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer
} from "react-navigation";

const MyStackNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  MenAccessories: {
    screen: AccessoriesScreen
  },
  ProductDetails: {
    screen: ProductDetails
  },
  Cart: {
    screen: Cart
  }
});

const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: MyStackNavigator
  },
  "Men Accessories": {
    screen: AccessoriesScreen
  },
  "Women Accessories": {
    screen: AccessoriesScreen
  },
  "Children Accessories": {
    screen: AccessoriesScreen
  },
  "Sports Accessories": {
    screen: AccessoriesScreen
  }
});

const MyNavigator = createAppContainer(MyDrawerNavigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MyNavigator />
      </Provider>
    );
  }
}
