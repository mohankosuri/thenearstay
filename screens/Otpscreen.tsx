import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OtpScreen = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const navigation:any = useNavigation()
  
  const handleOtpChange = (value:any, index:any) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Automatically focus on the next input if one exists
    if (value.length > 0 && index < 3) {
      nextInput[index].focus();
    }
  };

  let nextInput:any = [];

  const handleSubmit = () => {
    console.log('OTP entered:', otp.join(''));
navigation.navigate('home')
  };

  const handleResend = () => {
    console.log('Resend OTP');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <Text style={styles.subtitle}>We have sent a code to your phone</Text>
      <View style={styles.otpContainer}>
        {otp.map((item, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={item}
            onChangeText={(value) => handleOtpChange(value, index)}
            ref={(input) => nextInput[index] = input}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleResend}>
        <Text style={styles.resendText}>Resend OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginVertical: 20,
    textAlign: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 18,
    color: '#333',
    marginLeft:10
  },
  submitButton: {
    backgroundColor: '#008080',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 8,
    marginVertical: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resendText: {
    color: '#007BFF',
    fontSize: 16,
  },
});

export default OtpScreen;
