@extends('frontend.app')
@section('content')
<section  style='background-image: url({{ asset('storage/movies/' . $movie->slug . '/' . $movie->background ) }});' class="single jumbotron bg-dark movie-background text-light img-background">
        <div class="container">
	          <h1 class="jumbotron-heading text-left p-1 pb-3 myanmarsanpro">{{ $movie->name }} - {{numformat(date('Y',strtotime($movie->released_date)))}}</h1> 

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
		          <p class="lead text-muted">{{ $movie->description }}<br>
					{{__('messages.director')}} : {{ $movie->director_name }}<br>
					{{__('messages.genre')}} : @foreach ($movie->genres as $genre)
	                    {{ $genre->name }}, 
	                @endforeach<br>       	
		          </p>				
	 			</div>


	 			<div class="col-md-5  p-3">
	            	<p class="rating"> {{numformat($movie->rating)}}/{{numformat(5)}} </p>
					<p class="stars">
						@for($i=1; $i<=$movie->rating; $i++)
							<span class="fa fa-lg fa-star checked"></span>
						@endfor 
						@for($i=1; $i<=5-$movie->rating; $i++)
							<span class="fa fa-lg fa-star"></span>
						@endfor 
					</p>
					<div class="text-right other-rating">
						 ၁၀  <img class="custom-icon flex-row chilis" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=">  | 
						 ၁၀  <img class="custom-icon flex-row putato" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=">  | 
						 ၁၀  <img class="custom-icon flex-row ginger" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=">					
					</div>	        						
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
					<p class="stars text-left pt-2 pb-2">
						@for($i=1; $i<=$movie->rating; $i++)
							<span class="fa fa-lg fa-star checked"></span>
						@endfor 
						@for($i=1; $i<=5-$movie->rating; $i++)
							<span class="fa fa-lg fa-star"></span>
						@endfor 
					</p>
		          	<a href="{{route('review.create', $movie)}}" class="btn btn-dark btn-movie btn-lg btn-block">{{__('messages.write-comment')}}</a>		          						
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
											<a href="{{route('review.show',[$movie,$review]) }}">{{$review->title}}</a></h4>
											{{numdate($review->created_at)}}
											{{-- <p class="fs-sm text-muted">၂၀၁၈ခုနှစ် မေလ ၁ရက်နေ င်္နနက် ၅း၃၀</p> --}}

							           <p class="fs-mini">{{$review->body}}</p>
							            	<span class="thumb-sm avatar pull-left mr-sm"><img class="img-circle rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="..."></span>  <h4><a href="#">{{$review->user->name}}</a></h4>							           
							            <i class="fa fa-star checked"></i>
							            <i class="fa fa-star checked"></i>
							            <i class="fa fa-star checked"></i>
							            <i class="fa fa-star checked"></i> 



							            <img class="custom-icon flex-row chilis" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=">
							            <footer>
							                <div class="clearfix">
							                    <ul class="post-links mt-sm pull-left">
							                        <li><a href="#">{{numformat(1)}} {{__('messages.when.hour')}}</a>
							                        </li>
							                        <li><a href="#"> {{numformat(10)}} {{__('messages.receive-reply')}}</a>
							                        </li>
							                    </ul>
							                </div>
							         </footer>
							     </section>
							@endforeach

							<a href="{{route('review.create', $movie)}}" class="mt-4 btn btn-dark btn-lg btn-block">{{__('messages.view-other-comment')}}</a>							
					          												
					</div>	
				</div>
				
			</div>

			<h1 class="mt-5 mb-5 jumbotron-heading text-left myanmarsanpro">{{__('messages.related-movie')}}</h1>
			@include('frontend.include.relatedmovie') 		

	</div>


</section>

@endsection