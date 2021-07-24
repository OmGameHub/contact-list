import React from "react";
import {
    View,
    TextInput,
    StatusBar,
    StyleSheet
} from "react-native";
import { Item, Input } from 'native-base';

const Navbar = ({
    onChangeText = (text) => text,
}) => {
    StatusBar.setBackgroundColor('#3498db');

    return (
        <View style={styles.container}>
            <View style={styles.navbar} >
                <Item style={styles.input}>
                    <Input
                        style={{ color: '#323232' }}
                        placeholderTextColor='#bdc3c7'
                        placeholder='Search'
                        onChangeText={onChangeText}
                    />
                </Item>
            </View>
        </View>
    );
}

export default Navbar;

const styles = StyleSheet.create({
    container:{
    },
    navbar: {
        // paddingTop: StatusBar.currentHeight,
        // height: 80,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#3498db',
        elevation: 3,

        paddingHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        height: 40,
        // marginLeft: 5,
        borderRadius: 5,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
    }
});