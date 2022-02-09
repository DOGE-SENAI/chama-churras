import { StyleSheet, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import logo from "../../assets/images/logo.png";
import ArrowIcon from "../../assets/ArrowIcon";

const Header = () => {
	return (
		<View style={styles.header}>
			<ArrowIcon direction />

			<View style={styles.containerLogo}>
				<Image source={logo} style={styles.logoHeader} />
			</View>

			<StatusBar style="auto" />
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		paddingTop: 40,
		paddingBottom: 10,
		backgroundColor: "#833116",
		alignItems: "center",
		justifyContent: "space-around",
		flexDirection: "row",
	},
	containerLogo: {
		width: "76%",
		justifyContent: "center",
		alignItems: "center",
		marginEnd: 40,
	},
	logoHeader: {
		height: 56,
		width: 66,
	},
});

export default Header;
