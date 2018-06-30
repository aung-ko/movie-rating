@extends('frontend.app')
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
                <h2 class='myanmarsanpro mb-3'>မှတ်ချက်များ</h2>
                <form class="mt" action="#">
                    <div class="form-group mb-0">
                        <label class="sr-only" for="new-event">New event</label>
                        <textarea class="form-control" id="new-event" placeholder="တစ်ခုခုပြောမယ်..." rows="3"></textarea>
                    </div>
                    <div class="btn-toolbar">
                        <div class="btn-group"><a href="#" class="btn btn-sm btn-gray"><i class="fa fa-camera fa-lg"></i></a> <a href="#" class="btn btn-sm btn-gray"><i class="fa fa-map-marker fa-lg"></i></a>
                        </div>
                        <button type="submit" class="btn btn-dark btn-movie pl-5 pr-5  pull-right">Post</button>

                        <select name="max_rating" id="max_rating" class="form-control" title="Max Rating">
                        {{-- <option value="null">အများဆုံး ြကယ်</option> --}}
                        @for($i=1; $i<=5; $i++)
                        <option value="{{$i}}" data-html='{{$i}}'>{{$i}}</option>
                        @endfor 
                    </select>
                    </div>
                </form> 
                <section class="event"><span class="thumb-sm avatar pull-left mr-sm"><img class="img-circle" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="..."></span>
                    <h4 class="event-heading"><a href="#">ကို ဖြူလုံး</a> <small><a href="#">"မကြောက်ဘူးလား" ရုပ်ရှင်တွင် မှတ်ချက်ရေးခဲ့သည့်</a></small></h4>
                    <p class="fs-sm text-muted">၂၀၁၈ခုနှစ် မေလ ၁ရက်နေ င်္နနက် ၅း၃၀</p>
                    <p class="fs-mini">အိမ်မှာ ပျင်းလို့ သရဲကား အကြမ်းကြီးဆိုလို့ တန်ဖို့ရှိတဲ့ အချိ်န်လေးတွေသုံးပြီး သွားကြည့်မိပါတယ်။ ၃ နာရီ တရေး အိပ်ပြီး ပြန်သာလာရတယ်။ ဘယ်အချိန် သရဲခြောက်သွားမှန်း မသိလိုက်ဘူးဗျို့...</p>
                    <footer>
                        <ul class="post-links">
                            <li><a href="#">တစ်နာရီက</a>
                            </li>
                            </li>
                            <li><a href="#">မှတ်ချက်ရေးရန်</a>
                            </li>
                        </ul>
                    </footer>
                </section>
                <section class="event"><span class="thumb-sm avatar pull-left mr-sm"><img class="img-circle" src="img/avatar6.png" alt="..."></span>
                    <h4 class="event-heading"><a href="#">ကို ဖြူလုံး</a> <small><a href="#">"လေထဲကတိမ်တိုက်" ဗီဒီယိုဇာတ်လမ်းတွင်  မှတ်ချက်ရေးခဲ့သည့်</a></small></h4>
                    <p class="fs-sm text-muted">၂၀၁၈ခုႏွစ္ ေမလ ၂၁ရက္ေန နၤနက္ ၈း၃၀</p>
                    <p class="fs-mini">ကောင်းပါတယ် ဦးကတော့ ဒါပဲပြောချင်တယ်။ ဒါနဲ့ ဒီကားမှာ မင်းသားက ဘယ် တုန်းနဲ့ စကားပြောသွားတာလဲ ဦးမသိလို့။ တုန်းနဲနဲလဲ တင်နိုင်မယ် ဗီဒီယို မဟုတ်ပဲ ရုံတင်ကာဆိုရင်တော့ ကျိန်းသေ အကယ်ဒမီရမှာ၊ ဒါပဲ ပြောချင်တယ်။</p>
                    <footer>
                        <ul class="post-links">
                            <li><a href="#">တစ်နာရီက</a>
                            </li>
                            </li>
                            <li><a href="#">မှတ်ချက်ရေးရန်</a>
                            </li>
                        </ul>
                    </footer>
                </section>                
                <section class="event">
                    <h4 class="event-heading"><a href="#">ကို ဖြူလုံး</a> <small><a href="#">"ဥပါဒန်မျဉ်" ရုပ်ရှင်တွင် မှတ်ချက်ရေးခဲ့သည့်</a></small></h4>
                    <p class="fs-sm text-muted">၂၀၁၈ခုနှစ် မေလ ၁ရက်နေ င်္နနက် ၅း၃၀</p>
                    <p class="fs-mini">ဒီကားကောင်းတယ်ဗျ အကုန်လုံးလဲ ကြည့်သင့်တယ်လိုထင်တယ်ဗျ</p>
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
                            <li><span class="thumb-xs avatar pull-left mr-sm"><img class="img-circle" src="img/avatar1.png" alt="..."></span>
                                <div class="comment-body">
                                    <h6 class="author fw-semi-bold">ဦး တီပွား <small> လွန်ခဲ့သော ၆ မိနစ်က</small></h6>
                                    <p>အကယ်ဒမီ မှန်းထိုက်တဲ့ ကားကောင်း တစ်ကားပါပဲ</p>
                                </div>
                            </li>
                            <li><span class="thumb-xs avatar pull-left mr-sm"><img class="img-circle" src="img/avatar6.png" alt="..."></span>
                                <div class="comment-body">
                                    <input class="form-control input-sm" type="text" placeholder="ဒီ ပိုစ့်ကို မှတ်ချက်ရေးသားပါ.....">
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