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

import { calcular } from "../../calculate/Calculate";
import { Pessoas } from "../../calculate/Persons";

const Result = () => {
  const pessoas = new Pessoas();
  calcular();
  const myObj = calcular();

  //   const print = () => {
  //     // console.log(html);
  //     console.log(myObj);
  //     console.log(Pessoas);
  //   };

  const html = `
<!DOCTYPE html>
<html lang="pt-br">
	<head>
		<meta charset="UTF-8" />
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
		/>
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link
			href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;1,200;1,300;1,400&display=swap"
			rel="stylesheet"
		/>
		<style>
			*,
			*::after,
			*::before {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
			}

			body {
				font-family: "Poppins", sans-serif;
				background-color: #f7f7f7;
			}

			main {
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				width: 80%;
				margin: 0 auto;
			}

			.container-tables {
				width: 90%;
				display: flex;
				justify-content: space-around;
				align-items: center;
				flex-direction: column;
			}

			h1 {
				margin: 20px;
				font-weight: 300;
				text-align: center;
				font-size: 45px;
			}

			h2 {
				margin: 60px 0 16px;
				text-align: center;
				font-weight: 300;
			}

			table {
				width: 100%;
			}

			table,
			th,
			td {
				border-collapse: collapse;
				text-align: center;
				text-transform: capitalize;
			}

			th {
				font-size: 18px;
				font-weight: 500;
			}

			td {
				padding: 12px;
				font-weight: 400;
			}

			tr:nth-child(even) {
				background-color: #e6e6e6;
			}

			th.header {
				background-color: #962300;
				color: #fafafa;
			}

			tr.head-table {
				border: none;
				font-style: oblique;
				text-align: center;
				background-color: #000000;
				color: #eeeeee;
				height: 46px;
			}

			tr.last {
				border-bottom: 1px solid #000000;
			}

			footer {
				margin-top: 70px;
				height: 15vh;
				width: 76%;
				position: relative;
				bottom: 0;
				text-align: center;
				background-color: #962300;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 18px;
				color: #eeeeee;
				border-top-left-radius: 50px;
				border-top-right-radius: 50px;
			}
		</style>
	</head>
	<body>
		<main>
			<h1>Resultado do Cálculo do Churrasco</h1>

			<div class="container-tables">
				<h2>Pessoas</h2>
				<table>
					<tr class="head-table">
						<th>Pessoas</th>
						<th>Quantidade</th>
					</tr>
					<tr>
						<th>Homens</th>
						<td>${Pessoas.men}</td>
					</tr>
					<tr>
						<th>Mulheres</th>
						<td>${Pessoas.woman}</td>
					</tr>
					<tr>
						<th>Crianças</th>
						<td>${Pessoas.kids}</td>
					</tr>
					<tr class="total">
						<th>Total</th>
						<td>${Pessoas.getPersons()}</td>
					</tr>
				</table>

				<h2>Carnes</h2>
				<table>
					<tr class="head-table">
						<th>Carnes</th>
						<th>Tipos</th>
						<th>Kg</th>
					</tr>

					<!-- Bovina -->
					<tr class="bovina">
						<th rowspan="4" class="header">Bovina</th>
						<td>Contra-filé</td>
						<td>${myObj.Bovina.ContraFile || 0} kg</td>
					</tr>
					<tr class="bovina">
						<td>Picanha</td>
						<td>${myObj.Bovina.Picanha || 0} kg</td>
					</tr>
					<tr class="bovina">
						<td>Alcatra</td>
						<td>${myObj.Bovina.Alcatra || 0} kg</td>
					</tr>
					<tr class="bovina last">
						<td>Maminha</td>
						<td>${myObj.Bovina.Maminha || 0} kg</td>
					</tr>

					<!-- Frango -->
					<tr>
						<th rowspan="3" class="header">Frango</th>
						<td>Coração</td>
						<td>${myObj.Frango.Coração || 0} kg</td>
					</tr>
					<tr>
						<td>Asinha</td>
						<td>${myObj.Frango.Asinha || 0} kg</td>
					</tr>
					<tr class="last">
						<td>Coxinha</td>
						<td>${myObj.Frango.Coxinha || 0} kg</td>
					</tr>

					<!-- Suína -->
					<tr>
						<th rowspan="4" class="header">Suína</th>
						<td>Bisteca</td>
						<td>${myObj.Suina.Bisteca || 0} kg</td>
					</tr>
					<tr>
						<td>Linguiça</td>
						<td>${myObj.Suina.Linguica || 0} kg</td>
					</tr>
					<tr>
						<td>Costela</td>
						<td>${myObj.Suina.Costela || 0} kg</td>
					</tr>
					<tr class="last">
						<td>Panceta</td>
						<td>${myObj.Suina.Panceta || 0} kg</td>
					</tr>
				</table>

				<h2>Bebidas</h2>
				<table>
					<tr class="head-table">
						<th>Bebidas</th>
						<th>Tipos</th>
						<th>Garrafas / Latas</th>
					</tr>

					<!-- Água e Sucos -->
					<tr>
						<th rowspan="3" class="header">água / suco</th>
						<td>água</td>
						<td>${myObj.Água || 0} garrafas</td>
					</tr>
					<tr>
						<td>suco</td>
						<td>${myObj.Suco || 0} garrafas</td>
					</tr>
					<tr class="last">
						<td>energéticos</td>
						<td>${myObj.Energéticos || 0} garrafas</td>
					</tr>

					<!-- Cervejas -->
					<tr>
						<th rowspan="8" class="header">Cerveja</th>
						<td>Brahma</td>
						<td>${myObj.Brahma || 0} latas</td>
					</tr>
					<tr>
						<td>Skol</td>
						<td>${myObj.Skol || 0} latas</td>
					</tr>
					<tr>
						<td>Corona</td>
						<td>${myObj.Corona || 0} latas</td>
					</tr>
					<tr>
						<td>Stella</td>
						<td>${myObj.Stella || 0} latas</td>
					</tr>
					<tr>
						<td>Itaipava</td>
						<td>${myObj.Itaipava || 0} latas</td>
					</tr>
					<tr>
						<td>Proibida</td>
						<td>${myObj.Proibida || 0} latas</td>
					</tr>
					<tr>
						<td>Budweiser</td>
						<td>${myObj.Budweiser || 0} latas</td>
					</tr>
					<tr class="last">
						<td>Heineken</td>
						<td>${myObj.Heineken || 0} latas</td>
					</tr>

					<!-- Cachaças -->
					<tr>
						<th rowspan="7" class="header">Cachaça</th>
						<td>51</td>
						<td>${myObj.i51 || 0} garrafas</td>
					</tr>
					<tr>
						<td>Vodka</td>
						<td>${myObj.Vodka || 0} garrafas</td>
					</tr>
					<tr>
						<td>Tequila</td>
						<td>${myObj.Tequila || 0} garrafas</td>
					</tr>
					<tr>
						<td>Whisky</td>
						<td>${myObj.Whisky || 0} garrafas</td>
					</tr>
					<tr>
						<td>Jurupinga</td>
						<td>${myObj.Jurupinga || 0} garrafas</td>
					</tr>
					<tr>
						<td>ICE</td>
						<td>${myObj.Ice || 0} garrafas</td>
					</tr>
					<tr class="last">
						<td>Corote</td>
						<td>${myObj.Corote || 0} garrafas</td>
					</tr>

					<!-- Refrigerante -->
					<tr>
						<th rowspan="7" class="header">Refrigerante</th>
						<td>Pepsi</td>
						<td>${myObj.Pepsi || 0} garrafas</td>
					</tr>
					<tr>
						<td>Fanta</td>
						<td>${myObj.Fanta || 0} garrafas</td>
					</tr>
					<tr>
						<td>Dolly</td>
						<td>${myObj.Dolly || 0} garrafas</td>
					</tr>
					<tr>
						<td>Coca-cola</td>
						<td>${myObj.CocaCola || 0} garrafas</td>
					</tr>
					<tr>
						<td>Sprite</td>
						<td>${myObj.Sprite || 0} garrafas</td>
					</tr>
					<tr class="last">
						<td>Tubaína</td>
						<td>${myObj.Tubaína || 0} garrafas</td>
					</tr>
				</table>

				<h2>Acompanhamentos</h2>
				<table>
					<tr class="head-table">
						<th>Items</th>
						<th>Quatidade</th>
					</tr>

					<tr>
						<td>Farofa</td>
						<td>${myObj.Farofa || 0} kg</td>
					</tr>
					<tr>
						<td>Arroz</td>
						<td>${myObj.Arroz || 0} kg</td>
					</tr>
					<tr>
						<td>Vinagrete</td>
						<td>${myObj.Vinagrete || 0} g</td>
					</tr>
					<tr>
						<td>Pão de Alho</td>
						<td>${myObj.PãoDeAlho || 0}</td>
					</tr>
				</table>

				<h2>Opções Vegetarianas</h2>
				<table>
					<tr class="head-table">
						<th>Items</th>
						<th>Quatidade</th>
					</tr>

					<tr>
						<td>Tomate</td>
						<td>${myObj.Tomate || 0}</td>
					</tr>
					<tr>
						<td>Tofu</td>
						<td>${myObj.Tofu || 0}</td>
					</tr>
					<tr>
						<td>Abacaxi</td>
						<td>${myObj.Abacaxi || 0}</td>
					</tr>
				</table>

				<!-- Falta Utilitários e Outros-->
				<h2>Utilitários</h2>
				<table>
					<tr class="head-table">
						<th>Items</th>
						<th>Quatidade</th>
					</tr>

					<tr>
						<td>Garfos</td>
						<td>${myObj.Garfos || 0}</td>
					</tr>
					<tr>
						<td>Facas</td>
						<td>${myObj.Facas || 0}</td>
					</tr>
					<tr>
						<td>Pratos</td>
						<td>${myObj.Pratos || 0}</td>
					</tr>
					<tr>
						<td>Copos</td>
						<td>${myObj.Copos || 0}</td>
					</tr>
					<tr>
						<td>Guardanapos</td>
						<td>${myObj.Guardanapos || 0}</td>
					</tr>
				</table>

				<h2>Outros</h2>
				<table>
					<tr class="head-table">
						<th>Items</th>
						<th>Quatidade</th>
					</tr>

					<tr>
						<td>Carvão</td>
						<td>${myObj.Carvão || 0}</td>
					</tr>
					<tr>
						<td>Sal Grosso</td>
						<td>${myObj.SalGrosso || 0}</td>
					</tr>
				</table>
			</div>

			<footer>Chama Churras - Equipe DOGE</footer>
		</main>
	</body>
</html>
`;

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
            <TouchableOpacity style={styles.btn} onPress={printToFile}>
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

export default Result;
