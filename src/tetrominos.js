export const TETROMINOS = {
    0: {
        shape: [[0]],
        color: '0, 0, 0'
    },
    I: {
        shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0]
        ],
        color: '80, 227, 230'
    },
    J: {
        shape: [
            [0, 'J', 0],
            [0, 'J', 0],
            ['J', 'J', 0]
        ],
        color: '36, 95, 223'
    },
    L: {
        shape: [
            [0, 'L', 0],
            [0, 'L', 0],
            [0, 'L', 'L']
        ],
        color: '223, 173, 36'
    },
    O: {
        shape: [
            ['O', 'O'],
            ['O', 'O'],
        ],
        color: '223, 217, 36'
    },
    S: {
        shape: [
            [0, 'S', 'S'],
            ['S', 'S', 0],
            [0, 0, 0]
        ],
        color: '48, 211, 56'
    },
    T: {
        shape: [
            [0, 0, 0],
            ['T', 'T', 'T'],
            [0, 'T', 0]
        ],
        color: '132, 61, 198'
    },
    Z: {
        shape: [
            ['Z', 'Z', 0],
            [0, 'Z', 'Z'],
            [0, 0, 0]
        ],
        color: '227, 78, 78'
    },
    P: {
        shape: [
            [0, 'P', 0],
            ['P', 'P', 'P'],
            [0, 'P', 0]
        ],
        color: '255, 255, 255'
    },
    E: {
        shape: [
            [0, 0, 0],
            [0, 'E', 0],
            [0, 0, 0],
        ],
        color: '213, 101, 219'
    },
    A: {
        shape: [
            [0, 0, 0],
            ['A', 0, 'A'],
            ['A', 'A', 'A'],
        ],
        color: '255, 178, 54'
    },
    B: {
        shape: [
            ['B', 'B', 'B'],
            ['B', 0, 'B'],
            ['B', 'B', 'B'],
        ],
        color: '115, 0, 255'
    },
    C: {
        shape: [
            ['C', 0, 'C'],
            [0, 'C', 0],
            ['C', 0, 'C'],
        ],
        color: '115, 0, 255'
    },

}

export const randomTetromino = () => {
    const tetrominos = 'IJLOSTZPEABC';
    const randTetromino = 
        tetrominos[Math.floor(Math.random() * tetrominos.length)];

    return TETROMINOS[randTetromino];
}