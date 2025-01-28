import { Text, StyleSheet, Pressable } from 'react-native';

const Card = ({ title, onPress }) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.container,
                pressed && { backgroundColor: '#d1d1d1' },
            ]}
        >
            <Text style={styles.titulo}>{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 120,
        width: 120,
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: '#f1f1f1',
    },
    titulo: {
        fontSize: 18,
        textAlign: 'center',
    },
});

export default Card;
