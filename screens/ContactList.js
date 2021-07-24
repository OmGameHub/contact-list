import React from "react";
import {
    View,
    VirtualizedList,
    StyleSheet
} from "react-native";
import { Avatar, ListItem } from 'react-native-elements';
import Navbar from '../components/Navbar';

import { users } from '../components/datasource/data';
import ROUTE_NAMES from "../routeNames";

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
        let { navigation } = this.props;
        let { userList } = this.state;

        return (
            <View style={ styles.container } >
                <Navbar onChangeText={ text => this.userListFilter(text) } />

                {/* users list start */}
                <VirtualizedList
                    data={userList}
                    initialNumToRender={15}
                    renderItem={({ item }) => (
                        <ListItem
                            bottomDivider
                            onPress={() => navigation.navigate(ROUTE_NAMES.USER_PROFILE, { email: item.email })}
                        >
                            <Avatar rounded source={{uri: item.picture.thumbnail}} />
                            <ListItem.Content>
                                <ListItem.Title>{`${this.capitalizeFirstLetter(item.name.first)} ${this.capitalizeFirstLetter(item.name.last)}`}</ListItem.Title>
                                <ListItem.Subtitle>{item.cell}</ListItem.Subtitle>
                            </ListItem.Content>

                            <ListItem.Chevron />
                        </ListItem>
                    )}
                    keyExtractor={item => item.email}
                    getItemCount={(data) => data?.length}
                    getItem={(data, index) => data[index]}
                />
                {/* users list end */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});