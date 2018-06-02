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
          	<div class="col-md-3 nopadding nomargin bg-dark-movie"><img src="{{ asset('storage/movies/' . $movie->slug . '/' . $movie->poster ) }}" alt=""></div>
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
		
		<div class="row">
			<div class="col-sm-7">


            <section class="activities">
                <h2 class='myanmarsanpro'>လှုပ်ရှားမှုများ</h2>
                <section class="event"><span class="thumb-sm avatar pull-left mr-sm"><img class="img-circle" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="..."></span>
                    <h4 class="event-heading"><a href="#">ကို ဖြူလုံး</a> <small><a href="#">"မကြောက်ဘူးလား" ရုပ်ရှင်တွင် မှတ်ချက်ရေးခဲ့သည့်</a></small></h4>
                    <p class="fs-sm text-muted">၂၀၁၈ခုနှစ် မေလ ၁ရက်နေ င်္နနက် ၅း၃၀</p>
                    <p class="fs-mini">အိမ်မှာ ပျင်းလို့ သရဲကား အကြမ်းကြီးဆိုလို့ တန်ဖို့ရှိတဲ့ အချိ်န်လေးတွေသုံးပြီး သွားကြည့်မိပါတယ်။ ၃ နာရီ တရေး အိပ်ပြီး ပြန်သာလာရတယ်။ ဘယ်အချိန် သရဲခြောက်သွားမှန်း မသိလိုက်ဘူးဗျို့...</p>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i> 
                    <img class="custom-icon flex-row chilis" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=">
                    <footer>
                        <ul class="post-links">
                            <li><a href="#">တစ်နာရီက</a>
                            </li>
                            <li><a href="#"><span class="text-danger"><i class="fa fa-heart"></i> ၃၀ ကြိုက်တယ်</span></a>
                            </li>
                            <li><a href="#">မှတ်ချက်ရေးရန်</a>
                            </li>
                        </ul>
                    </footer>
                </section>
                <section class="event"><span class="thumb-sm avatar pull-left mr-sm"><img class="img-circle" src="img/avatar6.png" alt="..."></span>
                    <h4 class="event-heading"><a href="#">ကို ဖြူလုံး</a> <small><a href="#">"လေထဲကတိမ်တိုက်" ဗီဒီယိုဇာတ်လမ်းတွင် မှတ်ချက်ရေးခဲ့သည့်</a></small></h4>
                    <p class="fs-sm text-muted">၂၀၁၈ခုႏွစ္ ေမလ ၂၁ရက္ေန နၤနက္ ၈း၃၀</p>
                    <p class="fs-mini">ကောင်းပါတယ် ဦးကတော့ ဒါပဲပြောချင်တယ်။ ဒါနဲ့ ဒီကားမှာ မင်းသားက ဘယ် တုန်းနဲ့ စကားပြောသွားတာလဲ ဦးမသိလို့။ တုန်းနဲနဲလဲ တင်နိုင်မယ် ဗီဒီယို မဟုတ်ပဲ ရုံတင်ကာဆိုရင်တော့ ကျိန်းသေ အကယ်ဒမီရမှာ၊ ဒါပဲ ပြောချင်တယ်။</p>
                    <i class="fa fa-star checked"></i>
                    <i class="fa fa-star checked"></i> 
                    <i class="fa fa-star checked"></i>
                    <img class="custom-icon flex-row putato" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=">                    
                    <footer>
                        <ul class="post-links">
                            <li><a href="#">တစ်နာရီက</a>
                            </li>
                            <li><a href="#"><span class="text-danger"><i class="fa fa-heart"></i> ၅ ကြိုက်တယ်</span></a>
                            </li>
                            <li><a href="#">မှတ်ချက်ရေးရန်</a>
                            </li>
                        </ul>
                    </footer>
                </section>                
                <section class="event">
                    <h4 class="event-heading"><a href="#">ကို ဖြူလုံး</a> <small><a href="#">"ဥပါဒန်မျဉ်" ရုပ်ရှင်တွင် မှတ်ချက်ရေးခဲ့သည့်</a></small></h4>
                    <p class="fs-sm text-muted">၂၀၁၈ခုနှစ် မေလ ၁ရက်နေ င်္နနက် ၅း၃၀</p>
                    <p class="fs-mini">ဒီကားကောင်းတယ်ဗျ အကုန်လုံးလဲ ကြည့်သင့်တယ်လိုထင်တယ်ဗျ</p>
                    <i class="fa fa-star checked"></i> 
                    <img class="custom-icon flex-row ginger" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=">                      
                    <footer>
                        <div class="clearfix">
                            <ul class="post-links mt-sm pull-left">
                                <li><a href="#">တစ်နာရီက</a>
                                </li>
                                <li><a href="#"><span class="text-danger"><i class="fa fa-heart-o"></i>  ၅၀ ကြိုက်တယ်</span></a>
                                </li>
                                <li><a href="#"> ၁၀ မှတ်ချက်ရေးခဲ့သည့်</a>
                                </li>
                            </ul>
                        </div>
                        <ul class="post-comments mt-sm">
                            <li><span class="thumb-xs avatar pull-left mr-sm"><img class="img-circle" src="img/avatar1.png" alt="..."></span>
                                <div class="comment-body">
                                    <h6 class="author fw-semi-bold">ဦး တီပွား <small> လွန်ခဲ့သော ၆ မိနစ်က</small></h6>
                                    <p>အကယ်ဒမီ မှန်းထိုက်တဲ့ ကားကောင်း တစ်ကားပါပဲ</p>
                                </div>
                            </li>
                            <li><span class="thumb-xs avatar pull-left mr-sm"><img class="img-circle" src="img/avatar6.png" alt="..."></span>
                                <div class="comment-body">
                                    <input class="form-control input-sm" type="text" placeholder="ဒီ ပိုစ့်ကို မှတ်ချက်ရေးသားပါ.....">
                                </div>
                            </li>
                        </ul>
                    </footer>
                </section>
                <form class="mt ng-pristine ng-valid" action="#">
                    <div class="form-group mb-0">
                        <label class="sr-only" for="new-event">New event</label>
                        <textarea class="form-control" id="new-event" placeholder="တစ်ခုခုပြောမယ်..." rows="3"></textarea>
                    </div>
                    <div class="btn-toolbar">
                        <div class="btn-group"><a href="#" class="btn btn-sm btn-gray"><i class="fa fa-camera fa-lg"></i></a> <a href="#" class="btn btn-sm btn-gray"><i class="fa fa-map-marker fa-lg"></i></a>
                        </div>
                        <button type="submit" class="btn btn-success btn-sm pull-right">Post</button>
                    </div>
                </form>
            </section>

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