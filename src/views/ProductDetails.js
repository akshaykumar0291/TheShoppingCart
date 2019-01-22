import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { colors } from "react-native-elements";
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "../utils/PixelRatioConverter";
import {Card} from "native-base";

export default class ProductDetails extends Component {

  static navigationOptions = function() {
    return {
      title: "Product Details"
    };
  };

  render() {
    const productDetails = this.props.navigation.getParam("productDetails");
    const { id, name, price, image, category } = productDetails;

    return (
      <View style={styles.container}>
        <ScrollView>
          <View
            style={{
              justifyContent: "center",
              marginHorizontal: 20,
              alignItems: "center"
            }}
          >
            <Image
              style={{ width: 200, height: 350 }}
              source={require("../images/jacket.jpg")}
            />
            <Text>{name}</Text>
            <Text style={styles.priceText}>${price}</Text>
            <Text>
              Each year, more than 1000 new designs embellished with pageantry
              and beautiful looks and styles of Jackets for men and women are
              visualized and created by a team of highly skilled designers.
            </Text>
          </View>
        </ScrollView>
        
        <Card
          style={{
            marginBottom: 0,
            backgroundColor: "#ff7a33"
          }}
        >
          <TouchableOpacity
            style={styles.cartButton}
            onPress={() =>
              this.props.navigation.navigate("Cart", {
                cartItem: productDetails
              })
            }
          >
            <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
              Add To Cart
            </Text>
          </TouchableOpacity>
          </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  priceText: {
    fontSize: 18,
    color: "#000000"
  },
  cartButton: {
    backgroundColor: "#ff5a00",
    paddingTop: 10,
    paddingBottom: 10,
    width: widthPercentageToDP("100%"),
    alignItems: "center"
  }
});
