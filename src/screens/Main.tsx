import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";
import {
	Alert,
	FlatList,
	Image,
	Keyboard,
	Text,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from "react-native";

import { v4 } from "uuid";
import { EmptyTask } from "../components/EmptyTask";
import { Task } from "../components/Task";
import { styles } from "./Main.styles";

interface TaskType {
	id: string;
	content: string;
	isComplete: boolean;
}

export function Main() {
	const [tasks, setTasks] = useState<TaskType[]>([]);
	const [isFocus, setIsFocus] = useState(false);
	const [taskContent, setTaskContent] = useState("");

	function handleCreateTask() {
		if (taskContent === "") {
			Alert.alert(
				"Não permitido!",
				"Você não pode criar tarefas sem conteudo!",
			);
			return;
		}

		const task: TaskType = {
			id: v4(),
			content: taskContent,
			isComplete: false,
		};

		setTasks((state) => [...state, task]);

		setTaskContent("");
		Keyboard.dismiss();
		setIsFocus(false);
	}

	function handleDeleteTask(id: string) {
		const tasksFiltred = tasks.filter((task) => task.id !== id);

		setTasks(tasksFiltred);
	}

	function handleMarkAsCompleteTask(id: string) {
		const task = tasks.map((task) => {
			if (task.id === id) {
				task.isComplete = !task.isComplete;
			}

			return task;
		});

		setTasks(task);
	}

	function amountTasksComplete() {
		const tasksCompleted = tasks.filter((task) => task.isComplete === true);

		return tasksCompleted.length;
	}

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
				setIsFocus(false);
			}}
		>
			<View style={styles.container}>
				<View style={styles.inputContainer}>
					<TextInput
						style={[styles.input, isFocus && styles.inputFocus]}
						placeholder="Adicione uma tarefa"
						placeholderTextColor="#808080"
						onFocus={() => setIsFocus(!isFocus)}
						onChangeText={setTaskContent}
						value={taskContent}
					/>
					<TouchableOpacity style={styles.button} onPress={handleCreateTask}>
						<AntDesign name="pluscircleo" size={24} color={"#f2f2f2"} />
					</TouchableOpacity>
				</View>

				<View style={styles.countContainer}>
					<View style={styles.textCountContainer}>
						<Text style={[styles.textCount, styles.textCountCreated]}>
							Criadas
						</Text>
						<View style={styles.counterNumberContainer}>
							<Text style={styles.countNumber}>{tasks.length}</Text>
						</View>
					</View>
					<View style={styles.textCountContainer}>
						<Text style={[styles.textCount, styles.textCountDone]}>
							Concluídas
						</Text>
						<View style={styles.counterNumberContainer}>
							<Text style={styles.countNumber}>{amountTasksComplete()}</Text>
						</View>
					</View>
				</View>

				<FlatList
					data={tasks}
					renderItem={({ item }) => (
						<Task
							id={item.id}
							content={item.content}
							onDelete={handleDeleteTask}
							onMarkTask={handleMarkAsCompleteTask}
						/>
					)}
					keyExtractor={(item) => item.id}
					ListEmptyComponent={<EmptyTask />}
				/>
			</View>
		</TouchableWithoutFeedback>
	);
}
