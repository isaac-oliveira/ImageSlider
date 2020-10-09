import React from 'react';
import { View } from 'react-native'
import ImageSlider from './components/ImageSlider';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ImageSlider />
    </View>
  );
}
