const sortMatrixVert = (matrix) => {
  const length = matrix[0].length;
  if (!matrix.every(arr => arr.length === length)) {
    throw new Error('Not Valid Matrix');
  }
  const result = [];
  const height = matrix.length;
  const arr = matrix.flatMap(num => num).sort((a, b) => a - b);
  for (let i = 0; i < height; i++) {
    result.push([]);
    for (let j = 0; j < length; j++) {
      result[i].push(arr[height * j + i]);
    }
  }
  return result;
};

const sortMatrixHor = (matrix) => {
  const length = matrix[0].length;
  if (!matrix.every(arr => arr.length === length)) {
    throw new Error('Not Valid Matrix');
  }
  const flatMatrix = matrix.flat().sort((a, b) => a - b);
  return matrix.map((x) => flatMatrix.splice(0, x.length));;
};

module.exports.Script = sortMatrixVert;
module.exports.sortMatrixHor = sortMatrixHor;

