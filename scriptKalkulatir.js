{
  "use strict";

var man = 1
var woman = 0
var index = 1.2
var id_weight_loss = 0
var id_kit = 0
document.getElementById("block").style.display = "none" 
document.getElementById("your_aim").style.display = "none"
document.getElementById("label_B21").innerHTML = "На груди"
document.getElementById("label_B23").innerHTML = "На бедре"
document.getElementById("woman_forma").style.display = "none"

function button_man(){
  man = 1
  woman = 0
  document.getElementById("label_B21").innerHTML = "На груди"
  document.getElementById("label_B23").innerHTML = "На бедре"
  document.getElementById("woman_forma").style.display = "none"
  
}
function button_woman(){
  woman = 1
  man = 0
  document.getElementById("label_B21").innerHTML = "На бедре (внутр пов.)"
  document.getElementById("label_B23").innerHTML = "На бедре (перед пов.)"
  document.getElementById("woman_forma").style.display = "block"
}
function input_radio1() {
  index = 1.2
}
function input_radio2() {
  index = 1.375
}
function input_radio3() {
  index = 1.55
}
function input_radio4() {
  index = 1.725
}
function input_radio5() {
  index = 1.9
}
function clear_form() {
  document.getElementById("name").value = ""
  document.getElementById("age").value = ""
  document.getElementById("height").value = ""
  document.getElementById("weight").value = ""
  document.getElementById("days").value = ""
  document.getElementById("days_weight").value = ""
  document.getElementById("B10").value = ""
  document.getElementById("B11").value = ""
  document.getElementById("B12").value = ""
  document.getElementById("B13").value = ""
  document.getElementById("B14").value = ""
  document.getElementById("B15").value = ""
  document.getElementById("B17").value = ""
  document.getElementById("B18").value = ""
  document.getElementById("B19").value = ""
  document.getElementById("B20").value = ""
  document.getElementById("B21").value = ""
  document.getElementById("B22").value = ""
  document.getElementById("B23").value = ""
  document.getElementById("B24").value = ""
  document.getElementById("block").style.display = "none"
  $(window).scrollTop(0);
  
}
// Обработка ошибок (Расчет количества дней, блокировка окна)
 
function input_save() {
  document.getElementById('days').disabled = true;
  document.getElementById('days_weight').disabled = true;
  document.getElementById('days').value = "";
  document.getElementById('days_weight').value = "";
  document.getElementById("your_aim").style.display = "none";

  document.getElementById('days').style.background = "none";
  document.getElementById('days_weight').style.background = "none";
  id_weight_loss = 0
  id_kit = 0
 }
 
 function input_weight_loss() {
  document.getElementById('days').disabled = false;
  document.getElementById('days_weight').disabled = false;

  document.getElementById('days').style.background = "coral"
  document.getElementById('days_weight').style.background = "coral"
  id_weight_loss = 1
  id_kit = 0
 }

 function input_kits() {
  document.getElementById('days').disabled = false;
  document.getElementById('days_weight').disabled = false;

  document.getElementById('days').style.background = "coral"
  document.getElementById('days_weight').style.background = "coral"
  id_weight_loss = 0
  id_kit = 1
 }


function kalkulator(){
  document.getElementById("block").style.display = "block" 
  var name = String(document.getElementById("name").value);
  var age = Number(document.getElementById("age").value);
  var height = Number(document.getElementById("height").value);
  var weight = Number(document.getElementById("weight").value);
  var result_weight_maintenance
  var date = new Date
  var options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  

 // Дата
  document.getElementById("Date").innerHTML = date.toLocaleString("ru", options)
  // Имя
  document.getElementById("name_p").innerHTML = name




// Индекса массы тела (ИМТ)
var IMT = +((weight / (Math.pow(height / 100, 2))).toFixed(1))

if (IMT >= 40) {
  document.getElementById("IMT").style.color = "#ff0000"
  document.getElementById("IMT_index").style.color = "#ff0000"
  document.getElementById("IMT").innerHTML = IMT
  document.getElementById("IMT_index").innerHTML = "Ожирение третьей степени"
}
else if ((40 > IMT) & (IMT >= 35)) {
  document.getElementById("IMT").style.color = "#ff6600"
  document.getElementById("IMT_index").style.color = "#ff6600"
  document.getElementById("IMT").innerHTML = IMT
  document.getElementById("IMT_index").innerHTML = "Ожирение второй степени"
}
else if ((35 > IMT) & (IMT >= 30)) {
  document.getElementById("IMT").style.color = "#ff9900"
  document.getElementById("IMT_index").style.color = "#ff9900"
  document.getElementById("IMT").innerHTML = IMT
  document.getElementById("IMT_index").innerHTML = "Ожирение первой степени"
}
else if ((30 > IMT) & (IMT >= 25)) {
  document.getElementById("IMT").style.color = "#ffe600"
  document.getElementById("IMT_index").style.color = "#ffe600"
  document.getElementById("IMT").innerHTML = IMT
  document.getElementById("IMT_index").innerHTML = "Избыточная масса тела (предожирение)"
}
else if ((25 > IMT) & (IMT >= 18.5)) {
  document.getElementById("IMT").style.color = "#2bff00"
  document.getElementById("IMT_index").style.color = "#2bff00"
  document.getElementById("IMT").innerHTML = IMT
  document.getElementById("IMT_index").innerHTML = "Норма"
}
else if ((18.5 > IMT) & (IMT >= 16)) {
  document.getElementById("IMT").style.color = "#ff9900"
  document.getElementById("IMT_index").style.color = "#ff9900"
  document.getElementById("IMT").innerHTML = IMT
  document.getElementById("IMT_index").innerHTML = "Недостаточная (дефицит) масса тела"
}
else if (IMT < 16) {
  document.getElementById("IMT").style.color = "#ff0000"
  document.getElementById("IMT_index").style.color = "#ff0000"
  document.getElementById("IMT").innerHTML = IMT
  document.getElementById("IMT_index").innerHTML = "Выраженный дефицит массы тела"
}





  // Расчет каллорий
  if (age >= 14 & age <= 120 & height >= 100 & height <= 250 & weight >= 40 & weight <= 300) {
    if (man === 1) {
      document.getElementById("error").innerHTML = ""

      document.getElementById("age").style.background = "#ffffff"
      document.getElementById("age").style.border = "solid 1px #000000"
      document.getElementById("age").style.color = "#000000"

      document.getElementById("height").style.background = "#ffffff"
      document.getElementById("height").style.border = "solid 1px #000000"
      document.getElementById("height").style.color = "#000000"
    

      document.getElementById("weight").style.background = "#ffffff"
      document.getElementById("weight").style.border = "solid 1px #000000"
      document.getElementById("weight").style.color = "#000000"


      // Расчет для мужчин
      // Расчет калл
      result_weight_maintenance = index * (88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age))
      document.getElementById("result_weight_maintenance").innerHTML ="~" + (result_weight_maintenance * 0.95).toFixed() + "-" + (result_weight_maintenance * 1.05).toFixed()
      result_weight_loss = document.getElementById("result_weight_loss").innerHTML ="~" + (result_weight_maintenance * 0.8).toFixed() + "-" + (result_weight_maintenance * 0.9).toFixed()
      p_result_weight_gain = document.getElementById("p_result_weight_gain").innerHTML ="~" + (result_weight_maintenance * 1.1).toFixed() + "-" + (result_weight_maintenance * 1.2).toFixed()
      // Расчет бжу
    }
    else {
      document.getElementById("error").innerHTML = ""

      document.getElementById("age").style.background = "#ffffff"
      document.getElementById("age").style.border = "solid 1px #000000"
      document.getElementById("age").style.color = "#000000"

      document.getElementById("height").style.background = "#ffffff"
      document.getElementById("height").style.border = "solid 1px #000000"
      document.getElementById("height").style.color = "#000000"
    

      document.getElementById("weight").style.background = "#ffffff"
      document.getElementById("weight").style.border = "solid 1px #000000"
      document.getElementById("weight").style.color = "#000000"


      // Расчет дял женщин
      result_weight_maintenance = index * (447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age))
      document.getElementById("result_weight_maintenance").innerHTML ="~" + (result_weight_maintenance * 0.95).toFixed() + "-" + (result_weight_maintenance * 1.05).toFixed()
      result_weight_loss = document.getElementById("result_weight_loss").innerHTML ="~" + (result_weight_maintenance * 0.8).toFixed() + "-" + (result_weight_maintenance * 0.9).toFixed()
      p_result_weight_gain = document.getElementById("p_result_weight_gain").innerHTML ="~" + (result_weight_maintenance * 1.1).toFixed() + "-" + (result_weight_maintenance * 1.2).toFixed()
    }
  }

  
  // Расчет БЖУ

  // Расчет белка
document.getElementById("B_loss").innerHTML = "Б" + " " + "~" + ((result_weight_maintenance * 0.8) * 0.2 / 4.2).toFixed() + "-" + ((result_weight_maintenance * 0.9) * 0.2 / 4.2).toFixed()
document.getElementById("B_maintenance").innerHTML = "Б" + " " + "~" + (result_weight_maintenance * 0.95 * 0.2 / 4.2).toFixed() + "-" + (result_weight_maintenance * 1.05 * 0.2 / 4.2).toFixed()
document.getElementById("B_gain").innerHTML = "Б" + " " + "~" + ((result_weight_maintenance * 1.1) * 0.2 / 4.2).toFixed() + "-" + ((result_weight_maintenance * 1.2) * 0.2 / 4.2).toFixed()
// Расчет углеводов
document.getElementById("Y_loss").innerHTML = "У" + " " + "~" + ((result_weight_maintenance * 0.8) * 0.5 / 4.2).toFixed() + "-" + ((result_weight_maintenance * 0.9) * 0.5 / 4.2).toFixed()
document.getElementById("Y_maintenance").innerHTML = "У" + " " + "~" + (result_weight_maintenance * 0.95 * 0.5 / 4.2).toFixed() + "-" + (result_weight_maintenance * 1.05 * 0.5 / 4.2).toFixed()
document.getElementById("Y_gain").innerHTML = "У" + " " + "~" + ((result_weight_maintenance * 1.1) * 0.5 / 4.2).toFixed() + "-" + ((result_weight_maintenance * 1.2) * 0.5 / 4.2).toFixed()
// Расчет жиров
document.getElementById("J_loss").innerHTML = "Ж" + " " + "~" + ((result_weight_maintenance * 0.8) * 0.3 / 9.29).toFixed() + "-" + ((result_weight_maintenance * 0.9) * 0.3 / 9.29).toFixed()
document.getElementById("J_maintenance").innerHTML = "Ж" + " " + "~" + (result_weight_maintenance * 0.95 * 0.3 / 9.29).toFixed() + "-" + (result_weight_maintenance * 1.05 * 0.3 / 9.29).toFixed()
document.getElementById("J_gain").innerHTML = "Ж" + " " + "~" + ((result_weight_maintenance * 1.1) * 0.3 / 9.29).toFixed() + "-" + ((result_weight_maintenance * 1.2) * 0.3 / 9.29).toFixed()

 

// Рекомендации по выбранной цели
var days = Number(document.getElementById("days").value);
var days_weight = Number(document.getElementById("days_weight").value);
var result_target

 if (id_weight_loss === 1) {
  document.getElementById("your_aim").style.display = "block"
  result_target = (result_weight_maintenance - 7700 * days_weight / days).toFixed()
  if (result_target <= 0) {
    document.getElementById("target_cal").innerHTML = "Увы, но ваша цель недостижима."
    document.getElementById("target_cal1").innerHTML =  ""
    // Расчет белка
    document.getElementById("B_target").innerHTML = ""
    // Расчет углеводов
    document.getElementById("Y_target").innerHTML = ""
    // Расчет жиров
    document.getElementById("J_target").innerHTML = ""
  }
  else {
    document.getElementById("target_cal").innerHTML ="Вам необходимо" + " " + "~" + result_target + "ккал" + " " + "в день."
    document.getElementById("target_cal1").innerHTML =  ""
    // Расчет белка
    document.getElementById("B_target").innerHTML = "Б" + " " + "~" + (result_target * 0.2 / 4.2).toFixed()
    // Расчет углеводов
    document.getElementById("Y_target").innerHTML = "У" + " " + "~" + (result_target * 0.5 / 4.2).toFixed() 
    // Расчет жиров
    document.getElementById("J_target").innerHTML = "Ж" + " " + "~" + (result_target * 0.3 / 9.29).toFixed()
  }
}
else if (id_kit === 1) {
  document.getElementById("your_aim").style.display = "block"
  result_target = (result_weight_maintenance + 7700 * days_weight / days).toFixed()
  if (result_target > 10000) {
    document.getElementById("target_cal").innerHTML = "Вам необходимо" + " " + "~" + result_target + "ккал" + " " + "в день."
    document.getElementById("target_cal1").innerHTML =  "Ваша цель опасна для здоровья!"
    // Расчет белка
    document.getElementById("B_target").innerHTML = "Б" + " " + "~" + (result_target * 0.2 / 4.2).toFixed()
    // Расчет углеводов
    document.getElementById("Y_target").innerHTML = "У" + " " + "~" + (result_target * 0.5 / 4.2).toFixed() 
    // Расчет жиров
    document.getElementById("J_target").innerHTML = "Ж" + " " + "~" + (result_target * 0.3 / 9.29).toFixed()
  }
  else {
    document.getElementById("target_cal").innerHTML = "Вам необходимо" + " " + "~" + result_target + "ккал" + " " + "в день."
    document.getElementById("target_cal1").innerHTML =  ""
    // Расчет белка
    document.getElementById("B_target").innerHTML = "Б" + " " + "~" + (result_target * 0.2 / 4.2).toFixed()
    // Расчет углеводов
    document.getElementById("Y_target").innerHTML = "У" + " " + "~" + (result_target * 0.5 / 4.2).toFixed() 
    // Расчет жиров
    document.getElementById("J_target").innerHTML = "Ж" + " " + "~" + (result_target * 0.3 / 9.29).toFixed()
  }
}

        // Расчет % жира в организме

    // Обхваты, см
var B1 = Number(document.getElementById("B1").value);
var B2 = Number(document.getElementById("B2").value);
var B10 = Number(document.getElementById("B10").value);
var B11 = Number(document.getElementById("B11").value);
var B12 = Number(document.getElementById("B12").value);
var B13 = Number(document.getElementById("B13").value);
var B14 = Number(document.getElementById("B14").value);
var B15 = Number(document.getElementById("B15").value);

    // Толщина жировой складки, мм
var B17 = Number(document.getElementById("B17").value);
var B18 = Number(document.getElementById("B18").value);
var B19 = Number(document.getElementById("B19").value);
var B20 = Number(document.getElementById("B20").value);
var B21 = Number(document.getElementById("B21").value);
var B22 = Number(document.getElementById("B22").value);
var B23 = Number(document.getElementById("B23").value);
var B24 = Number(document.getElementById("B24").value);
// Коэффиценты
var d
var s
var r
// результаты
var fat_mass_kg
var fat_mass_percent

var Skeletal_muscle_mass_kg
var Skeletal_muscle_mass_percent

var Proportionality_factor


if (B10 != 0 && B11 != 0 && B12 != 0 && B13 != 0 && B14 != 0 && B15 != 0 && B17 != 0 && B18 != 0 && B19 != 0 && B20 != 0 && B21 != 0 && 
B22 != 0 && B23 != 0 && B24 != 0) {
  document.getElementById("fat_mass").style.display = "block"
  d = (B17 + B18 + B19 + B20 + B22 + B23 + B24 + B21) / 16
  s = 71.84 * Math.pow(weight, 0.425) * Math.pow(height, 0.725)
  r = ((B10 + B11 + B14 + B15) / 25.12) - ((B17 + B18 + B19 + B23 + B24) / 100)
  fat_mass_kg = (1.3 * d * s / 10000).toFixed(2)
  fat_mass_percent = (100 * fat_mass_kg / weight).toFixed(2)

  Skeletal_muscle_mass_kg = (height / 100 * 0.65 * Math.pow(r , 2)).toFixed(2)

  Skeletal_muscle_mass_percent = (Skeletal_muscle_mass_kg * 100 / weight).toFixed(2)

  Proportionality_factor = B12 - B13

  document.getElementById("fat_mass_kg").innerHTML = fat_mass_kg + "кг"
  document.getElementById("fat_mass_percent").innerHTML = fat_mass_percent + "%"

  document.getElementById("Skeletal_muscle_mass_kg").innerHTML = Skeletal_muscle_mass_kg + "кг"
  document.getElementById("Skeletal_muscle_mass_percent").innerHTML = Skeletal_muscle_mass_percent + "%"
  if (man === 1) {
    document.getElementById("man_target").style.display = "block"
    document.getElementById("Proportionality_factor").style.display = "block"
    document.getElementById("Proportionality_factor").innerHTML = Proportionality_factor
    document.getElementById("woman_parametr").innerHTML = "Шея:" + " " + B1 + "см"
  }
  else {
    document.getElementById("man_target").style.display = "none"
    document.getElementById("Proportionality_factor").style.display = "none"
    document.getElementById("woman_parametr").style.display = "block"
    document.getElementById("woman_parametr").innerHTML = "Шея:" + " " + B1 + "см," + " " + "таз:" + " " + B2 + "см"
   
  }
}

else {
  document.getElementById("fat_mass").style.display = "none"
}

  // Обработка ошибок
 // --------------------------------------
   
   if (age < 14 || age > 120 ) {
    document.getElementById("block").style.display = "none"
    document.getElementById("error").innerHTML = "Проверьте значения"
    $(window).scrollTop(0);
    document.getElementById("age").style.background = "#c02d00"
    document.getElementById("age").style.border = "solid 1px #c02d00"
    document.getElementById("age").style.color = "#ffffff"
    
   }
    else {
      document.getElementById("age").style.background = "#ffffff"
      document.getElementById("age").style.border = "solid 1px #000000"
      document.getElementById("age").style.color = "#000000"
    }

    
  

  if (height < 100 || height > 250) {
    document.getElementById("block").style.display = "none"
    document.getElementById("error").innerHTML = "Проверьте значения"
    $(window).scrollTop(0);
    document.getElementById("height").style.background = "#c02d00"
    document.getElementById("height").style.border = "solid 1px #c02d00"
    document.getElementById("height").style.color = "#ffffff"
  }
  else {
    document.getElementById("height").style.background = "#ffffff"
    document.getElementById("height").style.border = "solid 1px #000000"
    document.getElementById("height").style.color = "#000000"
  }


  if (weight < 40 || weight > 300) {
    document.getElementById("block").style.display = "none"
    document.getElementById("error").innerHTML = "Проверьте значения"
    $(window).scrollTop(0);
    document.getElementById("weight").style.background = "#c02d00"
    document.getElementById("weight").style.border = "solid 1px #c02d00"
    document.getElementById("weight").style.color = "#ffffff"
  }
  else {
    document.getElementById("weight").style.background = "#ffffff"
    document.getElementById("weight").style.border = "solid 1px #000000"
    document.getElementById("weight").style.color = "#000000"
  }

  
  
   
   
   

  // --------------------------------------
  
  

  
  







}
 

// Обработка ошибок

var Options = document.querySelectorAll('.button_gender');
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










            
            function saveAsImage() {
              var element = document.getElementById("element-to-be-saved");
              
              html2canvas(element).then(function (canvas) {
                
                var link = document.createElement("a");
                document.body.appendChild(link);
                link.download = "filename.png";
                link.href = canvas.toDataURL("image/png");
                link.target = '_blank';
                link.click();
              });
            }

            
            



          
     
}



