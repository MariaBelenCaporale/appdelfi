import { Text, Image, View, StyleSheet } from "react-native";
import Naranja from '../../assets/images/naranja.png';
import Compu from '../../assets/images/compu.png';

const Podcast = () => {
    return (

        <View style={styles.container}>

            <View style={styles.img}>

                <Image source={Compu} />

                <View style={styles.contieneText}>
                    <Text style={styles.texto}>Cómo conseguir tu primer trabajo remoto</Text>
                </View>
            </View>
            <View style={styles.img}>

                <Image source={Naranja} />

                <View style={styles.contieneText}>
                    <Text style={styles.texto}>Hablemos del UX en el consultorio ginecológico</Text>
                </View>
            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 100,
        gap: 12,
    },
    img: {
        width: 'auto',
        borderRadius: 8,
        gap: 4,
    },
    contieneText: {
        width: '100%',
        flexWrap: 'nowrap',
    },
    texto: {
        color: 'black',
        fontSize: 14,
        fontFamily: 'SatoshiBlack',
        lineHeight: 24,
    }
})



export default Podcast;