import * as screen from './screen/Screens';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SignOutIcon, ChecklistIcon, FileAddedIcon } from "@primer/octicons-react";

registerRootComponent(App);

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Sair"
        screenOptions={{
          drawerStyle: { width: 216, backgroundColor: '#f7f5e1', color: '#5f4237' },
          headerStyle: { height: 56, backgroundColor: '#f7f5e1' },
          headerTitleStyle: { color: '#5f4237' },
        }}>
        <Drawer.Screen name="Lista de Tarefas" component={screen.TaskList} options={{ drawerIcon: () => (<ChecklistIcon />) }} />
        <Drawer.Screen name="Nova Tarefa" component={screen.NewTask} options={{ drawerIcon: () => (<FileAddedIcon />) }} />
        <Drawer.Screen name="Sair" component={screen.Login} options={{ headerShown: false, drawerIcon: () => (<SignOutIcon />) }} />
        <Drawer.Screen name="Editar Tarefa" component={screen.EditTask} options={{ drawerItemStyle: { display: 'none' } }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}