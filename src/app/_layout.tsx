import "@/libs/dayjs"
import "@/styles/global.css"
import { Slot } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { SQLiteProvider } from 'expo-sqlite/next'
import * as SplashScreen from "expo-splash-screen"
import { GestureHandlerRootView } from "react-native-gesture-handler"

import {
  useFonts,
  OpenSans_700Bold,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
} from "@expo-google-fonts/open-sans"

import { colors } from "@/styles/colors"
import { databaseInit } from "@/database/databaseInit"

import { Text } from "react-native"

SplashScreen.preventAutoHideAsync()

export default function Layout() {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
  })

  if (fontsLoaded) {
    SplashScreen.hideAsync()
  } else {
    return
  }

  return (
    <GestureHandlerRootView
      style={{ flex: 1, backgroundColor: colors.gray[600] }}
    >
      <StatusBar style="light" />
      <SQLiteProvider databaseName="mygoals.db" onInit={databaseInit}>
        <Slot />
      </SQLiteProvider>
    </GestureHandlerRootView>
  )
}
