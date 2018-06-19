@extends('frontend.app')
@section('content')

<section class="listing jumbotron">
<div class="container">
    <div class="row profile ng-scope">
        <div class="col-md-4">
            <section class="widget">
                <div class="widget-body">
                    <div class="widget-top-overflow text-white">
                        <div class="height-250 overflow-hidden"><img class="img-responsive" src="../../img/flores-amarillas-wallpaper.jpeg">
                        </div>
                        <div class="btn-toolbar">
                            <a href="#" class="btn btn-default btn-sm pull-right"><i class="fa fa-edit"></i></a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12 text-center">
                            <div class="post-user post-user-profile"><span class="thumb-xlg"><img class="img-circle rounded-circle" src="../../img/avatar6.png" alt="..."></span>
                                <h4 class="fw-normal pt-2">{{$user->name}}</h4>
                                <a href="#" class="btn btn-success btn-sm mt">&nbsp;Send <i class="fa fa-envelope ml-xs"></i>&nbsp;</a>
                                <a href="#" class="btn btn-info btn-sm mt">&nbsp;Follow <i class="fa fa-user-plus ml-xs"></i>&nbsp;</a>

								<ul class="list-group list-group-flush m-3">
								  <li class="list-group-item">အလုပ်အကိုင်- ရုပ်ရှင် ဒါရိုက်တာရူး</li>
								  <li class="list-group-item">စတင်ဝင်ရောက်သည့်နေ့- ၁၊ မေ၊ ၂၀၁၈</li>
								  <li class="list-group-item">မှတ်ချက်စုစုပေါင်း- ၁၂၅ ခုပေးခဲ့သည်</li>
								  <li class="list-group-item">သူငယ်ချင်းများ- ၃၀ ယောက်</li>
								  <li class="list-group-item">ကြည့်ရှုပြီးသောရုပ်ရှင်- ၅၀ ကား</li>
								  <li class="list-group-item">ရရှိထားသောဆု- လေအိုးကြီး</li>
								</ul>

                            </div>
                        </div>
                        <div class="col-sm-12">
                            </p>
                            <p class="lead mt-lg">ကွီးနာမည်က ဖြူလုံး ရုပ်ရှင် ကြည့်ရတာ ဝါသနာပါတယ်၊ အထူးသဖြင့် မရီရတဲ့ ပေါကားတွေ ကြည့်ပြီး ဝေဖန်ရေး ဆစရက  လုပ်ရတာ အထူး ကျွမ်ကျင်တယ် ဆိုပါတော့</p>
                        </div>
                        <a href="#" class="btn btn-sm mt align-items-right align-items-bottom"><i class="fa fa-edit ml-xs"></i>&nbsp;</a>
                    </div>
                </div>
            </section>
        </div>
        <div class="col-md-8">
            <section class="activities">
                <h2 class='myanmarsanpro'>လှုပ်ရှားမှုများ</h2>
                <h2 class='myanmarsanpro'>Reviews</h2>
                @foreach($user->reviews as $review)
                <section class="event"><span class="thumb-sm avatar pull-left mr-sm"><img class="img-circle" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="..."></span>
                    <h4 class="event-heading"><a href="#">{{$user->name}}</a> <small><a href="{{route('movie.show', $review->movie) }}">"{{$review->movie->name}}"ရုပ်ရှင်တွင် မှတ်ချက်ရေးခဲ့သည့်</a></small></h4>
                    <p class="fs-sm text-muted">၂၀၁၈ခုနှစ် မေလ ၁ရက်နေ င်္နနက် ၅း၃၀</p>
                    <p class="fs-mini"><strong>{{$review->title}}</p>
                    <p class="fs-mini">{{$review->body}}</p>
                    <footer>
                        <ul class="post-links">
                            <li><a href="#">တစ်နာရီက</a>
                            </li>
                            <li><a href="#"><span class="text-danger"><i class="fa fa-heart"></i> ၃၀ ကြိုက်တယ်</span></a>
                            </li>
                            <li><a href="#">မှတ်ချက်ရေးရန်</a>
                            </li>
                        </ul>
                    </footer>
                </section>
                @endforeach
                <h2 class='myanmarsanpro'>Replies</h2>
                @foreach($user->replys as $reply)
                <section class="event"><span class="thumb-sm avatar pull-left mr-sm"><img class="img-circle" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="..."></span>
                    <h4 class="event-heading"><a href="#">{{$user->name}}</a> <small><a href="{{route('review.show',[$reply->review->movie,$reply->review]) }}">"{{$reply->review->title}}" Review တွင် Reply ရေးခဲ့သည့်</a></small></h4>
                    <p class="fs-sm text-muted">၂၀၁၈ခုနှစ် မေလ ၁ရက်နေ င်္နနက် ၅း၃၀</p>
                    
                    <p class="fs-mini">{{$reply->body}}</p>
                    <footer>
                        <ul class="post-links">
                            <li><a href="#">တစ်နာရီက</a>
                            </li>
                            <li><a href="#"><span class="text-danger"><i class="fa fa-heart"></i> ၃၀ ကြိုက်တယ်</span></a>
                            </li>
                            <li><a href="#">မှတ်ချက်ရေးရန်</a>
                            </li>
                        </ul>
                    </footer>
                </section>
                @endforeach
                
        </div>
    </div>
</div>
</section>
@endsection