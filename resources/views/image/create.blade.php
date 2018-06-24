@extends('layouts.app')

@section('content')

<div class="container" id="root">

	<form action="{{route('image.store', "$name=".$id)}}" method="POST" enctype='multipart/form-data'>
		{{csrf_field()}}
		<div class="form-group">
			<label for="image_path">Image Upload</label>
			<input name="image_path" type="file" class="form-control-file" id="image_path">
		</div>

		<div class="form-group">
			<button type="submit" class="btn btn-success">Create</button>
		</div>
	</form>
	
</div>


@endsection



