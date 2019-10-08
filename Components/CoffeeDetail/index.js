import React, { Component } from "react";
import { connect } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../store/actions/cartActions"


// NativeBase Components
import {
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Picker,
  Content
} from "native-base";

// Style
import styles from "./styles";

//List
import coffeeshops from "../CoffeeList/list";
import CartButton from "../CartButton";

class CoffeeDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("coffeeShop").name,
      headerRight: <CartButton />
    };
  };
  state = {
    drink: "Cappuccino",
    option: "Small",
    addedClicked: 0,
  };

  changeDrink = value => {
    this.setState({
      drink: value
    });
  };

  changeOption = value => {
    this.setState({
      option: value
    });
  };

  alert = () => {
    let newValue = this.state.addedClicked + 1;
    this.setState({
      addedClicked: newValue,
    });
  };



  handleAdd = () => {
    let myItem = {
      drink: this.state.drink,
      option: this.state.option,
      quantity: 1,
    }

    //if the item exists in the items array, increase the quantity of the item

    //search for item 
    // let theChoosenItemExists = this.props.items.find(item => {
    //   return (item.drink === myItem.drink
    //     && item.option === myItem.option)
    // })
    console.log("this.props.items", this.props.items)

    let theChoosenItemExists = this.props.items.filter(item =>
      (item.drink === myItem.drink
        && item.option === myItem.option))


    console.log("theChoosenItemExists", theChoosenItemExists)

    // the choosenitem exists 
    if (theChoosenItemExists.length !== 0) // increase the quentity 
    {
      //get the current quentity
      const oldQuentity = theChoosenItemExists[0].quantity;
      console.log("theChoosenItemExists[0]", theChoosenItemExists[0])
      console.log("theChoosenItemExists[0].drink", theChoosenItemExists[0].drink)

      console.log("oldQuentity", oldQuentity)

      const newQuentity = oldQuentity + 1;

      console.log("theChoosenItemExists", theChoosenItemExists)
      const itemToRemove = {
        drink: myItem.drink,
        option: myItem.option,
        quantity: oldQuentity,
      }

      this.props.removeItemFromCart(itemToRemove);


      const itemToAdd = {
        drink: myItem.drink,
        option: myItem.option,
        quantity: newQuentity,
      }
      this.props.addItemToCart(itemToAdd);



    }
    //else add this item directly
    else {
      this.props.addItemToCart(myItem);

    }

  };


  render() {
    const { coffeeShops, loading } = this.props.coffeeReducer;
    if (loading) return <Content />;
    const coffeeshop = this.props.navigation.getParam("coffeeShop");
    return (
      <Content>
        <List>
          <ListItem style={styles.top}>
            <Left>
              <Text style={styles.text}>
                {coffeeshop.name + "\n"}
                <Text note>{coffeeshop.location}</Text>
              </Text>
            </Left>
            <Body />
            <Right>
              <Thumbnail bordered source={{ uri: coffeeshop.img }} />
            </Right>
          </ListItem>
          <ListItem style={{ borderBottomWidth: 0 }}>
            <Left>
              <Picker
                note
                mode="dropdown"
                style={{ width: 150 }}
                selectedValue={this.state.drink}
                onValueChange={this.changeDrink}
              >
                <Picker.Item label="Cappuccino" value="Cappuccino" />
                <Picker.Item label="Latte" value="Latte" />
                <Picker.Item label="Espresso" value="Espresso" />
              </Picker>
            </Left>
            <Body>
              <Picker
                note
                mode="dropdown"
                style={{ width: 150 }}
                selectedValue={this.state.option}
                onValueChange={this.changeOption}
              >
                <Picker.Item label="Small" value="Small" />
                <Picker.Item label="Medium" value="Medium" />
                <Picker.Item label="Large" value="Large" />
              </Picker>
            </Body>
          </ListItem>

          <Button full danger onPress={this.handleAdd}>
            <Text>Add</Text>
          </Button>
        </List>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  coffeeReducer: state.coffeeReducer,
  items: state.cartReducer.items,
});


const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: item => dispatch(addItemToCart(item)),
    removeItemFromCart: item => dispatch(removeItemFromCart(item)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeDetail);
