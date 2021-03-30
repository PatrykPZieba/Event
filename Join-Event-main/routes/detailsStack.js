import { createStackNavigator } from 'react-navigation-stack';
import EventDetails from '../screens/details';
import Header from '../shared/header';
import React from 'react';

const screens = {
    EventDetails: {
        screen: EventDetails,
        navigationOptions: ({navigation }) => {
            return{   
                             
                    headerTitle: () => <Header navigation={navigation} title='Szczegóły'  />,
            }
        }
    }

}
const detailsStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headStyle: { backgroundColor: '#eee', height: 60 }

    }
})

export default detailsStack;