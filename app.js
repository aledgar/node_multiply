const argv = require('yargs').command('listar','listado multiplicar',{
                            base:{
                                demand:true,
                                alias:'b'
                            },
                            limite:{
                                alias:'l',
                                default:10
                            }
                        }).command('crear','crear archivos tablas',{
                            base:{
                                demand:true,
                                alias:'b'
                            },
                            limite:{
                                default:10,
                                alias:'l'
                            }
                        }).argv;
const colors = require('colors');
const { saveFile,listar } = require('./multiplicar/multiplicar');

let comando = argv._[0];

//console.log(comando);

switch(comando){
    case 'crear':
        saveFile(argv.base,argv.limite).then(archivo=>console.log(archivo.inverse)).catch(err=>console.log(err));
    break;
    case 'listar':
        listar(argv.base,argv.limite).then(lista=>console.log(lista.yellow)).catch(err=>console.log(err));
    break;
    default:
        console.log(object);
}



/*let base = 'a';
console.log(argv);
saveFile(base)
            .then(archivo => console.log(`Archivo creado ${archivo}`))
            .catch(e => console.log(e));*/