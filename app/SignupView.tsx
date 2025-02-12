// app/SignupView.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 

const SignupView: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const navigation = useNavigation();

  const handleSignup = () => {
    console.log('Signup button pressed');
  };

  const NavigateLogin = () => {
    console.log('NavigateLogin button pressed');
    navigation.navigate('LoginView');  
  };

  return (
    <View style={styles.container}>

      {/* Arrow icon for going back */}
      <TouchableOpacity style={styles.arrowButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.label}>Create Account</Text>

      {/* Form Inputs */}
      <View style={styles.form}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your full name"
          value={fullName}
          onChangeText={setFullName}
        />
        
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm your password"
          secureTextEntry
          value={passwordConfirmation}
          onChangeText={setPasswordConfirmation}
        />
      </View>

      {/* Signup Button */}
      <Button title="Sign Up" onPress={handleSignup} />

      {/* Link to go back to Sign In */}
      <TouchableOpacity onPress={NavigateLogin}>
        <Text style={styles.linkText}>Already have an account?Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  arrowButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  form: {
    width: '100%',
  },
  label: {
    fontSize: 16,
    marginVertical: 5,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  linkText: {
    color: 'orange',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default SignupView;
