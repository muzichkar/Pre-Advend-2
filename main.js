function CoffeeMake(model) {
	this.model = model
}

CoffeeMake.prototype.on = function () {
	console.log(`on`);

}
CoffeeMake.prototype.off = function () {
	console.log(`of`);
}
// -------------------------


function Drip(model, specification) {
	CoffeeMake.call(this, model);
	this.specification = specification;
}

Drip.prototype = Object.create(CoffeeMake.prototype);
Drip.prototype.constuctor = Drip;
Drip.prototype.choice = function () {
	console.log(`Зробіть свій вибір`)
}

let drip = new Drip();
drip.on()
drip.choice();

// -------------------------

function Carob(model, specification) {
	CoffeeMake.call(this, model);
	this.specification = specification;
}
Carob.prototype = Object.create(CoffeeMake.prototype);
Carob.prototype.constuctor = Carob;
Carob.prototype.end = function () {
	console.log(`Заберіть напій`);
}

let carob = new Carob();
carob.on()
carob.end();

// -------------------------

function CoffeMachine(model, specification) {
	CoffeeMake.call(this, model);
	this.specification = specification;
}

CoffeMachine.prototype = Object.create(CoffeeMake.prototype)
CoffeMachine.prototype.constuctor = CoffeMachine;
CoffeMachine.prototype.milk = function () {
	console.log(`Додати молока?`);
}

let mashine = new CoffeMachine();
mashine.off()
mashine.milk();
