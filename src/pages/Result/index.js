import {
	StyleSheet,
	View,
	Text,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import React from "react";
import { shareAsync } from "expo-sharing";
import * as Print from "expo-print";
import Header from "../../components/Header";
import FriendsIllutration from "../../assets/images/friends.svg";

const Result = () => {
	const html = `
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
		<style>
			${css}
		</style>
    </head>
    <body>
        <h1>
            Hello Expo! ã
        </h1>
        <img
            src="https://d30j33t1r58ioz.cloudfront.net/static/guides/sdk.png"
            style="width: 90vw;" />
    </body>
</html>
`;

	const print = async () => {
		await Print.printAsync({ html });
	};

	const printToFile = async () => {
		const { uri } = await Print.printToFileAsync({
			html,
		});
		console.log("File has been saved to:", uri);
		await shareAsync(uri, { UTI: ".pdf", mimeType: "application/pdf" });
	};

	return (
		<ScrollView style={styles.scrollContainer}>
			<Header page="Options" />

			<View style={styles.containerMain}>
				<Text style={styles.title}>Resultado</Text>

				<View style={styles.content}>
					<Text style={styles.textContent}>
						Churrasco calculado! Tenha um bom churrasco.
					</Text>

					<View style={styles.imageFriends}>
						<FriendsIllutration />
					</View>

					<View style={styles.containerBtn}>
						<TouchableOpacity style={styles.btn} onPress={print}>
							<Text style={styles.btnText}>Compartilhar Resultado</Text>
						</TouchableOpacity>

						<Text style={styles.legendBtn}>
							Para obter o resultado você precisa clicar em "Compartilhar" e
							salvar o PDF. Você também pode compartilhá-lo em outras
							plataformas.
						</Text>
					</View>
				</View>
			</View>
		</ScrollView>
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
		width: "100%",
	},
	content: {
		marginTop: 30,
		alignItems: "center",
	},
	textContent: {
		fontSize: 20,
		margin: 16,
		textAlign: "center",
		fontWeight: "700",
	},
	imageFriends: {
		alignItems: "center",
		justifyContent: "center",
	},

	containerBtn: {
		margin: 20,
		justifyContent: "center",
		alignItems: "center",
	},
	btn: {
		borderRadius: 50,
		height: 60,
		width: 260,
		marginBottom: 10,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#833116",
	},
	btnText: {
		fontSize: 20,
		color: "#fafafa",
		textAlign: "center",
	},
	legendBtn: {
		textAlign: "center",
		fontSize: 16,
		fontWeight: "400",
	},

	scrollContainer: {
		backgroundColor: "#E6E8E1",
	},
});

const css = `
body {
	text-align: center;
}

h1 {
	font-size: 50px; 
	font-family: Helvetica Neue; 
	font-weight: normal;
}
`;

export default Result;
