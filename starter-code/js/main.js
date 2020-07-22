
$('#screen__landing').hide();
$('#screen__withdrawal').hide();
$('#screen__deposit').hide();
$('#screen__balance').hide();
let totalAmt = 500;
let balaState;
let newBalaTT = document.querySelector(".amount");
let newTotal;
let finalResult = 0;
newBalaTT.textContent = totalAmt;

function puttingPin(){
    
    correctPin = "1234"; 
    let pin = []
    let enteredPin = [];
    $('.pinBtn').click(function(){
       pin.push($('.butt').val($('.butt').val()+$(this).val()));

       $('.keysY').click(function(){
        pin = [];
        document.querySelector(".butt").value = "";   
    });

       if(pin.length == 4){
           
           enteredPin.push(document.querySelector(".butt").value);          
           if(enteredPin.includes(correctPin))
           {
               $('.keysG').click(function(){
                
                $('.bigPic').hide();
                $('#screen__landing').show();
                
               });
                
           }else if(!enteredPin.includes(correctPin)){
            $('.keysG').click(function(){
                let div = document.querySelector(".inContainer");
                let p = document.createElement("p");
                p.setAttribute("class", "steal");
                p.textContent = "Theif! Theif! Theif!";
                div.appendChild(p);
               });
           }
         }
    });
}

puttingPin();


function displayHome(){

    let container = document.querySelector(".time");
    let newP = document.createElement("p");
    let newD = document.createElement("p");
    newP.setAttribute("class", "timer");
    newD.setAttribute("class", "dater");
    
    let date = new Date();
    let months = ["January", "February", "March", "April",
     "May", "June", "July", "August", 
     "September", "October", "November", "December"];
     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let hour = date.getHours();
    let min = date.getMinutes();
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear()
    let today = date.getDate();
    var ampm = hour >= 12 ? ' PM' : ' AM';
    if(hour < 10){
        hour = "0"+date.getHours();
    }
    if(min < 10){
        min = "0"+date.getMinutes();
    }
    let sPage = document.querySelector(".timeContainer");
    let greeting = document.createElement("p");
    let history = document.createElement("p");
    greeting.setAttribute("class", "greet");
    history.setAttribute("class", "history");
    if (hour < 12){
        greeting.textContent = "Good morning Mohammad, How are you!";

    }
    else if(hour >= 12){
        greeting.textContent = "Good evening Mohammad, How are you!";
    }

    
    newP.textContent = hour + ":" + min + ampm;
    history.textContent = days[day] + "," + " " + today + " " + months[month] + " " + year;
   
    sPage.appendChild(greeting);
    container.appendChild(newP)
    container.appendChild(history);

    // hide the current page and show the clicked function:
    $('.withD').click(function(){
        $('#screen__landing').hide();
        $('#screen__withdrawal').show();
    });

    // hide current page and show clicked function
    $('.deptA').click(function(){
        $('#screen__landing').hide();
        $('#screen__deposit').show();
    });

    // hide current page and show clicked function
    $('.bala').click(function(){
        $('#screen__landing').hide();
        $('#screen__balance').show();
    });

   


    
}
displayHome();

function withdrawMoney(){
    let amount = []
   

    let enteredPAmont;
    $('.pinBtnWD').click(function(){
       amount.push($('.widthAmot').val($('.widthAmot').val()+$(this).val()));
       enteredPAmont = document.querySelector(".widthAmot").value;
     });

     $('.enter').click(function(){
        if(enteredPAmont <= totalAmt)
        {
            let newVar = document.createElement("h3");
            
            let takeOn = document.querySelector(".bigText");
            newVar.setAttribute("class", "newAmt");
          
            
            newVar.textContent = "SAR " + enteredPAmont;
            takeOn.appendChild(newVar);
            let newBala = document.querySelector(".amount");
            let finalResult = document.querySelector(".yellowBox");
            
            newTotal = totalAmt - enteredPAmont;
            
            finalResult.textContent = newTotal;
            newBala.textContent = newTotal;
            finalResult.style.color = "white";
            
            $('.getBack').click(function(){
                $('#screen__landing').show();
                $('#screen__withdrawal').hide();
               
            });

            
        }else{
            let newVar = document.createElement("h3");
            let takeOn = document.querySelector(".bigText");
            newVar.setAttribute("class", "newAmt");
            newVar.textContent = "SAR " + enteredPAmont;
            takeOn.appendChild(newVar);

            let newVarA = document.createElement("p");
            newVarA.setAttribute("class", "newAmt");
            newVarA.textContent = "You don't have money, what are you doing!!!";
            newVarA.style.color = "red";
            newVarA.style.textAlign = "center";
            newVarA.style.marginRight = " 125px";
            takeOn.appendChild(newVarA);

            $('.getBack').click(function(){
                $('#screen__landing').show();
                $('#screen__withdrawal').hide();
               
            });




        }
    });
}
withdrawMoney();

function depositMoney()
{
    let amount = []
   

    let enteredPAmontD;
    $('.pinBtnDD').click(function(){
       amount.push($('.depAmot').val($('.depAmot').val()+$(this).val()));
       enteredPAmontD = document.querySelector(".depAmot").value;

     });

     $('.enterD').click(function(){
        let newBalaDD = document.querySelector(".amount");
        let final = document.querySelector(".yellowBox");
        
         
         let newVarD = document.createElement("h3");    
         let takeOne = document.querySelector(".bigTextDD");
         newVarD.setAttribute("class", "newAmt");
         newVarD.textContent = "SAR " + enteredPAmontD;
         takeOne.appendChild(newVarD);
         balaState = newTotal + parseInt(enteredPAmontD);
         finalResult = balaState;
         newBalaDD.textContent = newTotal + parseInt(enteredPAmontD);
         final.textContent = newTotal + parseInt(enteredPAmontD);
         newTotal = balaState;


        $('.getBackDD').click(function(){
            $('#screen__landing').show();
            $('#screen__deposit').hide();
           
        });
        

        
    });

}
depositMoney();

function showBalance()
{
    $('.getBackBB').click(function(){
        $('#screen__landing').show();
        $('#screen__balance').hide();
       
    });

    let container = document.querySelector(".timebb");
    let newP = document.createElement("p");
    let newD = document.createElement("p");
    newP.setAttribute("class", "timerbb");
    newD.setAttribute("class", "daterbb");
    
    let date = new Date();
    let months = ["January", "February", "March", "April",
     "May", "June", "July", "August", 
     "September", "October", "November", "December"];
     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let hour = date.getHours();
    let min = date.getMinutes();
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear()
    let today = date.getDate();
    var ampm = hour >= 12 ? ' PM' : ' AM';
    if(hour < 10){
        hour = "0"+date.getHours();
    }
    if(min < 10){
        min = "0"+date.getMinutes();
    }
    let sPage = document.querySelector(".timeContainerbb");
    let greeting = document.createElement("p");
    let history = document.createElement("p");
    greeting.setAttribute("class", "greet");
    history.setAttribute("class", "historybb");
    if (hour < 12){
        greeting.textContent = "Good morning Mohammad, How are you!";

    }
    else if(hour >= 12){
        greeting.textContent = "Good evening Mohammad, How are you!";
    }

    
    newP.textContent = hour + ":" + min + ampm;
    history.textContent = days[day] + "," + " " + today + " " + months[month] + " " + year;
   
    sPage.appendChild(greeting);
    container.appendChild(newP)
    container.appendChild(history);

    let final = document.querySelector(".yellowBox");
    final.textContent = totalAmt;
    final.style.color = "white";
    

   
    
   
}
showBalance()
