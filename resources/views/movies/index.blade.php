@extends('frontend.app')
@section('content')
<section class="listing jumbotron">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h2 class='pt-3 pl-3 pb-1 myanmarsanpro'>ဇာတ်ကားများ</h2>
                <p class='pl-3 jumbotron-heading'>( {{numformat($movies->count())}} ) {{__('messages.has-movie')}}</p>
                <div class="row">
                    @foreach($movies as $movie)
                    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">

                        <div class="recent-movie-block">
                            <div class="recent-movie-img">
                                @if($movie->poster == !null)
                                <img class="lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="{{ asset('storage/movies/' . $movie->slug . '/' . $movie->poster ) }} "/>
                                @else
                                <img class="lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" data-src="http://via.placeholder.com/255x375"/>
                                @endif
                                <div class="recent-movie-content p-3">
                                    <h4 class="text-white mb0">{{$movie->name}}</h4>
                                    <div>
                                        <p class="rating">
                                        {{trans_choice('messages.minutes_ago', 9, ['value' => 5])}}</p>
                                        <p class="rating"> {{numformat($movie->rating)}}/၅ </p>
                                        <p class="stars">
                                            @for($i=1; $i<=$movie->rating; $i++)
                                                <span class="fa fa-lg fa-star checked"></span>
                                            @endfor 
                                            @for($i=1; $i<=5-$movie->rating; $i++)
                                                <span class="fa fa-lg fa-star"></span>
                                            @endfor 
                                        </p>
                                    </div>
                                </div>
                                <div class="overlay">
                                    <div class="card-header">
                                        <h3 class="text-dark mb0">{{$movie->name}}</h3>
                                    </div>
                                    <div class="card-body">          
                                        <p class="rating"> ၄/၅ </p>
                                        <p class="rating"> {{numformat($movie->rating)}}/၅ </p>
                                        <p class="stars">
                                            @for($i=1; $i<=$movie->rating; $i++)
                                                <span class="fa fa-lg fa-star checked"></span>
                                            @endfor 
                                            @for($i=1; $i<=5-$movie->rating; $i++)
                                                <span class="fa fa-lg fa-star"></span>
                                            @endfor 
                                        </p>
                                        <p>{{ str_limit($movie->description, 90) }}</p>
                                    </div>
                                    <div class="card-footer nopadding">
                                        <a class="align-text-bottom btn btn-dark align-text-bottom btn-lg btn-block" href="{{route('movie.show', $movie)}}" role="button">ကြည့်မယ်</a>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>   
                    @endforeach

                </div>
                @include('frontend.include.pagination') 
            </div>

        </div>
    </div>


</section>
@endsection