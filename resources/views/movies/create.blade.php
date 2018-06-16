@extends('layouts.app')

@section('content')
<div>
    @if ($errors->any)
        @foreach ($errors as $error)
            {{ $error }}
        @endforeach
    @endif
</div>
    <div class="container">
        <form action="{{ route('movie.store') }}" method="POST">

            {{  csrf_field() }}

            Movie Name :
            <input type="text" name="name">
            </p>

            Director Name :
            <input type="text" name="director_name">
            </p>

            Description :
            <textarea name="description" id="" cols="30" rows="10"></textarea>
            </p>

            Poster :
            <input type="text" name="poster">
            </p>

            Released Date:
            <input type="date" name="released_date">
            </p>

            Status :
            <input type="text" name="status">
            </p>

            <input type="submit" value="Create">

        </form>
    </div>
@endsection