<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="stylesheet" href="/css/bootstrap.min.css">
	<link rel="stylesheet" href="/css/style.css">
	<link rel="stylesheet" href="/css/normalize.css">
	<link rel="stylesheet" href="/css/fontawesome-all.css">
	
	<title>Template</title>
</head>
<body>

	@include('partials.nav')

	ိ<div class="container">
		
		@yield('content')
	
	</div>


	<script src="/js/jquery-3.2.1.slim.min.js"></script>
	<script src="/js/bootstrap.min.js"></script>
	<script src="/js/popper.min.js"></script>
	

	<!-- Google Analytics: change UA-XXXXX-Y to be your site's ID. -->
	<script>
		window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;
		ga('create','UA-XXXXX-Y','auto');ga('send','pageview')
	</script>
	<script src="js/analytics.js" async defer></script>
	

</body>
</html>