import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import GridView from "react-native-super-grid";
import { widthPercentageToDP, heightPercentageToDP } from "../utils/PixelRatioConverter";

export default class AccessoriesScreen extends Component {

  // static navigationOptions = function() {
  //   return {
  //     title: "Products"
  //   };
  // };

  render() {
    // const { category } = this.props.navigation.getParam("data");
    const allCategoryData = this.props.navigation.getParam("listData");
    console.log("Category List: ", this.props.category);
    return (
      <View style={styles.container}>
        <GridView
          itemDimension={130}
          items={allCategoryData}
          renderItem={item => (
            <TouchableOpacity 
            onPress={() =>
              this.props.navigation.navigate("ProductDetails", {
                productDetails: item
              })
            }>
              <View style={styles.grid}>
                <Image style={styles.thumbnail} source={require("../images/jacket.jpg")} />
                <Text>{item.name}</Text>
                <Text style={{ color: "#000000" }}>${item.price}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  grid: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff"
  },
  thumbnail:{width: widthPercentageToDP("25%"), height: widthPercentageToDP("40%")}
});
