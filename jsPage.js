
var User="Mi pagina",
    Password=12345;

function Startalert() {
    
    
    do {
        var us=prompt("Type your name of user","User Name");
        var pass=prompt("Type your Password","Password");
        if (us==User &&  pass==Password) {
            alert("Contraseña y Usuario Correcto");
        }else if(us!=User ||  pass!=Password){
           alert("Usuario o Constraseña Incorrecta");
        }        
    } while (pass!=Password || us!=User);
   
    
}