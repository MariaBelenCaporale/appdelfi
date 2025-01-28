import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Headers from '../components/header';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/buttons';
import Uno from '../../assets/images/cardUno.png';
import Dos from '../../assets/images/cardDos.png';
import Tres from '../../assets/images/cardTres.png';
import Cuatro from '../../assets/images/cardCuatro.png';
import Perfil from '../components/perfilFoto';


const Clases = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.perfil}>
                <Perfil />
            </View>

            
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollContent}
                >
                    <Headers
                        titulo={'Clases de UX UI'}
                        mas={null}
                    />
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
          

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    
    scrollContent: {
        gap: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 150,
    },
    perfil: {
        height: 56,
        width: '100%',
        flexDirection: 'row',
    },

});


export default Clases;