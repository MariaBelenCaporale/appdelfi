import { useRouter } from "expo-router";
import React, { useState } from "react";
import { View, Text, StyleSheet, Image, FlatList, Dimensions, Pressable, Alert } from "react-native";



const data = [
    {
        id: "1",
        backgroundColor: '#D2DAF9',
        image: require("../assets/images/Imagen.png"),
        title: "Aprendé UX/UI cuando quieras, donde quieras.",
        text: "Clases pre grabadas, 100% actualizadas y sesiones de Preguntas y Respuestas en vivo.",
    },
    {
        id: "2",
        backgroundColor: '#FFF4CC',
        image: require("../assets/images/imgDos.png"),
        title: "Conocé gente y expandí tu networking",
        text: "Eventos presenciales y virtuales todos los meses. Desde birritas a workshops.",
    },
    {
        id: "3",
        backgroundColor: '#F0A8B3',
        image: require("../assets/images/imgTres.png"),
        title: "Todos tenemos una historia para contar",
        text: "Si querés, podes ser parte de nuestro podcast y compartir tu historia",
    },
];

const { width } = Dimensions.get("window");

const Datos = () => {

    const router = useRouter();
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const renderItem = ({ item }: { item: { id: string; backgroundColor: string; image: any; title: string; text: string; } }) => (
        <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
            <View style={styles.containerIm}>
            <Image source={item.image} style={styles.image} />
            </View>
            <View style={styles.containerTextos}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.text}>{item.text}</Text>
            </View>
        </View>
    );

    const handleScroll = (event) => {
        const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
        setCurrentIndex(newIndex);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
            />

            <View style={styles.indicatorContainer}>
                {data.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.indicator,
                            currentIndex === index && styles.activeIndicator,
                        ]}
                    />
                ))}
            </View>

            
            <View style={styles.containerNav}>
            <Pressable
                    style={styles.button}
                    onPress={() => {
                        Alert.alert(
                            "Ups",
                            "Te pido mildis, pero por ahora no te registras 😂",
                            [{ text: "OK" }]
                        );
                    }}
                >
                    <Text style={styles.navText}>Crear cuenta</Text>
                </Pressable>
                <Pressable style={styles.buttonDos} onPress={() => router.push('/cuenta')}>
                    <Text style={ styles.navTextDos}>Iniciar sesión</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Datos;

const styles = StyleSheet.create({
    containerNav: {
        position: "absolute",
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        width: '100%',
        height: 170,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        gap: 8,
    },
    button: {
        backgroundColor: '#DB314A',
        width: '100%',
        borderRadius: 50,
        paddingHorizontal: 20,
        paddingVertical: 12,
    },
    buttonDos: {
        width: '100%',
        borderRadius: 50,
        paddingHorizontal: 20,
        paddingVertical: 12,
    },
    containerIm: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    navText: {
        fontSize: 16,
        color: "white",
        textAlign: 'center',
        fontFamily: 'SatoshiBlack',
    },
    navTextDos: {
        fontSize: 16,
        color: "#DB314A",
        textAlign: 'center',
        fontFamily: 'SatoshiBlack',
    },
    container: {
        flex: 1,
        backgroundColor: "#D2DAF9",
        alignItems: "center",
        justifyContent: "center",
    },
    slide: {
        width: width,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingHorizontal: 20,
        paddingVertical: 50,
    },
    image: {
        height: 300,
        width: '100%',
        resizeMode: "contain",
        marginBottom: 20,
    },
    containerTextos: {
        alignItems: "flex-start",
        width: '100%',
    },
    title: {
        fontSize: 24,
        fontFamily: 'Cocogoose',
        marginBottom: 10,
        textAlign: "left",
        color: 'black',
    },
    text: {
        fontSize: 16,
        textAlign: "left",
        color: "black",
        fontFamily: 'SatoshiRegular',
        fontWeight: '400',
    },
    indicatorContainer: {
        flexDirection: "row",
        position: "absolute",
        bottom: 200,
    },
    indicator: {
        width: 15,
        height: 6,
        borderRadius: 5,
        backgroundColor: "#999",
        marginHorizontal: 5,
    },
    activeIndicator: {
        backgroundColor: "#333",
    },
});
