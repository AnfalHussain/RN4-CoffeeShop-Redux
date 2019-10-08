import React, { Component } from "react";

// NativeBase Components
import {
    Text,
    Button,
    Body,
    List,
    ListItem,
    Form,
    Label,
    Input,
    Item,
    Content,
    Header
} from "native-base";
import { withNavigation } from "react-navigation";

const Thankyou = props => {
    // const { navigation } = props;
    return (
        <Content>
            <Text> Coffee is Overrated</Text>
            <Text> Coffee isn’t as tasty as you think...</Text>

        </Content>
    );
};

export default (Thankyou);