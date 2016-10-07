function zip() {
    var iterator = createIterator.apply(null, arguments),
        zipped = [],
        maxLength = Math.max.apply(Math, Array.prototype.map.call(arguments, function (a) {
            return a.length;
        }));
    for (var i = 0; i < maxLength; i++) {
        zipped.push(iterator(i));
    }
    return zipped;
}

function createIterator() {
    var args = arguments;
    return function (n) {
        return Array.prototype.reduce.call(args, function (prev, next) {
            prev.push(next[n]);
            return prev;
        }, []);
    }
}

console.log(zip([1, 2, 3], [5, 6, 7, 8], [9, 10, 11, 12], [19, 20, 21, 22], ['asd1', 'asd2', 'asd3', 'asd4', 'asd5']))