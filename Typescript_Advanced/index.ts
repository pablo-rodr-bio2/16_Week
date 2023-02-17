// Generic Types

const printData = <Type>(data: Type): Type => {
    console.log('data: ')
    console.log(data)
    return data
}
console.log(' Generic Types')
const data1 = printData(2)
const data2 = printData('Something')
const data3 = printData({key1: 'key1', key2: 'key2'})

//////////////////////////////////////////////////////////////////////////

// Generic Constrains

const uniteObjects = <T extends object, U extends object>(obj1: T, obj2: U) => {
    return {
        ...obj1, ...obj2
    }
}

console.log('Generic Constrains')
//works
console.log(uniteObjects({name: 'Pablo'}, { body: {height: 1.86, age: 36, hair: 'grey'}}))
// doesn't work
// console.log(uniteObjects({name: 'Pablo'}, 'somedata'))


//////////////////////////////////////////////////////////////////////////

// Generic Classes

class NewObjectType<T,U>{
    key: T | undefined
    value: U | undefined

    setKeyValue(key: T, value: U){
        this.key = key
        this.value = value
    }

    logNewObject() {
        console.log('{ key: ', this.key, ', value: ', this.value, '}')
    }
}

let firstObject = new NewObjectType<string, {}>()
firstObject.setKeyValue('key1', {value1: 'value1', value2: 'value2'})

console.log('Generic Classes')
firstObject.logNewObject()

//////////////////////////////////////////////////////////////////////////

// keyof

type User = {
    name: string
    age: number
    mail: string
}

const printUserProperty = (user: User, property: keyof User) => {
    console.log(`${user.name} has also ${property}: ${user[property]} `)
}

console.log('keyof')
printUserProperty({name: 'Pablo', age: 36, mail: 'something@ex.com' }, 'age')


//////////////////////////////////////////////////////////////////////////

// typeof

const sumNumber = (a: number, b: number): number => {
    return a + b
}

const result = sumNumber(2, 3)
type NewType = typeof result
let newObject: NewType = result

console.log('typeof')
console.log(typeof newObject)


//////////////////////////////////////////////////////////////////////////

// Indexed Access Types

const SomeObject = [{name: 'Pablo', body: {height: 1.86, age: 36, hair: 'grey'}}]

type Human = typeof SomeObject[number]

type humanName = "name"
type Name = Human[humanName]


//////////////////////////////////////////////////////////////////////////

// Conditional Types


interface Mammal  {
    hasHotBlood(): void
}

interface Reptile  {
    hasColdBlood(): void
}

type TypeOfBlood<Type> = Type extends {hasHotBlood(): void} ? Mammal : Reptile

type AnimalHasHotBlood = TypeOfBlood<Mammal>

type AnimalHasColdBlood = TypeOfBlood<number>

//////////////////////////////////////////////////////////////////////////

// Mapped Types

type OneInputArgs = {
    name: string
    value: number
    onChange: (value:number) => void
}

type ArgsAsStrings<Type> = {
    [Property in keyof Type]: string
}

type OneInputArgsAsStrings = ArgsAsStrings<OneInputArgs>

//////////////////////////////////////////////////////////////////////////


// Template Literal Types

type World = 'world'

type Greeting = `Hello ${World}`

type Lang = 'en' | 'esp' | 'pt' 

type LanGreetings = `${Lang}_${Greeting}`

//////////////////////////////////////////////////////////////////////////

// const assertions

const Languages = {
    en : 'english',
    pt: 'portuguese',
    esp: 'spanish'
} as const

// Type Guard and predicates

type Product = {
    name: string
    price: number
}

type Service = {
    suscription: number
    mode: string
}

type SellingThing = Product | Service

const isProduct = (item: SellingThing): item is Product => typeof (item as Product).name !== 'undefined'

const isService = (item: SellingThing): item is Service => typeof (item as Service).suscription !== 'undefined'

const renderSellingThing = (item: SellingThing) => {
    if(isProduct(item)) {
        console.log(`${item.name} + ${item.price}`)
        return true
    }
    
    console.log(`${item.suscription} + ${item.mode}`)
    return false

}