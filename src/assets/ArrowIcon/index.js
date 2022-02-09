import { TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const ArrowIcon = ({ direction }) => {
	return (
		<TouchableOpacity style={styles.arrowIcon}>
			<FontAwesomeIcon
				icon={direction === "right" ? faChevronRight : faChevronLeft}
				color="#fafafa"
				size={26}
			/>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	arrowIcon: {
		width: 22,
		borderColor: "#fff",
	},
});

export default ArrowIcon;
