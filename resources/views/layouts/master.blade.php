<!DOCTYPE html>
<html lang="en">

<head>

  @include('layouts.meta')
  <title>Blog Post - Start Bootstrap Template</title>

  <link rel="stylesheet" href="/css/select2-bootstrap.min.css">
  <link rel="stylesheet" href="/css/select2.min.css">
  <link href="/css/bootstrap.min.css" rel="stylesheet">
  <link href="css/blog-post.css" rel="stylesheet">

</head>

<body>
<div class="container">
  <!-- Navigation -->
      @include('layouts.nav')

  <!-- Page Content -->
  
 <div class="row">
      @include('layouts.body')

      @include('layouts.sidebar')
</div>
   

  </div>
  <!-- /.container -->

  <!-- Footer -->
      @include('layouts.footer')

  <!-- Bootstrap core JavaScript -->
  <script src="/js/jquery.min.js"></script>
  <script src="/js/bootstrap.bundle.min.js"></script>
  <script src="/js/select2.min.js"></script>
  <script>
  $("document").ready(function(){
    $(".myclass").select2();
  });

  </script>

</body>

</html>
