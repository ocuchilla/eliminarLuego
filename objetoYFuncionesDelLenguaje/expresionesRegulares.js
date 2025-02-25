//Expresiones Regulares
let cadena="Lorem ipsum dolorolorem earum neque nesciunt  id perspiciatis tenetur commodi. Facere, reprehenderit!";

//let expReg = new RegExp("lorem", "i");
//console.log(expReg.test(cadena));
//console.log(expReg.exec(cadena));



let expReg2= /lorem{1}/ig;
console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));