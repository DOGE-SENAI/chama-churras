import { Ingredientes } from "../calculate/Ingredients";
import { Pessoas } from "../calculate/Persons";

const pessoas = new Pessoas();
const ingr = new Ingredientes();
const myObj = {};

function calcular() {
	const m = Pessoas.woman;
	const h = Pessoas.men;
	const c = Pessoas.kids;

	var [carneTotal, sal, abaca] = [0,0];
	var [agua, suco, energe] = [0, 0, 0];
	var [i51, vodka, tequila, whisky, jurupinga, corote, ice] = [
		0, 0, 0, 0, 0, 0, 0,
	];

	for (var item in Ingredientes.getIngredientes()) {
		switch (Ingredientes.getIngredientes()[item]) {
			// BOVINA
			case "Contra-filé":
				// carnesH += h * 460; // gramas
				// carnesM += m * 380;
				// carnesC += c * 260;
				carneTotal += h * 460 + m * 380 + c * 260;
				myObj["contraFile"] = (h * 460 + m * 380 + c * 260) / 100;
				break;
			case "Picanha":
				carneTotal += h * 460 + m * 380 + c * 260;
				myObj["picanha"] = (h * 460 + m * 380 + c * 260) / 100;
				break;
			case "Alcatra":
				carneTotal += h * 460 + m * 380 + c * 260;
				myObj["alcatra"] = (h * 460 + m * 380 + c * 260) / 100;
				break;
			case "Maminha":
				carneTotal += h * 460 + m * 380 + c * 260;
				myObj["maminha"] = (h * 460 + m * 380 + c * 260) / 100;
				break;

			// FRANGO
			case "Coração":
				myObj["coracao"] = (h * 460 + m * 380 + c * 260) / 100;
				break;
			case "Asinha":
				myObj["asinha"] = (h * 460 + m * 380 + c * 260) / 100;
				break;
			case "Coxinha":
				myObj["coxinha"] = (h * 460 + m * 380 + c * 260) / 100;
				break;
			// SUINA
			case "Linguiça":
				// suinaH += h * 160;
				// suinaM += m * 80;
				// suinaC += c * 60;
				myObj["linguica"] = (h * 160 + m * 80 + c * 60) / 100;
				break;
			case "Bisteca":
				myObj["bisteca"] = (h * 600 + m * 460 + c * 200) / 100;
				break;
			case "Costela":
				myObj["costela"] = (h * 600 + m * 460 + c * 200) / 100;
				break;
			case "Panceta":
				myObj["panceta"] = (h * 600 + m * 460 + c * 200) / 100;
				break;

			// AGUA E SUCO
			case "Água":
				agua = (h + m + c) * 200;
				myObj["agua"] =
					agua === 0
						? 0
						: Math.round(agua / 1000) + 1;
				break;
			case "Sucos":
				suco = (h + m + c) * 200;
				myObj["suco"] =
					suco === 0
						? 0
						: Math.round(suco / 1000) + 1
				break;
			case "Energéticos":
				energe = (h + m + c) * 200;
				myObj["energetico"] =
					energe === 0
						? 0
						: Math.round(energe / 1000) + 1;
				break;

			// CACHAÇA
			case "51":
				// cachaH += h * 0.5;
				// cachaM += m * 0.25;
				i51 = h * 0.5 + m * 0.25;
				myObj["51"] =
					i51 === 0 ? 0 : Math.round(i51) === 0 ? 1 : Math.round(i51);
				break;
			case "Vodka":
				vodka = h * 0.5 + m * 0.25;
				myObj["vodka"] =
					vodka === 0 ? 0 : Math.round(vodka) === 0 ? 1 : Math.round(vodka);
				break;
			case "Tequila":
				tequila = h * 0.5 + m * 0.25;
				myObj["tequila"] =
					tequila === 0
						? 0
						: Math.round(tequila) === 0
						? 1
						: Math.round(tequila);
				break;
			case "whisky":
				whisky = h * 0.5 + m * 0.25;
				myObj["whisky"] =
					whisky === 0 ? 0 : Math.round(whisky) === 0 ? 1 : Math.round(whisky);
				break;
			case "Jurupinga":
				jurupinga = h * 0.5 + m * 0.25;
				myObj["jurupinga"] =
					jurupinga === 0
						? 0
						: Math.round(jurupinga) === 0
						? 1
						: Math.round(jurupinga);
				break;
			case "Corote":
				corote = h * 0.5 + m * 0.25;
				myObj["corote"] =
					corote === 0 ? 0 : Math.round(corote) === 0 ? 1 : Math.round(corote);
				break;
			case "ICE":
				ice = h * 0.5 + m * 0.25;
				myObj["ice"] =
					ice === 0 ? 0 : Math.round(ice) === 0 ? 1 : Math.round(ice);
				break;

			// Cerveja
			case "Skol":
				// cervH += h * 2;
				// cervM += m * 1;
				myObj["skol"] = h * 2 + m * 1;
				break;
			case "Brahma":
				myObj["brahma"] = h * 2 + m * 1;
				break;
			case "Corona":
				myObj["corona"] = h * 2 + m * 1;
				break;
			case "Stella":
				myObj["stella"] = h * 2 + m * 1;
				break;
			case "Itaipava":
				myObj["itaipava"] = h * 2 + m * 1;
				break;
			case "Proibida":
				myObj["proibida"] = h * 2 + m * 1;
				break;
			case "Budweiser":
				myObj["budweiser"] = h * 2 + m * 1;
				break;
			case "Heineken":
				myObj["heineken"] = h * 2 + m * 1;
				break;

			// REFRIGERANTE
			case "Pepsi":
				// refriH += h * 800;
				// refriM += m * 800;
				// refriC += h * 200;
				myObj["pepsi"] = (h * 800 + m * 800 + c * 200) / 1000;
				break;
			case "Fanta":
				myObj["fanta"] = (h * 800 + m * 800 + c * 200) / 1000;
				break;
			case "Dolly":
				myObj["dolly"] = (h * 800 + m * 800 + c * 200) / 1000;
				break;
			case "Coca-cola":
				myObj["cocaCola"] = (h * 800 + m * 800 + c * 200) / 1000;
				break;
			case "Sprite":
				myObj["sprite"] = (h * 800 + m * 800 + c * 200) / 1000;
				break;
			case "Tubaína":
				myObj["tubaina"] = (h * 800 + m * 800 + c * 200) / 1000;
				break;

			// ACOMPANHAMENTOS / VEGET
			case "Farofa":
				myObj["farofa"] = (h + m + c) * 40;
				break;
			case "Arroz":
				myObj["arroz"] = (h + m + c) * 200;
				break;
			case "Vinagrete":
				myObj["vinagrete"] = (h + m + c) * 100;
				break;
			case "Pão de alho":
				myObj["paoAlho"] = (h + m + c) * 2;
				break;
			case "Tomate":
				myObj["tomate"] = (h + m + c) * 1;
				break;
			case "Tofu":
				myObj["tofu"] = (h + m + c) * 1;
				break;
			case "Abacaxi":
				abaca = (h + m + c) * 0.3;
				myObj["abacaxi"] =
					abaca === 0
						? 0
						: Math.round(abaca) > abaca
						? Math.round(abaca)
						: Math.round(abaca) + 1;
				break;

			// UTILIDADES
			case "Garfos":
				myObj["garfo"] = (h + m + c) * 2;
				break;
			case "Facas":
				myObj["faca"] = (h + m + c) * 2;
				break;
			case "Pratos":
				myObj["prato"] = (h + m + c) * 2;
				break;
			case "Copos":
				myObj["copo"] = (h + m + c) * 3;
				break;
			case "Guardanapos":
				myObj["contraFile"] = (h + m + c) * 5;
				break;

			// OUTROS
			case "Carvão":
				myObj["carvao"] = h + m + c > 20 ? 2 : 1;
				break;
			case "Sal grosso":
				sal = carneTotal > 30000 ? 3 : 2;
				myObj["salGrosso"] = sal;
				break;
			default:
				break;
		}
	}

	return myObj;
	// return {
	// 	carnes: (carnesH + carnesM + carnesC) / 100, // Kilos
	// 	frangos: (frangoH + frangoM + frangoC) / 100, // Kilos
	// 	coracao: (coraH + coraM + coraC) / 100, // Kilos
	// 	suina: (suinaH + suinaM + suinaC) / 100, //Kilos
	// 	aguas:
	// 		agua === 0
	// 			? 0
	// 			: agua / 1000 >= 1.5
	// 				? Math.round(agua / 1000)
	// 				: Math.round(agua / 1000) + 1, // Garrafas
	// 	sucos:
	// 		suco === 0
	// 			? 0
	// 			: suco / 1000 >= 1.5
	// 				? Math.round(suco / 1000)
	// 				: Math.round(suco / 1000) + 1, // Garrafas
	// 	energeticos:
	// 		energe === 0
	// 			? 0
	// 			: energe / 1000 >= 1.5
	// 				? Math.round(energe / 1000)
	// 				: Math.round(energe / 1000) + 1, // Garrafas
	// 	cachaca:
	// 		cachaH + cachaM === 0
	// 			? 0
	// 			: Math.round(cachaH + cachaM) === 0
	// 				? 1
	// 				: Math.round(cachaH + cachaM), //Garrafas
	// 	cerveja: cervH + cervM, // Litros
	// 	refrigerante: (refriH + refriM + refriC) / 1000, // Garrafas
	// 	farofa: farof / 1000, // Kilos
	// 	arroz: arr / 1000, // Kilos
	// 	vinagrete: vina > 1000 ? vina / 1000 : vina / 100, // Gramas
	// 	paoAlho: pao, // Unidades
	// 	tomate: tomat, // Unidades
	// 	tofu: tof, // Unidades
	// 	abacaxi:
	// 		abaca === 0
	// 			? 0
	// 			: Math.round(abaca) > abaca
	// 				? Math.round(abaca)
	// 				: Math.round(abaca) + 1, // Unidades
	// 	carvao: carv, // Pacotes
	// 	salGrosso: sal, // Pacotes
	// 	garfos: garfo, // Unidades
	// 	facas: faca, // Unidades
	// 	pratos: prato, // Unidades
	// 	copos: copo, // Unidades
	// 	guardanapos: guarda, // Unidades
	// };
}

module.exports = { calcular };
