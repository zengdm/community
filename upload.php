<?php
//header("Access-Control-Allow-Origin:*");

$base64 = $_POST["imgsrc"];
$file = base64_decode($base64);
$name = "uploads/" .time(). ".jpg";
file_put_contents($name, $file);
$arr = array('code'=>200, 'msg'=>'上传成功', 'data'=>array('src'=>$name));

echo json_encode($arr);
?>
