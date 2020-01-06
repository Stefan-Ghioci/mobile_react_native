import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Text, Input, Slider } from 'react-native-elements';
import { styles } from './AddGameScreenStyles';
import { showSuccess, showError, formatDate, imageUrlRegex } from '../../utils';
import DateTimePicker from '@react-native-community/datetimepicker';
import Axios from 'axios';
import { POST_GAMES_URL } from '../../api';

const AddGameScreenContainer = props => {
  const [rating, setRating] = useState(2.5);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date('2000-01-01'));
  const [name, setName] = useState('');
  const [imageURL, setImageURL] = useState('');

  const [nameError, setNameError] = useState('');
  const [imageURLError, setimageURLError] = useState('');

  const goBack = () => props.navigation.navigate('Home');

  const addGame = () => {
    // validate data

    let valid = true;

    if (name === '') {
      setNameError('Title cannot be empty');
      valid = false;
    } else {
      setNameError('');
    }

    if (imageURL.match(imageUrlRegex) === [] && imageURL !== '') {
      setimageURLError('Image URL must be either valid or empty');
      valid = false;
    } else {
      setimageURLError('');
    }

    if (!valid) return;

    // send data to server

    Axios.post(
      POST_GAMES_URL,
      { name, date, imageURL, rating },
      { timeout: 2000 }
    )
      .then(() => {
        showSuccess('Game added successfully');
      })
      .catch(() => {
        showError('An error occurred while sending data to the server');
      })
      .finally(() => {
        goBack();
      });
  };

  const pickDate = (_event, pickedDate) => {
    pickedDate = pickedDate || date;

    setShowDatePicker(false);
    setDate(pickedDate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text h3> Fill in game details</Text>
      </View>
      <View style={styles.body}>
        <Input
          onChangeText={setName}
          value={name}
          label='Game Title'
          leftIcon={{ type: 'material', name: 'title' }}
          errorMessage={nameError}
        />
        <Input
          onChangeText={setImageURL}
          value={imageURL}
          label='Image URL'
          leftIcon={{ type: 'material', name: 'image' }}
          errorMessage={imageURLError}
        />
        <View>
          <Text style={styles.label}>
            Rating: {rating.toString().substr(0, 3)}
          </Text>
          <Slider
            style={{ width: 350 }}
            value={rating}
            minimumValue={0.0}
            maximumValue={5.0}
            step={0.1}
            maximumTrackTintColor={'red'}
            minimumTrackTintColor={'green'}
            thumbTintColor={'green'}
            onValueChange={setRating}
          />
        </View>
        <View style={styles.date}>
          <Button
            type='clear'
            onPress={() => setShowDatePicker(true)}
            title='Select Date'
          />
          <Text style={styles.label}>{formatDate(date)}</Text>
        </View>
        {showDatePicker && (
          <DateTimePicker value={date} mode={'date'} onChange={pickDate} />
        )}
      </View>
      <View style={styles.footer}>
        <Button
          title='Cancel'
          buttonStyle={styles.secondaryButton}
          titleStyle={styles.secondaryButtonTitle}
          type='outline'
          onPress={goBack}
        />
        <Button
          buttonStyle={styles.button}
          title='Add Game'
          onPress={addGame}
        />
      </View>
    </View>
  );
};

export default AddGameScreenContainer;
