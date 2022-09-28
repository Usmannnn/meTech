import * as React from 'react';
import { useTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Ionicons from '@expo/vector-icons/Ionicons';
import Migroskop from '../screens/Migroskop';
import MigrosTv from '../screens/MigrosTv';
import Profile from '../screens/Profile';
import MKolay from '../screens/MKolay';

const Tab = createBottomTabNavigator()

export const TabStack = () => {

    const { colors } = useTheme()

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Ansayfa') iconName = focused ? 'home' : 'home-outline'
                    else if (route.name === 'Migroskop') iconName = focused ? 'card' : 'card-outline'
                    else if (route.name === "MKolay") iconName = focused ? 'card' : 'card-outline'
                    else if (route.name === "MigrosTv") iconName = focused ? 'tv' : 'tv-outline'
                    else if (route.name === "Profil") iconName = focused ? 'person' : 'person-outline'

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                headerTitleAlign: "center",
                headerStyle: {
                    backgroundColor: colors.secondary,
                },
                headerTintColor: "white"
            })}

        >
            <Tab.Screen name="Ansayfa" component={Home} />
            <Tab.Screen name="Migroskop" component={Migroskop} />
            <Tab.Screen name="MKolay" component={MKolay} />
            <Tab.Screen name="MigrosTv" component={MigrosTv} />
            <Tab.Screen name="Profil" component={Profile} />
        </Tab.Navigator>
    );
}