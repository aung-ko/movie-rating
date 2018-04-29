@extends('layouts.app')


@section('content')

<div class="container">
	
	<form action="{{route('genre.update', $genre->slug)}}" method="POST">
		{{ method_field('PATCH') }}
		{{csrf_field()}}
		<div class="form-group">
			<label for="genre_name">Genre Name</label>
			<input type="text" name="genre_name" id="genre_name" class="form-control" value="{{$genre->genre_name}}">
		</div>


		<div class="form-group">
			<button type="submit" class="btn btn-primary">Edit</button>
		</div>

	</form>

</div>

@endsection