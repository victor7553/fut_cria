import {View, Text, StyleSheet} from "react-native";
import Routes from "./routes";

const Home = () => {

    return(
        // <View style={styles.container}>
        //     <Text>olá mundo</Text>
        // </View>
        <Routes/>
    )
}
export default Home;

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: 'fffff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})