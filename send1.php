  <?php
/* Здесь проверяется существование переменных */

if (isset($_GET['name'])) {$phone = $_GET['name'];}
if (isset($_GET['phone'])) {$name = $_GET['phone'];}
$person_name = $_GET['person'];
$url = ((!empty($_SERVER['HTTPS'])) ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
echo $url;
/* Сюда впишите свою эл. почту */

$myaddres  = "Bestlifestudio@yandex.ru"; // кому отправляем
$myaddres2 = "b.lifestudio@yandex.ru";
$myaddres3 = "casparovvladislav@yandex.ru";



$mes = "Тема: Заказ обратного звонка! Записать к $person_name\nИмя: $phone\nТелефон: $name \nURL: $url";
 
/* А эта функция как раз занимается отправкой письма на указанный вами email */
$sub='Заказ'; //сабж
$email='Заказ обратного звонка'; // от кого
$send1 = mail ($myaddres,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$email");
$send1 = mail ($myaddres2,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$email");
$send1 = mail ($myaddres3,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$email");



ini_set('short_open_tag', 'On');

?>
<!DOCTYPE HTML>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta http-equiv="refresh" content="3; url=index.html">
  <link rel="stylesheet" href="style.css?ver=64.114">
  <title>Спасибо! Мы свяжемся с вами!</title>
  <meta name="generator">
  <script type="text/javascript">
  setTimeout('location.replace("/index.html")', 8000);
/*Изменить текущий адрес страницы через 3 секунды (8000 миллисекунд)*/
</script> 
</head>
  <body>
      <div class="conteiner_call_back">
        <img class="igmp__call_back" src="igmp_index/Котик.jpg" alt="Уже звоним:)">
		    <p class="p_call1">Спасибо!<br>Мы вам перезвоним!</p>
      </div>
  </body>
</html>