import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 24,
		backgroundColor: "#1a1a1a",
	},
	inputContainer: {
		marginTop: -26,
		flexDirection: "row",
		gap: 4,
	},
	input: {
		flex: 1,
		height: 52,
		backgroundColor: "#262626",
		color: "#f2f2f2",
		borderRadius: 8,
		paddingHorizontal: 16,
		fontSize: 16,
	},
	inputFocus: {
		borderColor: "#5E60CE",
		borderWidth: 1,
	},
	button: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#1E6F9F",
		width: 52,
		height: 52,
		borderRadius: 8,
	},
	countContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginTop: 32,
		marginBottom: 20,
	},
	textCountContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
	},
	textCount: {
		fontWeight: "bold",
		fontSize: 14,
	},
	textCountDone: {
		color: "#8284FA",
	},
	textCountCreated: {
		color: "#4EA8DE",
	},
	counterNumberContainer: {
		borderRadius: 99,
		backgroundColor: "#333333",
		width: 25,
		alignItems: "center",
		justifyContent: "center",
	},
	countNumber: {
		color: "#d9d9d9",
		fontWeight: "bold",
	},
});
