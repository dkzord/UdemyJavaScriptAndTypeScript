startArray = (value) => {
  let result = value;


  if (value < 0) {
    return "Não existe fatorial"
  }

  if (value == 0 || value == 1) {
    return 1;
  }


  while (value > 1) {
    value--;
    result *= value;
  }

  return result;
}

console.log(startArray(3));
