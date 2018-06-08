@extends('frontend.app')
@section('content')
<section class="single jumbotron bg-dark horror text-light">
        <div class="container">
          <h1 class="jumbotron-heading text-left p-1 pb-3 myanmarsanpro">{{ $movie->name }}
          	@for ($i = 0; $i < 4; $i++)	
                <span class="text-small fa fa-xs-movie fa-star checked"></span>
          	@endfor
          </h1> 

          <div class="row">
          	<div class="col-md-3 nopadding nomargin bg-dark-movie">
                  <img width="300px" height="auto" src="{{ asset('storage/movies/' . $movie->slug . '/' . $movie->thumb ) }} " alt="">
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
		<h1 class="text-left myanmarsanpro">၅၀၀ မှတ်ချက်ရရှိထားသည်</h1>
		<p>အသေးစိတ် ကြည့်ရှုရန် နှိ</p>
		<div class="">
    			
		<div class="row">
			<div class="col-sm-4">
				<div class="rating-block">
					<h4>Average user rating</h4>
					<h2 class="bold padding-bottom-7">4.3 <small>/ 5</small></h2>
						<button type="button" class="btn btn-warning btn-xs" aria-label="Left Align">
						  <span class="fa fa-lg fa-star checked"></span>
						</button>
						<button type="button" class="btn btn-warning btn-xs" aria-label="Left Align">
						  <span class="fa fa-lg fa-star checked"></span>
						</button>
						<button type="button" class="btn btn-warning btn-xs" aria-label="Left Align">
						  <span class="fa fa-lg fa-star checked"></span>
						</button>
						<button type="button" class="btn btn-default btn-grey btn-xs" aria-label="Left Align">
						  <span class="fa fa-lg fa-star unchecked"></span>
						</button>
						<button type="button" class="btn btn-default btn-grey btn-xs" aria-label="Left Align">
						  <span class="fa fa-lg fa-star unchecked"></span>
						</button>
				</div>
			</div>
			<div class="col-sm-3">
				<h4>Rating breakdown</h4>
				<div class="pull-left">
					<div class="pull-left" style="width:35px; line-height:1;">
						<div style="height:9px; margin:5px 0;">5 <span class="glyphicon glyphicon-star"></span></div>
					</div>
					<div class="pull-left" style="width:180px;">
						<div class="progress" style="height:9px; margin:8px 0;">
						  <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="5" style="width: 1000%">
							<span class="sr-only">80% Complete (danger)</span>
						  </div>
						</div>
					</div>
					<div class="pull-right" style="margin-left:10px;">1</div>
				</div>
				<div class="pull-left">
					<div class="pull-left" style="width:35px; line-height:1;">
						<div style="height:9px; margin:5px 0;">4 <span class="glyphicon glyphicon-star"></span></div>
					</div>
					<div class="pull-left" style="width:180px;">
						<div class="progress" style="height:9px; margin:8px 0;">
						  <div class="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="4" aria-valuemin="0" aria-valuemax="5" style="width: 80%">
							<span class="sr-only">80% Complete (danger)</span>
						  </div>
						</div>
					</div>
					<div class="pull-right" style="margin-left:10px;">1</div>
				</div>
				<div class="pull-left">
					<div class="pull-left" style="width:35px; line-height:1;">
						<div style="height:9px; margin:5px 0;">3 <span class="glyphicon glyphicon-star"></span></div>
					</div>
					<div class="pull-left" style="width:180px;">
						<div class="progress" style="height:9px; margin:8px 0;">
						  <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="3" aria-valuemin="0" aria-valuemax="5" style="width: 60%">
							<span class="sr-only">80% Complete (danger)</span>
						  </div>
						</div>
					</div>
					<div class="pull-right" style="margin-left:10px;">0</div>
				</div>
				<div class="pull-left">
					<div class="pull-left" style="width:35px; line-height:1;">
						<div style="height:9px; margin:5px 0;">2 <span class="glyphicon glyphicon-star"></span></div>
					</div>
					<div class="pull-left" style="width:180px;">
						<div class="progress" style="height:9px; margin:8px 0;">
						  <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="2" aria-valuemin="0" aria-valuemax="5" style="width: 40%">
							<span class="sr-only">80% Complete (danger)</span>
						  </div>
						</div>
					</div>
					<div class="pull-right" style="margin-left:10px;">0</div>
				</div>
				<div class="pull-left">
					<div class="pull-left" style="width:35px; line-height:1;">
						<div style="height:9px; margin:5px 0;">1 <span class="glyphicon glyphicon-star"></span></div>
					</div>
					<div class="pull-left" style="width:180px;">
						<div class="progress" style="height:9px; margin:8px 0;">
						  <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="1" aria-valuemin="0" aria-valuemax="5" style="width: 20%">
							<span class="sr-only">80% Complete (danger)</span>
						  </div>
						</div>
					</div>
					<div class="pull-right" style="margin-left:10px;">0</div>
				</div>
			</div>

		</div>			
		
				@include('frontend.include.review')

				@include('frontend.include.pagination') 
			</div>
			<div class="col-sm-5">
				<h1 class="mt-5 mb-5 jumbotron-heading text-left myanmarsanpro">ဆက်စပ် ဇာတ်ကားများ</h1>
				@include('frontend.include.relatedmovie')  
			</div>
		</div>
		
    	</div> <!-- /container -->

	</div>	
</section>

@endsection