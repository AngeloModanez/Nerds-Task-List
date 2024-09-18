import * as screen from './screen/Screens';
import { style } from './Style';

import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={style.container}>
      <StatusBar style="auto" />
      <screen.Login></screen.Login>
    </View>
  );
}