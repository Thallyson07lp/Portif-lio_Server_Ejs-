const input_Select_Theme = document.querySelector('#input_Theme');
const btn_Select_Theme = document.querySelector('#btn_Theme');
const value_Color_Primary = document.documentElement.style.getPropertyValue('--Color_primary');

const last_Theme = loadTheme();

const theme_Default = {t01_Dark: "#444444ff",t02_light: "#f6f6f6ff"}
const theme_Personal = {}


// Eventos input_Theme pra cores personalizadas e btn_Theme pra tema Dark e Light
btn_Select_Theme.addEventListener('click',(e)=>{
    if ( value_Color_Primary !== theme_Default.t01_Dark) {
        setPrimary(theme_Default.t01_Dark)
    }else{
        setPrimary(theme_Default.t02_light)
    }
})
input_Select_Theme.addEventListener( 'input', (e) => {
 const hex = (e).target.value;
 const hex2 = input_Select_Theme.value;// futuro teste
 
 salveTheme(hex);
 setPrimary(hex);
})

function salveTheme(hex_par){// Salva todas as cores criadas e permitidas pelo usuario  
    if(!confirm("Deseja salvar a cor desse tema?")) {
        alert("A cor selecionada será aplicada, mas não será salva;ela desaparecerá assim que uma nova cor for escolhida."); 
        return;
    };

    for (let i = 0; i <= 1+ Object.keys(theme_Personal).length; i++) {
      if(localStorage.getItem("t"+i+"_Per")){ 
        if (localStorage.getItem("t"+i+"_Per") !== hex_par) { 
          loadTheme(i);
          continue;
        }else{alert("O valor enserido já existe na variavel t"+i+"_Per"); break;}
      }
      if(!localStorage.getItem("t"+i+"_Per")){
        localStorage.setItem("t"+i+"_Per", hex_par);   
        loadTheme(i);
        break;
      }
      
    }   
    
}

function loadTheme(i){//Retornar o ultimo tema definido e Atualiza a lista de objeto no theme_Personal 
  
  if (i || i === 0) {
        theme_Personal["t"+i+"_Per"] = localStorage.getItem("t"+i+"_Per");
  } 
  else if(!localStorage.getItem("last_theme")){
    alert("Será ultilizado a cor do tema light, devido a um erro!!")
    localStorage.setItem("last_theme", theme_Personal.t02_light);
  }
  return localStorage.getItem("last_theme");

}

function setPrimary(hex_par){ // Definindo o tema atual e salvando o ultimo usado.

    if(last_Theme !== hex_par){
        localStorage.setItem("last_theme", hex_par)
    }
    input_Select_Theme.value = hex_par; // Definindo a cor selecionada no Input de cores
    document.documentElement.style.setProperty('--Color_primary', hex_par);
    document.documentElement.style.setProperty('--Color_contrast', getContrastYIQ(hex_par));
}

//Inicializar
if (last_Theme){ setPrimary(last_Theme)}
else{alert("A funcão last_Theme não retornou nemhum valor!!!")};