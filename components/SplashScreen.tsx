import { View, Text, Animated, Image, Dimensions } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import chatap from '../assets/chat.png';
import Home from './Home';

export default function SplashScreen() {
    const edges = useSafeAreaInsets();
    const BG_COLOR = '#4D4A95';

    const startAnimation = useRef(new Animated.Value(0)).current;

    const scaleLogo = useRef(new Animated.Value(1)).current;
    const scaleTitle = useRef(new Animated.Value(1)).current;

    const moveLogo = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    const moveTitle = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

    const moveContent = useRef(new Animated.Value(Dimensions.get('window').height)).current;

    useEffect(() => {
        setTimeout(() => {
            Animated.parallel([
                Animated.timing(startAnimation, {
                    toValue: -Dimensions.get('window').height + (edges.top + 65),
                    useNativeDriver: true
                }),
                Animated.timing(scaleLogo, {
                    toValue: 0.3,
                    useNativeDriver: true
                }),
                Animated.timing(scaleTitle, {
                    toValue: 0.8,
                    useNativeDriver: true
                }),
                Animated.timing(moveLogo, {
                    toValue: {
                        x: Dimensions.get('window').width / 2 - 35,
                        y: Dimensions.get('window').height / 2 - 5
                    },
                    useNativeDriver: true
                }),
                Animated.timing(moveTitle, {
                    toValue: {
                        x: 0,
                        y: Dimensions.get('window').height / 2 - 90
                    },
                    useNativeDriver: true
                }),
                Animated.timing(moveContent, {
                    toValue: 0,
                    useNativeDriver: true
                })
            ]).start();
        }, 500);
    }, []);

    return (
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
            <Animated.View
                style={{
                    flex: 1,
                    backgroundColor: BG_COLOR,
                    zIndex: 1,
                    transform: [{ translateY: startAnimation }]
                }}
            >
                <Animated.View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Animated.Image
                        source={chatap}
                        style={{
                            width: 100,
                            height: 100,
                            marginBottom: 20,
                            transform: [
                                { translateX: moveLogo.x },
                                { translateY: moveLogo.y },
                                {
                                    scale: scaleLogo
                                }
                            ]
                        }}
                    />
                    <Animated.Text
                        style={{
                            fontSize: 25,
                            fontWeight: '700',
                            color: 'white',
                            transform: [
                                { translateX: moveTitle.x },
                                { translateY: moveTitle.y },
                                {
                                    scale: scaleTitle
                                }
                            ]
                        }}
                    >
                        Chatty
                    </Animated.Text>
                </Animated.View>
            </Animated.View>
            <Animated.View
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,.04)',
                    zIndex: 0,
                    transform: [{ translateY: moveContent }]
                }}
            >
                <Home />
            </Animated.View>
        </View>
    );
}
