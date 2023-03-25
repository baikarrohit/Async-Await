//  ********* using .then  hell *********
// 
// console.log("Person 1: Shows Ticket")
// console.log("Person 2: Shows Ticket")
// 
// const promiseWifeBringingTick = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("ticket");
//     },3000);
// })
// const getPopcorn = promiseWifeBringingTick.then((t)=>{
//     console.log("wife: i have tickets");
//     console.log("Husband: we should go in");
//     console.log("wife: No, I am hungry")
//     return new Promise ((resolve,reject) => resolve(`${t} popcorn`));
// });
// 
// const getButter = getPopcorn.then((t)=> {
//     console.log("Husband: i got some popcorn");
//     console.log("husband: we should go in ")
//     console.log("wife: i need some butter on my popcorn");
//     return new Promise((resolve,reject)=> resolve(`${t} butter`))
// });
// 
// getButter.then((t)=> console.log(t));
// console.log("Person 4: Shows Ticket")
// console.log("Person 5: Shows Ticket")



// ********* using async await *********

// console.log("Person 1: Shows Ticket")
// console.log("Person 2: Shows Ticket")
// 
// const preMovie = async () => {
//     const promiseWifeBringingTick = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("ticket");
//         },3000);
//     });
// 
// 
//     const getPopcorn = new Promise ((resolve,reject) => resolve(`popcorn`));
//     const addButter = new Promise ((resolve,reject) => resolve(`butter`));
//     const getColdDrinks = new Promise ((resolve,reject) => resolve(`colddrink`));
// 
//     let ticket = await promiseWifeBringingTick;
// 
//         console.log(`wife: i have ${ticket}`);
//         console.log("Husband: we should go in");
//         console.log("wife: No, I am hungry")
// 
//     let popcorn = await getPopcorn;
// 
//     console.log(`Husband: i got some ${popcorn}`);
//     console.log("husband: we should go in ")
//     console.log("wife: i need some butter on my popcorn");
// 
//     let butter = await addButter;
// 
//     console.log(`husband: i got some ${butter} on popcorn`);
//     console.log(`husband: Anything else you want?`);
//     console.log(`wife: Yes, i want cold drinks`)
// 
//     let colddrink = await getColdDrinks;
// 
//     console.log(`husband: i got ${colddrink} for you`)
//     console.log(`wife: Thanks, lets go we are getting late`)
// 
//     return ticket;
// }
// 
// preMovie().then((m) => console.log(`person 3: shows ${m}`))
// 
// console.log("Person 4: Shows Ticket")
// console.log("Person 5: Shows Ticket")

console.log("Person 1: Shows Tickets");
console.log("Person 2: Shows Tickets");

const preMovie = async () => {
    const promiseWifeBringingTick = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("ticket");
        },3000);
    });


    const getPopcorn = new Promise ((resolve,reject) => resolve(`popcorn`));
    const getCandy = new Promise ((resolve,reject) => resolve(`candy`));
    const getCoke = new Promise ((resolve,reject) => resolve(`coke`));

    let ticket = await promiseWifeBringingTick;

    let [popcorn,candy,coke] = await Promise.all([getPopcorn,getCandy,getCoke])
    console.log(`${popcorn} ${candy} ${coke}`);

    return ticket;
}
preMovie().then((m) => console.log(`person 3: shows ${m}`))
console.log("Person 4: Shows Tickets");
console.log("Person 5: Shows Tickets");