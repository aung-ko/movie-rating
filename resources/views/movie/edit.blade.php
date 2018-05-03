@extends('layouts.app')


@section('content')

<div class="container">

	<form action="{{route('movie.update', $movie->slug)}}" method="POST" enctype='multipart/form-data'>
		{{ method_field('PATCH') }}
		{{csrf_field()}}


		<div class="form-group">
			<label for="movie_image">Image Edit</label>
			<input name="movie_image" type="file" class="form-control-file" id="movie_image">
		</div>
		<img src="{{$movie->movie_image}}" width="200">
		<div class="form-group">
			<label for="movie_name">Movie Name</label>
			<input type="text" name="movie_name" id="movie_name" class="form-control" value="{{$movie->movie_name}}">
		</div>

		<div class="form-group">
			<label for="director_name">Director Name</label>
			<input type="text" name="director_name" id="director_name" class="form-control" value="{{$movie->director_name}}">
		</div>

		<div class="form-group">
			<label for="description">Description</label>
			<input type="text" name="description" id="description" class="form-control" value="{{$movie->description}}">
		</div>



		<div class="form-group">
			<label for="genre_id">Genres</label>
			<select class="form-control myclass" name="genre_id[]" multiple="multiple">
				@foreach($genre as $key=>$value)
				<option value="{{ $key }}">{{ $value }}</option>
				@endforeach
			</select>
			<br>
		</div>


		<div class="form-group">
			<label for="released_date">Released Date</label>
			<input type="date" name="released_date" id="released_date" class="form-control" value="{{$movie->released_date}}">
		</div>

		<button type="submit" class="btn btn-primary">Edit</button>

	</form>
	
</div>

@endsection