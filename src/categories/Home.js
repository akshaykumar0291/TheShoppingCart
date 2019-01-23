import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity
} from "react-native";
import { Icon } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import { fetchAllCategoryData } from "../actions/action";
import { connect } from "react-redux";

class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Welcome",
      headerLeft: (
        <Icon
          name="menu"
          type="MaterialIcons"
          onPress={() => navigation.openDrawer()}
        />
      ),
      headerRight: (
        <Icon
          name="local-grocery-store"
          type="MaterialIcons"
          onPress={() => navigation.navigate("Cart")}
        />
      )
    };
  };

  state = {
    allCategoryData: []
  };

  componentDidMount() {
    this.props.fetchAllCategoryData();
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={categories}
          renderItem={this.renderCategories}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }

  renderCategories = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate("MenAccessories", {
            data: item
          });
        }}
      >
        <View>
          <Image style={styles.image} source={{ uri: item.image }} />
          <View style={styles.overlay} />
          <View style={styles.border} />
          <View style={styles.text}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>Shop Now</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllCategoryData: () => dispatch(fetchAllCategoryData())
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  text: {
    width: Dimensions.get("window").width,
    height: 200,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    textAlign: "center",
    color: "#fdfdfd",
    fontSize: 32
  },
  subtitle: {
    textAlign: "center",
    color: "#fdfdfd",
    fontSize: 16,
    fontWeight: "100",
    fontStyle: "italic"
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(30, 42, 54, 0.4)"
  },
  border: {
    position: "absolute",
    top: 10,
    left: 10,
    right: 10,
    bottom: 10,
    borderWidth: 1,
    borderColor: "rgba(253, 253, 253, 0.2)"
  },
  image: {
    height: 200,
    width: null,
    flex: 1,
    backgroundColor: "#ff0000"
  }
});

var categories = [
  {
    id: 1,
    title: "MEN",
    category: "Men Accessories",
    image:
      "http://res.cloudinary.com/atf19/image/upload/c_scale,w_489/v1500284127/pexels-photo-497848_yenhuf.jpg"
  },
  {
    id: 2,
    title: "WOMEN",
    category: "Women Accessories",
    image:
      "http://res.cloudinary.com/atf19/image/upload/c_scale,w_460/v1500284237/pexels-photo-324030_wakzz4.jpg"
  },
  {
    id: 3,
    title: "CHILDREN",
    category: "Children Accessories",
    image:
      "http://res.cloudinary.com/atf19/image/upload/c_scale,w_445/v1500284286/child-childrens-baby-children-s_shcevh.jpg"
  },
  {
    id: 4,
    title: "SPORTS",
    category: "Sports Accessories",
    image:
      "http://res.cloudinary.com/atf19/image/upload/c_scale,w_467/v1500284346/pexels-photo-293229_qxnjtd.jpg"
  }
];
