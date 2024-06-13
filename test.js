const formatCurrencyBRL = value => {
  const typeValue = typeof value;
  let valueFormated = value.toString();

  if (typeValue !== "number") {
      valueFormated = value.toString().replace(/[^0-9]/g, "");
      let valueLength = valueFormated.length;

      valueFormated =
          "0".repeat(Math.max(0, 3 - valueLength)) + valueFormated;

      valueLength = valueFormated.length;

      valueFormated =
          valueFormated.slice(0, valueLength - 2) +
          "." +
          valueFormated.slice(valueLength - 2, valueLength);
  }

  valueFormated = new Intl.NumberFormat("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
  }).format(valueFormated);

  return valueFormated;
};

console.log(formatCurrencyBRL("asd6000.50"))