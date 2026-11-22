import { useEffect } from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { colors, fonts } from "../../assets/theme";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Satoshi-Light": require("../../assets/fonts/Satoshi-Light.otf"),
    "Satoshi-Regular": require("../../assets/fonts/Satoshi-Regular.otf"),
    "Satoshi-Italic": require("../../assets/fonts/Satoshi-Italic.otf"),
    "Satoshi-Medium": require("../../assets/fonts/Satoshi-Medium.otf"),
    "Satoshi-Bold": require("../../assets/fonts/Satoshi-Bold.otf"),
    "Satoshi-Black": require("../../assets/fonts/Satoshi-Black.otf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: colors.blue },
          headerTintColor: colors.lace,
          headerTitleStyle: { fontFamily: fonts.black },
          headerBackButtonDisplayMode: "minimal",
          contentStyle: { backgroundColor: colors.lace },
        }}
      >
        <Stack.Screen name="index" options={{ title: "MC" }} />
        <Stack.Screen name="sobre" options={{ title: "Sobre mim" }} />
        <Stack.Screen name="projetos" options={{ title: "Projetos" }} />
        <Stack.Screen name="forca" options={{ title: "Jogo da Forca" }} />
      </Stack>
    </>
  );
}
