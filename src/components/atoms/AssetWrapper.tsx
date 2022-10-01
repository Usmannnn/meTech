import { Image, ImageRequireSource, StyleSheet, Text, View } from 'react-native'
import React from 'react'



const AssetWrapper = ({ customStyle, source }: { customStyle?: any, source: ImageRequireSource }) => {
    return (
        <View style={[styles.container, customStyle]}>
            <Image source={source} style={{ width: 100, height: 100 }} resizeMode={"center"} />
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