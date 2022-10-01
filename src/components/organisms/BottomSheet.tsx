import { StyleSheet, View, Text, useWindowDimensions, NativeScrollEvent } from 'react-native'
import React, { useEffect } from 'react'
import { useTheme } from '@react-navigation/native'
import Animated, {
    useSharedValue,
    withSpring,
    useAnimatedStyle,
    useAnimatedGestureHandler,
    WithSpringConfig,
} from 'react-native-reanimated';
import { PanGestureHandler, ScrollView } from 'react-native-gesture-handler';

const enum SheetStatus {
    CLOSED,
    MIN,
    MAX
}

const BottomSheet = ({ isActive, renderItems, headerItem }: { isActive: boolean, renderItems: any, headerItem: any }) => {


    const { colors } = useTheme()
    const { height } = useWindowDimensions()

    const CLOSED = -70
    const MIN_HEIGHT = -height * .6
    const MAX_HEIGHT = -height * .9

    const animatedHeight = useSharedValue(CLOSED)
    const sheetStatus = useSharedValue(0)

    const springConfig: WithSpringConfig = {
        damping: 50,
        mass: 0.3,
        stiffness: 120,
        overshootClamping: true,
        restSpeedThreshold: 0.3,
        restDisplacementThreshold: 0.3,
    };

    useEffect(() => {
        isActive ? animatedHeight.value = CLOSED : animatedHeight.value = 0
    }, [isActive])

    const panGestureEvent = useAnimatedGestureHandler({
        onStart: (_, ctx) => {
            ctx.startY = animatedHeight.value
        },
        onActive: (event, ctx) => {
            if (event.translationY < 0) animatedHeight.value < MIN_HEIGHT ? sheetStatus.value = SheetStatus.MIN : sheetStatus.value = SheetStatus.CLOSED
            else if (event.translationY > 0) sheetStatus.value = SheetStatus.MAX
            animatedHeight.value = ctx.startY + event.translationY
        },
        onEnd: () => {
            'worklet'

            if (sheetStatus.value === SheetStatus.CLOSED) {
                animatedHeight.value = withSpring(MIN_HEIGHT, springConfig);
                sheetStatus.value = SheetStatus.MIN
            }
            else if (sheetStatus.value === SheetStatus.MIN) {
                animatedHeight.value = withSpring(MAX_HEIGHT, springConfig);
                sheetStatus.value = SheetStatus.MAX
            }
            else if (sheetStatus.value != SheetStatus.CLOSED && -animatedHeight.value < -MAX_HEIGHT + 1) {
                animatedHeight.value = withSpring(CLOSED, springConfig);
            }

        }
    });


    const isCloseTo = ({ layoutMeasurement, contentOffset, contentSize }: NativeScrollEvent) => {

        const reachedBottom = layoutMeasurement.height + contentOffset.y >= contentSize.height
        // const reachedTop = contentOffset.y == 0
        if (reachedBottom && sheetStatus.value === SheetStatus.MIN) animatedHeight.value = withSpring(MAX_HEIGHT, springConfig)
    };


    const animatedStyle = useAnimatedStyle(() => {
        return {
            height: -animatedHeight.value,
            maxHeight: -MAX_HEIGHT
        };
    });

    return (
        <PanGestureHandler onGestureEvent={panGestureEvent}>
            <Animated.View
                style={[styles.container, animatedStyle]}
            >
                <View style={[styles.headContainer, { height: -CLOSED }]}>
                    <View style={{ backgroundColor: colors.black, height: 5, width: "20%", borderRadius: 10, marginTop: 10 }} />
                    {headerItem()}
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.itemContainer}
                    onScroll={({ nativeEvent }) => isCloseTo(nativeEvent)}
                    scrollEventThrottle={400}
                >
                    {renderItems()}
                </ScrollView>
            </Animated.View>
        </PanGestureHandler>

    )
}

export default BottomSheet

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        elevation: 4,
    },
    headContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    itemContainer: {
        paddingHorizontal: 20
    }
})