@extends('layouts.app')


@section('content')

<div class="container">

	<div class="row">
		<a href="{{route('movie.create')}}" class="btn btn-success">Create</a>
	</div>

	@foreach($movies as $movie)


	<div class="row">
		
		<div class="col-md-8">
			<h1 ><a href="/movie/{{ $movie->slug }}">{{$movie->movie_name}}</a></h1>
			
			
			<h3>{{$movie->director_name}}</h3>
			<p>{{$movie->description}}</p>
			<small>{{$movie->genres}}</small>
			<h4>{{$movie->released_date}}</h4>
		</div>

		<div class="col-md-4">

			<a href="/movie/{{$movie->slug}}/edit" class="btn btn-primary" style="margin-bottom: 10px">Edit</a>

			<form action="{{ route('movie.destroy', $movie->id) }}" method="post">
				{{ csrf_field() }}
				{{ method_field('delete') }}
				<button class="btn btn-danger">Delete</button>
			</form>
		</div>

		
	</div>
	<hr>
	@endforeach

	{{$movies->links()}}

</div>


@endsection