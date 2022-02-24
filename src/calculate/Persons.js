class Pessoas {
	constructor() {}

	static woman = 0;
	static men = 0;
	static kids = 0;

	static getPersons() {
		return this.woman + this.men + this.kids;
	}

	static setWoman(value) {
		this.woman = value;
	}
	static setMen(value) {
		this.men = value;
	}
	static setKids(value) {
		this.kids = value;
	}
}

module.exports = { Pessoas };
