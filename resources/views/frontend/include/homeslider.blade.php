<section class="container-fluid slider-custom">
	
	<div class="card-list">
		@foreach ($showingMovies as $movie)

		<div class="card">
		    <div class="thumbnail">
		        <img class="left" src="{{ asset('storage/movies/' . $movie->slug . '/' . $movie->poster ) }}"/>
		    </div>
		    <div class="right">
		        <h1 class="card-title">{{ $movie->name }}</h1>
		        <div class="separator"></div>

		        <div class='row'>
		        	<div class="card-body">
			        	<div class='stars-rating'>
			        		<p class="rating"> {{numformat($movie['rating'])}}/၅  </p>
			        		</div>
								<p class="stars">
									@for($i=1; $i<=$movie['rating']; $i++)
										<span class="fa fa-lg fa-star checked"></span>
									@endfor 
									@for($i=1; $i<=5-$movie['rating']; $i++)
										<span class="fa fa-lg fa-star"></span>
									@endfor 
								</p>
			        	<p>{{ str_limit($movie->description, 90) }}</p>	
		        <a class="align-text-bottom btn btn-dark float-right" href="{{ route('movie.show', $movie->slug) }}" role="button">{{__('messages.watchit')}}</a> 			        		        		
		        	</div>
		        </div>   
			</div>
		</div>
		            
        @endforeach
	</div>
</section>