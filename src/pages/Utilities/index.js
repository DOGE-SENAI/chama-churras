import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../../components/Header";
import ItemsList from "../../components/ItemsList";
import ButtonAdd from "../../components/ButtonAdd";

const Utilities = () => {
	const navigation = useNavigation();

	return (
		<ScrollView style={styles.scrollContainer}>
			<Header page="Options" />

			<View style={styles.containerMain}>
				<View style={styles.pageTop}>
					<Text style={styles.pageName}>Utilitários</Text>
				</View>

				<View style={styles.content}>
					<Text style={styles.title}>Selecione os itens</Text>

					<View style={styles.containerList}>
						<ItemsList item="Garfos" />
						<ItemsList item="Facas" />
						<ItemsList item="Pratos" />
						<ItemsList item="Copos" />
						<ItemsList item="Guardanapos" />
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
		</ScrollView>
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
	scrollContainer: {
		backgroundColor: "#E6E8E1",
	},
});

export default Utilities;
