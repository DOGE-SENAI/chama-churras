class Ingredientes {

    constructor(){
    }

    static ingredientes = [];
    static addIngrediente(obj) {
        this.ingredientes.push(obj) 
    }

    static removeIngrediente(obj) {
        var l = this.ingredientes.filter((item) => item !== obj);
        this.ingredientes = l;
    }

    static getIngredientes(obj) {
        return this.ingredientes;
    }

}

module.exports = {Ingredientes}