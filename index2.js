const person = {
	name:'Vlad',
	age: 26,
	isProgram: true,
	lang: ['ru'],
	greet(){
		console.log('greet from person')
	}
}

console.log(person.name)
console.log(person['age'])
