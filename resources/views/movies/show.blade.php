@extends('frontend.app')
@section('title', 'Watch '.($movie->name).' movie free in Myanmar movie database ')
@section('description', ($movie->name).' released in '.(date('Y',strtotime($movie->released_date)). ' directed by '.($movie->director_name).' the brief of movie - '.($movie->description)))
@section('keywords', ($movie->name).' in Myanmar')
@section('image', asset('storage/movies/' . $movie->slug . '/' . $movie->poster ))
@section('content')
<section  style='background-image: url({{ asset('storage/movies/' . $movie->slug . '/' . $movie->background ) }});' class="single jumbotron bg-dark movie-background text-light img-background">
        <div class="container">
	          <h1 class="jumbotron-heading text-left p-1 pb-3 myanmarsanpro">{{ $movie->name }} ({{numformat(date('Y',strtotime($movie->released_date)))}})</h1> 

	          <div class="row">
	          	<div class="col-md-3 nopadding nomargin bg-dark-movie">
                    @if($movie->poster == !null)
                    <img class="lazy 1-100" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="{{ asset('storage/movies/' . $movie->slug . '/' . $movie->poster ) }} " width='100%'/>
                    @else
                    <img class="lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="http://via.placeholder.com/255x375"/>
                    @endif
	            </div>
	          	<div class="col-md-9 nopadding nomargin bg-dark-movie">
					<!-- Youtube Embed Custom Player	 -->
					<div class="plyr__video-embed" id="player">
	                    <iframe src="https://www.youtube.com/embed/{{ $movie->trailer_id }}?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1" 
	                    allowfullscreen allowtransparency allow="autoplay"></iframe>
					</div>
				</div>
	          </div>
	 		<div class="row bg-light">
	 			<div class="col-md-7  p-3">
		          <p class="text-muted">{{ $movie->description }}<br><br>
					{{__('messages.director')}} : {{ $movie->director_name }}<br>
					{{__('messages.genre')}} : @foreach ($movie->genres as $genre)
	                    {{ $genre->name }}, 
	                @endforeach<br>       	
		          </p>				
	 			</div>


	 			<div class="col-md-5  p-3">
	            	<p class="rating"> {{numformat($movie->rating)}}/{{numformat(5)}} </p>
					<p class="stars">
						<input id="input-1-ltr-star-xs" name="input-1-ltr-star-xs" class="star-readonly rating-loading" value="{{$movie->rating}}" dir="ltr" data-size="xs" data-readonly="true">
					</p>        						
	 			</div>
	 		</div> 		
        </div>
</section>
<section class="single bg-light">
	<div class="container pt-4">
			<div class='row'>
				<div class='col col-md-4 p-2'>
					<div class='card p-4'>
					<h2 class="text-left myanmarsanpro"> {{ __('messages.comment')}} ( {{numformat($reviews->count())}} ) {{__('messages.receive')}}</h2>

		          	<a href="{{route('review.create', $movie)}}" class="mt-3 btn btn-dark btn-movie btn-lg btn-block">{{__('messages.write-comment')}}</a>		          						
					</div>	
					<div class='card p-4 mt-3'>
					<h2 class="text-left myanmarsanpro">{{__('messages.show-cinema')}}</h2>
						<p>
							Mingalar Cinema <br>
							Time: <span class="badge badge-success">9:00 AM</span>
								  <span class="badge badge-success"> 12:00 PM</span>
								  <span class="badge badge-success">3:30 PM</span>
								  <span class="badge badge-warning">6:30 PM</span>
								  <span class="badge badge-danger">9:30 PM</span>			
						</p>
		          	<a href="{{route('review.create', $movie)}}" class="btn btn-dark btn-lg btn-block">{{__('messages.buy-ticket')}}</a>						
					</div>						
				</div>
				<div class="col col-md-8 p-2">
					<div class="p-4">
							<h2 class="text-left myanmarsanpro">{{__('messages.recent-comments')}}</h2>							
							@foreach($reviews as $review)
							    <section class="event mb-4">
							            <h4 class="event-heading pb-3">
                                            <a href="{{route('review.show',[$movie,$review]) }}">{{$review->title}}</a>
                                            <span style="font-size: 12px;" class="row pl-3">
                                                <input id="input-1-ltr-star-xs" name="input-1-ltr-star-xs" class="star-readonly rating-loading" 
                                                value="{{$review->rating}}" dir="ltr" data-size="xxs" data-readonly="true">
                                                {{numformat($review->rating)}}/၅
                                            </span>
                                        </h4>
											
							           <p class="fs-mini">{{$review->body}}</p>
                                            <span class="thumb-sm avatar pull-left mr-sm"><img class="img-circle rounded-circle" src="{{ asset('storage/users/' . $review->user->img) }}" alt="..."></span>  
                                            <h4><a href="{{ route('user', $review->user->slug) }}">{{$review->user->name}}</a></h4>				
							            		{{numdate($review->created_at)}}  <br>
							            <footer>
							                <div class="clearfix">
							                    <ul class="post-links mt-sm pull-left">
                                                    <li>{{ $review->created_at->diffForHumans() }}</li>
							                        <li><a href="{{ route('review.show',[$movie,$review]) }}"> {{__('messages.reply')}} {{numformat($review->replys->count())}} {{__('messages.receive')}}</a>
							                        </li>
							                    </ul>
							                </div>
							         </footer>
							     </section>
							@endforeach
							@if($reviews->count() == !0)
							<a href="{{route('review.all', $movie)}}" class="mt-4 btn btn-dark btn-lg btn-block">{{__('messages.view-other-comment')}}</a>
							@else
							<a href="{{route('review.create', $movie)}}" class="mt-4 btn btn-dark btn-lg btn-block">{{__('messages.be-first-comment')}}</a>							
							@endif							
					          												
					</div>	
				</div>
				
			</div>

			<h1 class="mt-5 mb-5 text-left myanmarsanpro">{{__('messages.related-movie')}}</h1>
			@include('frontend.include.relatedmovie') 		

	</div>


</section>

@endsection