@extends('frontend.app')
@section('content')
@include('frontend.include.homeslider')  
@include('frontend.include.searchweight')
<section class="content">
	<div class="container">
		<div class="row">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 mb40 text-center">
				<h1 class='m-4 myanmarsanpro'>ဒီတစ်ပတ်ရုံတင်ဇာတ်ကားများ</h1>
			</div>
		</div>
		<div class="row">
			@for ($i = 0; $i < 6; $i++)
			<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">

				<div class="recent-movie-block">
					<div class="recent-movie-img">
						<img class="lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="img/simple-{{ $i }}.jpg"/>
						<div class="recent-movie-content p-3">
							<h4 class="text-white mb0">လေထဲက တိမ်တိုက်</h4>
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
								<h3 class="text-dark mb0">လေထဲက တိမ်တိုက်</h3>
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
								<p>"လေထဲက တိမ်တိုက် သည် ဘလာဘလာ ဖြစ်သည် လေထဲက တိမ်တိုက် သည် ဘလာဘလာ ဖြစ်သည် လေထဲက တိမ်တိုက် သည် ဘလာဘလာ ဖြစ်သည်"</p>
							</div>
							<div class="card-footer nopadding">
								<a class="align-text-bottom btn btn-dark align-text-bottom btn-lg btn-block" href="#" role="button">ကြည့်မယ်</a>
							</div>	
						</div>
					</div>
				</div>
			</div>   
			@endfor
		</div>
	</div>    

</section>
@include('frontend.include.pagination')  
@endsection