@extends('layouts.master')


@section('content')


	<br>
		<a href="{{route('movie.create')}}" class="btn btn-success">Create</a>
		<br>
		<br>
	

	@foreach($movies as $movie)

			<img src='{{$movie->movie_image}}' width="200">
	
			<h1 >Movie Name: <a href="/movie/{{ $movie->slug }}">{{$movie->movie_name}}</a></h1>
			
			
			<h3>Director Name: {{$movie->director_name}}</h3>
			<h4>Movie Description: {{$movie->description}}</h4>	
			<h4>Movie Released-Date: {{$movie->released_date}}</h4>

			
				
			<?php $genres = $movie->genres->pluck('genre_name', 'id'); 

					$slug = $movie->genres->pluck('slug');
					
			?>
			
			@foreach($genres as $genre)
			<?php 
				$slug = $genre;
    			$slug = str_slug($slug, "-");
			?>
			
			<a href="/movie/genre/{{$slug}}">{{$genre}}</a>
	

			@endforeach
		

			<br>
			<br>
	
			<a href="/movie/{{$movie->slug}}/edit" class="btn btn-primary">Edit</a>
			<br>
			<br>
			<form action="{{ route('movie.destroy', $movie->slug) }}" method="post">
				{{ csrf_field() }}
				{{ method_field('delete') }}
				<button class="btn btn-danger">Delete</button>
			</form>


		
	
		<hr>
		@endforeach


	{{$movies->links()}}



@endsection