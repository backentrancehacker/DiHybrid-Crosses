let alleles  = {
	'RR': 'round',
	'Rr': 'round',
	'rr': 'wrinkled',
	'TT': 'tall',
	'Tt': 'tall',
	'tt': 'short'
}

let mother = ['Rr', 'Tt']
let father = ['Rr', 'Tt']

const reverse = str => str.split('').reverse().join('')

const split = (parent, arr=[], swapped) => {
	let allele1 = parent[0]
	let allele2 = parent[1]
	for(let i = 0; i < allele1.length; i++) {
		arr.push(allele1[i] + allele2[i])
	}
	if(!swapped) {
		parent[0] = reverse(parent[0])
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

const pretty = arr => {
	let alt = []
	for(let part of arr) {
		let f = part[1]
		let s = part[2]
		alt.push(part[0] + part[2] + part[1] + part[3]) 
	}
	return alt
}

const test = arr => {
	let responses = {}
	for(let res of arr) {
		let type = []
		for(const [key, value] of Object.entries(alleles)) {
			if(res.includes(key) || res.includes(reverse(key))) {
				type.push(alleles[key])
			}
		}
		let key = type.join('/')
		if(responses.hasOwnProperty(key)) {
			responses[key] = responses[key] + 1
		}
		else {
			responses[key] = 1
		}
	}
	return responses
}

const processor = () => {
	let mA = split(mother)
	let fA = split(father)
	
	let res = pretty(combine(mA, fA))
	console.log(test(res))
}


processor()

/*
RrTt | RrTt
(RT + Rt + rT + rt) * (RT + Rt + rT + rt) = 
RTRT + RTRt + RTrT + RTrt + 
RtRT + RtRt + RtrT + Rtrt + 
rTRT + rTRt + rTrT + rTrt +
rtRT + rtRt + rtrT + rtrt = 

RRTT + RRTt + RrTT + RrTt +
RRTt + RRtt + RrTt + Rrtt + 
RrTT + RrTt + rrTT + rrTt +
RrTt + Rrtt + rrTt + rrtt
*/
