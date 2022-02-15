import { sortMatrixVert, sortMatrixHor } from './Scirpt';

describe('Sorting matrices vertically ', () => {
  it('Sort completed', () => {
    const matrix = [
      [5, 4, 3, -2, 1, 0, 0],
      [10, 2, 8, 7, -6, 0, 0],
      [-51, 41, 31, 12, 11, 0, 0],
    ];
    expect(() => sortMatrixVert(matrix).toStrictEqual([
      [-51, 0, 0, 1, 4, 8, 12]
      [-6, 0, 0, 2, 5, 10, 31]
      [-2, 0, 0, 3, 7, 11, 41]
    ]
    ));
  });
  it('Should throw error Not Valid Matrix', () => {
    const matrix = [
      [5, 4, 3, -2, 1,],
      [10, 2, 8, 7, -6, 0, 0],
      [-51, 41, 31, 12, 11, 0],
    ];
    expect(() => sortMatrixVert(matrix).toThrow('Not Valid Matrix'));
  });
});

describe('Sorting matrices horizontally ', () => {
  it('Sort completed', () => {
    const matrix = [
      [5, 4, 3, -2, 1, 0, 0],
      [10, 2, 8, 7, -6, 0, 0],
      [-51, 41, 31, 12, 11, 0, 0],
    ];
    expect(() => sortMatrixHor(matrix).toStrictEqual([
      [-51, -6, -2, 0, 0, 0, 0]
      [0, 0, 1, 2, 3, 4, 5]
      [7, 8, 10, 11, 12, 31, 41]
    ]
    ));
  });
  it('Should throw error Not Valid Matrix', () => {
    const matrix = [
      [5, 4, 3, -2, 1,],
      [10, 2, 8, 7, -6, 0, 0],
      [-51, 41, 31, 12, 11, 0],
    ];
    expect(() => sortMatrixVert(matrix).toThrow('Not Valid Matrix'));
  });
});
