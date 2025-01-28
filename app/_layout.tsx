import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';



const RootLayout = () => {

    const [loaded, error] = useFonts({
      'Cocogoose': require('../assets/fonts/Cocogoose-Regular.ttf'),
      'SatoshiLight': require('../assets/fonts/Satoshi-Light.otf'),
      'SatoshiRegular': require('../assets/fonts/Satoshi-Regular.otf'),
      'SatoshiBlack': require('../assets/fonts/Satoshi-Black.otf'),
    });

    if (!loaded || error) {
      return (null);
    }

  

  
  return (
    <SafeAreaProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="details" options={{ headerShown: false }} />
          <Stack.Screen name="cuenta" options={{ headerShown: false }}  />
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="congif" options={{ headerShown: false }} />
          <Stack.Screen name="datos"  options={{ headerShown: false }} />
          <Stack.Screen name="clases"  options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="dark"  />
    </SafeAreaProvider>
  );
};

export default RootLayout;





