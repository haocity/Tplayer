<?php
include '../config.php';
header('Access-Control-Allow-Origin:*');  
$id = $_POST['id']; 
// $string = $_POST["dm-text"];
// $pattern = '/"/';
// $replacement = "'";
// $text= preg_replace($pattern, $replacement, $string);
// $pattern = '/<script>/';
// $replacement = "喵~＞▽＜";
// $text= preg_replace($pattern, $replacement, $string);
// $pattern = '/style=/';
// $replacement = "喵~＞▽＜";
// $text= preg_replace($pattern, $replacement, $string);
$text=lib_replace_end_tag($_POST["text"]);
function lib_replace_end_tag($str)
{
if (empty($str)) return false;
$str = htmlspecialchars($str);
$str=str_replace(">","】",$str);
$str=str_replace("<","【",$str);
$str=str_replace(" "," ",$str);
$str=str_replace(" "," ",$str);
$str=str_replace("    "," ",$str);
$str=str_replace("&"," ",$str);
$str=str_replace("'"," ",$str);
$str=str_replace("<br />"," ",$str);
$str=str_replace("''","'",$str);
$str=str_replace("css","'",$str);
$str=str_replace("CSS","'",$str);
$str=str_replace('"',"“",$str);
$str=str_replace("'","“",$str);
$str=str_replace("/n"," ",$str);
return $str;
}
$b="set names utf8";
mysqli_query($conn,$b);
$sql = "INSERT INTO `danmu`.`".$id."` (`id`, `text`, `time`, `color`, `place`) VALUES (NULL, '".$text."', '".$_POST["time"]."', '".$_POST["color"]."', '".$_POST["place"]."');";
if (mysqli_query($conn, $sql)) {
    echo "Send Success";
} else {
    echo "Send Error";
}

mysqli_close($conn);
 ?> 
