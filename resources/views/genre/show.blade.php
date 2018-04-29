@extends('layouts.master')


@section('content')

	@foreach($movieByGenre as $movie)


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
			<hr>
	@endforeach


@endsection

<br>
<br>
<br>