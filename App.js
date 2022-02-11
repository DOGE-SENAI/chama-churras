import Home from "./src/pages/Home";
import Persons from "./src/pages/Persons";
import Others from "./src/pages/Others";
import { ScrollView, StyleSheet } from "react-native";
import Options from "./src/pages/Options";
import Vegetarians from "./src/pages/Vegetarians";
import Accomp from "./src/pages/Accomp";

export default function App() {
	return (
		<ScrollView style={styles.scrollContainer}>
			<Accomp />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	scrollContainer: {
		backgroundColor: "#E6E8E1",
	},
});
