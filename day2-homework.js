const car = {
    make: 'Ford',
    model: 'Focus ST',
    year: 2017,
    color: 'Black',
}

function carMakeAndModel(carObject){
    console.log('make:', carObject.make)
    console.log('model:', carObject.model);
}

carMakeAndModel(car);

//---------------------------------------------//

let fruits = [
    "strawberry",
    "kiwi",
    "banana",
    "raspberry",
    "dragon fruit"
]

//function getFruit(index){
    //return fruits[index];
//}

//console.log(getFruit(1))

//------------------------------------------//

function getSecondElement(array){
    console.log(array[1])
}
getSecondElement(fruits)
