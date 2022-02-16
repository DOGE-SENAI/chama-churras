import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../../components/Header";
import NavButton from "../../components/NavButton";
import { Pessoas } from "../../calculate/Persons";

const Persons = () => {

	const pessoas = new Pessoas();

	const [male, setMale] = React.useState(null);
	const [female, setFemale] = React.useState(null);
	const [children, setChildren] = React.useState(null);

	return (
		<>
			<Header />
			<View style={styles.containerMain}>
				<Text style={styles.title}>Quantidade de Pessoas</Text>

				<Text style={styles.sexo}>HOMENS</Text>
				<SafeAreaView>
					<TextInput
						style={styles.input}
						onChangeText={() => {
							setMale;
							Pessoas.setMen(Number.parseInt(male));
						}}
						value={male}
						keyboardType="numeric"
					></TextInput>
				</SafeAreaView>

				<Text style={styles.sexo}>MULHERES</Text>
				<SafeAreaView>
					<TextInput
						style={styles.input}
						onChangeText={() => {
							setFemale;
							Pessoas.setWoman(Number.parseInt(female));
						}}
						value={female}
						keyboardType="numeric"
					></TextInput>
				</SafeAreaView>

				<Text style={styles.sexo}>CRIANÇAS</Text>
				<SafeAreaView>
					<TextInput
						style={styles.input}
						onChangeText={() => {
							setChildren;
							Pessoas.setKids(Number.parseInt(children));
						}}
						value={children}
						keyboardType="numeric"
					></TextInput>
				</SafeAreaView>

				<View style={styles.button}>
					<NavButton
						text="Próximo"
						withArrow={true}
						arrowDirection="right"
						arrowColor="#e6e8e1"
						arrowSize={20}
						nextPage="Options"
					/>
				</View>

				{/* <TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>PRÓXIMO</Text>
					<FontAwesomeIcon
						icon={faChevronRight}
						size={20}
						color="#e6e8e1"
						style={styles.buttonIcon}
					/>
				</TouchableOpacity> */}
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	title: {
		alignItems: "center",
		marginTop: 50,
		fontSize: 20,
		fontWeight: "bold",
	},
	containerMain: {
		flex: 1,
		backgroundColor: "#E6E8E1",
		alignItems: "center",
		justifyContent: "space-between",
		fontSize: 18,
	},
	sexo: {
		fontWeight: "600",
		marginTop: 50,
		fontSize: 26,
	},
	input: {
		borderWidth: 1,
		borderRadius: 6,
		borderStyle: "solid",
		borderColor: "#000",
		width: 300,
		height: 50,
		marginTop: 0,
		paddingLeft: 10,
		fontSize: 20,
	},
	button: {
		marginTop: 70,
		marginBottom: 23,
	},
	buttonText: {
		fontSize: 23,
		color: "#e6e8e1",
		marginLeft: 30,
	},
	buttonIcon: {
		marginLeft: 26,
	},
});

export default Persons;
