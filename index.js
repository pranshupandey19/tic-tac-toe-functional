/// list down all the winning combinations

let winningCombinations = [
  [1,2,3], // vertical
  [4,5,6], // vertical
  [7,8,9], //vertical
  [1,4,7], //horizontal
  [2,5,8], //horizontal
  [3,6,9], //horizontal
  [1,5,9],  // digonal
  [3,5,7]   //digonal
] 

// accessing all boxes

let boxelement = document.querySelectorAll(".box")
// console.log("boxelement: ", boxelement);


// providing event listener to all the boxes

for(elem of boxelement){
  elem.addEventListener("click" , handleClick);
}

let click = 0;
let isWon = false;
let xAttempts = [];
let oAttempts =[];

function handleClick(event){
  let id = event.target.id;
  let ptag = document.createElement("p");
  ptag.style.color = '#FAB201'
  boxelement[id-1].append(ptag)
  if(click%2==0){
    ptag.textContent = "X"
    click++;
    xAttempts.push(parseInt(id));
    result(xAttempts , "X")

  }
  else{
    ptag.textContent = "O"
    click++;
    oAttempts.push(parseInt(id));
    result(oAttempts , "O")

  }
  if(click == 9 && isWon == false){
    resultBox.style.visibility = "visible";
    messageBox.textContent = " It's a Draw"
   
  }
}

let resultBox = document.getElementById("result")
let messageBox = document.getElementById("message")


  function result(playerArray , player){
    console.log(player , playerArray);
    for(let i=0;i<winningCombinations.length;i++){
      // console.log(i);
      let check = true;
      for(let j=0;j<winningCombinations[i].length;j++){
        if(playerArray.includes(winningCombinations[i][j])==false){
          check =false;
          break;
        }
      }

      if(check == true){
        isWon = true;
        resultBox.style.visibility = "visible";
        messageBox.textContent = player + " Won the match"


      }




    }

  }

  document.getElementById("button").addEventListener("click", ()=>{
    location.reload();
  })
