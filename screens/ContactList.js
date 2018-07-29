import React from "react";
import { 
    View,
    Text,
    ScrollView,
    StyleSheet
} from "react-native";
import { List, ListItem } from 'react-native-elements';
import Navbar from '../components/Navbar';

import { users } from '../components/datasource/data';

export default class ContactList extends React.Component {

    constructor() {
        super();

        users.sort((userA, userB) => userA.name.first.localeCompare(userB.name.first));
        this.state = { userList: users };
    }

    userListFilter = (filterText) => {
        let filteredUsers = [];

        if (filterText === '') {
            filteredUsers = users;
        } else {
            for (let i = 0; i < users.length; i++) {
                const userName = `${users[i].name.first} ${users[i].name.last}`;
                
                if (userName.toLowerCase().toString().includes(filterText.toLowerCase().toString())) {
                    filteredUsers.push(users[i]);
                }
            }
        }

        this.setState({ userList: filteredUsers });
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render(){
        return (
            <View style={ styles.container } >
                <Navbar onChangeText={ text => this.userListFilter(text) } />
                <ScrollView style={ styles.container } >
                    <List containerStyle={{marginTop: 0}}>
                        {
                        this.state.userList
                            .map((user) => (
                            <ListItem
                                roundAvatar
                                avatar={{uri: user.picture.thumbnail}}
                                key={`${user.email}`}
                                title={`${this.capitalizeFirstLetter(user.name.first)} ${this.capitalizeFirstLetter(user.name.last)}`}
                                onPress={() => this.props.navigation.navigate('Profile', { email: user.email })}
                            />
                        ))
                        }
                    </List>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});