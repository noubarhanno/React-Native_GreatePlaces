import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { Platform } from '@unimodules/core';

const PlaceList = props => {
    return (
        <View>
            <Text>Place List</Text>
        </View>
    );
}

PlaceList.navigationOptions = navData => {
    return {
        headerTitle: 'All Places',
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Add Place"
                    iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
                    onPress={() => navData.navigation.navigate('NewPlace')}
                />
            </HeaderButtons>
        )
    }
    
}

const styles = StyleSheet.create({

});

export default PlaceList;