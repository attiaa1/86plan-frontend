import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

const Background: React.FC = ({ children }) => {
  return (
    <ImageBackground
      source={require('../assets/images/gradient.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>{children}</View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});

export default Background;

