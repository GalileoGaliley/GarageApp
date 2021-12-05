import React from 'react';
import {Image, ScrollView, Text, View} from "react-native";

const AboutUs = () => {
    return (
        <ScrollView>
            <View>
                <Image source={require('../Static_Images/pexels-photo-9783899.jpeg')}/>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam consectetur deserunt ducimus harum maiores nam natus quo ut voluptates! Accusamus accusantium alias aliquid aspernatur autem consequatur culpa debitis doloremque dolores dolorum impedit incidunt ipsa ipsum laborum magni porro quasi quibusdam quidem quisquam ratione recusandae, repudiandae sunt temporibus unde voluptatum!
                </Text>
            </View>
        </ScrollView>
    );
};

export default AboutUs;