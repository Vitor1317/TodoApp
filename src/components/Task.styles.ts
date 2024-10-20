import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		gap: 12,
		padding: 12,
		backgroundColor: "#262626",
		borderRadius: 8,
		marginBottom: 8,
	},
	checkbox: {
		width: 24,
		height: 24,
		borderRadius: 12,
	},
	checked: {
		backgroundColor: "#5E60CE",
		alignItems: "center",
		justifyContent: "center",
	},
	unchecked: {
		borderColor: "#4EA8DE",
		borderWidth: 2,
	},
	content: {
		flex: 1,
		textAlign: "left",
		color: "#e1e1e6",
		fontSize: 14,
		lineHeight: 19.5,
	},
	contentChecked: {
		color: "#808080",
		textDecorationLine: "line-through",
	},
	buttonDelete: {
		width: 32,
		height: 32,
		alignItems: "center",
		justifyContent: "center",
	},
});
