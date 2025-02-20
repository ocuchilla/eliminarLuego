class Vehiculo{
    constructor(color,marca,puerta,){
        this.color= color;
        this.marca=marca;
        this.puerta= puerta
    }

    arrancar(){
        console.log("quito el neutro y arranco");
    }

    static frenar(){
        return ("Freno de mano")
    }

    set setColor(color){
        return this.color= color
    }

    get gertColor(){
        return this.color;
    }

}


console.log(Vehiculo.frenar());

const modeloFord= new Vehiculo("rojo", "ford", 2);
console.log(modeloFord.gertColor);
modeloFord.setColor= "amarillo";
console.log(modeloFord.gertColor);
