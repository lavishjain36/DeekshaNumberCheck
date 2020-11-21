// create a random number with math library functions
var y= Math.floor(Math.random()*100+1);



//print the number of times it took to guess that number
var guess=1;


document.getElementById("submitguess").onclick=function(){

//enter a number from user input
var x= document.getElementById("guessField").value;


//Logic or algorithm

if(x==y)
{
    alert("Congratulations!! You got the number successfully in " + guess + "Times");
}

else if(x>y){

guess++;
    alert("Sorry!! Try a smaller number");
}

else{
    guess++;
alert("Sorry!! Try a Greater number");
}

}

