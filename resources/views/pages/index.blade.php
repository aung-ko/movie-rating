@extends('frontend.app')
@section('title', 'Best Movie Review website in Myanmar')
@section('description', 'Watch movie trailer, Have fun & Enjoy with your friends & family')
@section('keywords', 'myanmar movie review, free movie in myanmar')
@section('image', 'http://127.0.0.1:8000/img/logo.png')
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
			{{-- {{dd($comingSoonMovies)}} --}}
			@foreach ($comingSoonMovies as $key => $movie)
			<div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">

				<div class="recent-movie-block">
					<div class="recent-movie-img">
						<img class="lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="{{ asset('storage/movies/' . $movie->slug . '/' . $movie->poster ) }}"/>
						<div class="recent-movie-content p-3">
							<h4 class="text-white mb0">{{ $movie['name'] }}</h4>
							<div>
								<p class="rating"> {{numformat($movie['rating'])}}/၅  </p>
								<p class="stars">
									<input name="input-1-ltr-star-xs-{{$key}}" class="star-readonly" rating-loading" value="{{$movie['rating']}}" dir="ltr" data-size="xxs" data-readonly="true">
								</p>
							</div>
						</div>
						<div class="overlay">
							<div class="card-header">
								<h3 class="text-dark mb0">{{ $movie['name'] }}</h3>
							</div>
							<div class="card-body">
								<p class="rating"> {{numformat($movie['rating'])}}/၅  </p>
								<p class="stars">
									<input name="input-1-ltr-star-xs-{{$key}}" class="star-readonly" rating-loading" value="{{$movie['rating']}}" dir="ltr" data-size="xxs" data-readonly="true">
								</p>
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