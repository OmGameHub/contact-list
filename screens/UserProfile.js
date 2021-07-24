import React from "react";
import {
    View,
    Text,
    Image,
    ImageBackground,
    StyleSheet,
    VirtualizedList
} from "react-native";
import { Icon, ListItem } from 'react-native-elements';
import { users } from "../components/datasource/data";

export default class UserProfile extends React.Component{

    setUserData = (user = {}) => {
        const list = [
            {
              icon: 'email',
              title: user.email,
            },
            {
              icon: 'person',
              title: user.login.username,
            },
            {
              icon: 'phone',
              title: user.cell,
            },
            {
              icon: 'location-city',
              title: `${user.location.street}, ${user.location.city}, ${user.location.state}`,
            },
        ];

        return list;
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render(){
		let { route = {} } = this.props;
        let userIndex = users.map((item) => item.email).indexOf(route.params.email);
        let user = users[userIndex];
        let list = this.setUserData(user);

        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.headerbg}
                    source={{uri: user.picture.large}}>
                    <View style={styles.headercontainer}>
                    <View style={styles.prifilePicContainer}>
                        <Image
                        style={styles.mypic}
                        source={{uri: user.picture.large}} />
                    </View>

                    <Text style={styles.name}>
                        {`${this.capitalizeFirstLetter(user.name.first)} ${this.capitalizeFirstLetter(user.name.last)}`}
                    </Text>
                    </View>
                </ImageBackground>
                {/* <ScrollView style={styles.container} >
                    <List containerStyle={{marginTop: 0}} >
                        {
                            list.map((item, i) => (
                                <ListItem
                                    key={i}
                                    title={item.title}
                                    leftIcon={{name: item.icon}}
                                />
                            ))
                        }
                    </List>
                </ScrollView> */}
                <VirtualizedList
                    data={list}
                    renderItem={({ item }) => (
                        <ListItem bottomDivider>
                            <Icon name={item.icon} color={"#bdc3c7"} />
                            <ListItem.Content >
                                <ListItem.Title>{item.title}</ListItem.Title>
                            </ListItem.Content>

                            <ListItem.Chevron />
                        </ListItem>
                    )}
                    keyExtractor={(_, index) => index.toString()}
                    getItemCount={(data) => data?.length}
                    getItem={(data, index) => data[index]}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    headerbg: {
        width: null,
        height: 250,
        alignSelf: 'stretch',
      },
      headercontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
      },
      prifilePicContainer: {
        width: 150,
        height: 150,
      },
      mypic: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
        borderRadius: 75,
        borderWidth: 3,
        borderColor: '#fff'
      },
      name: {
        marginTop: 10,
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
      },
      liner: {
        marginTop: 5,
        fontSize: 15,
        color: '#fff',
        fontStyle: 'italic',
      },
});