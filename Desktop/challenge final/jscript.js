
function validar(event) {
  let charCode = event.charCode;
  let charStr = String.fromCharCode(charCode);
  if (!/^[a-zA-Z]$/.test(charStr)) {
      event.preventDefault(); 
  }
}
let texto = document.getElementById("texto-de-entrada");
texto.addEventListener("keypress", validar);
function encriptar1() {
  let texto = document.getElementById("texto-de-entrada").value;
    let tituloMensaje = document.getElementById("mensaje-1");
    let parrafo = document.getElementById("mensaje-2");
    let imagen = document.createElement('img');
    imagen.style.width = "40%";
    imagen.style.height = "auto";
    imagen.src = 'img/candado.png';
    imagen.alt = '';
    
    
  
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      document.getElementById("texto-de-entrada").value = textoCifrado;
      tituloMensaje.innerHTML ='';
      tituloMensaje.appendChild(imagen);
      parrafo.textContent = document.getElementById("texto-de-entrada").value = textoCifrado;;
      
    } else {
      
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresaaaaa el texto que deseas encriptar o desencriptar";
      
    }
  }
  
  function desencriptar1() {
    let texto = document.getElementById("texto-de-entrada").value;
    let tituloMensaje = document.getElementById("mensaje-1");
    let parrafo = document.getElementById("mensaje-2");
    let imagen2 = document.createElement('img');
    imagen2.style.width = "40%";
    imagen2.style.height = "auto";
    imagen2.src = 'img/desbloqueado.png';
    imagen2.alt = '';
  
    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
      if (texto.length != 0) {
        
        document.getElementById("texto-de-entrada").value = textoCifrado;
        tituloMensaje.innerHTML ='';
        tituloMensaje.appendChild(imagen2);
        parrafo.textContent = document.getElementById("texto-de-entrada").value = textoCifrado;;
      
        
      } else {
        
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresaaaaaa el texto que deseas encriptar o desencriptar";
      }
  }
  
  
    document.getElementById('copiar').addEventListener('click', function() {
      let textarea = document.getElementById('texto-de-entrada');
      navigator.clipboard.writeText(textarea.value);
    }) 

document.getElementById('reset').addEventListener('click', function() {
            location.reload();
        });


  