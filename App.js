import Home from "./src/pages/Home";
import Persons from "./src/pages/Persons";
import Others from "./src/pages/Others";
import { ScrollView, StyleSheet } from "react-native";

export default function App() {
	return (
		<ScrollView style={styles.scrollContainer}>
			<Others />
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	scrollContainer: {
		backgroundColor: "#E6E8E1",
	},
});
