@extends('layouts.app')


@section('content')

<div class="container">




	<div class="row">
		
		<div class="col-md-8">
			<h1>{{$movie[0]['movie_name']}}</h1>
			<h3>{{$movie[0]['director_name']}}</h3>
			<p>{{$movie[0]['description']}}</p>
			<small>{{$movie[0]['genres']}}</small>
			<h4>{{$movie[0]['released_date']}}</h4>
		</div>



		<div class="col-md-4">

			<a href="/movie/{{ $movie[0]['slug'] }}/edit" class="btn btn-primary" style="margin-bottom: 10px">Edit</a>

			<form action="{{ route('movie.destroy', $movie[0]['id']) }}" method="post">
				{{ csrf_field() }}
				{{ method_field('delete') }}
				<button class="btn btn-danger">Delete</button>
			</form>
		</div>

		
	</div>
	<hr>




</div>


@endsection