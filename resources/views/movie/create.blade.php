@extends('layouts.app')


@section('content')

	<div class="container">
		<form action="{{route('movie.store')}}" method="POST">
			{{csrf_field()}}
			<div class="form-group">
				<label for="movie_name">Movie Name</label>
				<input type="text" name="movie_name" id="movie_name" class="form-control">
			</div>

			<div class="form-group">
				<label for="director_name">Director Name</label>
				<input type="text" name="director_name" id="director_name" class="form-control">
			</div>

			<div class="form-group">
				<label for="description">Description</label>
				<input type="text" name="description" id="description" class="form-control">
			</div>

			<div class="form-group">
				<label for="genres">Genres</label>
				<input type="text" name="genres" id="genres" class="form-control">
			</div>


			<div class="form-group">
				<label for="released_date">Released Date</label>
				<input type="date" name="released_date" id="released_date" class="form-control">
			</div>

			<button type="submit" class="btn btn-success">Create</button>

		</form>
	</div>

@endsection