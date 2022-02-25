import { View, Text, Animated, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';

//  nm,import Post2 from '../assets/post2.jpeg';
import Post3 from '../assets/post3.jpeg';
import Post4 from '../assets/post4.jpeg';
import Post5 from '../assets/post5.jpeg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Home = () => {
    const edges = useSafeAreaInsets();

    return (
        <Animated.View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    paddingHorizontal: 15,
                    paddingTop: edges.top + 65,
                    paddingBottom: 100
                }}
            >
                <View>
                    {[Post1, Post2, Post3, Post4, Post5].map((item, index) => {
                        return (
                            <TouchableOpacity key={index + '' + Math.random()}>
                                <Image
                                    source={item}
                                    style={{
                                        width: Dimensions.get('window').width - 30,
                                        height: 250,
                                        borderRadius: 15,
                                        marginTop: 20
                                    }}
                                />
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </ScrollView>
        </Animated.View>
    );
};

export default Home;
