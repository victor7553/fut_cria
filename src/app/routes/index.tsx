import { NavigationContainer } from '@react-navigation/native';
import TabRoutes from './tab.routes';


const Routes = () => {

    return(
        <NavigationContainer independent={true}>
            <TabRoutes/>
        </NavigationContainer>
    );
}

export default Routes;