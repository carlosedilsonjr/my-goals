import { StyleSheet } from "react-native"

import { theme } from "@/theme"

export const styles = StyleSheet.create({
  button: {
    height: 48,
    width: "100%",
    backgroundColor: theme.colors.orange_500,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.borderRadius.sm,
  },
  text: {
    color: theme.colors.black,
    fontSize: theme.fonts.size.body.sm,
    fontFamily: theme.fonts.family.semiBold,
    textTransform: "uppercase",
  },
})
