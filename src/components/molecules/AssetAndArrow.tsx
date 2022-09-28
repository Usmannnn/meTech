import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AssetWrapper from '../atoms/AssetWrapper'
import IconWrapper from '../atoms/IconWrapper'
import AntDesign from '@expo/vector-icons/AntDesign';


const AssetAndArrow = ({ source, wrapperColor }: { source: any, wrapperColor: any }) => {
    return (
        <View style={styles.container}>
            <Image source={source} />
            <IconWrapper
                icon={() => <AntDesign name="arrowright" size={25} color="white" />}
                customStyle={{ backgroundColor: wrapperColor }}
            />
        </View>
    )
}

export default AssetAndArrow

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        marginVertical: 15
    }
})