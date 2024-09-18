let Matrix1 = [
    [9,1,3],
    [6,5,4],
    [3,2,1]
]
let Matrix2 = [
    [1,2,3],
    [1,7,2],
    [0,6,8]
]
let result = [];

for (let i = 0; i < 3; i++) {
  result[i] = [];

  for (let j = 0; j < 3; j++) {
    const sum = Matrix1[i][j] + Matrix2[i][j];

    result[i].push(sum);
  }
}
console.log(result);
