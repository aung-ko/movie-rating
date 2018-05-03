@extends('layouts.master')


@section('content')



<div class="container">
	<div class="row">
		<div class="col-lg-12 col-md-12">
			<div class="post-preview">

				<div class="row">
					<div class="col-lg-4">
						<div class="row">

							<img id="myImg" src="{{$movie->movie_image}}" alt="{{$movie->movie_name}}" width="300" height="300">

							<div id="myModal" class="modal">

								<span class="close">&times;</span>

								<img class="modal-content" id="img01">

								<div id="caption"></div>
							</div>

						</div>
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
				<div class="row">
					<div class="col-lg-8 col-md-10 mx-auto">
						<div class="post-preview" style="text-align: center">
							<a href="post.html">
								<h2 class="post-title">
									Description
								</h2>
							</a>
							<p class="post-subtitle" style="text-align: left">
								{{$movie->description}}
							</p>
							<p class="post-meta">Posted by
								<a href="#">Start Bootstrap</a>
							on September 24, 2018</p>
						</div>



					</div>

				</div>

				<div class="row">
					<a href="{{route('image.create', 'movie_id='.$movie->id)}}" class="btn btn-primary">Create Image</a>

				</div>
				<br>
				<div class="row">
					@foreach($images as $image)
						
						<img src="{{$image->image_path}}" width="200" height="200">
						
						<br>
					@endforeach
				
				</div>

			</div>
		</div>
	</div>
</div>





@endsection

<br>
<br>