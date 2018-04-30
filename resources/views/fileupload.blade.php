@extends("layouts.app")
@section("content")
<div class="container">

	<img src="{{ asset('storage/images/WriteCode.png') }}" width="200">
	
	<form action="{{ route('upload') }}" method="post" enctype='multipart/form-data'>
		{{ csrf_field() }}
		<div class="form-group">
			<label for="myimage">Image Upload</label>
			<input name="myimage" type="file" class="form-control-file" id="myimage">
		</div>	
		<button type="submit" class="btn btn-primary">Submit</button>
	</form>
</div>
@endsection