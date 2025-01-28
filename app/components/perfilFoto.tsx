import { useRouter } from "expo-router";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import Feather from '@expo/vector-icons/Feather';



const Perfil = () => {
    const router = useRouter();
    return (
        <View style={styles.cont}>
            <Text style={styles.nombre}>Hola, Zowi ✨</Text>
            <Feather name="bell" size={24} color="black" />
        </View>

    )
}



const styles = StyleSheet.create({
    cont: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 16,
    },
    nombre: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'Cocogoose',
    },

})


export default Perfil;