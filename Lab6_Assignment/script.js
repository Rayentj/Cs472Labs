class Meditation{
    constructor(second){
        this.second=second //initialize meditation time
    }
    start(){
        console.log("Start Meditation")
        this.countdown();
    }

    countdown(){
        if(this.second>0){
            console.log(this.second)
            this.second--
            setTimeout(() => {
                this.countdown()
            }, 1000);
        }
        else{
            console.log("Rayen Tajouri")
        }
    }
}




const morning_meditation = new Meditation(5)
morning_meditation.start();
//console.log(`Start meditation`);

//*****************************Promise*************************** */
/*const isPrime = (n) => {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++)
    if (n % i === 0) return false;
    return n > 1;
   };
*/

const isPrime = (n) => {
    return new Promise((resolve, reject) => {
      if (n <= 1) {
        reject({ prime: false });
        return;
      }
  
      for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
        if (n % i === 0) {
          reject({ prime: false });
          return;
        }
      }
  
      resolve({ prime: true });
    });
  };

console.log('start');
isPrime(10)
 .then(console.log)
 .catch(console.error);
console.log('end');

//**********************Async/await************************ */

const testIsprime = async(n)=>{
    console.log('start')
    try{
        const result = await isPrime(n)
        console.log(result)
    }
    catch(error){
        console.log(error)
    }
    console.log('end')
}

testIsprime(7)
testIsprime(10)


//****************fetching data********************** */
(async () => {
    try {
      const response = await fetch('https://dummyjson.com/recipes');
      const data = await response.json();
  
      // Extracting and printing recipe names
      data.recipes.forEach(recipe => {
        console.log(recipe.name);
      });
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  })();
  