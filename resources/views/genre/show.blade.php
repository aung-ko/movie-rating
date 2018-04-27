@extends('layouts.app')


@section('content')

<div class="container">




	<div class="row">
		<div class="col-md-10">
			<div class="alert alert-info" role="alert">{{$genre[0]['genre_name']}}</div>	
		</div>


		<div class="col-md-1">

			<a href="/genre/{{$genre[0]['slug']}}/edit" class="btn btn-primary" style="margin-bottom: 10px">Edit</a>
		</div>
		<div class="col-md-1">
			<form action="{{ route('genre.destroy', $genre[0]['id']) }}" method="post">
				{{ csrf_field() }}
				{{ method_field('delete') }}
				<button class="btn btn-danger">Delete</button>
			</form>
		</div>
	</div>
		
	</div>
	<hr>




</div>


@endsection