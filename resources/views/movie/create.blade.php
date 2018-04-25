@extends('layouts.app')

@section('content')

<div class="container" id="root">
	<form action="{{route('movie.store')}}" method="POST" @submit.prevent="onSubmit" @click="errors.clear($event.target.name)">
		{{csrf_field()}}
		<div class="form-group">
			<label for="movie_name">Movie Name</label>
			<input type="text" name="movie_name" id="movie_name" class="form-control" v-model="movie_name">
			<br>
			<div class="alert alert-danger" v-if="errors.has('movie_name')" v-text="errors.get('movie_name')"></div>
		</div>

		<div class="form-group">
			<label for="director_name">Director Name</label>
			<input type="text" name="director_name" id="director_name" class="form-control" v-model="director_name">
			<br>
			<div class="alert alert-danger" v-if="errors.has('director_name')" v-text="errors.get('director_name')"></div>
		</div>

		<div class="form-group">
			<label for="description">Description</label>
			<input type="text" name="description" id="description" class="form-control" v-model="description">
			<br>
			<div class="alert alert-danger" v-if="errors.has('description')" v-text="errors.get('description')"></div>
		</div>

		<div class="form-group">
			<label for="genres">Genres</label>
			<input type="text" name="genres" id="genres" class="form-control" v-model="genres">
			<br>
			<div class="alert alert-danger" v-if="errors.has('genres')" v-text="errors.get('genres')"></div>
		</div>


		<div class="form-group">
			<label for="released_date">Released Date</label>
			<input type="date" name="released_date" id="released_date" class="form-control" v-model="released_date" >
			<br>
			<div class="alert alert-danger" v-if="errors.has('released_date')" v-text="errors.get('released_date')"></div>
		</div>
		<div class="form-group">
			<button type="submit" class="btn btn-success" :disabled="errors.any()">Create</button>
		</div>
	</form>
</div>


@endsection



