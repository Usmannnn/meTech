import { StyleSheet, Text, View } from 'react-native'
import React from 'react'



const AssetWrapper = ({ customStyle }: { customStyle?: any }) => {
    return (
        <View style={[styles.container, customStyle]}>
            <Text>35235</Text>
        </View>
    )
}

export default AssetWrapper

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    }
})