function bienvenida(){
    let usuario = prompt("Ingrese su usuario");
    while(usuario !="nerina"){
        alert("usuario incorrecto");
        usuario = prompt("Ingrese su usuario");
    }
    mensajebienvenida=`Hola su nombre es ${usuario}`;
    alert(mensajebienvenida);
    console.log("usuario=",usuario);
    }
    
    bienvenida();
    
    
    
    let cantidadCompras = Number(prompt("Ingrese cantidad de compras de este año"));
    let mes = Number(prompt("ingrese el mes de su ultima compra"))
        if (cantidadCompras<5 && mes<3){
             alert("necesitas mas de 5 compras para acceder a un beneficio");
        }else if(cantidadCompras<=10 && mes<8){
             alert("Introduce el codigo 10-OFF para acceder al beneficio");
        }else{
            alert("Introduce el codigo 15-OFF para acceder al beneficio");
        }
        console.log("la cantidad de compras es de", cantidadCompras);
        console.log("el ultimo mes en el que realizo la compra fue el", mes);