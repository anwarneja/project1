

let targetDate=localStorage.getItem('targetDate');
if(targetDate){
    targetDate=new Date(targetDate).getTime();
}else{

// Target date for the countdown
 targetDate = new Date("2024-03-12 01:0:00 ").getTime();
}
//retrieve the last saved title from local storage
let lastTitle=localStorage.getItem('lastTitle');
if(lastTitle){
    document.querySelector(".head h2").innerText=lastTitle;
}



// Update the countdown every second

const countdownInterval = setInterval(updateCountdown, 1000);




function updateCountdown() {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the time remaining
    const timeRemaining = targetDate - now;

    //aytomatically 
    //changebdocument title
      //  const newTitle=document.getElementById("titleInput").value;
        //   if(newTitle){
        //document.querySelector(".head h2").innerText=newTitle;
    // Check if the countdown is finished
        //   }
    if (timeRemaining <= 0 ) {
        clearInterval(countdownInterval);
        document.getElementById("days").innerHTML="00";
        document.getElementById("hours").innerHTML="00";
        document.getElementById("minutes").innerHTML="00";
        document.getElementById("seconds").innerHTML="00";
        document.getElementById("countdown-finished-message").style.display="block";

        
        //disable the input and bitton

        //document.getElementById("targetDateTime").disabled=true;
        //document.getElementById("addButton").disabled=true;

        //enable
        document.getElementById("targetDateTime").disabled=false;
        document.getElementById("addButton").disabled=false;
    }

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
}
function setCustomTarget(){
    const customDateTime=document.getElementById("targetDateTime").value;
 
    localStorage.setItem('targetDate',new Date(customDateTime).toISOString());

    targetDate=new Date(customDateTime).getTime();
 
    updateCountdown();

      //changebdocument title
      const newTitle=document.getElementById("titleInput").value;
     if(newTitle){
   document.querySelector(".head h2").innerText=newTitle;
   localStorage.setItem('lastTitle',newTitle);//save the new title in localstorage


// Check if the countdown is finished
      }
  
     if(timeRemaining <=0 ){
        clearInterval(countdownInterval);
        document.getElementById("days").innerHTML="00";
        document.getElementById("hours").innerHTML="00"
        document.getElementById("minutes").innerHTML="00"
        document.getElementById("seconds").innerHTML="00"  
        document.getElementById("countdown-finished-message").style.display="block";
    
//setTimeout(()=>{
    location.reload();
    }//,5000);

     
//}
}
//updating counter5
 function addTitle(){
    //get the value input field
    const titleInput=document.getElementById("titleInput");
    const title=titleInput.value;
    //check if the input is not empty
    if(titleInput.trim() !== ""){
        //if the input value isnot empty,create a new list item and add it to the title list
        const titleList=document.getElementById("titleList");
        const listItem=document.createElement("li");
        listItem.textContent=title;
        titleList.appendChild(newTitleItem);

        titleInput.value="";
    }
 }
//function to reset the list of titles
function resetTitles(){
    //clear the inner html of the title list
   const titleList= document.getElementById("titleList");
   titleList.innerHTML="";
   
}
//to save the list of titles to localstorage
function saveTitles(){
    //get the inner html of the titlelist
    const titles=document.getElementById("titleList").innerHTML;
    //save the list of titles to l.s
    localStorage.setItem("savedTitles,titles");
}
