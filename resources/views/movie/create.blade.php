@extends('layouts.app')

@section('content')

<div class="container" id="root">
	<form action="{{route('movie.store')}}" method="POST">
		{{csrf_field()}}
		<div class="form-group">
			<label for="movie_name">Movie Name</label>
			<input type="text" name="movie_name" id="movie_name" class="form-control">
			<br>
			
		</div>

		<div class="form-group">
			<label for="director_name">Director Name</label>
			<input type="text" name="director_name" id="director_name" class="form-control">
			<br>
			
		</div>

		<div class="form-group">
			<label for="description">Description</label>
			<input type="text" name="description" id="description" class="form-control">
			<br>
			
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
			<input type="date" name="released_date" id="released_date" class="form-control">
			<br>
			
		</div>
		<div class="form-group">
			<button type="submit" class="btn btn-success">Create</button>
		</div>
	</form>
</div>


@endsection



