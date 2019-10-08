import React, { Component } from "react";
import { Icon, Text, List, Button, Content, } from "native-base";
import { connect } from "react-redux";

import { withNavigation } from "react-navigation";

class CartButton extends Component {

  render() {
    const numberOfItems = this.props.items.length
    return (
      <>
        <Text onPress={() => this.props.navigation.navigate("CoffeeCart")}>
          {numberOfItems}
        </Text>
        <Icon
          onPress={() => this.props.navigation.navigate("CoffeeCart")}
          name="shoppingcart"
          type="AntDesign"
        />


      </>
    );
  }
}


const mapStateToProps = state => ({
  items: state.cartReducer.items
});

export default withNavigation(connect(mapStateToProps)(CartButton));
