// app/loginView.tsx 
import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginView: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const navigation = useNavigation();

  const handleLogin = () => {
    console.log('Login button pressed');
  };

  const forgotPW = () => {
    console.log('ForgotPW button pressed');
  };

  const navigateSignup = () => {
    console.log('NavigateSignup button pressed');
    navigation.navigate('SignupView');  
  };

  return (
    <View style={styles.container}>

      {/* Title */}
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Please sign in to continue.</Text>
        
        {/* Form Inputs */}
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your username"
        value={username}
        onChangeText={setUsername}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity onPress={forgotPW}>
      <Text style={styles.linkText}>Forgot password?</Text>
      </TouchableOpacity>

      {/* Custom Login Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateSignup}>
        <Text style={styles.linkText}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  
  title: {
    fontSize: 36,
    marginBottom: 5,
    fontWeight: 'bold',
    // textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 40,
    color: 'grey',
  },  
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
 button: {
    backgroundColor: 'orange',
    padding: 8,
    borderRadius: 30,
    alignItems: 'center', 
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  linkText: {
    color: 'grey',
    marginBottom: 30,
    marginTop: 20,
    textAlign: 'center',
  },
});

export default LoginView;
