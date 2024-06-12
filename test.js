let unformatedValue = "0,";

// limpar valor recebido e muda virgula por ponto
unformatedValue = unformatedValue.replace(/[^\d,]/g, "").replace(",", ".");

let valueLeft = "0";
let valueRight = "00";

if(unformatedValue.includes(".")){
  const valueSplit = unformatedValue.split(".");
  valueLeft = valueSplit[0];
  valueRight = valueSplit[1];
}else{
  valueRight = unformatedValue;
};

// separa valores após a linha e antes
const lenLeft = valueLeft.length;
let lenRight = valueRight.length;

if(lenRight === 3){
  valueLeft = valueLeft + valueRight.slice(0, 1);
  valueRight = valueRight.slice(1, 3);
}else if(lenRight === 1){
  valueRight = valueLeft.slice(lenLeft - 1, lenLeft) + valueRight;
  valueLeft = lenLeft === 1 ? "0" : valueLeft.slice(0, lenLeft - 1);
}

lenRight = valueRight.length;
lenRight < 2 ? valueRight = "0" + valueRight : valueRight = valueRight;

const withSymbol = false;
const options = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
};

if (withSymbol) {
  options.style = 'currency';
  options.currency = 'BRL';
}

const formattedValue = new Intl.NumberFormat('pt-BR', options).format(valueLeft + "." + valueRight);

console.log(formattedValue)