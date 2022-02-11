import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ArrowIcon from "../../assets/ArrowIcon";

const NavButton = ({
	text,
	withArrow,
	arrowDirection,
	arrowColor,
	arrowSize,
}) => {
	return (
		<TouchableOpacity style={styles.button}>
			<View style={styles.contentBtn}>
				<Text style={styles.buttonText}>{text}</Text>

				{withArrow && (
					<ArrowIcon
						direction={arrowDirection}
						color={arrowColor}
						size={arrowSize}
					/>
				)}
			</View>
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
		justifyContent: "flex-end",
		flexDirection: "row",
		backgroundColor: "#833116",
	},
	contentBtn: {
		alignItems: "center",
		justifyContent: "space-between",
		flexDirection: "row",
		width: "70%",
	},
	buttonText: {
		fontSize: 23,
		color: "#E6E8E1",
	},
});

export default NavButton;
