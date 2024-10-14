/*console.log("Begin")
let toid = setTimeout(()=>console.log("Hello Late"),1000);


let timer = setInterval((x)=>console.log(x+1),1000,10)
setTimeout(()=>clearInterval(timer),3000)
console.log(timer)

console.log("End")*/


/*let promise =new Promise(function(resolve,reject){
    setTimeout(()=>resolve(5),1000)
}).then((res)=>{
    console.log(res)
    return res-1
}).then(res=> {
    console.log(res)
    return res-1}).then(()=>console.log("ENd"))

promise.then((res)=>console.log(res))*/

/*console.log('start');
async function foo() {
return ' done ! ';
}
async function bar() {
console.log(' insidebar - start');
let result = await foo();
console.log(result);
console.log('insidebar - end');
}
bar();
console.log('end'); */


/*function loginUser(username, password) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    const isValid = username === "user" && password === "password";
    if (isValid) {
    resolve({ token: "12345", message: "Login successful!" });
    } else {
    reject({ error: "Invalid credentials", statusCode: 401 });
    }
    }, 1000);
    });
   }
   function fetchUserProfile(token) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (token === "12345") {
    resolve({ name: "John Doe", email: "john@example.com" });
    } else {
    reject({ error: "Invalid token", statusCode: 403 });
    }
    }, 1000);
    });
   }


async function translate() {
        try{
            console.log("First message")
            let res = await loginUser("user",'password')
            console.log(res.message)
            let profile =  await fetchUserProfile(res.token)
            console.log(`Profile Name - ${profile.name} , Email - ${profile.email}`)

        }catch(e){
            console.log("error ${e?.error}");
            
        }


} 
translate()*/

/*const isPrime = ((n)=>{
return new Promise((resolve,reject)=>{
        for(let i=2 , s=Math.sqrt(n); i<=s;i++){
        if(n%2 == 1){
            resolve("is Prime")
        }
        else{
            reject("NOOOOO")
        }}
    
})

}
)

isPrime(11).then(console.log)
    .catch(console.error)


    async function result(n){
        try{
            await isPrime(n) 
        }catch(e){
            console.log("Noooo Prime")
        }finally{
            console.log("   byyyyye")
        }
    }
    
 result(12)   */
 let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function() {
        let self=this;
    this.students.forEach(function(student) {
    console.log(self.title + ": " + student);
    });
    }
   };
   group.showList();