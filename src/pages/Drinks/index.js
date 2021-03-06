import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Category from "../../components/Category";
import Header from "../../components/Header";
import ItemsList from "../../components/ItemsList";
import ButtonAdd from "../../components/ButtonAdd";

import waterIcon from "../../assets/images/water.png";
import liquorIcon from "../../assets/images/liquor.png";
import beerIcon from "../../assets/images/beer.png";
import sodaIcon from "../../assets/images/soda.png";

const Drinks = () => {
	const [geral, setGeral] = React.useState(styles.hide);

	//ICONES
	const [icones, setIcones] = React.useState(styles.view);

	// LISTAS
	const [agua, setAgua] = React.useState(styles.hide);
	const [cachaça, setCachaça] = React.useState(styles.hide);
	const [cerveja, setCerveja] = React.useState(styles.hide);
	const [refri, setRefri] = React.useState(styles.hide);

	return (
		<ScrollView style={styles.scrollContainer}>
			<Header page="Options" />

			<View style={styles.containerMain}>
				<View style={styles.pageTop}>
					<Text style={styles.pageName}>Bebidas</Text>
				</View>

				<View style={[styles.icons, icones]}>
					<Category
						text="Água / Suco"
						image={waterIcon}
						textBelow={true}
						onClick={() => {
							setGeral(styles.view);
							setAgua(styles.view);
							setIcones(styles.hide);
						}}
					/>
				</View>

				<View style={[styles.icons, icones]}>
					<Category
						text="Cachaça"
						image={liquorIcon}
						textBelow={true}
						onClick={() => {
							setGeral(styles.view);
							setCachaça(styles.view);
							setIcones(styles.hide);
						}}
					/>
				</View>

				<View style={[styles.icons, icones]}>
					<Category
						text="Cerveja"
						image={beerIcon}
						textBelow={true}
						onClick={() => {
							setGeral(styles.view);
							setCerveja(styles.view);
							setIcones(styles.hide);
						}}
					/>
				</View>

				<View style={[styles.icons, icones]}>
					<Category
						text="Refrigerante"
						image={sodaIcon}
						textBelow={true}
						onClick={() => {
							setGeral(styles.view);
							setRefri(styles.view);
							setIcones(styles.hide);
						}}
					/>
				</View>

				<View style={[styles.content, geral]}>
					<Text style={styles.title}>Selecione os itens</Text>

					<View style={[styles.containerList, agua]}>
						<ItemsList item="Água" />
						<ItemsList item="Sucos" />
						<ItemsList item="Energéticos" />
					</View>

					<View style={[styles.containerList, cachaça]}>
						<ItemsList item="51" />
						<ItemsList item="Vodka" />
						<ItemsList item="Tequila" />
						<ItemsList item="whisky" />
						<ItemsList item="Jurupinga" />
						<ItemsList item="Corote" />
						<ItemsList item="ICE" />
					</View>

					<View style={[styles.containerList, cerveja]}>
						<ItemsList item="Skol" />
						<ItemsList item="Brahma" />
						<ItemsList item="Corona" />
						<ItemsList item="Stella" />
						<ItemsList item="Itaipava" />
						<ItemsList item="Proibida" />
						<ItemsList item="Budweiser" />
						<ItemsList item="Heineken" />
					</View>

					<View style={[styles.containerList, refri]}>
						<ItemsList item="Pepsi" />
						<ItemsList item="Fanta" />
						<ItemsList item="Dolly" />
						<ItemsList item="Coca-cola" />
						<ItemsList item="Guaraná" />
						<ItemsList item="Sprite" />
						<ItemsList item="Tubaína" />
					</View>

					<View style={[styles.containerButton, geral]}>
						<ButtonAdd
							onClick={() => {
								setGeral(styles.hide);
								setAgua(styles.hide);
								setCachaça(styles.hide);
								setCerveja(styles.hide);
								setRefri(styles.hide);

								setIcones(styles.view);
							}}
						/>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	hide: {
		display: "none",
	},
	view: {},
	containerMain: {
		flex: 1,
		backgroundColor: "#E6E8E1",
		alignItems: "center",
		marginBottom: 30,
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
	icons: {
		marginBottom: 10,
		marginTop: 60,
	},
	scrollContainer: {
		backgroundColor: "#E6E8E1",
	},
});

export default Drinks;
