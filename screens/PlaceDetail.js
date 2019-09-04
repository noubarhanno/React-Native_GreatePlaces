import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlaceDetail = props => {
    return (
        <View>
            <Text>Place Detail</Text>
        </View>
    );
}

PlaceDetail.navigationOptions = navData => {
    return{
        headerTitle: navData.navigation.getParam('placeTitle')
    }
}

const styles = StyleSheet.create({
    
});

export default PlaceDetail;