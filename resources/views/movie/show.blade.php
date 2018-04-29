@extends('layouts.master')


@section('content')





		

			<h1>{{$movie->movie_name}}</h1>
			<h3>{{$movie->director_name}}</h3>
			<p>{{$movie->description}}</p>	
			<h4>{{$movie->released_date}}</h4>


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


			<a href="/movie/{{ $movie->slug }}/edit" class="btn btn-primary" style="margin-bottom: 10px">Edit</a>


			<form action="{{ route('movie.destroy', $movie->slug) }}" method="post">
				{{ csrf_field() }}
				{{ method_field('delete') }}
				<button class="btn btn-danger">Delete</button>
			</form>


	<hr>




	


	
@endsection

<br>
<br>
<br>