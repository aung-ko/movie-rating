<div class="container-fluid">
<div class="row">
@for ($i = 0; $i < 4; $i++)

			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">

				<div class="recent-movie-block">
					<div class="recent-movie-img">
						<img class="lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="img/simple-{{ $i }}.jpg"/>
						<div class="recent-movie-content p-3">
							<h5 class="text-white mb0">လေထဲက တိမ်တိုက်</h5>
							<div>
								
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
								<p>"လေထဲက တိမ်တိုက် သည် ဘလာဘလာ ဖြစ်သည် လေထဲက တိမ်တိုက် သည် ဘလာဘလာ ဖြစ်သည် လေထဲက တိမ်တိုက် သည် ဘလာဘလာ ဖြစ်သည်"</p>
							</div>
							<div class="card-footer nopadding">
								<a class=" align-text-bottom w-100 btn btn-dark align-text-bottom" href="#" role="button">ကြည့်မယ်</a>
							</div>	
						</div>
					</div>
				</div>
			</div>	
@endfor
</div>
</div>  