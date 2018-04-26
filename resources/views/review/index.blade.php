@extends('layouts.app')


@section('content')

<div class="container">

	<div class="row">
		<a href="{{route('review.create')}}" class="btn btn-success">Create</a>
	</div>

	@foreach($reviews as $review)


	<div class="row">
		
		<div class="col-md-8">
			<h1 ><a href="/review/{{ $review->slug }}">{{$review->review_name}}</a></h1>
			
			
			<h3>{{$review->review_name}}</h3>
			<p>{{$review->description}}</p>
		</div>

		<div class="col-md-4">

			<a href="/review/{{$review->slug}}/edit" class="btn btn-primary" style="margin-bottom: 10px">Edit</a>

			<form action="{{ route('review.destroy', $review->id) }}" method="post">
				{{ csrf_field() }}
				{{ method_field('delete') }}
				<button class="btn btn-danger">Delete</button>
			</form>
		</div>

		
	</div>
	<hr>
	@endforeach

	{{$reviews->links()}}

</div>


@endsection