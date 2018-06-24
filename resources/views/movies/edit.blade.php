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
        <h2>Edit Movie</h2>
        <form action="{{ route('movie.update', $movie->slug) }}" method="POST">
            {{ method_field('PATCH') }}

            {{  csrf_field() }}

            Movie Name :
            <input type="text" name="name" value="{{ $movie->name }}">
            </p>

            Director Name :
            <input type="text" name="director_name" value="{{ $movie->director_name }}">
            </p>

            Description :
            <textarea name="description" id="" cols="30" rows="10" > {{ $movie->description }}</textarea>
            </p>

            Poster :
            <input type="text" name="poster" value="{{ $movie->poster }}">
            </p>

            Released Date:
            <input type="date" name="released_date" value="{{ $movie->released_date }}">
            </p>

            Status :
            <input type="text" name="status" value="{{ $movie->status }}">
            </p>

            <input type="submit" value="Create">

        </form>
    </div>
@endsection