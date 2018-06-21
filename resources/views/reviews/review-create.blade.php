@extends('frontend.app')


@section('content')
<br>
<div class="container">
<div class="card">
	<div class="card-body">
		<h2 class='myanmarsanpro mb-3'>မှတ်ချက်များ</h2>
		<form class="mt" action="{{route('review.store', $movie)}}" method="POST">
			{{csrf_field()}}
			<div class="form-group mb-0  {{$errors->has('title') ? 'has-error' : ''}}">

				<input type="text" class="form-control" placeholder="တစ်ခုခုပြောမယ်..." name="title" value="{{old('title')}}">

				@if ($errors->has('title'))
				<span class="help-block">
					<strong>{{ $errors->first('title') }}</strong>
				</span>
				@endif

			</div>
			<br>
			<div class="form-group mb-0  {{$errors->has('body') ? 'has-error' : ''}}">


				<textarea class="form-control" id="new-event" placeholder="တစ်ခုခုပြောမယ်..." rows="3" name="body"  value="{{old('body')}}"></textarea>

				@if ($errors->has('body'))
				<span class="help-block">
					<strong>{{ $errors->first('body') }}</strong>
				</span>
				@endif
			</div>
			<div class="btn-toolbar">


				<button type="submit" class="btn btn-dark btn-movie pl-5 pr-5  pull-right">Post</button>

				<select name="rating" id="max_rating" class="form-control" title="Rating" required>
					
					@for($i=1; $i<=5; $i++)
					<option value="{{$i}}" data-html='{{$i}}'>{{$i}}</option>
					@endfor 
				</select>
			</div>
		</form> 
	</div>
</div>
</div>
<br>


@endsection





