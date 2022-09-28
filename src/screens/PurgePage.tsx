import { StyleSheet, View, ImageBackground, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';


import Image1 from '../../assets/images/SEM01652.png'


const PurgePage = () => {

    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => navigation.navigate("ShoppingDetail"), 2000)
    }, [])

    return (
        <View style={styles.container}>
            <ImageBackground
                source={Image1}
                style={{ ...StyleSheet.absoluteFillObject }}
            />
            <View style={styles.textContainer}>
                <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>İyi Alışverişler Dileriz</Text>
                <Text style={{ color: "white", fontSize: 18, textAlign: "center", marginTop: 25 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Text>
            </View>
        </View>
    )
}

export default PurgePage

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textContainer: {
        position: "absolute",
        bottom: 100,
        alignSelf: "center",
        alignItems: "center"
    }
})