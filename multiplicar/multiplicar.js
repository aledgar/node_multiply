const fs = require('fs');
//const colors = require('colors');
let listar = (base, limite) =>{

    return new Promise((resolve,reject)=>{

        if(!Number(base) || !Number(limite)){
            reject('Lo que se envio no es número.');
            return;
        }

        let lista = '';

        for(let i=1; i<=limite; ++i){
            lista += `${base} x ${i} = ${base*i}\n`;
        }

        resolve(lista);

    });

}



let saveFile = (base,limite) =>{

    return new Promise((resolve, reject)=>{
        //let base = 12;
        let content = '';

        if(!Number(base) || !Number(limite)){
            reject("no es un numero");
            return;
        }


        for (let i = 1; i <= limite; i++) {

            content += `${base} * ${i} = ${base * i}\n`;

        }

        fs.writeFile(`tabla-${base}.txt`, content, (err) => {

            if (err) 
                reject(err);
            else
                resolve(`The file tabla-${base}.txt has been created`);

        });
    });

}

module.exports = {
    saveFile,
    listar
}






