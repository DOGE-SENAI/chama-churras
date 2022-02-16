import { Ingredientes } from "../calculate/Ingredients";
import { Pessoas } from "../calculate/Persons";

function calcular() {
	const m = Pessoas.woman;
	const h = Pessoas.men;
	const c = Pessoas.kids;

	var [carnesH, frangoH, coraH, suinaH, cervH, cachaH, refriH] = [
		0, 0, 0, 0, 0, 0, 0,
	];
	var [carnesM, frangoM, coraM, suinaM, cervM, cachaM, refriM] = [
		0, 0, 0, 0, 0, 0, 0,
	];
	var [carnesC, frangoC, coraC, suinaC, refriC] = [0, 0, 0, 0, 0];

	var [agua, suco, energe] = [0, 0, 0];

	var [carv, sal, guarda, prato, faca, garfo, copo] = [0, 0, 0, 0, 0, 0, 0];

	var [farof, arr, tof, vina, pao, tomat, abaca] = [0, 0, 0, 0, 0, 0, 0];

	for (var item in Ingredientes.getIngredientes()) {
		switch (item) {
			// BOVINA
			case "Contra-filé":
				carnesH += h * 460; // gramas
				carnesM += m * 380;
				carnesC += c * 260;
				break;
			case "Picanha":
				carnesH += h * 460;
				carnesM += m * 380;
				carnesC += c * 260;
				break;
			case "Alcatra":
				carnesH += h * 460;
				carnesM += m * 380;
				carnesC += c * 260;
				break;
			case "Maminha":
				carnesH += h * 460;
				carnesM += m * 380;
				carnesC += c * 260;
				break;
			// FRANGO
			case "Coração":
				coraH += h * 80;
				coraM += m * 60;
				coraC += c * 60;
				break;
			case "Asinha":
				frangoH += h * 420;
				frangoM += m * 340;
				frangoC += c * 280;
				break;
			case "Coxinha":
				frangoH += h * 420;
				frangoM += m * 340;
				frangoC += c * 280;
				break;
			// SUINA
			case "Linguiça":
				suinaH += h * 160;
				suinaM += m * 80;
				suinaC += c * 60;
				break;
			case "Bisteca":
				suinaH += h * 600;
				suinaM += m * 460;
				suinaC += c * 200;
				break;
			case "Costela":
				suinaH += h * 600;
				suinaM += m * 460;
				suinaC += c * 200;
				break;
			case "Panceta":
				suinaH += h * 600;
				suinaM += m * 460;
				suinaC += c * 200;
				break;
			// AGUA E SUCO
			case "Água":
				agua += (h + m + c) * 200;
				break;
			case "Sucos":
				suco += (h + m + c) * 200;
				break;
			case "Energéticos":
				energe += (h + m + c) * 200;
				break;
			// CACHAÇA
			case "51":
				cachaH += h * 0.5;
				cachaM += m * 0.25;
				break;
			case "Vodka":
				cachaH += h * 0.5;
				cachaM += m * 0.25;
				break;
			case "Tequila":
				cachaH += h * 0.5;
				cachaM += m * 0.25;
				break;
			case "whisky":
				cachaH += h * 0.5;
				cachaM += m * 0.25;
				break;
			case "Jurupinga":
				cachaH += h * 0.5;
				cachaM += m * 0.25;
				break;
			case "Corote":
				cachaH += h * 0.5;
				cachaM += m * 0.25;
				break;
			case "ICE":
				cachaH += h * 0.5;
				cachaM += m * 0.25;
				break;
			case "Skol":
				cervH += h * 0.5;
				cervM += m * 0.25;
				break;
			case "Brahma":
				cervH += h * 0.5;
				cervM += m * 0.25;
				break;
			case "Corona":
				cervH += h * 0.5;
				cervM += m * 0.25;
				break;
			case "Stella":
				cervH += h * 0.5;
				cervM += m * 0.25;
				break;
			case "Itaipava":
				cervH += h * 0.5;
				cervM += m * 0.25;
				break;
			case "Proibida":
				cervH += h * 0.5;
				cervM += m * 0.25;
				break;
			case "Budweiser":
				cervH += h * 0.5;
				cervM += m * 0.25;
				break;
			case "Heineken":
				cervH += h * 0.5;
				cervM += m * 0.25;
				break;
			// REFRIGERANTE
			case "Pepsi":
				refriH += h * 800;
				refriM += m * 800;
				refriC += h * 200;
				break;
			case "Fanta":
				refriH += h * 800;
				refriM += m * 800;
				refriC += h * 200;
				break;
			case "Dolly":
				refriH += h * 800;
				refriM += m * 800;
				refriC += h * 200;
				break;
			case "Coca-cola":
				refriH += h * 800;
				refriM += m * 800;
				refriC += h * 200;
				break;
			case "Sprite":
				refriH += h * 800;
				refriM += m * 800;
				refriC += h * 200;
				break;
			case "Tubaína":
				refriH += h * 800;
				refriM += m * 800;
				refriC += h * 200;
				break;
			// ACOMPANHAMENTOS / VEGET
			case "Farofa":
				farof = (h + m + c) * 40;
				break;
			case "Arroz":
				arr = (h + m + c) * 200;
				break;
			case "Vinagrete":
				vina = (h + m + c) * 100;
				break;
			case "Pão de alho":
				pao = (h + m + c) * 2;
				break;
			case "Tomate":
				tomat = (h + m + c) * 1;
				break;
			case "Tofu":
				tof = (h + m + c) * 1;
				break;
			case "Abacaxi":
				abaca = (h + m + c) * 0.3;
				break;
			// UTILIDADES
			case "Garfos":
				garfo = (h + m + c) * 2;
				break;
			case "Facas":
				faca = (h + m + c) * 2;
				break;
			case "Pratos":
				prato = (h + m + c) * 2;
				break;
			case "Copos":
				copo = (h + m + c) * 2;
				break;
			case "Guardanapos":
				guarda = (h + m + c) * 5;
				break;
			// OUTROS
			case "Carvão":
				carv = h + m + c > 10 ? 2 : 1;
				break;
			case "Sal grosso":
				sal = carnesH + carnesM + carnesC > 30000 ? 3 : 2;
				break;
			default:
				break;
		}
	}

	return {
		carnes: (carnesH + carnesM + carnesC) / 100, // Kilos
		frangos: (frangoH + frangoM + frangoC) / 100, // Kilos
		coracao: (coraH + coraM + coraC) / 100, // Kilos
		aguas:
			agua === 0
				? 0
				: agua / 1000 >= 1.5
				? Math.round(agua / 1000)
				: Math.round(agua / 1000) + 1, // Garrafas
		sucos:
			suco === 0
				? 0
				: suco / 1000 >= 1.5
				? Math.round(suco / 1000)
				: Math.round(suco / 1000) + 1, // Garrafas
		energeticos:
			energe === 0
				? 0
				: energe / 1000 >= 1.5
				? Math.round(energe / 1000)
				: Math.round(energe / 1000) + 1, // Garrafas
		refrigerante: (refriH + refriM + refriC) / 1000, // Garrafas
		farofa: farof / 1000, // Kilos
		arroz: arr / 1000, // Kilos
		vinagrete: vina > 1000 ? vina / 1000 : vina / 100, // Gramas
		paoAlho: pao, // Unidades
		tomate: tomat, // Unidades
		tofu: tof, // Unidades
		abacaxi:
			abaca === 0
				? 0
				: Math.round(abaca) > abaca
				? Math.round(abaca)
				: Math.round(abaca) + 1, // Unidades
		carvao: carv, // Pacotes
		salGrosso: sal, // Pacotes
		garfos: garfo, // Unidades
		facas: faca, // Unidades
		pratos: prato, // Unidades
		copos: copo, // Unidades
		guardanapos: guarda, // Unidades
	};
}

module.exports = { calcular };
