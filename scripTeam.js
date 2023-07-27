{
  "use strict";



document.getElementById("person2").style.display = "none"
document.getElementById("person3").style.display = "none"
document.getElementById("person4").style.display = "none"
document.getElementById("person5").style.display = "none"
document.getElementById("person6").style.display = "none"
document.getElementById("person7").style.display = "none"
document.getElementById("person8").style.display = "none"
document.getElementById("person9").style.display = "none"


  
function button_1() {
  document.getElementById("person2").style.display = "none"
  document.getElementById("person3").style.display = "none"
  document.getElementById("person4").style.display = "none"
  document.getElementById("person5").style.display = "none"
  document.getElementById("person6").style.display = "none"
  document.getElementById("person7").style.display = "none"
  document.getElementById("person8").style.display = "none"
  document.getElementById("person9").style.display = "none"

  document.getElementById("person1").style.display = "block"
  
  
  
  
}
function button_2() {
  document.getElementById("person1").style.display = "none"
  document.getElementById("person3").style.display = "none"
  document.getElementById("person4").style.display = "none"
  document.getElementById("person5").style.display = "none"
  document.getElementById("person6").style.display = "none"
  document.getElementById("person7").style.display = "none"
  document.getElementById("person8").style.display = "none"
  document.getElementById("person9").style.display = "none"

  
    document.getElementById("person2").style.display = "block"
  
}


function button_3() {
  document.getElementById("person1").style.display = "none"
  document.getElementById("person2").style.display = "none"
  document.getElementById("person4").style.display = "none"
  document.getElementById("person5").style.display = "none"
  document.getElementById("person6").style.display = "none"
  document.getElementById("person7").style.display = "none"
  document.getElementById("person8").style.display = "none"
  document.getElementById("person9").style.display = "none"

  
  
  document.getElementById("person3").style.display = "block"
  
}

function button_4() {
  document.getElementById("person1").style.display = "none"
  document.getElementById("person2").style.display = "none"
  document.getElementById("person3").style.display = "none"
  document.getElementById("person5").style.display = "none"
  document.getElementById("person6").style.display = "none"
  document.getElementById("person7").style.display = "none"
  document.getElementById("person8").style.display = "none"
  document.getElementById("person9").style.display = "none"

  
  
  document.getElementById("person4").style.display = "block"
  
}

function button_5() {
  document.getElementById("person1").style.display = "none"
  document.getElementById("person2").style.display = "none"
  document.getElementById("person3").style.display = "none"
  document.getElementById("person4").style.display = "none"
  document.getElementById("person6").style.display = "none"
  document.getElementById("person7").style.display = "none"
  document.getElementById("person8").style.display = "none"
  document.getElementById("person9").style.display = "none"

  
  
  document.getElementById("person5").style.display = "block"
  
}


function button_6() {
  document.getElementById("person1").style.display = "none"
  document.getElementById("person2").style.display = "none"
  document.getElementById("person3").style.display = "none"
  document.getElementById("person4").style.display = "none"
  document.getElementById("person5").style.display = "none"
  document.getElementById("person7").style.display = "none"
  document.getElementById("person8").style.display = "none"
  document.getElementById("person9").style.display = "none"

  

  document.getElementById("person6").style.display = "block"
  
}
function button_7() {
  document.getElementById("person1").style.display = "none"
  document.getElementById("person2").style.display = "none"
  document.getElementById("person3").style.display = "none"
  document.getElementById("person4").style.display = "none"
  document.getElementById("person5").style.display = "none"
  document.getElementById("person6").style.display = "none"
  document.getElementById("person8").style.display = "none"
  document.getElementById("person9").style.display = "none"

  

  document.getElementById("person7").style.display = "block"
  
}
function button_8() {
  document.getElementById("person1").style.display = "none"
  document.getElementById("person2").style.display = "none"
  document.getElementById("person3").style.display = "none"
  document.getElementById("person4").style.display = "none"
  document.getElementById("person5").style.display = "none"
  document.getElementById("person7").style.display = "none"
  document.getElementById("person6").style.display = "none"
  document.getElementById("person9").style.display = "none"

  

  document.getElementById("person8").style.display = "block"
  
}
function button_9() {
  document.getElementById("person1").style.display = "none"
  document.getElementById("person2").style.display = "none"
  document.getElementById("person3").style.display = "none"
  document.getElementById("person4").style.display = "none"
  document.getElementById("person5").style.display = "none"
  document.getElementById("person7").style.display = "none"
  document.getElementById("person8").style.display = "none"
  document.getElementById("person6").style.display = "none"

  

  document.getElementById("person9").style.display = "block"
  
}



// Обработка ошибок

var Options = document.querySelectorAll('.button_trener');
            Options.forEach(function(element, index) {
            element.addEventListener('click', switchLanguage);
            });
            function switchLanguage (event) {
            var targetElement = event.target;

            Options.forEach(function(element, index) {
                element.classList.remove('active');
            });

            targetElement.classList.add('active');
            }








            

}
 



