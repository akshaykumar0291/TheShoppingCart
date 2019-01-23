import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import GridView from "react-native-super-grid";
import { widthPercentageToDP, heightPercentageToDP } from "../utils/PixelRatioConverter";
import {connect} from 'react-redux';

class AccessoriesScreen extends Component {

  // static navigationOptions = function() {
  //   return {
  //     title: "Products"
  //   };
  // };

  render() {
    return (
      <View style={styles.container}>
        <GridView
          itemDimension={130}
          items={this.props.categoryData}
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

function mapStateToProps(state) {
  return {
    categoryData: state.catergoryData
  };
}

export default connect(
  mapStateToProps,
  null
)(AccessoriesScreen);

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
