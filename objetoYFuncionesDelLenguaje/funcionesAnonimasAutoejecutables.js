(function (){
    console.log("mi primer iife");
})();

(function(d,w,c){
console.log("Mi segunda iife");
console.log(d);
console.log(w);
c.log("esto es un console.log")
}(document,window,console));