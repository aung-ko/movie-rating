<div class="row">
   <div class="col-sm-7">


    <section class="activities">
        <h2 class='myanmarsanpro'>လှုပ်ရှားမှုများ</h2>
        <a href="{{route('review.create', $movie)}}" class="btn btn-success">Add</a>
        @foreach($reviews as $review)
        <section class="event"><span class="thumb-sm avatar pull-left mr-sm"><img class="img-circle" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="..."></span>
            <h4 class="event-heading"><a href="#">{{$review->user->name}}</a> <small><a href="#">"{{$movie->name}}" ရုပ်ရှင်တွင် မှတ်ချက်ရေးခဲ့သည့်</a></small></h4>
            <p class="fs-sm text-muted">၂၀၁၈ခုနှစ် မေလ ၁ရက်နေ င်္နနက် ၅း၃၀</p>
            <p class="fs-mini"><a href="{{route('review.show',[$movie,$review]) }}">{{$review->title}}</a></p>
            <a href="{{route('review.edit',[$movie,$review]) }}" class="btn btn-primary">Edit</a>
            <p class="fs-mini">{{$review->body}}</p>
           
            <i class="fa fa-star checked"></i>
            <i class="fa fa-star checked"></i>
            <i class="fa fa-star checked"></i>
            <i class="fa fa-star checked"></i> 
            <img class="custom-icon flex-row chilis" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=">
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
                        <h6 class="author fw-semi-bold">{{$reply->user->name}} <small> လွန်ခဲ့သော ၆ မိနစ်က</small> 
                            <form action="{{route('reply.destroy', $reply->id)}}" method="POST">
                                {{method_field('delete')}}
                                {{csrf_field()}}

                                <button class="btn btn-danger btn-sm">Delete</button>


                            </form></h6>
                            <p>{{$reply->body}}</p>
                        </div>
                    </li>
                    @endforeach
                    <li><span class="thumb-xs avatar pull-left mr-sm"><img class="img-circle" src="img/avatar6.png" alt="..."></span>
                        <div class="comment-body">
                         <form  action="{{url( 'movie/'. $movie->slug . '/review/' . $review->id . '/reply')}}" method="POST">
                             {{ csrf_field() }}
                             <input class="form-control input-sm" name="body" type="text" placeholder="ဒီ ပိုစ့်ကို မှတ်ချက်ရေးသားပါ.....">
                             <button type="submit" class="btn btn-success btn-sm pull-right">Post</button>
                         </form>
                     </div>
                 </li>
             </ul>
         </footer>
     </section>
     @endforeach



     <form class="mt ng-pristine ng-valid" action="{{url( 'movie/'. $movie->slug . '/review')}}" method="POST">
         {{ csrf_field() }}

         <div class="form-group mb-0">
            <label class="sr-only" for="new-event">New event</label>
            <textarea class="form-control" name="body" id="new-event" placeholder="တစ်ခုခုပြောမယ်..." rows="3"></textarea>
        </div>
        <div class="btn-toolbar">
            <div class="btn-group"><a href="#" class="btn btn-sm btn-gray"><i class="fa fa-camera fa-lg"></i></a> <a href="#" class="btn btn-sm btn-gray"><i class="fa fa-map-marker fa-lg"></i></a>
            </div>
            <button type="submit" class="btn btn-success btn-sm pull-right">Post</button>
        </div>
    </form>
</section>