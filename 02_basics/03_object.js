// const tinderUser = new Object()
const tinderUser = {}

// console.log(tinderUser);


const regular = {
    email: "yashsankhat21@gmail.com",
    fullname: {
        userfullname: {
            first: "yash",
            lastname: "sankhat",
        }
    }
}

// console.log(Object.values(regular.fullname))

const Obj1 = { 1: "a", 2: "b" }
const Obj2 = { 3: "c", 4: "d" }

const obj3 = { ...Obj1, ...Obj2 }
console.log(obj3);

const users = [
    {
        id: 1,
        email: "y@gmail.com"
    },
    {
        id: 1,
        email: "y@gmail.com"
    },
    {
        id: 1,
        email: "y@gmail.com"
    },
    {
        id: 1,
        email: "y@gmail.com"
    },

]
console.log(tinderUser);