const date = new Date('2022-05-06 00:00:00');
const diaSemana = date.getDay();

const diaCorreto = (dia) => {
  if (dia == 0) return 'Domingo';
  if (dia == 1) return 'Segunda';
  if (dia == 2) return 'Terça';
  if (dia == 3) return 'Quarta';
  if (dia == 4) return 'Quinta';
  if (dia == 5) return 'Sexta';
  if (dia == 6) return 'Sábado';
}

// console.log(diaSemana);
console.log(diaCorreto(diaSemana));
