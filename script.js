//Random number generator
let rand = Math.random() * 100;
rand = Math.floor(rand);

//Number check paragraph
let para = document.getElementById("checker");

//Check function - 3 possible outputs
function check(){
    let input = document.getElementById("guess").value;
    if (input == ""){
        alert("You have to guess a number first!");
    }else{
        input = parseInt(input, 10);
        if (isNaN(input)){
            alert("Input field must be a number!");
        }else{
            if (rand == input){
                para.innerHTML = "<i>correct!</i>";
            }else if (rand > input){
                para.innerHTML = "<i>lesser than the RGN</i>";
                input = document.getElementById("guess").value;
            }else{
                para.innerHTML = "<i>greater than the RGN</i>";
                input = document.getElementById("guess").value;
            }
        }
    }
}

//©2022 - All Rights Reserved