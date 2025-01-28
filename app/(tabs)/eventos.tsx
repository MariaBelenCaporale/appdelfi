import { View, StyleSheet } from 'react-native';
import Headers from '../components/header';
import Perfil from '../components/perfilFoto';
import { SafeAreaView } from 'react-native-safe-area-context';



const Eventos = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.perfil}>
                <Perfil />
            </View>
            <Headers 
                titulo='Mirá los próximos eventos' press={undefined} mas={undefined}            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    
    perfil: {
        height: 56,
        width: '100%',
        flexDirection: 'row',
    },

});


export default Eventos;