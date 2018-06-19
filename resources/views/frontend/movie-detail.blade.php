@extends('frontend.app')
@section('content')
<section  style='background-image: url({{ asset('storage/movies/' . $movie->slug . '/' . $movie->background ) }});'class="single jumbotron bg-dark movie-background text-light">
	<div class="container">
		<h1 class="jumbotron-heading text-left p-1 pb-3 myanmarsanpro">{{ $movie->name }}
			@for ($i = 0; $i < 4; $i++)	
			<span class="text-small fa fa-xs-movie fa-star checked"></span>
			@endfor
		</h1> 

		<div class="row">
			<div class="col-md-3 nopadding nomargin bg-dark-movie">
				<img width="300px" height="auto" src="{{ asset('storage/movies/' . $movie->slug . '/' . $movie->poster ) }}" alt="">
			</div>
			<div class="col-md-9 nopadding nomargin bg-dark-movie">
				<!-- Youtube Embed Custom Player	 -->
				<div class="plyr__video-embed" id="player">
					<iframe src="https://www.youtube.com/embed/{{ $movie->trailer_id }}?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1" 
						allowfullscreen allowtransparency allow="autoplay"></iframe>
					</div>
				</div>
			</div>
			<div class="row bg-dark-movie">
				<div class="col-md-7  p-3">
					<p class="lead text-muted">{{ $movie->description }}<br>
						ဒါရိုက်တာ : {{ $movie->director_name }}<br>
						ဇာတ်ညွှန်းဆရာ : ---- <br>
						ထူးချွန်ဆုရရှိသူများ :----- <br>
						ဇာတ်လမ်းအမျိုးအစား : @foreach ($movie->genres as $genre)
						{{ $genre->name }}, 
						@endforeach<br>       	
					</p>				
				</div>


				<div class="col-md-5  p-3">
					<p class="rating"> ၄/၅ </p>
					<p class="stars">
						<span class="fa fa-lg fa-star checked"></span>
						<span class="fa fa-lg fa-star checked"></span>
						<span class="fa fa-lg fa-star checked"></span>
						<span class="fa fa-lg fa-star checked"></span>
						<span class="fa fa-lg fa-star"></span>

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
						<h2 class="text-left myanmarsanpro">၅၀၀ မှတ်ချက်ရရှိထားသည်</h2>
						<p>
							@for ($i = 0; $i < 4; $i++)	
							<span class="text-small fa fa-xs-movie fa-star checked"></span>
							@endfor
							<span class="text-small fa fa-xs-movie fa-star-o"></span>							
						</p>
						@if(\Auth::check())
						<a href="{{route('review.create', $movie)}}" class="btn btn-dark btn-movie btn-lg btn-block">မှတ်ချက်ရေးမယ်</a>
						<a href="{{route('review.create', $movie)}}" class="btn btn-dark btn-lg btn-block">မှတ်ချက်ရေးမယ်</a>
						@else
						<a  href="{{route('login')}}" class="btn btn-primary">မွတ္ခ်က္ေရးရန္၀င္ေရာက္ပါ</a>
						
						@endif


					</div>	
					<div class='card p-4 mt-3'>
						<h2 class="text-left myanmarsanpro">ဘယ်မှာပြသနေပြီလဲ</h2>
						<p>
							Mingalar Cinema <br>
							Time: <span class="badge badge-success">9:00 AM</span>
							<span class="badge badge-success"> 12:00 PM</span>
							<span class="badge badge-success">3:30 PM</span>
							<span class="badge badge-warning">6:30 PM</span>
							<span class="badge badge-danger">9:30 PM</span>			
						</p>
						<a href="{{route('review.create', $movie)}}" class="btn btn-dark btn-lg btn-block">လက်မှတ်၀ယ်မယ်</a>						
					</div>						
				</div>
				<div class="col col-md-8 p-2">
					<div class="card p-4">
						<h2 class="text-left myanmarsanpro">နောက်ဆုံးရမှတ်ချက်များ</h2>							
						@foreach($reviews as $review)
						<section class="event">
							<h4 class="event-heading pb-3">
								<a href="{{route('review.show',[$movie,$review]) }}">{{$review->title}}</a></h4>
								{{-- <p class="fs-sm text-muted">၂၀၁၈ခုနှစ် မေလ ၁ရက်နေ င်္နနက် ၅း၃၀</p> --}}

								<p class="fs-mini">{{$review->body}}</p>
								<span class="thumb-sm avatar pull-left mr-sm"><img class="img-circle rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="..."></span>  <h4><a href="#">{{$review->user->name}}</a></h4>
								
								@can('edit-review', $review)
								<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Edit</button>

								<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
									<div class="modal-dialog" role="document">
										<div class="modal-content">
											<div class="modal-header">
												<h5 class="modal-title" id="exampleModalLabel">New message</h5>
												<button type="button" class="close" data-dismiss="modal" aria-label="Close">
													<span aria-hidden="true">&times;</span>
												</button>
											</div>
											<div class="modal-body">
												<form action="{{route('review.update', [$movie, $review])}}" method="POST" class="form-horizontal form-bordered">
													{{ method_field('PATCH') }}
													{{csrf_field()}}

													<div class="form-body">
														<div class="form-group row {{$errors->has('title') ? 'has-error' : ''}}">
															
															<div class="col-md-12">
																<input type="text" class="form-control" name="title" value="{{ $review->title }}" autofocus>


															</div>
														</div>
													</div>
													<div class="form-body">
														<div class="form-group row">
															
															<div class="col-md-12">
																<input type="text" class="form-control" name="body" value="{{ $review->body }}" autofocus>

																

															</div>
														</div>
													</div>

													
													<div class="offset-sm col-md-9">
														<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
														<button type="submit" class="btn btn-primary"> <i class="fa fa-check"></i> Submit</button>

													</div>
												</form>
											</div>
											
										</div>
									</div>
								</div>
								@endcan

								@can('delete-review', $review)
								<form action="{{route('review.destroy', [$movie, $review])}}" method="POST">
									{{method_field('delete')}}
									{{csrf_field()}}
									<button class="btn btn-danger btn-sm">Delete</button>

								</form>
								@endcan					           
								<i class="fa fa-star checked"></i>
								<i class="fa fa-star checked"></i>
								<i class="fa fa-star checked"></i>
								<i class="fa fa-star checked"></i> 
								<img class="custom-icon flex-row chilis" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=">
								<footer>
									<div class="clearfix">
										<ul class="post-links mt-sm pull-left">
											<li><a href="#">တစ်နာရီက</a>
											</li>
											<li><a href="#"> ၁၀ ထပ်ဆင့် မှတ်ချက်ရရှိထားသည်</a>
											</li>
										</ul>
									</div>
								</footer>
							</section>
							@endforeach

							<a href="{{route('review.create', $movie)}}" class="mt-4 btn btn-dark btn-lg btn-block">အြခား မှတ်ချက်များပါ ြကည့်ရှုရန်</a>							

						</div>	
					</div>

				</div>

				<h1 class="mt-5 mb-5 jumbotron-heading text-left myanmarsanpro">ဆက်စပ် ဇာတ်ကားများ</h1>
				@include('frontend.include.relatedmovie') 		

			</div>


		</section>

		@endsection