import * as screen from './screen/Screens';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Create">
        <Drawer.Screen name="Login" component={screen.Login} />
        <Drawer.Screen name="TaskList" component={screen.TaskList} />
        <Drawer.Screen name="Create" component={screen.Create} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
