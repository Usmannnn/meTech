import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native';


import AssetAndArrow from '../molecules/AssetAndArrow'
import { TCard } from '../../utils/types'

const Card = ({ text, image, customStyle, logo, action }: TCard) => {

    const { colors } = useTheme()

    return (
        <TouchableOpacity
            style={[styles.container, customStyle]}
            onPress={() => action()}
        >
            <Image source={image} style={{ width: "100%" }} />
            <AssetAndArrow
                source={logo}
                wrapperColor={customStyle.iconWrapper}
            />
            <View style={{ paddingHorizontal: 15, marginBottom: 15 }}>
                <Text style={{ color: colors.white, fontWeight: "bold" }}>{text}</Text>
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