// Code your solution in this file!
// Code your solution in this file!
let scuberDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function(parm1){
    return  parm1.slice(0,2);
};



returnFirstTwoDrivers(scuberDrivers)

const returnLastTwoDrivers = function(parm2){
    return  parm2.slice(2);
};
returnLastTwoDrivers(scuberDrivers)

let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];


let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];


function createFareMultiplier(rides) {
    return function mmultiplier(fare){ return rides * fare;}
}

const fareMultiplier = createFareMultiplier(rides);

function fareDoubler(fare2) {
    return (fare2 *2)}

fareDoubler(fareMultiplier);

function fareTripler(fare3) {
    return (fare3 *3)}

fareTripler(fareMultiplier);


//  function selectDifferentDrivers(arrayOfDrivers = drivers, func) {
//     if (func = returnFirstTwoDrivers()) {return returnFirstTwoDrivers; }
//     else if (func = returnLastTwoDrivers()) {return  returnLastTwoDrivers; }
//     else {}
   
//   }
   
function selectDifferentDrivers(arrayOfDrivers, func) 
{ return func(arrayOfDrivers);}  // was returning "return func" in error
 //function selectDifferentDrivers(arrayOfDrivers2, func) { return func;}
//selectDifferentDrivers(drivers, returnFirstTwoDrivers);
//selectDifferentDrivers(drivers, returnLastTwoDrivers);



/*let scuberDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = (drivers) =>){
    return  drivers.slice(0,2); }
console.log(reternFirstTwoDrivers(drivers))

let scuberDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnLastTwoDrivers = (drivers) =>){
    return  drivers.slice(-2); }
console.log(returnLastTwoDrivers(drivers))


const SelectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];



function createFareMultiplier(fare) {
    return(num) => {
        return num *fare
    }
}
console.log(createFareMultiplier(10.0)(4)) 
or 
const fareMultiplier = creatFareMulitpier(10)
console.log(fare10Multiplier(4))


const fareDoubler = createFareMultiplier(2)
console.log(fareDoubler(10,0))

function selectDiffrerntDrivers(drivers, func){
    return func (drivers)
console.log(selectDiffrerntDrivers(drivers, returnFirstTwoDrivers))
console.log(selectDiffrerntDrivers(drivers, returnLastTwoDrivers))
}






*/
