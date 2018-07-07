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
                    <h1 class="btn-movie text-white jumbotron-heading text-left p-3 pb-0 m-0 myanmarsanpro">
                        {{ $movie->name }}
                    </h1> 
                    
                    <a href="{{ route('movie.show', $movie->slug) }}">
                          <img width="100%" height="auto" src="{{ asset('storage/movies/' . $movie->slug . '/' . $movie->poster ) }}" alt="">
                    </a>

                    <div class="p-4">             
                        <p class="rating"> {{numformat($movie->rating)}}/၅  </p>
                        <p class="stars">
                        <input id="input-1-ltr-star-xs" name="input-1-ltr-star-xs" class="star-readonly rating-loading" value="{{$movie->rating}}" dir="ltr" data-size="xxs" data-readonly="true">
                        </p>
                          <p class="lead text-muted">{{ $movie->description }}<br><br>
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

                <div class="mt-3 mb-3">
                    <div class="">
                            <h2 class="text-left myanmarsanpro">{{__('messages.comments')}}</h2>                         
                            @foreach($reviews as $review)
                                <section class="event mb-4">
                                        <h4 class="event-heading pb-3">
                                            <a href="{{route('review.show',[$movie,$review]) }}">{{$review->title}}</a>

                                            <span style="font-size: 12px;" class="row pl-3">
                                                <input id="input-1-ltr-star-xs" name="input-1-ltr-star-xs" class="star-readonly rating-loading" 
                                                value="{{$review->rating}}" dir="ltr" data-size="xxs" data-readonly="true">
                                                {{numformat($review->rating)}}/၅
                                            </span>
                                        </h4>
                                            
                                       <p class="fs-mini">{{$review->body}}</p>
                                            <span class="thumb-sm avatar pull-left mr-sm"><img class="img-circle rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="..."></span>  <h4><a href="#">{{$review->user->name}}</a></h4>               
                                                {{numdate($review->created_at)}}  <br>
                        
                                        <footer>
                                            <div class="clearfix">
                                                <ul class="post-links mt-sm pull-left">
                                                    <li>{{ $review->created_at->diffForHumans() }}</li>
                                                    <li><a href="{{ route('review.show',[$movie,$review]) }}">{{__('messages.reply')}} {{numformat($review->replys->count())}} {{__('messages.receive')}}</a>
                                                    </li>
                                                </ul>
                                            </div>
                                     </footer>
                                 </section>
                            @endforeach
                            
                            {{ $reviews->links() }}
                                                                            
                    </div>  
                </div>            
        </div>
             </div>   
    </div>
</div>
</section>
@endsection





