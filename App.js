import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ContactList from "./screens/ContactList";
import UserProfile from "./screens/UserProfile";
import ROUTE_NAMES from "./routeNames";

const AppStack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator headerMode="none">
                <AppStack.Screen
                    name={ROUTE_NAMES.CONTACT_LIST}
                    component={ContactList}
                />

                <AppStack.Screen
                    name={ROUTE_NAMES.USER_PROFILE}
                    component={UserProfile}
                />
            </AppStack.Navigator>
        </NavigationContainer>
    );
};

export default App;

// const RootStack = createStackNavigator(
//     {
//         Home: ContactList,
//         Profile: UserProfile,
//     },
//     {
//         headerMode: "none",
//         navigationOptions: {
//             headerVisible: false,
//         },
//     }
// );
