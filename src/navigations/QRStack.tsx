import * as React from 'react';
import { StatusBar } from 'react-native';
import { useTheme, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QRPage from '../screens/QRPage';
import Ionicons from '@expo/vector-icons/Ionicons';

import { useNavigation } from '@react-navigation/native';
import PurgePage from '../screens/PurgePage';

const Stack = createNativeStackNavigator()

export const QRStack = () => {

    const { colors } = useTheme()
    const { headerColor } = useRoute().params
    const navigation = useNavigation()

    return (
        <React.Fragment>
            <StatusBar backgroundColor={headerColor} barStyle={"light-content"} />

            <Stack.Navigator
                initialRouteName='MKolay'
                screenOptions={{
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: headerColor,
                    },
                    headerTintColor: colors.white,
                    title: "MKolay",
                }}
            >
                <Stack.Screen
                    name="QRPage"
                    component={QRPage}
                    options={{
                        headerLeft: () => <Ionicons
                            name={"ios-chevron-back"}
                            size={25}
                            color={colors.white}
                            onPress={() => navigation.navigate("MKolay")}
                        />
                    }}
                />
                <Stack.Screen
                    name="PurgPage"
                    component={PurgePage}
                    options={{
                        headerLeft: () => <Ionicons
                            name={"ios-chevron-back"}
                            size={25}
                            color={colors.white}
                            onPress={() => navigation.navigate("MKolay")}
                        />
                    }}
                />
            </Stack.Navigator>
        </React.Fragment>
    );
}