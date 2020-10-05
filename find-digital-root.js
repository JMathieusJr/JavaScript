function digitalRoot(n) {

	let sum = n
	let array = []
	let reducer = (a,b) => parseInt(a) + parseInt(b)

	while (sum > 9) {
		array = sum.toString().split("")
		sum = array.reduce(reducer)
	}

	return(sum)
}

console.log(digitalRoot(456))