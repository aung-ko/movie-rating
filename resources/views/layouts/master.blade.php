<!DOCTYPE html>
<html lang="en">

<head>

  @include('layouts.meta')

  <title>Clean Blog - Start Bootstrap Theme</title>

  @include('layouts.css')


</head>

<body>
  
  <!-- Navigation -->
  @include('layouts.nav')

  <!-- Page Header -->
          @yield('header')
          @yield('content')

  <hr>

  <!-- Footer -->
  @include('layouts.footer')

  <!-- Bootstrap core JavaScript -->
  
  @include('layouts.script')

</body>

</html>