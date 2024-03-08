import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import HeadingContent from "./HeadingContent";
import AdvertisementCards from "./AdvertisementCards";

const Homescreen = () => {
    return (
        <SafeAreaView style = {styles.mainContainer}>
            <ScrollView>
                <View style={styles.mainContainer}>
                    <HeadingContent/>
                    <AdvertisementCards/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Homescreen

const styles = StyleSheet.create(
    {
        mainContainer: {
            width: '100%',
            backgroundColor: 'rgb(203 213 225)',
        },
        scrollViewStyling: {
            flexGrow: 1
        },
        homescreenMainContainer : {
            flex:1
        }
    }
)