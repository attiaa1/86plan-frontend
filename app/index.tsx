import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Background from '../components/Background';
import Hero from '../components/Hero';

const App = () => {
  return (
    <SafeAreaProvider>
      <Background>
        <SafeAreaView style={{ flex: 1 }}>
          <Hero />
        </SafeAreaView>
      </Background>
    </SafeAreaProvider>
  );
};

export default App;
