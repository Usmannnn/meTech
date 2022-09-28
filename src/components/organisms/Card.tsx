import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import AssetAndArrow from '../molecules/AssetAndArrow'

const Card = ({ text, image, customStyle, source }: { source: any, text: string, image: any, customStyle: any }) => {
    return (
        <TouchableOpacity
            style={[styles.container, customStyle]}
        >
            <Image source={image} style={{ width: "100%" }} />
            <AssetAndArrow
                source={source}
                wrapperColor={customStyle.iconWrapper}
            />
            <View style={{ paddingHorizontal: 15, marginBottom: 15 }}>
                <Text style={{ color: "white", fontWeight: "bold" }}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        borderRadius: 10,
        marginHorizontal: 15,
        overflow: "hidden",
    }
})