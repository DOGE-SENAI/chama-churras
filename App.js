import Home from "./src/pages/Home";
import Persons from "./src/pages/Persons";
import Others from "./src/pages/Others";
import { ScrollView, StyleSheet } from "react-native";
import Options from "./src/pages/Options";
import Vegetarians from "./src/pages/Vegetarians";
import Accomp from "./src/pages/Accomp";
import Category from "./src/components/Category";
import logo from "./src/assets/images/logo.png";

export default function App() {
	return (
		<ScrollView style={styles.scrollContainer}>
			<Accomp />
			<Category text='Bovina' image={logo} textBelow={true}/> 
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	scrollContainer: {
		backgroundColor: "#E6E8E1",
	},
});
