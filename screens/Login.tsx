import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet,Alert,ImageBackground } from 'react-native';


const Login = ({ navigation }:any) => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
   
    if (mobile === '9848685011' && password === '1234') {
      navigation.navigate('otpscreen');
    } else {
      Alert.alert('Invalid mobile or password');
    }
  };

  return (
    <ImageBackground style={styles.container} source={require('../assets/claybrixsplash.jpg')}>
     
     
   
    <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="mobile"
        value={mobile}
        onChangeText={setMobile}
        keyboardType="numeric"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} color="#008080" />
  
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding:30,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color:"white"
    
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default Login;
