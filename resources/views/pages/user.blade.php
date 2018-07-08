@extends('frontend.app')
@section('content')

<section class="listing jumbotron">
<div class="container">
    <div class="row profile ng-scope">
        <div class="col-md-4">
            <section class="widget">
                <div class="widget-body">
                    <div class="widget-top-overflow text-white">
                        <div class="height-250 overflow-hidden"><img class="img-responsive" src="{{ asset('img/flores-amarillas-wallpaper.jpeg') }}">
                        </div>
                        <div class="btn-toolbar">

                            <!--- profile edit modal box -->
                            @can('edit-profile', $user)
                            <a href="#" class="btn btn-default btn-sm pull-right">
                                <button type="button" class="btn btn-link" data-toggle="modal" data-target="#profileModal"><i class="fa fa-edit"></i></button>
                            </a>
                            @endcan

                        </div>
                    </div>
                    @can('edit-profile', $user)
                    <div class="modal fade" id="profileModal" tabindex="-1" role="dialog" aria-labelledby="profileModalLabel" aria-hidden="true" >
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="profileModalLabel">Edit Your Profile</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            
                                <div class="modal-body">
                                    <form action="{{route('profile.update', $user)}}" method="POST" class="form-horizontal form-bordered" enctype="multipart/form-data">

                                        {{ method_field('PATCH') }}
                                        {{csrf_field()}}

                                        <div class="form-body">
                                            <div class="form-group">
                                                <label>Profile Image : </label>
                                                <img src="{{ asset('storage/users/' . $user->img) }}" class="profile-img-preview" id="profile-image">
                                                <input type="file" class="form-control" name="img" id="profile-image-input">
                                                @if ($errors->has('img'))
                                                    <span class="help-block text-danger" id="error-message">
                                                        <strong>{{ $errors->first('img') }}</strong>
                                                    </span>
                                                @endif
                                            </div>

                                            <div class="form-group">
                                                <label for="name">အမည် : </label>
                                                <input type="text" class="form-control" name="name" value="{{ $user->name }}" autofocus>
                                                @if ($errors->has('name'))
                                                    <span class="help-block text-danger" id="error-message">
                                                        <strong>{{ $errors->first('name') }}</strong>
                                                    </span>
                                                @endif
                                            </div>

                                            <div class="form-group">
                                                <label for="name">မိမိအကြောင်း : </label>
                                                <textarea class="form-control" name="bio" rows="3" autofocus>{{ $user->bio }}</textarea>
                                            </div>

                                        </div>
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="submit" class="btn btn-primary">Save</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    @endcan
                    
                    <div class="row">
                        <div class="col-sm-12 text-center">
                            <div class="post-user post-user-profile">
                            <span class="thumb-xlg">
                                    <img class="img-circle rounded-circle" src="{{ asset('storage/users/' . $user->img) }}" alt="...">
                            </span>
                                <h4 class="fw-normal pt-2 mt-4">{{ $user->name }}</h4>
                                {{-- <a href="#" class="btn btn-success btn-sm mt">&nbsp;Send <i class="fa fa-envelope ml-xs"></i>&nbsp;</a>
                                <a href="#" class="btn btn-info btn-sm mt">&nbsp;Follow <i class="fa fa-user-plus ml-xs"></i>&nbsp;</a> --}}

								<ul class="list-group list-group-flush m-3">
								  <li class="list-group-item">စတင်ဝင်ရောက်သည့်နေ့- {{ numdate($user->created_at) }}</li>
                                  <li class="list-group-item">မှတ်ချက်စုစုပေါင်း- {{ numformat($user->reviews->count()) }} ခုပေးခဲ့သည်</li>
                                  <li class="list-group-item">
                                    <p class="mt-lg">
                                        @if (empty($user->bio))
                                            <span class="text-secondary">မိမိအကြောင်း</span>
                                        @else
                                            {{ $user->bio }}
                                        @endif
                                    </p>
                                </li>
								</ul>

                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
        <div class="col-md-8">
            <section class="activities">
                <h2 class='myanmarsanpro'>လှုပ်ရှားမှုများ</h2>

                @foreach ($reviews as $review)
                
                <section class="event"><span class="thumb-sm avatar pull-left mr-sm"><img class="img-circle" src="{{ asset('storage/users/' . $user->img) }}" alt="..."></span>
                    <h4 class="event-heading"><small><a href="{{ route('movie.show', $review->movie) }}">"{{ $review->movie->name }}" ရုပ်ရှင်တွင် မှတ်ချက်ရေးခဲ့သည်</a></small></h4>
                    <p class="fs-sm text-muted">{{numdate($review->created_at)}}</p>

                    <h4 class="event-heading pb-3">
                        <a href="{{route('review.show',[$review->movie,$review]) }}">{{$review->title}}</a>

                        <span style="font-size: 12px;" class="row pl-3">
                            <input id="input-1-ltr-star-xs" name="input-1-ltr-star-xs" class="star-readonly rating-loading" 
                            value="{{$review->rating}}" dir="ltr" data-size="xxs" data-readonly="true">
                            {{numformat($review->rating)}}/၅
                        </span>

                        <p/>
                        <p class="fs-mini">{{$review->body}}</p>
                    </h4>

                    <footer>
                        <ul class="post-links">
                            <li>{{ $review->created_at->diffForHumans() }}</a>
                            </li>
                            <li><a href="{{ route('review.show',[$review->movie,$review]) }}">{{__('messages.reply')}} {{numformat($review->replys->count())}} {{__('messages.receive')}}</a>
                            </li>
                        </ul>
                    </footer>
                </section>
                            
                @endforeach

            </section>
            <div class="pt-4">
                {{ $reviews->links() }}
            </div>
        </div>
    </div>
</div>
</section>
@endsection

@section('script')
<script>
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#profile-image').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
}

$("#profile-image-input").change(function(){
    readURL(this);
});

@if (count($errors) > 0)
    $('#profileModal').modal('show');
@endif

</script>
@endsection