import { StyleSheet, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const ArrowIcon = ({ direction, size, color }) => {
	return (
		<View style={styles.arrowIcon}>
			<FontAwesomeIcon
				icon={direction === "right" ? faChevronRight : faChevronLeft}
				color={color}
				size={size}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	arrowIcon: {
		width: 22,
		borderColor: "#fff",
		marginHorizontal: 26,
	},
});

export default ArrowIcon;
