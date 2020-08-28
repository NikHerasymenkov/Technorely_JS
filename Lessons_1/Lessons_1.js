function discriminantSquare([a, b, c]) {
    let
        D, x1, x2;
    D = b ** 2 - 4 * a * c;
    console.log('D = ' + D)
    if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        console.log('x1 = ' + x1)
        console.log('x2 = ' + x2)
    } else if (D === 0) {
        x1=(-b)/(2*a)
        console.log('x = '+x1)
    } else if (D < 0) {
        console.log('Не имеет корней')
    }
}

discriminantSquare([1, 0, -4])
console.log('--------------------------------------')
discriminantSquare([1, 2, 1])
console.log('--------------------------------------')
discriminantSquare([1, 0, 4])
