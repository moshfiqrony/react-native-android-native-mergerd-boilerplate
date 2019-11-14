import React from 'react';
import {StyleSheet, View, Text, Button, NativeModules} from 'react-native';
import Second_Screen from "./Second_Screen";

export default class App extends React.Component{
    constructor(){
        super();
        this.state = {
            visible: false,
        }
    }
render(){
    return (
        <View>
            <Text>I am From the Main App File of React Native</Text>
            <Button
                title="Navigate Me"
                onPress={() => {
                    NativeModules.MyModule.NavigateMe();
                }}
            />
            <Button
                title="Second Screen"
                onPress={() => {
                    this.setState({visible: true})
                }}
            />
            <Second_Screen visible = {this.state.visible}/>
        </View>
    );
}

};

const styles = StyleSheet.create({});
