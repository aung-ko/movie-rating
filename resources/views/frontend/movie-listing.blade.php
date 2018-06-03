@extends('frontend.app')
@section('content')
<section class="listing jumbotron horror  text-light">
<div class="container">
	<div class="row">
		<div class="col-md-4">
			<div class="card text-dark">
				<div class="card-header">
					<h2 class='pb-3 myanmarsanpro'>ရှာဖွေပါ</h2>
					<p class='pb-2'>ကြိုက်နှစ်သက်ရာ ဇာတ်ကား၊ ရုပ်ရှင်ဇာတ်လမ်းများကို စိတ်ကြိုက်ရှာဖွေလိုက်ပါ</p>
				</div>
				<div class="card-body">
					<form>
					  <div class="form-row">
					    	<div class="p-2">
			 		    		<input type="text" class="form-control" placeholder="ဇာတ်ကားအမည်">
			 		   		</div>
			 		   		<div class="p-2 slidecontainer">
			 		   			<p>Rating နဲ့ရှာမယ် <span class="badge badge-success" id="rateoutput"></span></p>
			  					<input type="range" min="1" max="5" value="1" class="slider" id="myRange">
							</div>		   		
			 		   		<div class="p-2">
						      <select id="category" class="form-control">
						        <option selected>အမျိးအစား အလိုက် ရှာရန်</option>
						        <option>ဟာသ</option>
								<option>အလွမ်းဇာတ်</option>
								<option>စုန်း ကဝေ သရဲ</option>
						      </select>
			 		   		</div>
			 		   		<div class="p-2">
						      <select id="popularity" class="form-control">
						        <option selected>ကျော်ကြားမှုအလိုက် ရှာရန်</option>
						        <option>အစပ်ဆုံးကားများ</option>
								<option>အာလူးကြိုက်သူများ</option>
								<option>ဂျင်းကားများ</option>
								<option>ရီဗျုး အများဆုံး</option>
								<option>အမှတ် အများဆုံး</option>
						      </select>
			 		   		</div>
			 		   		<div class="p-2">
						      <select id="popularity" class="form-control">
						        <option selected>ဒါရိုက်တာ နာမည်</option>
						        <option>အစပ်ဆုံးကားများ</option>
								<option>အာလူးကြိုက်သူများ</option>
								<option>ဂျင်းကားများ</option>
								<option>ရီဗျုး အများဆုံး</option>
								<option>အမှတ် အများဆုံး</option>
						      </select>
			 		   		</div>
			 		   		<div class="p-2">
						      <select id="popularity" class="form-control">
						        <option selected>ဇာတ်ညွှန်းဆရာ နာမည်</option>
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
			<p class='pl-3 jumbotron-heading'>( ၄ ) ကားရှိပါတယ်</p>
			<div class="row">
			@for ($i = 0; $i < 4; $i++)
						<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">

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
			@include('frontend.include.pagination') 
		</div>
		
	</div>
</div>


</section>
@endsection