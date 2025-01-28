import { Text, View, StyleSheet, Pressable, Image, Alert, Modal } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import Delfi from '../../assets/images/delfina.png';
import { useState } from "react";



const Banner = () => {
    const [modalVisible, setModalVisible] = useState(false);
    
    return (
        <View style={styles.container}>
            <View>
                <Image source={Delfi} />
            </View>

            <View style={styles.contenedor}>
                <View style={styles.banner}>
                    <Text style={styles.titulo}>¡Te damos la bienvenida!</Text>
                    
                    <Pressable 
                        style={styles.close} 
                        onPress={() => setModalVisible(true)}>
                    <Feather name="x" size={20} color="black" />
                    </Pressable>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => setModalVisible(false)}
                    >
                        <View style={styles.modalOverlay}>
                            <View style={styles.modalContent}>
                                <Image
                                    source={require("../../assets/images/uno.jpg")}
                                    style={styles.modalImage}
                                />
                                <Text style={styles.modalTexto}>¿Qué hacessss?</Text>
                                
                                <Pressable style={styles.modalClose} onPress={() => setModalVisible(false)}>
                                    <Text style={styles.cerrar}>Cerrar</Text>
                                </Pressable>
                            
                            </View>
                            
                        </View>
                    </Modal>
                </View>
                <Pressable style={styles.button} onPress={() => {Alert.alert('Todavía no está listo loqui')}} >
                    <Feather name="play-circle" size={24} color="white" />
                    <Text style={styles.texto}>Ver video</Text>
                </Pressable>
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.28)",
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalClose: {
        backgroundColor: 'rgba(219, 49, 74, 1)',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginTop: 20,
    },
    cerrar: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white',
    },
    modalTexto: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
    },
    modalContent: {
        width: '80%',
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        gap: 10,
    },
    modalImage: {
        width: 150,
        height: 150,
        resizeMode: "cover",
    },
    container: {
        backgroundColor: '#FFFAFA',
        borderColor: '#f0a8b3',
        flexDirection: 'row',
        borderWidth: 1,
        alignItems: 'center',
        borderRadius: 10,
        gap: 10,
        justifyContent: 'space-evenly',
        padding: 12,
    },
    close: {
        width: 30,
        height: 30,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    banner: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    contenedor: {
        flexDirection: 'column',
        gap: 12,
        justifyContent: 'center',
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 12,
        backgroundColor: '#DB314A',
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        width: 153,
    },
    titulo: {
        color: 'black',
        textAlign: 'left',
        fontSize: 16,
        fontFamily: 'SatoshiBlack',
    },
    texto: {
        color: 'white',
        textAlign: 'left',
        fontSize: 14,
        fontFamily: 'SatoshiBlack',
    },
})



export default Banner;