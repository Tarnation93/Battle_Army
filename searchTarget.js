

const attProbability = () =>{
	return (Math.random() > 0.5)? "firstArmy" :"secondArmy"

}
const attProbArmy =(vojska1,vojska2) =>{
let attacker = Math.ceil(Math.random() * vojska1)-1
let victim = Math.ceil(Math.random() * vojska2) -1
return [attacker,victim]
}

const searchTarget = (armyOne,armyTwo) =>{
	let [attArmy,vicArmy] = (attProbability() === "firstArmy")? [armyOne,armyTwo] :[armyTwo,armyOne]
	let [attDivision,vicDivision] = attProbArmy(attArmy.divisions.length,vicArmy.divisions.length)
	return[[attArmy,attDivision],[vicArmy,vicDivision]]
}
module.exports = searchTarget
