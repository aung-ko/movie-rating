<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    @yield('title')

    @include('admin.layouts.css')

    @yield('css')

</head>

<body>
    <div id="wrapper">

        @include('admin.layouts.nav')

        @yield('content')

    </div>

    @include('admin.layouts.scripts')

    @yield('scripts')
</body>