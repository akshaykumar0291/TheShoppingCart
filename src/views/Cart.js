import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList
} from "react-native";
import { Card } from "native-base";
import {
  widthPercentageToDP,
  heightPercentageToDP
} from "../utils/PixelRatioConverter";
import { connect } from "react-redux";
import { Icon } from "react-native-elements";

class Cart extends Component {

  static navigationOptions = function() {
    return {
      title: "Your Cart"
    };
  };

  state = {
    quantity: 0
  };

  renderCartProduct = ({ item }) => {
    return (
      <View>
        <Card
            style={{
              padding: widthPercentageToDP("2%"),
              marginLeft: widthPercentageToDP("2%"),
              marginRight: widthPercentageToDP("2%"),
              marginTop: widthPercentageToDP("1%"),
              backgroundColor: "#FFFFFF"
            }}
          >
            <View style={styles.viewStyle}>
              <View>
                <Text style={styles.textStyle}>{item.name}</Text>
                <Text style={{marginTop: 5, fontSize: 18, color: '#1e334e'}}>${item.price}</Text>
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
              <View style={{ backgroundColor: "#ffffff" }}>
                <Image
                  style={{ width: 30, height: 60 }}
                  source={require("../images/jacket.jpg")}
                />
              </View>
            </View>
          </Card>
      </View> 
    ) 
  }

  render() {
   const cartProduct =  this.props.cartProductData;
   console.log("Cart Product: ", cartProduct);
    return(
      <View style={styles.container}>
      <Text>Product Details</Text>
        <FlatList
          data={cartProduct}
          renderItem={this.renderCartProduct}
          keyExtractor={(item, index) => index.toString()}
        />
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
              <Text style={styles.textStyle}>$100</Text>
            </View>
            <View style={styles.viewStyle}>
              <Text style={styles.textStyle}>Delivery</Text>
              <Text style={{color: '#53ff1a', marginTop: 5}}>Free</Text>
            </View>
            <View style={styles.viewStyle}>
              <Text style={styles.textStyle}>Amount Payable</Text>
              <Text style={styles.textStyle}>$100</Text>
            </View>
          </Card>
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

function mapStateToProps(state) {
  return {
    cartProductData: state.cartProductData
  };
}

export default connect(
  mapStateToProps,
  null
)(Cart);

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
