<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title','Myanmar Movie Review Database') | {{ config('app.name') }}</title>
    <meta name="description" content="@yield('description','Best Movie review dabase in Myanmar')">
    <meta name="keywords" content="@yield('keywords','myanmar movie review')"> 
    <meta property="og:title" content="@yield('title','Myanmar Movie Review Database')">
    <meta property="og:description" content="@yield('description','Best Movie review dabase in Myanmar')">
    <meta property="og:image" content="@yield('image', 'http://via.placeholder.com/800x450')">
    <meta property="og:url" content="{{URL::current()}}">
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <script src="{{ asset('js/chatapp.js') }}"></script>

</head>
<body>
    <div id="app">
      @include('frontend.include.header')  
        <main class="">
            @yield('content')
        </main>
      @include('frontend.include.footer')
    </div>
    @include('sweetalert::alert')
    <script src="{{ asset('js/chatapp.js') }}"></script>
    <script src="{{ asset('js/app.js') }}"></script>
    
    
    @yield('script')
</body>
</html>
