<section class="container-fluid slider-custom">
	
	<div class="card-list">
		@foreach ($showingMovies as $key => $movie)

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
									<input name="input-5-ltr-star-xs-{{$key}}" class="star-readonly" rating-loading" value="{{$movie['rating']}}" dir="ltr" data-size="xxs" data-readonly="true">
								</p>
		        <a class="align-text-bottom btn btn-dark float-right" href="{{ route('movie.show', $movie->slug) }}" role="button">{{__('messages.watchit')}}</a> 	
		        	</div>
		        </div>   
			</div>
		</div>
		            
        @endforeach
	</div>
</section>