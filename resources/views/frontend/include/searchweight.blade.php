<section class="container-fluid bg-movie-theme1 text-light">
	<div class='container mx-auto movie-search p-5'>
		<h1 class='text-center p-3 myanmarsanpro'>စိတ်ကြိုက်ရှာမယ်</h1>
		<form action="/search" method="GET">
			{{csrf_field()}}
			<div class="form-row">
				<div class="col">
					<input type="text" class="form-control" placeholder="ဇာတ်ကားအမည်" name="name">
				</div>
				<div class="col">
					<select id="category" name="genre_id" class="form-control">
						@foreach($genres as $key=>$value)
						<option value="{{$key}}">{{$value}}</option>
						
						@endforeach
					</select>
				</div>
				<div class="col">
					<select id="year" name="released_date" class="form-control">
						@foreach($years as $year)
						<option value="{{$year}}">{{$year}}</option>
						
						@endforeach
					</select>
				</div>
				<div class="col">
					
					<select name="min_rating" id="min_rating" class="form-control" title="Min Rating">
						@for($i=1; $i<=5; $i++)
						<option value="{{$i}}">{{$i}}</option>
						@endfor
					</select>


				</div>
				<div class="col">
					
					<select name="max_rating" id="max_rating" class="form-control" title="Max Rating">
						@for($i=1; $i<=5; $i++)
						<option value="{{$i}}">{{$i}}</option>
						@endfor
					</select>


				</div>
				<div class="col">
					<button type="submit" class="btn btn-primary btn-movie">ရှာမယ်</button>
				</div>  		   		 		   		
			</div>
		</form>
	</div>
</section>