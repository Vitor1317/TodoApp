import { Image, Text, View } from "react-native";
import { styles } from "./EmptyTask.styles";

export function EmptyTask() {
	return (
		<View style={styles.container}>
			<Image source={require("../../assets/clipboard.png")} />
			<View style={styles.textContainer}>
				<Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
				<Text style={styles.content}>
					Crie tarefas e organize seus itens a fazer
				</Text>
			</View>
		</View>
	);
}
