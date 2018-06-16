<section class="container-fluid slider-custom">
	
	<div class="card-list">
		@foreach ($movies as $movie)

		<div class="card">
		    <div class="thumbnail">
		        <img class="left" src="{{ asset('storage/movies/' . $movie->slug . '/' . $movie->poster ) }}"/>
		    </div>
		    <div class="right">
		        <h1 class="card-title">{{ $movie->name }}</h1>
		        <div class="separator"></div>

		        <div class='row'>
		        	<div class="card-body">
						<p class="d-flex flex-row">
							 ၁၀  <img class="custom-icon flex-row chilis" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=">  | 
							 ၁၀  <img class="custom-icon flex-row putato" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=">  | 
							 ၁၀  <img class="custom-icon flex-row ginger" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=">   		
						</p>
		        	</div>
		        	<div class='stars-rating'>
		        		<p class="rating"> ၄/၅ </p>
		        		<p class="stars">
		        			<span class="fa fa-lg fa-star checked"></span>
		        			<span class="fa fa-lg fa-star checked"></span>
		        			<span class="fa fa-lg fa-star checked"></span>
		        			<span class="fa fa-lg fa-star checked"></span>
		        			<span class="fa fa-lg fa-star"></span>
		        		</p>
		        	</div>
		        	<p>{{ str_limit($movie->description, 90) }}</p>
		        </div>
		        <a class="align-text-bottom btn btn-dark float-right" href="{{ route('movie.show', $movie->slug) }}" role="button">ကြည့်မယ်</a>    
			</div>
		</div>
		            
        @endforeach
	</div>
</section>