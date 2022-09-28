import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native'

const QrEdges = ({ edges, position }: { edges: number[], position: any[] }) => {

    const { colors } = useTheme()


    return <View
        style={[
            styles.container, {
                borderColor: colors.secondary,
                borderTopWidth: edges[0],
                borderRightWidth: edges[1],
                borderBottomWidth: edges[2],
                borderLeftWidth: edges[3],
                position: "absolute",
                top: position[0],
                right: position[1],
                bottom: position[2],
                left: position[3]
            }
        ]}
    />
}

export default QrEdges

const styles = StyleSheet.create({
    container: {
        width: 35,
        height: 35,
        borderWidth: 4,
    }
})