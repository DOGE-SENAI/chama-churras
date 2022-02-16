import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";
import ItemsList from "../../components/ItemsList";
import ButtonAdd from "../../components/ButtonAdd";

const Accomp = () => {
	const navigation = useNavigation();

	return (
		<>
			<Header page="Options" />

			<View style={styles.containerMain}>
				<View style={styles.pageTop}>
					<Text style={styles.pageName}>Acompanhamentos</Text>
				</View>

				<View style={styles.content}>
					<Text style={styles.title}>Selecione os itens</Text>

					<View style={styles.containerList}>
						<ItemsList item="Farofa" />
						<ItemsList item="Arroz" />
						<ItemsList item="Vinagrete" />
						<ItemsList item="Pão de alho" />
					</View>

					<View style={styles.containerButton}>
						<ButtonAdd
							onClick={() => {
								navigation.navigate("Options");
							}}
						/>
					</View>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	containerMain: {
		flex: 1,
		backgroundColor: "#E6E8E1",
		alignItems: "center",
	},
	pageTop: {
		height: 70,
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	pageName: {
		fontSize: 17,
	},
	content: {
		width: "100%",
		alignItems: "center",
		justifyContent: "space-around",
	},
	title: {
		fontSize: 28,
		letterSpacing: 1,
		margin: 20,
	},
	containerList: {
		width: "80%",
		minHeight: 360,
		alignItems: "center",
	},
	containerButton: {
		margin: 20,
	},
});

export default Accomp;
