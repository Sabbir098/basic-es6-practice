// 1. let and const declaration
const mySunny = 'raamisa';
// we can't not re-assign the value of mySunny due to const 
// mySunny = 'laamisa'
let myHoney = 'laabiba';
myHoney = 'saabila';


// 2. template string
const myGarmi = 'jennie kim';
const description = `my name is saif and my garmi ${myGarmi} she is so pretty`;
// console.log(description);

const myCrush = {name: 'jennie kim', color: 'too much white', hairColor: 'black'};
const myDescription = `Hello do you want to know who is my crush, my crush is ${myCrush.name} and her color${myCrush.color}`;
// console.log(myDescription);

// 3. arrow function
// 3.1
const divide = num => num / 5;
const result = divide(50);
// console.log(result);
// 3.2
const sum = (n1, n2) => {
    const num1 = n1 + 2;
    const num2 = n2 + 2;
    const output = num1 * num2;
    return output;
}
// console.log(sum(10, 10));
// 3.3
const multiple = (nu1, nu2, nu3) => nu1 * nu2 * nu3;
// console.log(multiple(3, 3, 3));

// 4. map
const numbers = [3, 4, 5, 6, 7, 8, 9, ];
const total = numbers.map(num => num * 5);
// console.log(total);

// 5. filter
const numbers2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const getOdd = numbers2 => {
    const oddNum = numbers2.filter(number => number % 2 == 1);
    return oddNum;
}
const gettingOdd = getOdd(numbers2);
// console.log(gettingOdd);

// 6. find 
const products = [
    {name: 'iphone', price: 5000, color: 'golden', weight: 125},
    {name: 'xioami', price: 4000, color: 'black', weight: 179},
    {name: 'realmi', price: 3000, color: 'purple', weight: 155},
    {name: 'htc', price: 2000, color: 'silver', weight: 165}
]
const getproduct = products.find(product => product.price == 5000);
// console.log(getproduct);

// 7. summary of map, foreach, filter, find
//  map is a method which looping all elements of array and where do somthing and then return reslut and give a new array with result;
// forEach is a method as same as map just this not return a result;
// filter is a same as map just it's own have a condition if the conditon matched one or more then twice then retun result in a new array which matched from array;
// find is a same as filter but it's return a first element with object not a array which is match through condition.

// 8. object destructuring 
const book =  {name: 'power of habit', price: 199, page: 300, weight: 190};
const {name, price, page} = book;
// console.log(name, price, page);

// 9. array destructuring 
const [one, two, threee] = ['kalam', 'salam', 'saif'];
const three = threee;
// console.log(three);

// 10. function with default value
function addition (first, second, third=7){
    const result2 = first + second + third;
    return result2; 
} 
// console.log(addition(5,5,5))

// 11. nested object and optional chaining
const development =  {
    name: 'saif Muhammad',
    skinColor: 'shamla',
    skill: {
        skillName: 'web developer',
        experiense: '2 years',
    },
    height: '5.5',
    weight: 55,
    education:['psc', 'jsc', 'ssc', 'hsc', 'iba']
};

// console.log(development.name);
// console.log(development.skill.skillName)
// console.log(development.education[3])
// console.log(development.miskill?.education[3])


// 12 javascript class
class teamMember{
    name;
    designation = 'web developer'
    address = 'dubai'
    constructor(name, designation, address){
        this.name = name;
        this.designation = designation;
        this.address = address
    }
}




class support extends teamMember{
   
    constructor(name, designation, address){
        super(name, designation, address)
        this.name = name;
        this.designation = designation;
        this.address = address;
    }
    suppotSession(){
        console.log(this.name, 'star the supportSession');
    }
}
const saif = new support('saif muhammad', 'react developer', 'mumbai');
console.log(saif);
const ahmed = new support('ahmed reza', 'js developer', 'bombay');
console.log(ahmed);
