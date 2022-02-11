import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import Header from "../../components/Header";
import ItemsList from "../../components/ItemsList";
import NavButton from "../../components/NavButton";
import ButtonAdd from "../../components/ButtonAdd";

const Accomp = () => {
	return (
		<>
			<Header />

			<View style={styles.containerMain}>
				<View style={styles.pageTop}>
					<Text style={styles.pageName}>Acompanhamentos</Text>
				</View>

				<View style={styles.content}>
					<Text style={styles.title}>Selecione os itens</Text>

					<View style={styles.containerList}>
						<ItemsList item="Abacaxi" />
						<ItemsList item="Farofa" />
						<ItemsList item="Batata" />
						<ItemsList item="Arroz" />
						<ItemsList item="Vinagrete" />
						<ItemsList item="Purê" />
						<ItemsList item="Salada" />
						<ItemsList item="Pão de alho" />
						<ItemsList item="Espeto de queijo coalho" />
					</View>

					<View style={styles.containerButton}>
						<ButtonAdd />
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
