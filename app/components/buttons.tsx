import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import Feather from '@expo/vector-icons/Feather';




const Button = ({ cantidad, titulo, texto, imageA, imageB, imageC, imageD }) => {
    return (
       
        <View style={styles.card}>
            <View style={styles.img}>
                <Image style={styles.imageA}  source={imageB} />
                <Image style={styles.imageA}  source={imageA} />
                <Image style={styles.imageA} source={imageC} />
                <Image style={styles.imageA} source={imageD} />
            </View>

            <View style={styles.contenedor}>
                <View style={styles.dentro}>
                    <Text style={styles.verde}>{cantidad}</Text>

                    <View style={styles.arrow}>
                        <Text style={styles.textoDos}>{titulo}</Text>
                        <Feather name="arrow-up-right" size={24} color="black" />
                    </View>
                    <Text style={styles.parrafo}>{texto}</Text>
                </View>
                <View style={styles.contieneBtn}>
                    <View style={styles.button}>
                        <Text style={styles.textoBtn}>UX Básico</Text>
                    </View>
                </View>
            </View>
        </View>
       

    )
};


const styles = StyleSheet.create({
    card: {
        gap: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#cccccc',
        width: 280,
        height: 'auto',
        overflow: 'hidden',
        flexDirection: 'column',
    },
    img: {
        alignItems: 'center',
    },
    imageA: {
        width: '105%',
    },
    verde: {
        color: '#019884',
        fontSize: 14,
        fontFamily: 'SatoshiBlack',
    },
    contenedor: {
        paddingHorizontal: 12,
        gap: 24,
        paddingBottom: 12,
    },
    dentro: {
        gap: 8,
    },
    arrow: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 16,
        justifyContent: 'space-between'
    },
    textoDos: {
        fontSize: 16,
        fontFamily: 'SatoshiBlack',
    },
    parrafo: {
        fontSize: 14,
        lineHeight: 24,
        color: 'black',
        fontFamily: 'SatoshiRegular',
    },
    contieneBtn: {
        width: '100%',
    },
    button: {
        backgroundColor: '#fff4cc',
        paddingVertical: 2,
        paddingHorizontal: 10,
        width: 100,
        borderRadius: 16,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center', 
    },
    textoBtn: {
        color: 'black',
        fontSize: 14,
        fontFamily: 'SatoshiBlack',
    }

})


export default Button;