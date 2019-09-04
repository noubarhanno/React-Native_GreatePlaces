import React, {useState} from 'react';
import {ScrollView, View,Button, Text,TextInput, StyleSheet } from 'react-native';
import Colors from '../constants/colors';
import * as PlacesActions from '../store/places-action';
import { useDispatch } from 'react-redux';
import ImagePicker from '../components/ImageSelector';

const NewPlace = props => {
    const [titleValue, setTitleValue] = useState('');

    const titleChangeHandler = text => {
        setTitleValue(text);
    }

    const dispatch = useDispatch();

    const savePlaceHandler = () => {
        dispatch(PlacesActions.addPlace(titleValue));
        props.navigation.goBack();
    };

    return (
      <ScrollView>
        <View style={styles.form}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.TextInput}
            onChangeText={titleChangeHandler}
            value={titleValue}
          />
          <ImagePicker />
          <Button title="Save Place" color={Colors.primary} onPress={savePlaceHandler} />
        </View>
      </ScrollView>
    );
}

NewPlace.navigationOptions = {
    headerTitle: 'Add Place'
}

const styles = StyleSheet.create({
    form: {
        margin: 30,
    },
    label: {
        fontSize: 18,
        marginBottom: 15
    },
    TextInput: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 2,
        paddingVertical: 4
    }
});

export default NewPlace;