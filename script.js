
const slider=document.getElementById('slider');
const valeur=document.getElementById('valeur');
const resultat=document.getElementById('resultat');

function update(){
  const v=parseInt(slider.value);
  valeur.textContent=v;
  resultat.textContent='Simulation pédagogique : lorsque les inégalités augmentent, plusieurs indicateurs sociaux peuvent se dégrader. Cette visualisation est illustrative et ne constitue pas une preuve de causalité.';
}
slider.addEventListener('input',update);
update();
