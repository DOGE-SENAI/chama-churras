import { StyleSheet, View, Text } from "react-native";
import Header from "../../components/Header";

const Persons = () => {
	return (
		<>
			<Header />

			<View style={styles.containerMain}>
				<Text>Quatidade de Pessoas</Text>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	containerMain: {
		flex: 1,
		backgroundColor: "#E6E8E1",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default Persons;
