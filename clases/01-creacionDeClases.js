class Animal{
    constructor(nombre, genero){
        this.nombre= nombre;
        this.genero= genero;
    }


    //metodos

    sonar(){
        console.log("grito");
    }

    saludar(){
        console.log(`Hola me llamo ${this.nombre}`)
    }
}

class Perro extends Animal{
    constructor(nombre,genero,size){
        super(nombre,genero);
        this.size= size
    }

    sonar(){
        console.log("Soy un perro y mi sonido es un ladrido");
    }

    ladrar(){
        console.log("guao guao")
    }


}

const mimi = new Animal("Mimi","hembra");
const scoby = new Perro("scooby", "Macho","gigante");

console.log(mimi);
console.log(scoby);

mimi.saludar();
mimi.sonar();

scoby.saludar();
scoby.sonar();
scoby.ladrar()