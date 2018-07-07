@extends('frontend.app')

@section('script')
<script src="{{ asset('js/vue.js') }}"></script>

@endsection
@section('content')

<section class="listing jumbotron">
    <div class="container">
        <div class="row profile">
            <div class="col-md-4">
                <div class="bg-white">
                    <div>
                      <div>
                      <h1 class="btn-movie text-white jumbotron-heading text-left p-3 pb-0 m-0 myanmarsanpro">{{ $movie->name }}</h1> 

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
    </div>
    <div class="col-md-8 mt-3">

        <section class="activities">
                <section class="event">
                        <span class="thumb-sm avatar pull-left mr-sm"><img class="img-circle rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="..."></span>  <h4><a href="#">{{$review->user->name}}</a></h4>               
                        {{numdate($review->created_at)}}  <p/>

                        <h4 class="event-heading pb-3">
                                <a href="{{route('review.show',[$movie,$review]) }}">{{$review->title}}</a>

                                <span style="font-size: 12px;" class="row pl-3">
                                    <input id="input-1-ltr-star-xs" name="input-1-ltr-star-xs" class="star-readonly rating-loading" 
                                    value="{{$review->rating}}" dir="ltr" data-size="xxs" data-readonly="true">
                                    {{numformat($review->rating)}}/၅
                                </span>
                            </h4>
                                
                           <p class="fs-mini">{{$review->body}}</p>
                                
            
                            <footer>
                                <div class="clearfix">
                                    <ul class="post-links mt-sm pull-left">
                                        <li>{{ $review->created_at->diffForHumans() }}</li>
                                        <li><a href="{{ route('review.show',[$movie,$review]) }}">{{__('messages.reply')}} {{numformat($review->replys->count())}} {{__('messages.receive')}}</a>
                                        </li>
                                    </ul>
                                </div>
                         </footer>
                         
                        <ul class="post-comments mt-sm">


                            @foreach($review->replys as $reply)
                            <li><span class="thumb-xs avatar pull-left mr-sm"><img class="img-circle" src="img/avatar1.png" alt="..."></span>
                                <div class="comment-body">
                                    <h6 class="author fw-semi-bold">{{$reply->user->name}}{{--  <small>{{$reply->created_at->diffForHumans()}}</small> --}}</h6>
                                    <p>{{$reply->body}}</p>

                                <div class="d-flex float-right">
                                    @can('edit-reply', $reply)
                                     <button type="button" class="btn btn-link" data-toggle="modal" data-target="#exampleModal"><i class="fa fa-edit"></i></button>
                                     <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                                            <div class="modal-dialog" role="document">
                                              <div class="modal-content">
                                                <div class="modal-header">
                                                  <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                              <form action="{{route('reply.update', [$movie, $review, $reply])}}" method="POST" class="form-horizontal form-bordered">
                                                  {{ method_field('PATCH') }}
                                                  {{csrf_field()}}
                                                  <div class="form-body">
                                                      <div class="form-group row">
      
                                                          <div class="col-md-12">
                                                              <input type="text" class="form-control" name="body" value="{{ $reply->body }}" autofocus>
      
                                                              
      
                                                          </div>
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
                            @can('delete-reply', $reply)
                                    <form action="{{route('reply.destroy', $reply->id)}}" method="POST">
                                        {{method_field('delete')}}
                                        {{csrf_field()}}

                                        <button class="btn btn-link">
                                            <i class="fa fa-trash text-danger"></i></button>


                                    </form>
                                    
                                @endcan
                              

                                   
                        </li>
                        @endforeach


                        <li>
                            <div class="comment-body">
                                @if(auth()->check())
                                <form action="{{route('reply.store', [$movie, $review])}}" method="POST" class="form-horizontal form-bordered">
                                    {{csrf_field()}}

                                    

                                        <div class="form-body">
                                            <div class="form-group {{$errors->has('body') ? 'has-error' : ''}}">

                                                <div class="col-md-12">
                                                    <input type="text" class="form-control" name="body" value="{{ old('body') }}" autofocus>

                                                    @if ($errors->has('body'))
                                                    <span class="help-block">
                                                        <strong>{{ $errors->first('body') }}</strong>
                                                    </span>
                                                    @endif

                                                </div>
                                            </div>
                                            <button type="submit" class="ml-3 btn btn-success"> <i class="fa fa-check"></i> Submit</button>

                                        </div>
                                </form>
                                @endif
                            </div>
                        </li>

                        </ul>


                    </footer>
                </section>
            </section>
        </div>
    </div>   
</div>
</div>
</section>
@endsection





