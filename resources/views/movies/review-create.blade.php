@extends('frontend.app')
@section('title', 'Movie reviews for '.($movie->name))
@section('description', 'Best movie review for '.($movie->name).' released in '.(date('Y',strtotime($movie->released_date)). ' directed by '.($movie->director_name)))
@section('keywords', ($movie->name).' in Myanmar')
@section('image', asset('storage/movies/' . $movie->slug . '/' . $movie->poster ))
@section('content')

<section class="listing jumbotron">
<div class="container">
    <div class="row profile">
        <div class="col-md-4">
            <div class="bg-white">
                <div>
                  <h1 class="btn-movie text-white jumbotron-heading text-left p-3 pb-0 m-0 myanmarsanpro">{{ $movie->name }}</h1> 
                          <img width="100%" height="auto" src="{{ asset('storage/movies/' . $movie->slug . '/' . $movie->poster ) }}" alt="">

                    <div class="p-4">             
                        <p class="rating"> {{numformat($movie->rating)}}/၅  </p>
                        <p class="stars">
                        <input id="input-1-ltr-star-xs" name="input-1-ltr-star-xs" class="star-readonly rating-loading" value="{{$movie->rating}}" dir="ltr" data-size="xxs" data-readonly="true">
                        </p>
                          <p class="lead text-muted">{{ $movie->description }}<br>
                            {{__('messages.director')}} : {{ $movie->director_name }}<br>
                            {{__('messages.genre')}} : @foreach ($movie->genres as $genre)
                                {{ $genre->name }}, 
                            @endforeach<br>         
                          </p>                                                                         
                    </div>

                    
                    </div>  
                </div>
            </div>
        <div class="col-md-8 mt-3">

            <section class="activities">
                <h2 class='myanmarsanpro mb-3'>မှတ်ချက်များ</h2>
                <form action="{{route('review.store', $movie)}}" method="POST" class="mt form-horizontal form-bordered">
                    {{csrf_field()}}
                    <div class='form-group mb-0 {{$errors->has('title') ? 'has-error' : ''}}'>
                        <input type="text" class="form-control" name="title" value="{{ old('title') }}" autofocus>

                        @if ($errors->has('title'))
                        <span class="help-block">
                            <strong>{{ $errors->first('title') }}</strong>
                        </span>
                        @endif                        
                    </div>
                    <div class="form-group mb-0 {{$errors->has('body') ? 'has-error' : ''}}">
                        <label class="sr-only" for="new-event">New event</label>
                        <textarea class="form-control" id="new-event" name="body" placeholder="တစ်ခုခုပြောမယ်..." rows="3">
                            {{old('body')}}
                        </textarea>


                                @if ($errors->has('body'))
                                <span class="help-block">
                                    <strong>{{ $errors->first('body') }}</strong>
                                </span>
                                @endif

                    </div>
                    <div class="btn-toolbar">
                        <div class="btn-group m-2"><a href="#" class="btn btn-sm btn-gray"><i class="fa fa-camera fa-lg"></i></a> <a href="#" class="btn btn-sm btn-gray"><i class="fa fa-map-marker fa-lg"></i></a>
                        </div>
                        <button type="submit" class="btn btn-dark btn-movie btn-sm pl-5 pr-5">Post</button>
                        <div class='m-2'><input id="input-1-ltr-star-xs" name="rating" id="review_rating" class="user-reaction rating-loading" value="3.5" dir="ltr" data-size="xxs"></div>
                    </div>
                </form> 
                
            </section>

                <div class="mt-3 mb-3">
                    <div class="">
                            <h2 class="text-left myanmarsanpro">{{__('messages.commentsall')}}</h2>                         
                            @foreach($movie->reviews as $review)
                                <section class="event mb-4">
                                        <h4 class="event-heading pb-3">
                                            <a href="{{route('review.show',[$movie,$review]) }}">{{$review->title}}</a>
                                        
                                        </h4>
                                            
                                       <p class="fs-mini">{{$review->body}}</p>
                                            <span class="thumb-sm avatar pull-left mr-sm"><img class="img-circle rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="..."></span>  <h4><a href="#">{{$review->user->name}}</a></h4>               
                                                {{numdate($review->created_at)}}  <br>
                        <input id="input-1-ltr-star-xs" name="input-1-ltr-star-xs" class="star-readonly rating-loading" value="{{$review->rating}}" dir="ltr" data-size="xxs" data-readonly="true">
                                        <footer>
                                            <div class="clearfix">
                                                <ul class="post-links mt-sm pull-left">
                                                    <li><a href="#">{{numformat(1)}} {{__('messages.when.hour')}}</a>
                                                    </li>
                                                    <li><a href="#"> {{numformat(10)}} {{__('messages.receive-reply')}}</a>
                                                    </li>
                                                </ul>
                                            </div>
                                     </footer>
                                 </section>
                            @endforeach                        
                                                                            
                    </div>  
                </div>            
        </div>
             </div>   
    </div>
</div>
</section>
@endsection





