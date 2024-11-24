import {View, Text, StyleSheet} from "react-native";

const Duvidas = () => {

    return(
        <View style={styles.container}>
            <Text>olá mundo</Text>
        </View>
    )
}
export default Duvidas;

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: 'fffff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})