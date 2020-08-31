const discriminantSquare = ([a, b, c]) => {
    let
        discriminant, x1, x2,
        noRoots = 'Не имеет корней';
    discriminant = b ** 2 - 4 * a * c;
    if (discriminant > 0) {
        x1 = (-b + Math.sqrt(discriminant)) / (2 * a)
        x2 = (-b - Math.sqrt(discriminant)) / (2 * a)
        return [x1, x2]
    } else if (discriminant === 0) {
        x1 = (-b) / (2 * a)
        return x1
    } else if (discriminant < 0) {
        return noRoots;
    }
}
console.log(discriminantSquare([1, 0, -4]))
console.log(discriminantSquare([1, 2, 1]))
console.log(discriminantSquare([1, 0, 4]))
