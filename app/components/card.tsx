import { Text, Pressable, View, StyleSheet } from "react-native";


const Birrita = () => {
    return (
        <View style={styles.container}>
            <View style={styles.birrita}>
                <View style={styles.circulo}> 
                <Text style={styles.texto}>🍻</Text> 
                </View>
                <Text style={styles.titulo}>Birra & charla</Text>
            </View>

            <View style={styles.containerText}>
                <Text style={styles.parrrafo}>Conocernos, charlar y tomar birrita, agua... o lo que gustes. ¿Te sumás? ¡Nos vemos!</Text>
                <View style={styles.linea}></View>
                <Text style={styles.parrrafo}>📍 Casa Temple - Palermo Soho CABA</Text>
                <Text style={styles.parrrafo}>🗓️ Viernes 4 de Octubre, 18.30hs</Text>
            </View>

            <View>
                <Pressable style={styles.button}>
                    <Text style={styles.textoBtn}>Yendo</Text>
                </Pressable>
            </View>
        </View>
    )
};


const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#e8edfc', 
        width: '100%',
        borderRadius: 8,
        height: 'auto',
        padding: 16,
        gap: 12,
    },
    texto: {
        fontSize: 36,
    },
    parrrafo: {
        fontSize: 15,
        lineHeight: 24,
        fontFamily: 'SatoshiRegular',
    },
    containerText: {
        gap: 8,
    },
    textoBtn: {
        color: 'black',
        fontSize: 16,
        fontFamily: 'SatoshiBlack',
    },
    button: {
        backgroundColor: 'white',
        borderColor: 'rgba(179, 179, 179, 1)',
        borderWidth: 1,
        width: 153,
        height: 48,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 12,
    },
    circulo: {
        backgroundColor: '#d2daf9',
        width: 62,
        height: 62,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    linea: {
        width: '100%',
        height: 1,
        backgroundColor: 'rgba(195, 195, 234, 0.5)',
    },
    birrita: {
        gap: 12,
        flexDirection: 'column',
    },
    titulo: {
        fontSize: 16,
        fontFamily: 'Cocogoose',
    },
})


export default Birrita;