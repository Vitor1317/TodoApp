import { StatusBar } from "expo-status-bar";
import { Logo } from "./src/components/Logo";
import { Main } from "./src/screens/Main";

export default function App() {
	return (
		<>
			<StatusBar style="light" />
			<Logo />
			<Main />
		</>
	);
}
