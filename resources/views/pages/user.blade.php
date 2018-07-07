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
                            <a href="#" class="btn btn-default btn-sm pull-right"><i class="fa fa-edit"></i></a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12 text-center">
                            <div class="post-user post-user-profile"><span class="thumb-xlg"><img class="img-circle rounded-circle" src="{{ asset('storage/users/' . $user->img) }}" alt="..."></span>
                                <h4 class="fw-normal pt-2">{{ $user->name }}</h4>
                                {{-- <a href="#" class="btn btn-success btn-sm mt">&nbsp;Send <i class="fa fa-envelope ml-xs"></i>&nbsp;</a>
                                <a href="#" class="btn btn-info btn-sm mt">&nbsp;Follow <i class="fa fa-user-plus ml-xs"></i>&nbsp;</a> --}}

								<ul class="list-group list-group-flush m-3">
								  <li class="list-group-item">စတင်ဝင်ရောက်သည့်နေ့- {{ numdate($user->created_at) }}</li>
                                  <li class="list-group-item">မှတ်ချက်စုစုပေါင်း- {{ numformat($user->reviews->count()) }} ခုပေးခဲ့သည်</li>
                                  <li class="list-group-item">
                                    <p class="mt-lg">
                                        @if (empty($user->bio))
                                            about you
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