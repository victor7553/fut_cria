import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Duvidas from '../screens/Duvidas';
import Historico from '../screens/Historico';
import Investir from '../screens/Investir';

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#9fe801',
        tabBarInactiveTintColor: '#FFF',
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#fffff',
          borderTopWidht: 0,
        },
      }}>
      <Tab.Screen
        name="duvidas"
        component={Duvidas}
        options={{
          tabBaarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Feather name="home" size={size} color={color} />;
            }
            return <Feather name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="historico"
        component={Historico}
        options={{
          tabBaarIcon: () => <Feather name="plus" />,
        }}
      />
      <Tab.Screen
        name="investir"
        component={Investir}
        options={{
          //tabBaarIcon: ({color, size}) => <Feather name='star' color={color} size={size}/>,
          tabBarLabel: 'investir',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
