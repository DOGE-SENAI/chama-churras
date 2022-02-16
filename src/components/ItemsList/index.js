import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { Checkbox } from "react-native-paper";
import { Ingredientes } from "../../calculate/Ingredients";

const ItemsList = ({ item }) => {
	const [checked, setChecked] = useState(false);

	return (
		<View style={styles.listItems}>
			<Text style={styles.items}>{item}</Text>
			<Checkbox
				status={checked ? "checked" : "unchecked"}
				onPress={() => {
					setChecked(!checked);
					if(Ingredientes.getIngredientes().includes("" + item)) {
						Ingredientes.removeIngrediente(item);
					} else {
						Ingredientes.addIngrediente(item);
					}
				}}
				color={"green"}
				uncheckedColor={"black"}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	listItems: {
		width: "100%",
		height: 45,
		borderBottomWidth: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 5,
	},
	items: {
		fontSize: 18,
		margin: 6,
		padding: 0,
	},
});
export default ItemsList;
