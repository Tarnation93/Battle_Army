const Division = require('./units/divisions.js')
const Army = require('./units/Army.js')
const toArms = require('./toArms.js')
const searchTarget = require('./searchTarget.js')


const divisionGenerator = () => {
return (Math.ceil(Math.random()*4)+1)
}

let Europe = new Army("Europe")
let b = new Division()
Europe.deployDivision(divisionGenerator())
let Russia = new Army('Russia')
Russia.deployDivisions(divisionGenerator());
console.log(Europe)
console.log(Russia)

let [[attArmy. attDivison] , [vicArmy,vicDivision]] = searchTarget (Europe,Russia)
toArms(Europe,Russia)