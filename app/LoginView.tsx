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
      <Text style={styles.label}>Login</Text>
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

      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} />
      </View>

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
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  buttonContainer: {
    marginBottom: 15,
  },
  linkText: {
    color: 'orange',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default LoginView;
