import { Image, View } from "react-native";
import { styles } from "./Logo.styles";

export function Logo() {
	return (
		<View style={styles.container}>
			<Image source={require("../../assets/Logo.png")} />
		</View>
	);
}
