<div class="container pl-5 pr-5">
<div class="row p-5">
@foreach ($relatedMovies as $movie)

			<div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">

				<div class="recent-movie-block">
					<div class="recent-movie-img">
                    <img class="lazy" src="{{ asset('storage/movies/' . $movie->slug . '/' . $movie->poster)}}"/>
						<div class="recent-movie-content p-3">
                        <h5 class="text-white mb0">{{ $movie->name }}</h5>
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
								<h3 class="text-dark mb0">{{ $movie->name }}</h3>
							</div>
							<div class="card-body">
								၁၀  <img class="custom-icon flex-row chilis" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=">  | 
								၁၀  <img class="custom-icon flex-row putato" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=">  | 
								၁၀  <img class="custom-icon flex-row ginger" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=">   		
								<p>{{ $movie->description }}</p>
							</div>
							<div class="card-footer nopadding">
                            <a class=" align-text-bottom w-100 btn btn-dark align-text-bottom" href="{{ route('movie.show', $movie->slug) }}" 
                                role="button">ကြည့်မယ်</a>
							</div>	
						</div>
					</div>
				</div>
			</div>	
@endforeach
</div>
</div>  