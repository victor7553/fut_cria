import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Duvidas from '../screens/Duvidas';
import Historico from '../screens/Historico';
import Investir from '../screens/Investir';

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen
                name="duvidas"
                component={Duvidas}
            />
            <Tab.Screen
                name="historico"
                component={Historico}
            />
            <Tab.Screen
                name="investir"
                component={Investir}
            />
        </Tab.Navigator>
    );
}

export default TabRoutes;
