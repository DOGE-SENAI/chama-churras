import { StyleSheet, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import logo from "../../assets/logo.png";

const Header = () => {
	return (
		<View style={styles.header}>
			<Image source={logo} style={styles.headerContent} />
			<StatusBar style="auto" />
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		paddingTop: 50,
		paddingBottom: 10,
		backgroundColor: "#9C4427",
		alignItems: "center",
	},
	headerContent: {
		height: 56,
		width: 66,
	},
});

export default Header;
