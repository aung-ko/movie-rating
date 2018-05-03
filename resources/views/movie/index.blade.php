@extends('layouts.master')

@section('header')
<header class="masthead" style="background-image: url('/img/home-bg.jpg')">
	<div class="overlay"></div>
	<div class="container">
		<div class="row">
			<div class="col-lg-8 col-md-10 mx-auto">
				<div class="site-heading">
					<h1>Clean Blog</h1>
					<span class="subheading">A Blog Theme by Start Bootstrap</span>
				</div>
			</div>
		</div>
	</div>
</header>
@endsection

@section('content')



<div class="container">
	<div class="row">
		<div class="col-lg-12 col-md-12">
			<div class="post-preview">
				@foreach($movies as $movie)
				<div class="row">
					<div class="col-lg-4">
						<img src='{{$movie->movie_image}}' width="300">
					</div>
					<div class="col-lg-8">


						<h2 class="post-title"><a href="/movie/{{ $movie->slug }}">{{$movie->movie_name}}</a></h2>


						<h3>Director Name: {{$movie->director_name}}</h3>

						

						

						<p class="post-meta">Movie Released by
							{{$movie->released_date}}
						</p>

						<?php $genres = $movie->genres->pluck('genre_name', 'id'); 

						$slug = $movie->genres->pluck('slug');

						?>

						@foreach($genres as $genre)
						<?php 
						$slug = $genre;
						$slug = str_slug($slug, "-");
						?>

						<a href="/movie/genre/{{$slug}}" class="btn btn-dark">
							{{ $genre }}
						</a>


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





					</div>
				</div>
				<hr>
				@endforeach
			</div>
		</div>
	</div>
</div>




{{$movies->links()}}



@endsection