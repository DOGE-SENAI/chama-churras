import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";
import ArrowIcon from "../../assets/ArrowIcon";
import NavButton from "../../components/NavButton";

const Options = () => {
	const navigation = useNavigation();

	return (
		<>
			<Header page="Persons" />

			<View style={styles.containerMain}>
				<Text style={styles.title}>Escolha uma opção </Text>
				<View style={styles.content}>
					<View>
						<TouchableOpacity
							style={styles.button}
							onPress={() => {
								navigation.navigate("Meats");
							}}
						>
							<Text style={styles.buttonText}>Carnes</Text>
							<ArrowIcon direction="right" color="#FFF" size={20} />
						</TouchableOpacity>

						<TouchableOpacity style={styles.button}>
							<Text style={styles.buttonText}>Bebidas</Text>
							<ArrowIcon direction="right" color="#FFF" size={20} />
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.button}
							onPress={() => {
								navigation.navigate("Accomp");
							}}
						>
							<Text style={styles.buttonText}>Acompanhamentos</Text>
							<ArrowIcon direction="right" color="#FFF" size={20} />
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.button}
							onPress={() => {
								navigation.navigate("Vegetarians");
							}}
						>
							<Text style={styles.buttonText}>Opções vegetarianas</Text>
							<ArrowIcon direction="right" color="#FFF" size={20} />
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.button}
							onPress={() => {
								navigation.navigate("Utilities");
							}}
						>
							<Text style={styles.buttonText}>Utilitários</Text>
							<ArrowIcon direction="right" color="#FFF" size={20} />
						</TouchableOpacity>

						<TouchableOpacity
							style={styles.button}
							onPress={() => {
								navigation.navigate("Others");
							}}
						>
							<Text style={styles.buttonText}>Outros</Text>
							<ArrowIcon direction="right" color="#FFF" size={20} />
						</TouchableOpacity>
					</View>

					<View style={styles.containerButton}>
						<NavButton text="Calcular" withArrow={false} />
					</View>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	button: {
		width: 325,
		height: 55,
		marginTop: 18,
		backgroundColor: "#833116",
		borderStyle: "solid",
		borderRadius: 5,
		alignItems: "center",
		justifyContent: "space-between",
		flexDirection: "row",
	},

	buttonText: {
		fontStyle: "normal",
		fontWeight: "400",
		color: "#FFFFFF",
		marginLeft: 16,
		fontSize: 22,
	},

	containerMain: {
		flex: 1,
		backgroundColor: "#E6E8E1",
		alignItems: "center",
		justifyContent: "center",
	},

	title: {
		alignItems: "center",
		marginTop: 50,
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 20,
	},

	content: {
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
	},

	containerButton: {
		margin: 50,
	},
});

export default Options;
