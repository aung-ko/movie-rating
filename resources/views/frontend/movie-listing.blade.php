@extends('frontend.app')
@section('content')
<section class="listing jumbotron">
	<div class="container">
		<div class="row">
			<div class="col-md-4">
				<div class="card text-dark">
					<div class="card-header">
						<h2 class='pb-3 myanmarsanpro'>ရှာဖွေပါ</h2>
						<p class='pb-2'>ကြိုက်နှစ်သက်ရာ ဇာတ်ကား၊ ရုပ်ရှင်ဇာတ်လမ်းများကို စိတ်ကြိုက်ရှာဖွေလိုက်ပါ</p>
					</div>
					<div class="card-body">
						<form action="/search" method="GET">
							<div class="form-row">
								<div class="p-2 w-100">
									<input type="text" class="form-control" placeholder="ဇာတ်ကားအမည်" name="name">
								</div>
								<div class="p-2 slidecontainer row text-center">
									<div class='col'>
										အနည်းဆုံး ြကယ် <select name="min_rating" id="min_rating" class="form-control" title="Min Rating">
										{{-- <option value="null" data-html='null'>အနည်းဆုံး ြကယ်</option> --}}
											@for($i=1; $i<=5; $i++)
											<option value="{{$i}}" data-html='{{$i}}'>{{$i}}</option>
											@endfor
										</select>
									</div>
									<div class='col'>
										အများဆုံး ြကယ် <select name="max_rating" id="max_rating" class="form-control" title="Max Rating">
										{{-- <option value="null">အများဆုံး ြကယ်</option> --}}
										@for($i=1; $i<=5; $i++)
										<option value="{{$i}}" data-html='{{$i}}'>{{$i}}</option>
										@endfor 
										</select> 													
									</div>								
								</div>	   		
								<div class="p-2 w-100">
									<select id="category" name="genres_name" class="form-control">
										<option value='null' selected>အမျိုးအစား</option>
										@foreach($genres as $key=>$value)
										<option value="{{$key}}">{{$value}}</option>

										@endforeach
									</select>
								</div>
								<div class="p-2 w-100">
									<select id="year" name="released_date" class="form-control">
										<option value='null' selected>အချိန်အလိုက်</option>
										@foreach($years as $year)
										<option value="{{$year}}">{{$year}}</option>

										@endforeach
									</select>
								</div>
								<div class="p-2 w-100">
									<select id="popularity" class="form-control">
										<option value='null' selected>ဒါရိုက်တာ နာမည်</option>
										<option>အစပ်ဆုံးကားများ</option>
										<option>အာလူးကြိုက်သူများ</option>
										<option>ဂျင်းကားများ</option>
										<option>ရီဗျုး အများဆုံး</option>
										<option>အမှတ် အများဆုံး</option>
									</select>
								</div>
								<div class="p-2 w-100">
									<button type="submit" class="btn btn-primary btn-lg btn-movie btn-block">ရှာမယ်</button>
								</div>  		   		 		   		
							</div>
						</form>				

					</div>					
				</div>
			</div>
			<div class="col-md-8">
				<h2 class='pt-3 pl-3 pb-1 myanmarsanpro'>သရဲကား နှင့်သက်ဆိုင်သော ဇာတ်ကားများ</h2>
				<p class='pl-3 jumbotron-heading'>( {{$results->count()}} ) ကားရှိပါတယ်</p>
				<div class="row">
					@foreach($results as $result)
					<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">

						<div class="recent-movie-block">
							<div class="recent-movie-img">
								<img class="lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="{{ asset('storage/movies/' . $result->slug . '/' . $result->poster ) }} "/>
								<div class="recent-movie-content p-3">
									<h4 class="text-white mb0">{{$result->name}}</h4>
									<div>
										<p class="rating"> ၄/၅ </p>
										<p class="stars">
											<span class="fa fa-lg fa-star checked"></span>
											<span class="fa fa-lg fa-star checked"></span>
											<span class="fa fa-lg fa-star checked"></span>
											<span class="fa fa-lg fa-star checked"></span>
											<span class="fa fa-lg fa-star"></span>
										</p>
									</div>
								</div>
								<div class="overlay">
									<div class="card-header">
										<h3 class="text-dark mb0">{{$result->name}}</h3>
									</div>
									<div class="card-body">
										၁၀  <img class="custom-icon flex-row chilis" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=">  | 
										၁၀  <img class="custom-icon flex-row putato" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=">  | 
										၁၀  <img class="custom-icon flex-row ginger" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=">   		
										<p class="rating"> ၄/၅ </p>
										<p class="stars">
											<span class="fa fa-lg fa-star checked"></span>
											<span class="fa fa-lg fa-star checked"></span>
											<span class="fa fa-lg fa-star checked"></span>
											<span class="fa fa-lg fa-star checked"></span>
											<span class="fa fa-lg fa-star"></span>
										</p>
										<p>{{$result->description}}</p>
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
				@include('frontend.include.pagination') 
			</div>

		</div>
	</div>


</section>
@endsection