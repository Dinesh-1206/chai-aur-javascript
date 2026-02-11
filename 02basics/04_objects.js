const tinderUser = {}

tinderUser.id="123abc"
tinderUser.name="Sam"
tinderUser.isLoggedin=false

//console.log(tinderUser);


const regularUsername={
    email:"sam@gmail.com",
    fullName:{
        userFullName:{
            firstName:"dinesh",
            lastName:"chandra"
        }
    }
}
//console.log(regularUsername.fullName.userFullName.lastName);

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"a" , 4:"b"}
const obj4 = {5:"a" , 6:"b"}

// const obj3={obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3={...obj1,...obj2,...obj4}//spread operator

console.log(obj3);
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedin'));


//object destructuring

const course={
    courseName:"js in hindi",
    courseInstructor:"dinesh",
    coursePrice:999,
}

const {courseInstructor:Instructor}=course  //name short kr diya hai
console.log(Instructor);