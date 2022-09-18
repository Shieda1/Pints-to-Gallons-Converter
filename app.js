// https://www.omnicalculator.com/conversion/pints-to-gallons-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const gallonsRadio = document.getElementById('gallonsRadio');
const pintsRadio = document.getElementById('pintsRadio');

let gallons;
let pints = v; 

// labels of the inpust
const variable = document.getElementById('variable');

gallonsRadio.addEventListener('click', function() {
  variable.textContent = 'Pints';
  pints = v;
  result.textContent = '';
});

pintsRadio.addEventListener('click', function() {
  variable.textContent = 'Gallons';
  gallons = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(gallonsRadio.checked)
    result.textContent = `Gallons = ${computegallons().toFixed(5)}`;

  else if(pintsRadio.checked)
    result.textContent = `Pints = ${computepints().toFixed(5)}`;
})

// calculation

function computegallons() {
  return Number(pints.value) / 8;
}

function computepints() {
  return Number(gallons.value) * 8;
}