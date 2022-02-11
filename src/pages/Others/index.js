import { View, Text, StyleSheet } from "react-native";
import Header from "../../components/Header";
import ItemsList from "../../components/ItemsList";
import NavButton from "../../components/NavButton";
import ButtonAdd from "../../components/ButtonAdd";

const Others = () => {
	return (
		<>
			<Header />

			<View style={styles.containerMain}>
				<View style={styles.pageTop}>
					<Text style={styles.pageName}>Outros</Text>
				</View>

				<View style={styles.content}>
					<Text style={styles.title}>Selecione os itens</Text>

					<View style={styles.containerList}>
						<ItemsList item="Carvão" />
						<ItemsList item="Sal" />
						<ItemsList item="Arroz" />
						<ItemsList item="Abacaxi" />
						<ItemsList item="Sei lá" />
						<ItemsList item="Caixa de som" />
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

export default Others;
