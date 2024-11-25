import Routes from "./routes";
import { NavigationContainer } from "@react-navigation/native";

const Home = () => {

    return(
        // <View style={styles.container}>
        //     <Text>olá mundo</Text>
        // </View>

        // possivel solução do problema
        <NavigationContainer>
            <Routes/>
        </NavigationContainer>
        
    )
}
export default Home;
