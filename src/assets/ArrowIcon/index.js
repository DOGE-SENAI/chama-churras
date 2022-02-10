import { TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const ArrowIcon = ({ direction, size, color }) => {
	return (
		<TouchableOpacity style={styles.arrowIcon}>
			<FontAwesomeIcon
				icon={direction === "right" ? faChevronRight : faChevronLeft}
				color={color}
				size={size}
			/>
		</TouchableOpacity>
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
