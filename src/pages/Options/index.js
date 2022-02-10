import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Header from "../../components/Header";
import ArrowIcon from "../../assets/ArrowIcon";

const Options = () => {
	return (
		<>
			<Header />

			<View style={styles.containerMain}>
				<Text>Escolha uma opção</Text>

				<View>
					<TouchableOpacity style={styles.button}>
						<Text style={styles.buttonText}>Carnes</Text>

						<ArrowIcon direction="right" />
					</TouchableOpacity>

					<TouchableOpacity style={styles.button}>
						<Text style={styles.buttonText}>Bebidas</Text>

						<ArrowIcon direction="right" />
					</TouchableOpacity>

					<TouchableOpacity style={styles.button}>
						<Text style={styles.buttonText}>Acompanhamentos</Text>

						<ArrowIcon direction="right" />
					</TouchableOpacity>

					<TouchableOpacity style={styles.button}>
						<Text style={styles.buttonText}>Opções vegetarianas</Text>

						<ArrowIcon direction="right" />
					</TouchableOpacity>

					<TouchableOpacity style={styles.button}>
						<Text style={styles.buttonText}>Utilitários</Text>

						<ArrowIcon direction="right" />
					</TouchableOpacity>

					<TouchableOpacity style={styles.button}>
						<Text style={styles.buttonText}>Outros</Text>

						<ArrowIcon direction="right" />
					</TouchableOpacity>
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
		justifyContent: "center",
	},
});

export default Options;
