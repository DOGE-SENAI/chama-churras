import { StyleSheet, View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../../components/Header";

const Result = () => {
	return (
		<ScrollView style={styles.scrollContainer}>
			<Header page="Options" />

			<View style={styles.containerMain}>
				<Text style={styles.title}>Resultado</Text>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	title: {
		alignItems: "center",
		marginTop: 50,
		fontSize: 20,
		fontWeight: "bold",
	},
	containerMain: {
		flex: 1,
		backgroundColor: "#E6E8E1",
		alignItems: "center",
	},
	result: {
		width: "80%",
		marginTop: 80,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
	},
	scrollContainer: {
		backgroundColor: "#E6E8E1",
	},
});

export default Result;
