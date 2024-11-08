import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { Avatar, Card, IconButton } from 'react-native-paper';
import { Switch } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const navigation:any = useNavigation();

  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const handleSend = () => {
    // Handle form submission logic here
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    // Clear the form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Contact Us</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Message"
        value={message}
        onChangeText={setMessage}
        multiline
        numberOfLines={4}
      />
      <TouchableOpacity style={styles.button} onPress={handleSend}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
      <Button icon="camera" mode="contained" onPress={() => navigation.navigate('Coffeescreen')}>
    Press me
  </Button>

  <Card.Title
    title="Card Title"
    subtitle="Card Subtitle"
    left={(props) => <Avatar.Icon {...props} icon="folder" />}
    right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
  />

<Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top', // Align text to the top for multiline inputs
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#007BFF',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Contact;
