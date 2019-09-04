import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NewPlace = props => {
    return (
        <View>
            <Text>New Place</Text>
        </View>
    );
}

NewPlace.navigationOptions = {
    headerTitle: 'Add Place'
}

const styles = StyleSheet.create({

});

export default NewPlace;