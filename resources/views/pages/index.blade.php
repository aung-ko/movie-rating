@extends('frontend.app')
@section('content')
@include('frontend.include.homeslider')  
@include('frontend.include.searchweight')
<section class="content">
	<div class="container">
		<div class="row">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb40 text-center">
				<h1 class='m-4 myanmarsanpro'>{{__('messages.this-week-movie')}}</h1>
			</div>
		</div>
		<div class="row">
			{{-- {{dd($movies)}} --}}
			@foreach ($movies as $movie)
			<div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">

				<div class="recent-movie-block">
					<div class="recent-movie-img">
						<img class="lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="{{ asset('storage/movies/' . $movie->slug . '/' . $movie->poster ) }}"/>
						<div class="recent-movie-content p-3">
							<h4 class="text-white mb0">{{ $movie['name'] }}</h4>
							<div>
								<p class="rating"> {{numformat($movie['rating'])}}/၅  </p>
								<p class="stars">
									@for($i=1; $i<=$movie['rating']; $i++)
										<span class="fa fa-lg fa-star checked"></span>
									@endfor 
									@for($i=1; $i<=5-$movie['rating']; $i++)
										<span class="fa fa-lg fa-star"></span>
									@endfor 
								</p>
							</div>
						</div>
						<div class="overlay">
							<div class="card-header">
								<h3 class="text-dark mb0">{{ $movie['name'] }}</h3>
							</div>
							<div class="card-body">
								၁၀  <img class="custom-icon flex-row chilis" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=">  | 
								၁၀  <img class="custom-icon flex-row putato" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=">  | 
								၁၀  <img class="custom-icon flex-row ginger" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=">   		
								<p class="rating"> {{numformat($movie['rating'])}}/၅  </p>
								<p class="stars">
									@for($i=1; $i<=$movie['rating']; $i++)
										<span class="fa fa-lg fa-star checked"></span>
									@endfor 
									@for($i=1; $i<=5-$movie['rating']; $i++)
										<span class="fa fa-lg fa-star"></span>
									@endfor 
								</p>
								<p>{{ str_limit($movie->description, 120) }}</p>
							</div>
							<div class="card-footer nopadding">
								<a class="align-text-bottom btn btn-dark align-text-bottom btn-lg btn-block" href="{{ route('movie.show', $movie->slug) }}" role="button">ကြည့်မယ်</a>
							</div>	
						</div>
					</div>
				</div>
			</div>   
			@endforeach
		</div>
	</div>    

</section>
@include('frontend.include.pagination')
@endsection