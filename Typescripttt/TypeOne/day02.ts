interface UserObj{
    name:string,
    age:number,
    address:{
        city:string,
        state:string,
    }
}

const user:UserObj={
    name:"Suman Sharma",
    age:22,
    address:{
        city:"Kathmandu",
        state:"New Baneswor",
    }
}

console.log(user)