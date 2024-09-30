import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions, SafeAreaView} from 'react-native';

const { width, height } = Dimensions.get('window');

const Hero = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
        <Text style={styles.heroTitle}>Welcome to 86Plan!</Text>
        <Image
          style={styles.heroImage}
          source={require('../assets/images/transparent_logo.png')}
        />
        <Text style={styles.heroSubtitle}>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Dapibus sed laoreet blandit scelerisque elementum ornare; magna curabitur nunc. Odio enim mauris suscipit at senectus rhoncus rutrum nec. Taciti consectetur nunc lectus accumsan montes tristique. Parturient libero bibendum in proin aenean. Tincidunt hac suspendisse quisque justo in aptent imperdiet. Donec lobortis condimentum consectetur malesuada nam taciti.
      </Text>
        <TouchableOpacity style={styles.heroButton}>
          <Text style={styles.heroButtonText}>Sign Up Now</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
  },
  heroSection: {
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroTitle: {
    justifyContent: 'flex-start',
    fontSize: 32,
    color: 'white',
    marginBottom: 16,
    marginTop: 16,
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 16,
    color: 'white',
    marginBottom: 32,
    textAlign: 'center',
    width: 0.75 * width,
  },
  heroButton: {
    justifyContent: 'flex-end',
    paddingVertical: 16,
    paddingHorizontal: 32,
    backgroundColor: 'white',
    borderRadius: 5,
    width: width * 0.8,
    alignItems: 'center',
  },
  heroButtonText: {
    fontSize: 16,
    color: '#007bff',
    textAlign: 'center',
  },
  heroImage:{
    width: 0.35 * height, // Adjust the width as needed
    height: 0.35 * height, // Adjust the height as needed
    marginVertical: 20,
  },
});

export default Hero;

