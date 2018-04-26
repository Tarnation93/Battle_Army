const dealDamage = require('./Damage.js')

class Army {
	constructor(soliders,tanks,aviation,navy){
	this.soliders = soliders,
	this.tanks = tanks,
	this.aviation = aviation,
	this.navy = navy
	const pravljenje = (numSol,numTanks,numAvi,numNav) => {
		soliders += numsSol
	}

}};

const [ruSol,ruTanks,ruAvi,ruNav] = [2000,500,400,300];
const [euSol,euTanks,euAvi,euNav] = [2000,400,300,200];


const Russia = new Army(ruSol,ruTanks,ruAvi,ruNav);
const Europa = new Army(euSol,euTanks,euAvi,euNav);


const attProbability = () => {
	return (Math.random() > 0.5)? "Russia.soliders" : "Europa.soliders"	
} 

const fight = (army1,army2) => {
	let [firstArmy,secondArmy] = [army1,army2]
		while(firstArmy > 0 && secondArmy > 0){
		let attacker = attProbability();
		(attacker == "Russia.soliders")?
		 secondArmy -= Math.ceil(dealDamage(firstArmy)) 
		 :firstArmy -= Math.ceil(dealDamage(secondArmy))
		 console.log(firstArmy,secondArmy)
		 return (fight(firstArmy,secondArmy))
	}
}
console.log(fight(Russia.soliders,Europa.soliders))
