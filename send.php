<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];
$sendNewsletter = $_POST['send-newsletter'];
$sendFeedback = $_POST['send-feedback'];
$sendBooking = $_POST['send-booking'];

// Формирование самого письма
if (isset($_POST['send-newsletter'])) {
  $title = "Подписка на НОВОСТИ";
  $body = "
  <h2>Новое обращение</h2>
  Новый пользователь хочет подписаться на новости.<br>
  Его <b>e-mail:</b> $email
  ";
} else if (isset($_POST['send-feedback'])) {
  $title = "Новое обращение Best Tour Plan";
  $body = "
  <h2>Новое обращение</h2>
  <b>Имя:</b> $name<br>
  <b>Телефон:</b> $phone<br><br>
  <b>Сообщение:</b><br>$message
  ";
} else if (isset($_POST['send-booking'])) {
  $title = "Новое бронирование отеля";
  $body = "
  <h2>Новое бронирование отеля</h2>
  <b>Имя:</b> $name<br>
  <b>Телефон:</b> $phone<br><br>
  <b>E-mail:</b> $email<br><br>
  <b>Сообщение:</b><br>$message
  ";
}

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.yandex.ru'; // SMTP сервера вашей почты
    // $mail->Host       = 'ssl://smtp.yandex.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'testingthemails@yandex.ru'; // Логин на почте
    $mail->Password   = 'TestingTheMails@1'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('testingthemails@yandex.ru', 'Тестирование писем TTM'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('urcosmos@yandex.ru');
    // $mail->addAddress('youremail@gmail.com'); // Ещё один, если нужен

    // Прикрипление файлов к письму
if (!empty($file['name'][0])) {
    for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
        $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
        $filename = $file['name'][$ct];
        if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
            $mail->addAttachment($uploadfile, $filename);
            $rfile[] = "Файл $filename прикреплён";
        } else {
            $rfile[] = "Не удалось прикрепить файл $filename";
        }
    }
}
// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";}
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
// echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
if (isset($_POST['send-newsletter'])) {
  header('Location: thankyou.html');
} else if (isset($_POST['send-feedback'])) {
  header('Location: thankyou.html');
} else if (isset($_POST['send-booking'])) {
  header('Location: thankyou.html');
}