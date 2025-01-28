import { Text, View, StyleSheet } from 'react-native';
import Headers from '../components/header';
import Perfil from '../components/perfilFoto';
import { SafeAreaView } from 'react-native-safe-area-context';



const Config = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white'}}>
            <View style={styles.perfil}>
                <Perfil />
            </View>
            <Headers
                titulo='Perfil de ususario' press={undefined} mas={undefined}            />
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    perfil: {
        height: 56,
        flexDirection: 'row',
        width: '100%',
    },
});


export default Config;