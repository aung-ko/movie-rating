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
                      <h1 class="btn-movie text-white jumbotron-heading text-left p-3 pb-0 m-0 myanmarsanpro">Movie Name </h1> 
                      <img width="100%" height="auto" src="http://127.0.0.1:8000/storage/movies/a-quiet-place-5b12e239d93ca/63dc7ed1010d3c3b8269faf0ba7491d4.jpg" alt="">

                      <div class="p-4">
                          <p class="lead text-muted">Movie descriptio here<br>
                            ဒါရိုက်တာ : Director name<br>
                            ဇာတ်ညွှန်းဆရာ : ---- <br>
                            ထူးချွန်ဆုရရှိသူများ :----- <br>
                            ဇာတ်လမ်းအမျိုးအစား : Genre name       
                        </p>              
                        <p class="rating"> ၄/၅ </p>
                        <p class="stars">
                            <span class="fa fa-lg fa-star checked"></span>
                            <span class="fa fa-lg fa-star checked"></span>
                            <span class="fa fa-lg fa-star checked"></span>
                            <span class="fa fa-lg fa-star checked"></span>
                            <span class="fa fa-lg fa-star"></span>
                        </p>
                        <div class="text-right other-rating">
                         ၁၀  <img class="custom-icon flex-row chilis" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=">  | 
                         ၁၀  <img class="custom-icon flex-row putato" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=">  | 
                         ၁၀  <img class="custom-icon flex-row ginger" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=">
                     </div>                                                                          
                 </div>

                 <div class='card p-4 bg-warning'>
                    <h2 class="text-left myanmarsanpro">ဘယ်မှာပြသနေပြီလဲ</h2>
                    <p>
                        Mingalar Cinema <br>
                        Time: <span class="badge badge-success">9:00 AM</span>များ
                        <span class="badge badge-success"> 12:00 PM</span>
                        <span class="badge badge-success">3:30 PM</span>
                        <span class="badge badge-warning">6:30 PM</span>
                        <span class="badge badge-danger">9:30 PM</span>           
                    </p>
                    <a href="#" class="btn btn-dark btn-lg btn-block">လက်မှတ်၀ယ်မယ်</a>                        
                </div>  
            </div>  
        </div>
    </div>
    <div class="col-md-8 mt-3">

        <section class="activities">
            

                <section class="event">
                    <h4 class="event-heading"><a href="#">{{$review->user->name}}</a> <small><a href="#">"{{$review->movie->name}}" ရုပ်ရှင်တွင် မှတ်ချက်ရေးခဲ့သည့်</a></small></h4>
                    <p class="fs-sm text-muted">၂၀၁၈ခုနှစ် မေလ ၁ရက်နေ င်္နနက် ၅း၃၀</p>
                    <p class="fs-sm text-muted"><strong>{{$review->title}}</strong></p>
                    <p class="fs-mini">{{$review->body}}</p>
                    
                    <footer>
                        <div class="clearfix">
                            <ul class="post-links mt-sm pull-left">
                                <li><a href="#">တစ်နာရီက</a>
                                </li>
                                <li><a href="#"><span class="text-danger"><i class="fa fa-heart-o"></i>  ၅၀ ကြိုက်တယ်</span></a>
                                </li>
                                <li><a href="#"> ၁၀ မှတ်ချက်ရေးခဲ့သည့်</a>
                                </li>

                            </ul>
                        </div>
                        <ul class="post-comments mt-sm">


                            @foreach($review->replys as $reply)
                            <li><span class="thumb-xs avatar pull-left mr-sm"><img class="img-circle" src="img/avatar1.png" alt="..."></span>
                                <div class="comment-body">
                                    <h6 class="author fw-semi-bold">{{$reply->user->name}}{{--  <small>{{$reply->created_at->diffForHumans()}}</small> --}}</h6>

                                    @can('delete-reply', $reply)
                                    <form action="{{route('reply.destroy', $reply->id)}}" method="POST">
                                        {{method_field('delete')}}
                                        {{csrf_field()}}

                                        <button class="btn btn-danger btn-xs pull-right">Delete</button>


                                    </form>
                                    @endcan
                                    
                                    @can('edit-reply', $reply)
                                    <button class="btn btn-primary btn-xs pull-right" data-toggle="modal" data-target="#exampleModal">Edit</button>

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
                        <p>{{$reply->body}}</p>
                        
                    </li>
                    @endforeach


                    <li>
                        <div class="comment-body">
                            @if(\Auth::check())
                            <form action="{{route('reply.store', [$movie, $review])}}" method="POST" class="form-horizontal form-bordered">
                                {{csrf_field()}}

                                <div class="form-body">

                                    <div class="form-body">
                                        <div class="form-group row {{$errors->has('body') ? 'has-error' : ''}}">

                                            <div class="col-md-12">
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





