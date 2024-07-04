import { ScrollView, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

import { theme } from "@/theme"
import { styles } from "./styles"

import { Goal } from "@/components/Goal"

export function Goals() {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={styles.content}
      showsHorizontalScrollIndicator={false}
      style={styles.list}
    >
      <TouchableOpacity activeOpacity={0.7} style={styles.add}>
        <MaterialIcons name="add" size={36} color={theme.colors.black} />
      </TouchableOpacity>

      <Goal goal={{ name: "Notebook", current: 70, total: 100 }} />
      <Goal goal={{ name: "Notebook", current: 70, total: 100 }} />
      <Goal goal={{ name: "Notebook", current: 70, total: 100 }} />
    </ScrollView>
  )
}
