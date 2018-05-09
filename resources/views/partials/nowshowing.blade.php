<div class="row">
	
	<div class="col-xs-10 col-sm-5 col-md-3">
		
		<figure class="view-images">
			<a href="/">
				<img src="/storage/{{$movie->image}}" alt="{{$movie->movie_name}}" class="indivi-image">
			</a>
			<figcaption class="view-images-overlay">
				<h4>7.7 / 10</h4>
				<?php $genres = $movie->genres->pluck('genre_name');

					$slug= $movie->genres->pluck('genre_name');
				?>
				@foreach($genres as $genre)
				<?php $slug= $genre; 
				?>

				<h4>{{$genre}}</h4>
				@endforeach
				<br>
				<button class="btn view-btn">View Detail</button>
			</figcaption>
		</figure>
		
		
		
	</div>
</div>

<hr>