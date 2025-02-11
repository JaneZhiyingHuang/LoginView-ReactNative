import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SigninView: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Sign-in page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SigninView;
