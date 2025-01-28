import { Tabs } from "expo-router";
import Feather from '@expo/vector-icons/Feather';
import { BlurView } from 'expo-blur';
import { StyleSheet } from "react-native";


const TabLayout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#db314a",
                tabBarInactiveTintColor: "black",
                tabBarShowLabel: true,
                tabBarStyle: {
                    position: 'absolute',
                    overflow: 'hidden',
                    borderRadius: 50,
                    bottom: 15,
                    height: 'auto',
                    marginHorizontal: 16, 
                    borderTopColor: "white",
                    borderWidth: 1,
                },
                tabBarLabelStyle: {  
                    fontSize: 12,
                    fontFamily: 'SatoshiBlack',
                    marginVertical: 5,
                },
                
                
                tabBarBackground: () => (
                    <BlurView intensity={90} tint="light" style={StyleSheet.absoluteFill} />
    ),
            }}
        >
            <Tabs.Screen
                name="cuenta"
                options={{
                    title: "Inicio",
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="home" size={size} color={color} />
                        
                    ),
                    headerShown: false,
                }}
            />
            <Tabs.Screen
            
                name="clases"
                options={{
                    title: "Clases",
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="play-circle" size={size} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="eventos"
                options={{
                    title: "Eventos",
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="calendar" size={size} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            
            <Tabs.Screen
                name="config"
                options={{
                    title: "Perfil",
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="user" size={size} color={color} />
                    ),
                    headerShown: false,
                }}
            />
        </Tabs>
    );
};




export default TabLayout;
