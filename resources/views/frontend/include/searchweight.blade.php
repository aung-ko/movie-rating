<section class="container-fluid bg-movie-theme1 text-light">
	<div class='container mx-auto movie-search p-5'>
		<h1 class='text-center p-3 myanmarsanpro'>{{ __('messages.lets-search') }}</h1>
		<form action="/search" method="GET">
			<div class="form-row">
				<div class="col-md-6">
					<input type="text" class="form-control" placeholder="ဇာတ်ကားအမည်" name="name" id="name">
				</div>
				<div class="col-md-2 text-center">
					{{trans_choice('messages.ratings',1)}} 
					<input id="input-3-ltr-star-xs" name="min_rating" id="min_rating" class="star-readonly" rating-loading" value="1" dir="ltr" data-size="xxs">
				</div>
				<div class="col-md-2 text-center">
					{{trans_choice('messages.ratings',5)}}
					<input id="input-2-ltr-star-xs" name="max_rating" id="max_rating" class="star-readonly" rating-loading" value="1.5" dir="ltr" data-size="xxs">									
				</div>
				
				<div class="collapse multi-collapse col-md-4 mt-3 mb-3" id='collapsehome'>					
					<select id="genre_id" name="genre_id" class="form-control">
						<option value=''>အမျိုးအစား</option>
						@foreach($genres as $key=>$value)
						<option value="{{$key}}">{{$value}}</option>						
						@endforeach
					</select>
				</div>
				<div class="collapse multi-collapse col-md-6 mt-3 mb-3" id='collapsehome'>
					<select id="year" name="released_date" class="form-control">
						<option value=''>ခုနှစ်</option>
						@foreach($years as $year)
						<option value="{{$year}}">{{numformat($year)}}</option>
						@endforeach
					</select>
				</div>
							

				<div class="col-md-2">
					<button type="submit" class="btn btn-primary btn-movie">{{__('messages.search2')}}</button>								<a class="btn btn-link text-white" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" href="#collapsehome" role="button" aria-expanded="false" aria-controls="collapsehome">
						    <small>{{__('messages.advance-search')}}</small>
						  </a>						
				</div>  
			</div>
		</form>
	</div>
</section>