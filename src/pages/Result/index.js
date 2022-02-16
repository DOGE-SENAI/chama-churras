import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../../components/Header";
import ResultList from "../../components/ResultList";

const Result = () => {
	return (
		<>
			<Header page="Options" />

			<View style={styles.containerMain}>
				<Text style={styles.title}>Resultado</Text>

				<View style={styles.result}>
					<ResultList item="Carne" result="43kg" />
				</View>
			</View>
		</>
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
});

export default Result;
