import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'

const WebViewScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <WebView
                source={{ uri: 'https://api-test.moneypay.com.tr:8743/#/list?userToken=73786f6d6b6e4f636f6c6e726c757371' }}
            />
        </View>
    )
}

export default WebViewScreen

const styles = StyleSheet.create({})