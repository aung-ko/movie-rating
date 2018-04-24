@extends('layouts.app')


@section('content')

	<div class="container">
		<form action="{{route('movie.update', $movie[0]['id'])}}" method="POST">
			{{ method_field('PATCH') }}
			{{csrf_field()}}
			<div class="form-group">
				<label for="movie_name">Movie Name</label>
				<input type="text" name="movie_name" id="movie_name" class="form-control" value="{{$movie[0]['movie_name']}}">
			</div>

			<div class="form-group">
				<label for="director_name">Director Name</label>
				<input type="text" name="director_name" id="director_name" class="form-control" value="{{$movie[0]['director_name']}}">
			</div>

			<div class="form-group">
				<label for="description">Description</label>
				<input type="text" name="description" id="description" class="form-control" value="{{$movie[0]['description']}}">
			</div>

			<div class="form-group">
				<label for="genres">Genres</label>
				<input type="text" name="genres" id="genres" class="form-control" value="{{$movie[0]['genres']}}">
			</div>


			<div class="form-group">
				<label for="released_date">Released Date</label>
				<input type="date" name="released_date" id="released_date" class="form-control" value="{{$movie[0]['released_date']}}">
			</div>

			<button type="submit" class="btn btn-primary">Edit</button>

		</form>
	</div>

@endsection