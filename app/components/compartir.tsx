import { Text, View, StyleSheet } from "react-native";
import Feather from '@expo/vector-icons/Feather';




const Compartir = () => {
    return (
        <View style={styles.container}>
            <View style={styles.todo}>
                <View style={styles.circulo}>
                    <Text style={styles.mensaje}>💬</Text>
                </View>

                <View style={styles.uno}>
                    <View style={styles.tituloOrden}>
                        <Text style={styles.titulo}>Compartinos tu opinión</Text>
                        <Feather name="arrow-up-right" size={24} color="black" />
                    </View>
                    <View style={styles.tituloDos}>
                        <Text style={styles.bajada}>Sugerencias, ideas, mejoras, lo que sea queremos leerte y escucharte.</Text>
                    </View>
                </View>
            </View>




        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255, 249, 229, 1)',
        borderColor: 'rgba(255, 222, 102, 1)',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 16,
        gap: 12,
        width: '100%',
    },
    uno: {
        flexDirection: 'column',
        gap: 4,
        width: '100%',
    },
    todo: {
        gap: 8,
        flexDirection: 'row',
        width: '80%',
    },
    tituloDos: {
        width: '100%',
    },
    bajada: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'SatoshiRegular',
    },
    circulo: {
        backgroundColor: 'rgba(255, 222, 102, 1)',
        borderRadius: 50,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mensaje: {
        fontSize: 24,
    },
    titulo: {
        fontSize: 16,
        fontFamily: 'SatoshiBlack',
        textAlign: 'left',
    },
    tituloOrden: {
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
})



export default Compartir;