import React from 'react'
import {View, Text, Modal} from 'react-native';


class Second_Screen extends React.Component{
    

    render() {
        return (
            <View>
                <Text>I am from Second Screen</Text>
                <Modal
                    visible={this.props.visible}
                >
                    <Text>I am modal</Text>
                </Modal>
            </View>
        );
    }
}


export default Second_Screen;
