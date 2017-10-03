<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>Brick Breaker</title>
		<style>
		* { padding: 0; margin: 0; }
		canvas { background: #eee; display: block; margin: 0 auto; }
		</style>
	</head>
	<body>

	<canvas id="myCanvas" width="720" height="500"></canvas>
		
	<script>
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	var BRICK_WIDTH = 80;
	var BRICK_HEIGHT = 70;
	
	
	ctx.beginPath();
	for (var i = 0; i<7; i++)
	{
		ctx.rect((i*100) + 20, 20, BRICK_WIDTH, BRICK_HEIGHT);
		ctx.rect((i*100) + 20, 100, BRICK_WIDTH, BRICK_HEIGHT);
		ctx.rect((i*100) + 20, 180, BRICK_WIDTH, BRICK_HEIGHT);
	}
	
	ctx.fillStyle = "#FF0000";
	ctx.fill();
	ctx.closePath();
	
	
	</script>
	
	</body>
</html>