import { View, StyleSheet, Image } from 'react-native';
import Logo from '../assets/images/logo.png';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';

const Home = () => {
    const router = useRouter();

    useEffect(() => {

        const timer = setTimeout(() => {
            router.push('/datos'); 
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Image source={Logo} style={styles.logo} />
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F3ED',
    },
    containerLogo: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: '80%', 
        resizeMode: 'contain',
    },
});
