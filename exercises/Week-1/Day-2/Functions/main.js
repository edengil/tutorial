


const person = {
    name: "Julius",
    speak: function(food) {
      console.log(`Et tu, Brutus? ${food}`)
    }
  }

  console.log(person.name) //you know what this will do

person.speak("men") //and this? Try it out!


const isEven = function (num){
    return (num % 2) == 0
}

const isOdds = function (arr){
    for(let i of arr){
        if(!isEven){
            console.log(i)
        }
    }
}

const checkExists = function (arr, num){

    for (let i of arr){
        if(i == num) return true
    }
    return false
}




// const posts = [
//     {id: 1, text: "Love this product"},
//     {id: 2, text: "This is the worst. DON'T BUY!"},
//     {id: 3, text: "So glad I found this. Bought four already!"}
//   ]

const calculator = {
    add :function(x,y) {
       return x+y
      },
    subtract: function(x,y) {
       return x-y
    }
}


