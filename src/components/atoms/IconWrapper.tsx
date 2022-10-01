import { StyleSheet, View } from 'react-native'
import React from 'react'
import { StyleProps } from 'react-native-reanimated'

const IconWrapper = ({ icon, customStyle }: { icon: any, customStyle?: StyleProps }) => {
    return (
        <View style={[styles.container, customStyle]}>
            {icon()}
        </View>
    )
}

export default IconWrapper

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: "center",
        justifyContent: "center",
    }
})