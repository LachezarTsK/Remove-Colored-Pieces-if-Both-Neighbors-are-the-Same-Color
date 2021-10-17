
/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function (colors) {

    let sizeOfColors = colors.length;
    let numberOfMoves_A = 0;
    let numberOfMoves_B = 0;
    let index = 0;

    while (index < sizeOfColors) {

        let countA = 0;
        while (index < sizeOfColors && colors.charAt(index) === 'A') {
            countA++;
            index++;
        }
        if (countA > 2) {
            numberOfMoves_A += countA - 2;
        }

        let countB = 0;
        while (index < sizeOfColors && colors.charAt(index) === 'B') {
            countB++;
            index++;
        }
        if (countB > 2) {
            numberOfMoves_B += countB - 2;
        }

    }
    return numberOfMoves_A > numberOfMoves_B;
};
