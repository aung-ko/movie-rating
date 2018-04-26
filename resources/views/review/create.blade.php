@extends('layouts.app')


@section('content')

	<div class="container">
		<form action="{{route('review.store')}}" method="POST">
			{{csrf_field()}}
			<div class="form-group">
				<label for="review_name">Review Name</label>
				<input type="text" name="review_name" id="review_name" class="form-control">
			</div>

{{-- 			<div class="form-group">
				<label for="user_id">User ID</label>
				<input type="text" name="user_id" id="user_id" class="form-control">
			</div> --}}

			<div class="form-group">
				<label for="movie_id">Movie ID</label>
				<input type="text" name="movie_id" id="movie_id" class="form-control">
			</div>

			<div class="form-group">
				<label for="description">Description</label>
				<input type="text" name="description" id="description" class="form-control">
			</div>

			<button type="submit" class="btn btn-success">Create</button>

		</form>
	</div>

@endsection