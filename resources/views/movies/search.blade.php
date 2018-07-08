@extends('frontend.app')
@section('title', 'Search the best Myanmar Movie')
@section('description', 'Easy search & watch one place movie review database in MovieSpicy')
@section('keywords', 'myanmar movie review, free movie in myanmar')
@section('image')
@section('content')
<section class="listing jumbotron">
	<div class="container">
		<div class="row">
			<div class="col-md-4">
				<div class="card text-dark">
					<div class="card-header">
						<h2 class='pb-3 myanmarsanpro'> {{ __('messages.search') }}</h2>
						<p class='pb-2'>ကြိုက်နှစ်သက်ရာ ဇာတ်ကား၊ ရုပ်ရှင်ဇာတ်လမ်းများကို စိတ်ကြိုက်ရှာဖွေလိုက်ပါ</p>
					</div>
					<div class="card-body p-0">
						<form action="/search" method="GET">
							<div class="form-row">
								<div class="p-3 w-100">
                                <input type="text" class="form-control" placeholder="ဇာတ်ကားအမည်" name="name" @if (request()->name) value="{{ request()->name }}"  @endif>
								</div>
								<div class="p-1 slidecontainer row text-center">
									<div class='col'>
										အနည်းဆုံး ြကယ် <input id="input-1-ltr-star-xs" name="min_rating" id="min_rating" class="star-reaction rating-loading" @if (request()->min_rating) value="{{ request()->min_rating }}" @else value="0" @endif dir="ltr" data-size="xs">	
									</div>
									<div class='col'>
										အများဆုံး ြကယ် 
									<input id="input-1-ltr-star-xs" name="max_rating" id="max_rating" class="star-reaction rating-loading" @if (request()->max_rating) value="{{ request()->max_rating }}" @else value="5" @endif dir="ltr" data-size="xs">									
									</div>								
								</div>	   		
								<div class="p-2 ml-2 mr-2 w-100">
									<select id="category" name="genre_id" class="form-control">
										<option value='' selected>အမျိုးအစား</option>
										@foreach($genres as $key=>$value)
										<option value="{{$key}}" @if (request()->genre_id == $key) selected @endif>{{$value}}</option>

										@endforeach
									</select>
								</div>
								<div class="p-2 ml-2 mr-2 w-100">
									<select id="year" name="released_date" class="form-control">
										<option value='' selected>အချိန်အလိုက်</option>
										@foreach($years as $year)
										<option value="{{$year}}" @if (request()->released_date == $year) selected @endif>{{numformat($year)}}</option>

										@endforeach
									</select>
								</div>
								
								<div class="p-2 m-2 w-100">
									<button type="submit" class="btn btn-primary btn-lg btn-movie btn-block">{{__('messages.search2')}}</button>
								</div>  		   		 		   		
							</div>
						</form>				

					</div>					
				</div>
			</div>
			<div class="col-md-8">
				@if ($results->count() !== 0)
						<h2 class='pt-3 pl-3 pb-1 myanmarsanpro'>{{__('messages.search-result')}}</h2>
						<p class='pl-3'>( {{numformat($results->total())}} ) {{__('messages.has-movie')}}</p>
					@else
						<h2 class='pt-3 pl-3 pb-1 myanmarsanpro'>{{__('messages.search-result')}}</h2>
						<p class='pl-3 alert alert-danger'>{{__('messages.no-has-movie')}}</p>					
				@endif
				<div class="row">
					@foreach($results as $result)
					<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
						<div class="recent-movie-block">
							<div class="recent-movie-img">
								<img class="lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="{{ asset('storage/movies/' . $result->slug . '/' . $result->poster ) }} "/>
								<div class="recent-movie-content p-3">
									<h4 class="text-white mb0">{{$result->name}}</h4>
									<div>
										<p class="rating"> {{numformat($result->rating)}}/၅  </p>
										<p class="stars">
											<input id="input-1-ltr-star-xs" name="input-1-ltr-star-xs" class="star-readonly rating-loading" value="{{$result->rating}}" dir="ltr" data-size="Xxs" data-readonly="true"> 
										</p>

									</div>
								</div>
								<div class="overlay">
									<div class="card-header">
										<h3 class="text-dark mb0">{{$result->name}}</h3>
									</div>
									<div class="card-body">
										{{-- ၁၀  <img class="custom-icon flex-row chilis" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=">  | 
										၁၀  <img class="custom-icon flex-row putato" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=">  | 
										၁၀  <img class="custom-icon flex-row ginger" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=">   		 --}}
                                        <p class="rating"> {{numformat($result->rating)}}/၅  </p>
                                        <img class="{{ $result->rating_level }}" />
										<p class="stars">
											<input id="input-1-ltr-star-xs" name="input-1-ltr-star-xs" class="star-readonly rating-loading" value="{{$result->rating}}" dir="ltr" data-size="Xxs" data-readonly="true"> 
										</p>
									</div>
									<div class="card-footer nopadding">
										<a class="align-text-bottom btn btn-dark align-text-bottom btn-lg btn-block" href="{{route('movie.show', $result)}}" role="button">ကြည့်မယ်</a>
									</div>	
								</div>
							</div>
						</div>
					</div>   
					@endforeach

				</div>
				{{ $results->appends(Request::except('page'))->links() }}
			</div>

		</div>
	</div>


</section>
@endsection