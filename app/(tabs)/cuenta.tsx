import { View, StyleSheet, Alert, ScrollView } from 'react-native';
import Perfil from '../components/perfilFoto';
import Button from '../components/buttons';
import Banner from '../components/banner';
import { SafeAreaView } from "react-native-safe-area-context";
import Headers from '../components/header';
import Uno from '../../assets/images/cardUno.png';
import Dos from '../../assets/images/cardDos.png';
import Tres from '../../assets/images/cardTres.png';
import Cuatro from '../../assets/images/cardCuatro.png';
import Podcast from '../components/podcast';
import Birrita from '../components/card';
import Compartir from '../components/compartir';
import { useRouter } from 'expo-router';



const Cuenta = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
            <View style={styles.perfil}>
                <Perfil />
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} style={styles.container}>

                <View style={styles.banner}>
                    <Banner />
                </View>

                <View>
                    <Headers
                        press={() => {router.push('/(tabs)/clases')}}
                        titulo='Clases de UX/UI'
                        mas='Ver más'
                    />
                </View>

                <View style={styles.contieneBtn}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.scrollContentButton}
                    >
                        <Button
                            cantidad='3 clases • Duración total: 1hs'
                            titulo='UX Kickstart: UX desde 0'
                            texto='Aprendé qué es diseño UX y cuáles son sus fundamentos en 3 clases cortas.'
                            imageA={Uno} imageB={undefined} imageC={undefined} imageD={undefined} />
                        <Button
                            cantidad='15 clases • Duración total: 3hs 20min'
                            titulo='Heurísticas y Leyes en UX'
                            texto='Descubrí las heurísticas y leyes clave del diseño UX con ejemplos prácticos en 15 clases cortas y dinámicas.'
                            imageB={Dos} imageA={undefined} imageC={undefined} imageD={undefined} />
                        <Button
                            cantidad='10 clases • Duración total: 10hs 5min'
                            titulo='UX Research 101'
                            texto='Aprendé cómo investigar a tus usuarios y obtener insights valiosos para mejorar tus productos.'
                            imageC={Tres} imageA={undefined} imageB={undefined} imageD={undefined} />
                        <Button
                            cantidad='4 clases • Duración total: 3hs 15min'
                            titulo='Figma Básico'
                            texto='Aprendé Figma desde 0: recorrido de la plataforma, herramientas básicas y primeros pasos.'
                            imageD={Cuatro} imageA={undefined} imageB={undefined} imageC={undefined} />
                    </ScrollView>
                </View>


                <View>
                    <Headers
                        press={() => {
                            Alert.alert(
                                "¡Proximamente!",
                                "Estate atenti, que en muy poquito se vienen",
                                [{ text: "OK" }]
                            );
                        }}
                        titulo='Podcasts exclusivos'
                        mas='Ver más'
                    />
                </View>

                <View style={styles.containerPod}>
                    <Podcast />
                </View>


                <View>
                    <Headers
                        press={() => {router.push('/(tabs)/eventos')}}
                        titulo='Próximos eventos'
                        mas='Ver más'
                    />
                </View>

                <View style={styles.containerBirri}>
                    <Birrita />
                </View>

                <View style={styles.containerBirri}>
                    <View style={styles.linea}></View>
                </View>

                <View style={styles.containerBirriDos}>
                    <Compartir />
                </View>

            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    containerPod: {
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    containerBirri: {
        paddingHorizontal: 16,
    },
    containerBirriDos: {
        paddingHorizontal: 16,
        marginBottom: 100,
    },
    banner: {
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    contieneBtn: {
        width: '100%',
        flexDirection: 'row',
        gap: 10,
        overflow: 'hidden',
    },
    scrollContentButton: {
        flexDirection: 'row',
        gap: 16,
        paddingLeft: 16,
        paddingRight: 16,
    },
    scrollContent: {
        gap: 20,
    },
    perfil: {
        width: '100%',
        height: 56,
        flexDirection: 'row',
    },
    titulo: {
        fontSize: 20,
    },
    linea: {
        width: '100%',
        height: 1,
        backgroundColor: 'rgba(195, 195, 234, 0.5)',
    },
});

export default Cuenta;
