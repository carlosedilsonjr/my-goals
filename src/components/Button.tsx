import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

type Props = TouchableOpacityProps & {
  title: string
}

export function Button({ title, ...rest }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="h-12 w-full bg-orange-500 items-center justify-center rounded-sm"
      {...rest}
    >
      <Text className="text-black text-sm font-semiBold uppercase">
        {title}
      </Text>
    </TouchableOpacity>
  )
}
