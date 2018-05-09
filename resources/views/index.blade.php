@extends('layouts.master')

@section('content')



<div class="row">
			<h1 style="color: #ffffff" class="mx-auto">Top Rated</h1>
		</div>

		@include('partials.toprated')

		<div class="row">
				<h1 style="color: #ffffff" class="mx-auto">Now Showing</h1>
			</div>

		@foreach ($movies as $movie)

		@include('partials.nowshowing',['movie'=>$movie])

		@endforeach

		<div class="row">
				<h1 style="color: #ffffff" class="mx-auto">Coming Soon</h1>
			</div>


		@include('partials.commingsoon')


@endsection