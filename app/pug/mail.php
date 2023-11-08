<?php
// Получение данных с формы:
$name = htmlspecialchars($_POST['firstName']);
$email = htmlspecialchars($_POST['personalEmail']);
$tel = htmlspecialchars($_POST['phoneNumber']);
$company = htmlspecialchars($_POST['company']);
$comment = htmlspecialchars($_POST['comment']);


// Параметры для функции mail:
$source = getenv('HTTP_REFERER');
$subject = 'Тема письма клиенту';
$message = "Текст письма:
        <br><br>
        Name: $name<br>
        E-mail: $email<br>
        Phone number: $tel<br>
        Company: $company<br>
        Comment: $comment<br>

    ";
$headers = "From: $email\r\nReply-To: $email\r\nContent-type: text/html; charset=utf-8\r\n";

// Отправка данных на почту:
$success = mail("pavlivna_17@ukr.net", $subject, $message, $headers);

// Сохранение инфо о лидах в файл leads.xls :

$date = date("d.m.y"); // число.месяц.год  
$time = date("H:i"); // часы:минуты:секунды

$f = fopen("leads.xls", "a+");
fwrite($f, " <tr>");
fwrite($f, " <td>$email</td> <td>$name</td> <td>$tel</td> <td>$company</td> <td>$comment</td>");
fwrite($f, " <td>$source</td>");
fwrite($f, " </tr>");
fwrite($f, "\n ");
fclose($f);
?>