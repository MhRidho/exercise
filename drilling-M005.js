const printTriangle = (n) => {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += j;
        }
        console.log(row);
    }
}

printTriangle(5);

console.log("===============================");

const printSquare = (x) => {
    for (let i = 0; i < x; i++) {
        if (i === 0 || i === x - 1) {
            console.log('*'.repeat(x));
        } else {
            console.log('*' + ' '.repeat(x - 2) + '*');
        }
    }
}

printSquare(5);