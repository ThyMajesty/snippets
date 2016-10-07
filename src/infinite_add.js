function add(a) {
	var s = 0;
	innerAdd.valueOf = function() { return s;}
	function innerAdd(n) {
		console.log(s, n)
		s += n;
		return innerAdd;
	}
	return innerAdd(a);
}

var add1 = add(1),
	add2 = add(2),
	add3 = add(2)(1),
	add6 = add(add1)(add2)(add3),
	add_1 = add(-1);
console.log(add1, add2, add3, add6, add1 + add2 + 3 + add_1, add1 + add2 + 3 - add_1);