import { Ingredientes } from "../calculate/Ingredients";
import { Pessoas } from "../calculate/Persons";

const pessoas = new Pessoas();
const ingr = new Ingredientes();
const myObj = {};

function calcular() {
	const m = Pessoas.woman;
	const h = Pessoas.men;
	const c = Pessoas.kids;

	myObj["Bovina"] = {};
	myObj["Frango"] = {};
	myObj["Suina"] = {};

	var [carneTotal, sal, abaca] = [0, 0];
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
				myObj["Bovina"]["Contra-filé"] = (h * 460 + m * 380 + c * 260) / 100;
				break;
			case "Picanha":
				carneTotal += h * 460 + m * 380 + c * 260;
				myObj["Bovina"]["Picanha"] = (h * 460 + m * 380 + c * 260) / 100;
				break;
			case "Alcatra":
				carneTotal += h * 460 + m * 380 + c * 260;
				myObj["Bovina"]["Alcatra"] = (h * 460 + m * 380 + c * 260) / 100;
				break;
			case "Maminha":
				carneTotal += h * 460 + m * 380 + c * 260;
				myObj["Bovina"]["Maminha"] = (h * 460 + m * 380 + c * 260) / 100;
				break;

			// FRANGO
			case "Coração":
				myObj["Frango"]["Coração"] = (h * 460 + m * 380 + c * 260) / 100;
				break;
			case "Asinha":
				myObj["Frango"]["Asinha"] = (h * 460 + m * 380 + c * 260) / 100;
				break;
			case "Coxinha":
				myObj["Frango"]["Coxinha"] = (h * 460 + m * 380 + c * 260) / 100;
				break;
			// SUINA
			case "Linguiça":
				// suinaH += h * 160;
				// suinaM += m * 80;
				// suinaC += c * 60;
				myObj["Suina"]["Linguica"] = (h * 160 + m * 80 + c * 60) / 100;
				break;
			case "Bisteca":
				myObj["Suina"]["Bisteca"] = (h * 600 + m * 460 + c * 200) / 100;
				break;
			case "Costela":
				myObj["Suina"]["Costela"] = (h * 600 + m * 460 + c * 200) / 100;
				break;
			case "Panceta":
				myObj["Suina"]["Panceta"] = (h * 600 + m * 460 + c * 200) / 100;
				break;

			// AGUA E SUCO
			case "Água":
				agua = (h + m + c) * 200;
				myObj["Água"] = agua === 0 ? 0 : Math.round(agua / 1000) + 1;
				break;
			case "Sucos":
				suco = (h + m + c) * 200;
				myObj["Suco"] = suco === 0 ? 0 : Math.round(suco / 1000) + 1;
				break;
			case "Energéticos":
				energe = (h + m + c) * 200;
				myObj["Energéticos"] = energe === 0 ? 0 : Math.round(energe / 1000) + 1;
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
				myObj["Vodka"] =
					vodka === 0 ? 0 : Math.round(vodka) === 0 ? 1 : Math.round(vodka);
				break;
			case "Tequila":
				tequila = h * 0.5 + m * 0.25;
				myObj["Tequila"] =
					tequila === 0
						? 0
						: Math.round(tequila) === 0
						? 1
						: Math.round(tequila);
				break;
			case "whisky":
				whisky = h * 0.5 + m * 0.25;
				myObj["Whisky"] =
					whisky === 0 ? 0 : Math.round(whisky) === 0 ? 1 : Math.round(whisky);
				break;
			case "Jurupinga":
				jurupinga = h * 0.5 + m * 0.25;
				myObj["Jurupinga"] =
					jurupinga === 0
						? 0
						: Math.round(jurupinga) === 0
						? 1
						: Math.round(jurupinga);
				break;
			case "Corote":
				corote = h * 0.5 + m * 0.25;
				myObj["Corote"] =
					corote === 0 ? 0 : Math.round(corote) === 0 ? 1 : Math.round(corote);
				break;
			case "ICE":
				ice = h * 0.5 + m * 0.25;
				myObj["ICE"] =
					ice === 0 ? 0 : Math.round(ice) === 0 ? 1 : Math.round(ice);
				break;

			// Cerveja
			case "Skol":
				// cervH += h * 2;
				// cervM += m * 1;
				myObj["Skol"] = h * 2 + m * 1;
				break;
			case "Brahma":
				myObj["Brahma"] = h * 2 + m * 1;
				break;
			case "Corona":
				myObj["Corona"] = h * 2 + m * 1;
				break;
			case "Stella":
				myObj["Stella"] = h * 2 + m * 1;
				break;
			case "Itaipava":
				myObj["Itaipava"] = h * 2 + m * 1;
				break;
			case "Proibida":
				myObj["Proibida"] = h * 2 + m * 1;
				break;
			case "Budweiser":
				myObj["Budweiser"] = h * 2 + m * 1;
				break;
			case "Heineken":
				myObj["Heineken"] = h * 2 + m * 1;
				break;

			// REFRIGERANTE
			case "Pepsi":
				// refriH += h * 800;
				// refriM += m * 800;
				// refriC += h * 200;
				myObj["Pepsi"] = (h * 800 + m * 800 + c * 200) / 1000;
				break;
			case "Fanta":
				myObj["Fanta"] = (h * 800 + m * 800 + c * 200) / 1000;
				break;
			case "Dolly":
				myObj["Dolly"] = (h * 800 + m * 800 + c * 200) / 1000;
				break;
			case "Coca-cola":
				myObj["Coca-cola"] = (h * 800 + m * 800 + c * 200) / 1000;
				break;
			case "Sprite":
				myObj["Sprite"] = (h * 800 + m * 800 + c * 200) / 1000;
				break;
			case "Tubaína":
				myObj["Tubaína"] = (h * 800 + m * 800 + c * 200) / 1000;
				break;

			// ACOMPANHAMENTOS / VEGET
			case "Farofa":
				myObj["Farofa"] = (h + m + c) * 40;
				break;
			case "Arroz":
				myObj["Arroz"] = (h + m + c) * 200;
				break;
			case "Vinagrete":
				myObj["Vinagrete"] = (h + m + c) * 100;
				break;
			case "Pão de alho":
				myObj["Pão de alho"] = (h + m + c) * 2;
				break;
			case "Tomate":
				myObj["Tomate"] = (h + m + c) * 1;
				break;
			case "Tofu":
				myObj["Tofu"] = (h + m + c) * 1;
				break;
			case "Abacaxi":
				abaca = (h + m + c) * 0.3;
				myObj["Abacaxi"] =
					abaca === 0
						? 0
						: Math.round(abaca) > abaca
						? Math.round(abaca)
						: Math.round(abaca) + 1;
				break;

			// UTILIDADES
			case "Garfos":
				myObj["Garfos"] = (h + m + c) * 2;
				break;
			case "Facas":
				myObj["Facas"] = (h + m + c) * 2;
				break;
			case "Pratos":
				myObj["Pratos"] = (h + m + c) * 2;
				break;
			case "Copos":
				myObj["Copos"] = (h + m + c) * 3;
				break;
			case "Guardanapos":
				myObj["Guardanapos"] = (h + m + c) * 5;
				break;

			// OUTROS
			case "Carvão":
				myObj["Carvão"] = h + m + c > 20 ? 2 : 1;
				break;
			case "Sal grosso":
				sal = carneTotal > 30000 ? 3 : 2;
				myObj["Sal grosso"] = sal;
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
