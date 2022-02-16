import { StyleSheet, Text, View } from "react-native";

const ResultList = ({ item, result }) => {
	return (
		<View style={styles.list}>
			<Text style={styles.items}>{item} ...</Text>

			<Text style={styles.items}>{result}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	list: {
		width: "100%",
		height: 45,
		borderBottomWidth: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 5,
	},
	items: {
		fontSize: 18,
		marginTop: 6,
		padding: 0,
	},
});
export default ResultList;
