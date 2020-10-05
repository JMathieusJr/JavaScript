function summation(num) {
	let sum = 0;

	for (let i = 0; i <= num; i++) {
		if( i !== 0){
			sum = sum + i;
			console.log(sum)
		}
	}
	return sum;
}

console.log(summation(8))