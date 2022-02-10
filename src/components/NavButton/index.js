import { StyleSheet, Text, TouchableOpacity } from "react-native";
import ArrowIcon from "../../assets/ArrowIcon";

const NavButton = ({ text, arrowDirection, arrowColor, arrowSize }) => {
	return (
		<TouchableOpacity style={styles.button}>
			<Text style={styles.buttonText}>{text}</Text>

			<ArrowIcon
				direction={arrowDirection}
				color={arrowColor}
				size={arrowSize}
			/>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		borderRadius: 50,
		height: 60,
		width: 260,
		marginBottom: 23,
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
		backgroundColor: "#833116",
	},
	buttonText: {
		fontSize: 23,
		color: "#E6E8E1",
		marginLeft: 30,
	},
});

export default NavButton;
