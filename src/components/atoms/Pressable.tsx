import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'

const Pressable = ({ text, action }: { text: string, action: any }) => {

    const { colors } = useTheme()

    return (
        <TouchableOpacity
            style={[styles.container, { backgroundColor: colors.headerColor }]}
            onPress={() => action()}
        >
            <Text style={{ color: colors.white, fontSize: 18, textAlign: "center" }}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Pressable

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        width: "70%",
        alignSelf: "center",
        paddingVertical: 15
    }
})