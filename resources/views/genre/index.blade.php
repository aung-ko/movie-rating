@extends('layouts.app')


@section('content')

<div class="container">

	<div class="row">
		<a href="{{route('genre.create')}}" class="btn btn-success">Create</a>
	</div>

	<hr>

	
	@foreach($genres as $genre)
	<div class="row">
		<div class="col-md-10">
			<div class="alert alert-info" role="alert"><a href="movie/genre/{{$genre->slug}}">{{$genre->genre_name}}</a></div>	
		</div>


		<div class="col-md-1">

			<a href="genre/{{$genre->slug}}/edit" class="btn btn-primary" style="margin-bottom: 10px">Edit</a>
		</div>
		<div class="col-md-1">
			<form action="{{ route('genre.destroy', $genre->slug) }}" method="post">
				{{ csrf_field() }}
				{{ method_field('delete') }}
				<button class="btn btn-danger">Delete</button>
			</form>
		</div>
	</div>
	@endforeach
{{$genres->links()}}
	

</div>


@endsection