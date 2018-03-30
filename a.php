<?php

$data = array(
'code'=>200,
'msg'=>"成功",
"data"=>array(
	"cate"=>array(

	  'ask'=>array(
		'cid'=>1,
		'name'=>"问答",
		"tag"=>"ask",
		"pcid"=>0,
		"level"=>0,
		"sord"=>1,
		"togroupid"=>0,
		"child"=>array(
			"200"=> array(
				"cid"=> 200,
				"name"=> "充电安桩",
				"tag"=> "",
				"pcid"=> 1,
				"level"=> 1,
				"sord"=> 1,
				"togroupid"=> 0
			),
			"201"=> array(
				"cid"=> 201,
				"name"=> "保险",
				"tag"=> "",
				"pcid"=> 1,
				"level"=> 1,
				"sord"=> 2,
				"togroupid"=> 0
			),
			"202"=> array(
				"cid"=> 202,
				"name"=> "验证上牌",
				"tag"=> "",
				"pcid"=> 1,
				"level"=> 1,
				"sord"=> 3,
				"togroupid"=> 0
			),
			"203"=> array(
				"cid"=> 203,
				"name"=> "维修保养",
				"tag"=> "",
				"pcid"=> 1,
				"level"=> 1,
				"sord"=> 4,
				"togroupid"=> 0
			),
			"204"=> array(
				"cid"=> 204,
				"name"=> "电池",
				"tag"=> "",
				"pcid"=> 1,
				"level"=> 1,
				"sord"=> 5,
				"togroupid"=> 0
			),
			"205"=> array(
				"cid"=> 205,
				"name"=> "续航",
				"tag"=> "",
				"pcid"=> 1,
				"level"=> 1,
				"sord"=> 6,
				"togroupid"=> 0
			),
			"206"=> array(
				"cid"=> 206,
				"name"=> "补贴政策",
				"tag"=> "",
				"pcid"=> 1,
				"level"=> 1,
				"sord"=> 7,
				"togroupid"=> 0
			),
			"207"=> array(
				"cid"=> 207,
				"name"=> "车辆功能",
				"tag"=> "",
				"pcid"=> 1,
				"level"=> 1,
				"sord"=> 8,
				"togroupid"=> 0
			)
		)
	  ),
	  	"beiqi"=> array(
				"cid"=> 50,
				"name"=> "北汽新能源论坛",
				"tag"=> "beiqi",
				"pcid"=> 0,
				"level"=> 0,
				"sord"=> 1,
				"togroupid"=> 0,
				"child"=> array(
					33=> array(
						"cid"=> 33,
						"name"=> "EV200/EV160",
						"tag"=> "",
						"pcid"=> "50",
						"level"=> "1",
						"sord"=> "2",
						"togroupid"=> "0"
					),
					35=> array(
						"cid"=> 35,
						"name"=> "EU260",
						"tag"> "",
						"pcid"=> 50,
						"level"=> 1,
						"sord"=> 1,
						"togroupid"=> 0
					),
					36=> array(
						"cid"=> 36,
						"name"=> "E150EV",
						"tag"=> "",
						"pcid"=> 50,
						"level"=> 1,
						"sord"=> 4,
						"togroupid"=> 0
					),
					37=> array(
						"cid"=> 37,
						"name"=> "ES210",
						"tag"=> "",
						"pcid"=> 50,
						"level"=> 1,
						"sord"=> 3,
						"togroupid"=> 0
					),
					48=> array(
						"cid"=> 48,
						"name"=> "EX200",
						"tag"=> "",
						"pcid"=> 50,
						"level"=> 1,
						"sord"=> 5,
						"togroupid"=> 0
					),
					53=> array(
						"cid"=> 53,
						"name"=> "EC180",
						"tag"=> "",
						"pcid"=> 50,
						"level"=> 1,
						"sord"=> 6,
						"vtogroupid"=> 0
					)
				)
			),

	)
	
));






echo json_encode($data);


