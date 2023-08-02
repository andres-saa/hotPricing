
const formatearPesos = (valor) => {

const text = valor;
const number = parseFloat(text);
const formattedNumber = number.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 });

return formattedNumber;
}

export {formatearPesos}