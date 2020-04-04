let numberFormat = null;

window.addEventListener('load', start);

function start() {
  const fullSalary = document.querySelector('#fullSalary');
  const numberOfMonths = document.querySelector('#numberOfMonths');

  fullSalary.addEventListener('keyup', calcularFgts);
  numberOfMonths.addEventListener('keyup', calcularFgts);
  typeOfContract.addEventListener('change', calcularFgts);
  numberFormat = Intl.NumberFormat('pt-BR');
  calcularFgts();
}

function calcularFgts() {
  let salary = +document.querySelector('#fullSalary').value;
  let months = +document.querySelector('#numberOfMonths').value;

  let formatedSalary = formatNumber(salary);

  let select = document.querySelector('#typeOfContract');
  let contract = select.options[select.selectedIndex].value;
  let calc = 0;
  let message = '';
  if (contract === 'cn') {
    calc = salary * months * 0.08;
    message = `Com o salário bruto de ${formatedSalary}, levando em conta que seu empregador 
    tenha feito depósitos de 8% durande todos os ${months} meses, seu saldo atual de FGTS 
    com este empregador é ${calc}.`;
    document.querySelector('#fgts').textContent = formatNumber(calc);
    document.querySelector('#message').textContent = message;
  } else {
    calc = salary * months * 0.02;
    message = `Com o salário bruto de ${formatedSalary}, levando em conta que seu empregador 
    tenha feito depósitos de 2% durande todos os ${months} meses, seu saldo atual de FGTS 
    com este empregador é ${calc}.`;
    document.querySelector('#fgts').textContent = formatNumber(calc);
    document.querySelector('#message').textContent = message;
  }
}

function formatNumber(number) {
  return numberFormat.format(number);
}
