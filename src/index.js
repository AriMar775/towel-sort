module.exports = function towelSort(matrix) {
    if (!matrix) return [];

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2) {
            matrix[i].sort((a, b) => {
                return b - a;
            });
        } else
            matrix[i].sort((a, b) => {
                return a - b;
            });
    }

    return matrix.flat();
};
