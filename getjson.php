<?php
include 'config.php';
header('Access-Control-Allow-Origin:*');  
header('Content-Type: text/json;charset=utf-8');
$b="set names utf8";
$conn->query($b);
$sql = "SELECT * FROM `1`";
$sql2="select count(id) FROM `1`";
$result2 = $conn->query($sql2);
$l=$result2->fetch_assoc();
$l2=$l['count(id)'];
$result = $conn->query($sql);
$i=0;
echo '{"data":[';
if ($result->num_rows > 0) {
    // 输出每行数据
    while($row = $result->fetch_assoc()) {
		$i++;
		if($l2>$i){
    		echo '{"id":"'. $row['id']. '","text":"'. $row['text']. '","color":"' . $row['color'].'","time":"'. $row['time'].'"},';
    	}
        else{
        	 echo '{"id":"'. $row['id']. '","text":"'. $row['text']. '","color":"' . $row['color'].'","time":"'. $row['time'].'"';
        }
    }
} else {
    echo '0 个结果';
}
echo "}]}";     
$conn->close();
?>