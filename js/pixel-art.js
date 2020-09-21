var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];


var estaHaciendoClick = false;

// Variable para guardar el elemento 'color-personalizado'
var paleta = document.getElementById('paleta');
var grillaPixel = document.getElementById('grilla-pixeles');
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');
var colorSeleccionado = document.getElementById('idicador-de-color');
var guardarImage = document.getElementById('guardar');
var borrar = document.getElementById('borrar');
colorPersonalizado.addEventListener('change', 
(function() {
  
  // Se guarda el color de la rueda en colorActual
  
  colorActual = colorPersonalizado.value;
  
  // Completar para que cambie el indicador-de-color al colorActual
  var cambioColor = document.getElementById('indicador-de-color');
  cambioColor.style.backgroundColor= colorActual;
  
})
);

//selecciona el color
function cambiaColor(event){
  var colorSelec = event.target.style.backgroundColor;
  var indicadorColor = document.getElementById('indicador-de-color');
  indicadorColor.style.backgroundColor = colorSelec;
}

// crear palerta de colores
function crearPaletaDeColores() {
  nombreColores.forEach(function(color){
    var newColor = document.createElement('div');
    paleta.appendChild(newColor);
    newColor.style.backgroundColor = color;
    newColor.className = 'color-paleta';
    newColor.addEventListener('click', cambiaColor);
   
  })
}
crearPaletaDeColores();

// crear tablero
function crearTablero(){
  for(let cantidadDePixeles = 0; cantidadDePixeles < 1750; cantidadDePixeles++){
    let pixel = document.createElement('div');
    grillaPixel.appendChild(pixel);
  }
}
crearTablero();

//Eventos de mouse

grillaPixel.addEventListener('mousedown',() => estaHaciendoClick = true);
grillaPixel.addEventListener('click', pintar);
grillaPixel.addEventListener('mouseover',dibujar);
document.addEventListener('mouseup', () => estaHaciendoClick = false);

function dibujar(event){
  if(estaHaciendoClick) {
    let colorDefinido = document.getElementById('indicador-de-color').style.backgroundColor;
    event.target.style.backgroundColor = colorDefinido
  };
  
}

function pintar(event){
  let colorDefinido = document.getElementById('indicador-de-color').style.backgroundColor;
    event.target.style.backgroundColor = colorDefinido
  };


//Guarda las pinturas
  guardarImage.addEventListener('click', guardarPixelArt);

// seleccionar superHeroe
 var seleccionBatman = document.getElementById('batman');
 var seleccionWonder = document.getElementById('wonder');
 var seleccionFlash = document.getElementById('flash');
 var seleccionInvisible = document.getElementById('invisible');

 seleccionBatman.addEventListener('click', cargarSuper);
 seleccionWonder.addEventListener('click', cargarSuper);
 seleccionFlash.addEventListener('click', cargarSuper);
 seleccionInvisible.addEventListener('click', cargarSuper);
 
 function cargarSuper(event){
   let superCargado = event.target.id;
   cargarSuperheroe(eval(superCargado));
 }

 // Borrar todo
borrar.addEventListener('click', borrarTodo);

function borrarTodo(){
  let i = 0;
  for(let pixel of grillaPixel.children){
    setTimeout(() => {
      pixel.style.backgroundColor = 'white';

    }, i);
    i++;
  }
}