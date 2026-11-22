import { Image, type ImageProps } from "expo-image";
import {
  StyleSheet,
  type ImageStyle,
  type StyleProp,
} from "react-native";
import { colors } from "../../assets/theme";

type FotoProps = {
  source: ImageProps["source"];
  style?: StyleProp<ImageStyle>;
  contentFit?: ImageProps["contentFit"];
  accessibilityLabel?: string;
  moldura?: boolean;
};

export function Foto({
  source,
  style,
  contentFit = "cover",
  accessibilityLabel,
  moldura = true,
}: FotoProps) {
  return (
    <Image
      source={source}
      style={[moldura && styles.moldura, style]}
      contentFit={contentFit}
      transition={180}
      accessible
      accessibilityLabel={accessibilityLabel}
    />
  );
}

const styles = StyleSheet.create({
  moldura: {
    borderWidth: 2,
    borderColor: colors.blue,
    borderRadius: 10,
    backgroundColor: colors.lace,
  },
});
