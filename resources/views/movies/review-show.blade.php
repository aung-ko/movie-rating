@extends('frontend.app')


@section('content')

<br>
<br>
<h1>Movie Name: {{$review->movie->name}}</h1>
<h1>Title: {{$review->title}}</h1>

<h2>Body: {{$review->body}}</h2>

<h2 class="text-danger">Reply</h2>
@foreach($review->replys as $reply)

<h3>{{$reply->body}} </h3>
<a href="{{route('reply.edit',[$movie,$review, $reply]) }}" class="btn btn-primary">Edit</a>
<form action="{{route('reply.destroy', $reply->id)}}" method="POST">
	{{method_field('delete')}}
	{{csrf_field()}}

	<button class="btn btn-danger btn-sm">Delete</button>


</form>
@endforeach
<br>
<br>


<form action="{{route('reply.store', [$movie, $review])}}" method="POST" class="form-horizontal form-bordered">
	{{csrf_field()}}

	<div class="form-body">

		<div class="form-body">
			<div class="form-group row {{$errors->has('body') ? 'has-error' : ''}}">
				<div class="col-md-3">
					<label class="control-label text-right">Body</label>
				</div>
				<div class="col-md-9">
					<input type="text" class="form-control" name="body" value="{{ old('body') }}" autofocus>

					@if ($errors->has('body'))
					<span class="help-block">
						<strong>{{ $errors->first('body') }}</strong>
					</span>
					@endif

				</div>
			</div>
		</div>









		<div class="form-actions">
			<div class="row">
				<div class="col-md-12">
					<div class="row">
						<div class="offset-sm-10 col-md-9">
							<button type="submit" class="btn btn-success"> <i class="fa fa-check"></i> Submit</button>

						</div>
					</div>
				</div>
			</div>
		</div>
	</form>

	@endsection





