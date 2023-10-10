console.log('hola')
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];
const [, ana] = empleados
console.log(ana)
const [luis] = empleados
const { email } = luis
console.log(email)

const pokemon = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ]
}

const { name: nombre, type, moves, ...rest } = pokemon;
console.log(nombre)
console.log(type)
const [, moveTackle] = moves
console.log(moveTackle);

const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
}

const pokemon2 = { ...pokemon, ...pikachu }
console.log(pokemon2)

const sumEveryOther = (...numbers) => {
    let result = numbers.reduce((a, b) => a + b);
    console.log(result)
}
sumEveryOther(6, 8, 2, 3, 1); //20
sumEveryOther(11, 3, 12); //26

const addOnlyNums = (...arr) => {
    const nums = arr.filter((nums) => typeof nums === "number").reduce((a, b) => a + b)
    console.log(nums)
}
addOnlyNums(1, 'perro', 2, 4); //7

const countTheArgs = (...args) => {
    console.log(args.length);
};
countTheArgs('gato', 'perro'); //2
countTheArgs('gato', 'perro', 'pollo', 'oso'); //4

const conbineTwoArrays = (a, b) => console.log(c = [...a, ...b])
conbineTwoArrays(['gato', 'perro'], ['gato', 'perro', 'pollo', 'oso']);

const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
};
const { today: maximaHoy, tomorrow: maximaManana, yesterday: maximaAyer } = HIGH_TEMPERATURES;
console.log(maximaHoy)
console.log(maximaManana)

const onlyUniques = (...array) => {
    let array2 = []
    array.forEach(e => {
        if (!array2.includes(e)) {
            array2.push(e)
        }
    })
    console.log(array2)
}

onlyUniques('gato', 'pollo', 'cerdo', 'cerdo');
//['gato', 'pollo', 'cerdo']
onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]

const combineAllArrays = (...arr) => {
    const arr3 = arr.reduce((acc, curr) => [...acc, ...curr])
    console.log(arr3);
}

combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1])
// [3, 6, 7, 8, 2, 7, 3, 1]
combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1]);
// [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]

const sumAndSquare = (...arr) => {
    const arr3 = arr.reduce((acc, curr) => [...acc, ...curr]).map(e => e ** 2).reduce((a, b) => a + b)
    console.log(arr3);
}
sumAndSquare([3, 6, 7, 8], [2, 7, 3, 1])
