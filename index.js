// Not the best solution

let mother = ['Rr', 'Tt']
let father = ['Rr', 'Tt']

const split = (parent, arr=[], swapped) => {
	let allele1 = parent[0]
	let allele2 = parent[1]
	for(let i = 0; i < allele1.length; i++) {
		arr.push(allele1[i] + allele2[i])
	}
	if(!swapped) {
		parent[0] = parent[0].split('').reverse().join('')
		split(parent, arr, true)
	}
	return arr
}

const combine = (mA, fA) => {
	let arr = []
	for(let i = 0; i < mA.length; i++) {
		for(let j = 0; j < fA.length; j ++) {
			arr.push(mA[i] + fA[j])
		}
	}
	return arr
}

const destructure = arr => {
	let alt = []
	for(let part of arr) {
		let f = part[1]
		let s = part[2]
		alt.push(part[0] + part[2] + part[1] + part[3]) 
	}
	return alt
}

const processor = () => {
	let mA = split(mother)
	let fA = split(father)
	
	console.log(destructure(combine(mA, fA)))
}

processor()

// ['R', 'r', 'T', 't']

