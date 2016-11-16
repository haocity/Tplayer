<?php
include 'config.php';
 echo $_POST["dm-text"];
 echo $_POST["dm-color"]; 
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
$text=lib_replace_end_tag($_POST["dm-text"]);
function lib_replace_end_tag($str)
{
if (empty($str)) return false;
$str = htmlspecialchars($str);
$str = str_replace( '/', "", $str);
$str = str_replace("\\", "", $str);
$str = str_replace("&gt", "", $str);
$str = str_replace("&lt", "", $str);
$str = str_replace("<SCRIPT>", "喵~＞▽＜", $str);
$str = str_replace("</SCRIPT>", "", $str);
$str = str_replace("<script>", "喵~＞▽＜", $str);
$str = str_replace("</script>", "", $str);
$str=str_replace("select","select",$str);
$str=str_replace("join","join",$str);
$str=str_replace("union","union",$str);
$str=str_replace("where","where",$str);
$str=str_replace("insert","insert",$str);
$str=str_replace("delete","delete",$str);
$str=str_replace("update","update",$str);
$str=str_replace("like","like",$str);
$str=str_replace("drop","drop",$str);
$str=str_replace("create","create",$str);
$str=str_replace("modify","modify",$str);
$str=str_replace("rename","rename",$str);
$str=str_replace("alter","alter",$str);
$str=str_replace("cas","cast",$str);
$str=str_replace("&","&",$str);
$str=str_replace(">",">",$str);
$str=str_replace("<","<",$str);
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
echo 'time'.$_POST["dm-time"];
$b="set names utf8";
mysqli_query($conn,$b);
$sql = "INSERT INTO `danmu`.`1` (`id`, `text`, `time`, `color`) VALUES (NULL, '".$text."', '".$_POST["dm-time"]."', '".$_POST["dm-color"]."');";
if (mysqli_query($conn, $sql)) {
    
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
 ?> 
