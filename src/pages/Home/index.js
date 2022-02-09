import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logo.png";
import LogoTitle from "../../assets/images/logoTitle.svg";

const Home = () => {
	return (
		<View style={styles.containerMain}>
			<View style={styles.hero}>
				<Image source={logo} />
				<LogoTitle />
			</View>

			<TouchableOpacity style={styles.button}>
				<Text style={styles.buttonText}>Começar</Text>
				<FontAwesomeIcon
					icon={faChevronRight}
					size={20}
					color="#833116"
					style={styles.buttonIcon}
				/>
			</TouchableOpacity>

			<StatusBar style="auto" />
		</View>
	);
};

const styles = StyleSheet.create({
	containerMain: {
		flex: 1,
		backgroundColor: "#833116",
		alignItems: "center",
		justifyContent: "space-around",
	},
	hero: {
		marginTop: 60,
		height: 260,
		width: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-around",
	},
	button: {
		borderRadius: 50,
		height: 60,
		width: 260,
		marginBottom: 23,
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
		backgroundColor: "#E6E8E1",
	},
	buttonText: {
		fontSize: 23,
		color: "#9c4427",
		marginLeft: 30,
	},
	buttonIcon: {
		marginLeft: 26,
	},
});

export default Home;
