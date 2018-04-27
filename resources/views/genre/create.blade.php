@extends('layouts.app')

@section('content')

<div class="container" id="root">
	
	<form action="{{route('genre.store')}}" method="POST">
		{{csrf_field()}}
		<div class="form-group">
			<label for="genre_name">Genre Name</label>
			<input type="text" name="genre_name" id="genre_name" class="form-control">
			<br>
			
		</div>

		
		<div class="form-group">
			<button type="submit" class="btn btn-success">Create</button>
		</div>
	</form>
</div>


@endsection



