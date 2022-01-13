
// task 1

// class Worker {
// 	constructor(name, surname, rate, days) {
// 		this.name = name;
// 		this.surname = surname;
// 		this.rate = rate;
// 		this.days = days;
// 	}
// 	getSalary() {
// 		return worker.days * worker.rate;
// 	}
// }

// let worker = new Worker('Ivan', 'Ivanov', '10', '31');
// console.log(worker.name);
// console.log(worker.surname);
// console.log(worker.rate);
// console.log(worker.days);
// console.log(worker.getSalary());

// task 2

// class MyString {
// 	reverse(str) {
// 		return str.split('').reverse().join('')
// 	}
// 	ucFirst(word) {
// 		let newWord = word[0].toUpperCase();
// 		for (let i = 1; i < word.length; i++) {
// 			newWord += word[i].toLowerCase();
// 		}
// 		return newWord;
// 	}
// 	ucWords(words) {
// 		let newWord;
// 		let ucWord = '';
// 		let t1 = words.split(' ')
// 		for (let i = 0; i < t1.length; i++) {

// 			let word = t1[i]
// 			newWord = word[0].toUpperCase();
// 			for (let i = 1; i < word.length; i++) {
// 				newWord += word[i].toLowerCase();
// 			}
// 			ucWord += newWord + ' '
// 		}
// 		return ucWord
// 	}

// }
// const str = new MyString();
// console.log(str.reverse('IVAN'));
// console.log(str.ucFirst('arsenal'));
// console.log(str.ucWords('arsenal arsenal arsenal'));

class CoffeeMake {
	constructor(model) {
		this.model = model
	}
	on() {
		return `on`
	}
	off() {
		return `off`
	}
}

class Drip extends CoffeeMake {
	choice() {
		return `Зробіть свій вибір`
	}
}
let drip = new Drip();
console.log(drip.on());
console.log(drip.choice());

class Carob extends CoffeeMake {
	end() {
		return `Заберіть напій`
	}
}
let carob = new Carob();
console.log(carob.on());
console.log(carob.end());

class CoffeMachine extends CoffeeMake {
	call() {
		return `Додати молока?`
	}
}
let coffeMachine = new CoffeMachine();
console.log(coffeMachine.off());
console.log(coffeMachine.call());
