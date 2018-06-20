@extends('frontend.app')


@section('content')

<br>
<br>

<form action="{{route('reply.update', [$movie, $review, $reply])}}" method="POST" class="form-horizontal form-bordered">
	{{ method_field('PATCH') }}
					{{csrf_field()}}
					<div class="form-body">
						<div class="form-group row {{$errors->has('body') ? 'has-error' : ''}}">
							<div class="col-md-3">
								<label class="control-label text-right">Body</label>
							</div>
							<div class="col-md-9">
								<input type="text" class="form-control" name="body" value="{{ $reply->body }}" autofocus>

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
				<br>
				<br>

@endsection




