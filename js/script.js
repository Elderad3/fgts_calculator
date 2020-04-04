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

  const members = ['Elder', 'Assis', 'Lidiane'];

  const getGroupMembers = () => {
    return members
      .map(member => member.name)
      .sort((a, b) => {
        return a.localeCompare(b);
      });
  };
  console.log(members);

  function getFullName(...name) {
    console.log(name.join(' '));
  }
  getFullName(1, 34, 4564, 456, 456, 456, 456546, 45);
}

function teste(array) {
  console.log(array.map(element => (element * 1.0) / 10 + 1));
}
teste([1, 23, 4545, 234234, 234234, 234234, 234234]);

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
    message = `Com o salário bruto de ${salary}, levando em conta que seu empregador 
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
