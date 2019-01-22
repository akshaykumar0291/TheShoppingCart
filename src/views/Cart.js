import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Card } from "native-base";
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "../utils/PixelRatioConverter";
import { Icon } from "react-native-elements";

export default class Cart extends Component {

  static navigationOptions = function() {
    return {
      title: "Your Cart"
    };
  };

  state = {
    quantity: 0
  };

  render() {
    const { id, name, price, image, category } = this.props.navigation.getParam(
      "cartItem"
    );
    return (
      <View style={styles.container}>
        <ScrollView>
          <Card
            style={{
              padding: widthPercentageToDP("4%"),
              marginLeft: widthPercentageToDP("2%"),
              marginRight: widthPercentageToDP("2%"),
              marginTop: widthPercentageToDP("2%"),
              backgroundColor: "#FFFFFF"
            }}
          >
            <Text>Product Details</Text>
            <View
              style={{
                backgroundColor: "#e6e6e6",
                width: null,
                height: heightPercentageToDP("0.1%")
              }}
            />
            <View style={styles.viewStyle}>
              <View>
                <Text style={styles.textStyle}>{name}</Text>
                <Text style={{marginTop: 5, fontSize: 18, color: '#1e334e'}}>${price}</Text>
                <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                  <Icon
                    name="do-not-disturb-on"
                    type="MaterialIcons"
                    onPress={() => {
                      this.setState(previousState => ({
                        quantity: previousState.quantity - 1
                      }));
                    }}
                  />
                  <Text style={{color: '#1e334e'}}>{this.state.quantity}</Text>
                  <Icon
                    name="add-circle"
                    type="MaterialIcons"
                    onPress={() => {
                      this.setState(previousState => ({
                        quantity: previousState.quantity + 1
                      }));
                    }}
                  />
                </View>
              </View>
              <View style={{ backgroundColor: "#ff9900" }}>
                <Image
                  style={{ width: 50, height: 100 }}
                  source={require("../images/jacket.jpg")}
                />
              </View>
            </View>
          </Card>

          <Card
            style={{
              padding: widthPercentageToDP("4%"),
              marginLeft: widthPercentageToDP("2%"),
              marginRight: widthPercentageToDP("2%"),
              marginTop: widthPercentageToDP("2%"),
              backgroundColor: "#FFFFFF"
            }}
          >
            <Text>Price Details</Text>
            <View
              style={{
                backgroundColor: "#e6e6e6",
                width: null,
                height: heightPercentageToDP("0.1%")
              }}
            />
            <View style={styles.viewStyle}>
              <Text style={styles.textStyle}>Total Price</Text>
              <Text style={styles.textStyle}>${price}</Text>
            </View>
            <View style={styles.viewStyle}>
              <Text style={styles.textStyle}>Delivery</Text>
              <Text style={{color: '#53ff1a', marginTop: 5}}>Free</Text>
            </View>
            <View style={styles.viewStyle}>
              <Text style={styles.textStyle}>Amount Payable</Text>
              <Text style={styles.textStyle}>${price}</Text>
            </View>
          </Card>
        </ScrollView>

        <Card
          style={{
            marginBottom: 0,
            marginLeft: 0,
            backgroundColor: "#ff7a33"
          }}
        >
          <TouchableOpacity style={styles.cartButton}>
            <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
              Checkout
            </Text>
          </TouchableOpacity>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
  },
  viewStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 5
  },
  textStyle: {marginTop: 5, color: '#1e334e'}
});
