import { StyleSheet, Text, View, useWindowDimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native';


const CustomButton = ({ text, action, icon }: { text: string, action: any, icon: any }) => {

    const { colors } = useTheme()
    const { width } = useWindowDimensions()

    return (
        <TouchableOpacity
            style={[styles.container, { width: (width / 2) - 45, borderColor: colors.gray }]}
            onPress={() => action()}
        >
            {icon()}
            <View style={{ paddingHorizontal: 15 }}>
                <Text style={{ textAlign: "center", fontWeight: "700", fontSize: 16 }}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        aspectRatio: 1,
    }
})