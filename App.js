import * as screen from './screen/Screens';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={screen.Login} />
        <Drawer.Screen name="TaskList" component={screen.TaskList} />
        <Drawer.Screen name="NewTask" component={screen.NewTask} />
        <Drawer.Screen name="EditTask" component={screen.EditTask} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}