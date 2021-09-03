function funcionCallBack(data, funcion){
   //console.log(data);
   funcion(data)
}

//funcion externa 
const saludar = (persona) => console.log(`decir hola: ${persona}`);

//Argumentos de la funcion
let argumentoOne = 'Ju@n P@rez'

//--------//

//ejecutamos la funcion callback de dos formas diferentes

//1-pasando una funcion previamente definida o....
funcionCallBack(argumentoOne, saludar)

//2-construyendo una funcion arrow-anonima directamente en el parametro de la funcion. 
funcionCallBack(argumentoOne , () => {
   console.log(`Hola de nuevo, ${argumentoOne}`);
})

