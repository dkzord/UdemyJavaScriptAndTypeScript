const array01 = [1, 2, 3];
const array02 = [4, 5, 6];
// const array03 = array01.concat(array02, [7, 8, 9], 'Cavalcanti');
// ... -> rest, desestruturação de array, spread;
const a3 = [...array01, 'Cavalcanti', ...array02, ...[7, 8, 9, 10]];
console.log(a3);



