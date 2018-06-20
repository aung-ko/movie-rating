@extends('frontend.app')


@section('content')

<br>
<br>
<div class="container">
<div class="card">
	<div class="card-body">

<form action="{{route('review.store', $movie)}}" method="POST" class="form-horizontal form-bordered">
					{{csrf_field()}}

					<div class="form-body">
						<div class="form-group row {{$errors->has('title') ? 'has-error' : ''}}">
							<div class="col-md-3">
								<label class="control-label text-right">Title</label>
							</div>
							<div class="col-md-9">
								<input type="text" class="form-control" name="title" value="{{ old('title') }}" autofocus>

								@if ($errors->has('title'))
								<span class="help-block">
									<strong>{{ $errors->first('title') }}</strong>
								</span>
								@endif

							</div>
						</div>
					</div>
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
				</div>
				</div>
				</div>
				<br>
				<br>

@endsection





