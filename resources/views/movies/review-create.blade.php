@extends('frontend.app')
@section('content')

<section class="listing jumbotron">
<div class="container">
    <div class="row profile">
        <div class="col-md-4">
            <div class="bg-white">
                <div>
                  <h1 class="btn-movie text-white jumbotron-heading text-left p-3 pb-0 m-0 myanmarsanpro">{{ $movie->name }}</h1> 
                          <img width="100%" height="auto" src="http://127.0.0.1:8000/storage/movies/a-quiet-place-5b12e239d93ca/63dc7ed1010d3c3b8269faf0ba7491d4.jpg" alt="">

                    <div class="p-4">             
                        <p class="rating"> {{numformat($movie->rating)}}/၅  </p>
                        <p class="stars">
                            @for($i=1; $i<=$movie->rating; $i++)
                                <span class="fa fa-lg fa-star checked"></span>
                            @endfor 
                            @for($i=1; $i<=5-$movie->rating; $i++)
                                <span class="fa fa-lg fa-star"></span>
                            @endfor 
                        </p>
                          <p class="lead text-muted">{{ $movie->description }}<br>
                            {{__('messages.director')}} : {{ $movie->director_name }}<br>
                            {{__('messages.writer')}} : ---- <br>
                            {{__('messages.reward')}} :----- <br>
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
                        <div class="btn-group"><a href="#" class="btn btn-sm btn-gray"><i class="fa fa-camera fa-lg"></i></a> <a href="#" class="btn btn-sm btn-gray"><i class="fa fa-map-marker fa-lg"></i></a>
                        </div>
                        <button type="submit" class="btn btn-dark btn-movie pl-5 pr-5  pull-right">Post</button>

                        <select name="rating" id="rating" class="form-control" title="User Rating">
                        {{-- <option value="null">အများဆုံး ြကယ်</option> --}}
                        @for($i=1; $i<=5; $i++)
                        <option value="{{$i}}" data-html='{{$i}}'>{{$i}}</option>
                        @endfor 
                        </select>
                    </div>
                </form> 
                
            </section>
        </div>
             </div>   
    </div>
</div>
</section>
@endsection





