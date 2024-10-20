import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./Task.styles";

interface TaskProps {
	id: string;
	content: string;
	onDelete: (id: string) => void;
	onMarkTask: (id: string) => void;
}

export function Task({ id, content, onDelete, onMarkTask }: TaskProps) {
	const [isChecked, setIsChecked] = useState(false);

	function handleCompleteTask() {
		setIsChecked((prevState) => {
			return !prevState;
		});

		onMarkTask(id);
	}

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={[styles.checkbox, isChecked ? styles.checked : styles.unchecked]}
				onPress={handleCompleteTask}
			>
				{isChecked ? (
					<Feather name="check" size={16} color={"#f2f2f2"} />
				) : null}
			</TouchableOpacity>
			<Text style={[styles.content, isChecked ? styles.contentChecked : null]}>
				{content}
			</Text>
			<TouchableOpacity
				style={styles.buttonDelete}
				onPress={() => onDelete(id)}
			>
				<Feather name="trash-2" size={24} color={"#808080"} />
			</TouchableOpacity>
		</View>
	);
}
