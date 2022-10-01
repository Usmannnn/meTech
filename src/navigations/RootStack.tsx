import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TabStack } from './TabStack';
import { QRStack } from './QRStack';
import ShoppingDetail from '../screens/ShoppingDetail';

const Stack = createNativeStackNavigator()

export const RootStack = () => {

    return (
        <Stack.Navigator
            initialRouteName='Tabs'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Tabs" component={TabStack} />
            <Stack.Screen name="QRStack" component={QRStack} />
            <Stack.Screen name="ShoppingDetail" component={ShoppingDetail} />
        </Stack.Navigator>
    );
}