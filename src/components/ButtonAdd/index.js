import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const ButtonAdd = ({ onClick }) => {
	return (
		<TouchableOpacity style={styles.button} onPress={onClick}>
			<Text style={styles.buttonText}>Adicionar</Text>

			<View style={styles.containerBtn}>
				<FontAwesomeIcon icon={faPlus} color="#fafafa" size={22} />
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		borderRadius: 5,
		height: 60,
		width: 260,
		marginBottom: 23,
		alignItems: "center",
		justifyContent: "space-between",
		flexDirection: "row",
		backgroundColor: "#833116",
	},
	buttonText: {
		fontSize: 23,
		color: "#fafafa",
		marginLeft: 16,
	},
	containerBtn: {
		marginRight: 16,
	},
});

export default ButtonAdd;
