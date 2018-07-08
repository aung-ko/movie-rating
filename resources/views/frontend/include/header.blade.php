        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="{{ route('index') }}"><img src="{{env('APP_URL')}}/img/logo.png"></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="{{URL::to('/')}}">ပင်မစာမျက်မှာ<span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  အမျိုးအစား
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    @foreach (getAllGenres() as $genre)
                        <a class="dropdown-item" href="{{ url('search?genre_id=' . $genre->id) }}">{{ $genre->name }}</a>
                    @endforeach
                  {{--@foreach($genres as $key=>$value)
                  <a class="dropdown-item" href="{{URL::to('/')}}/search?genre_id={{$key}}">{{$value}}</a>
                  @endforeach --}}
                </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        test
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="{{ url('search?min_rating=3.5') }}"> hot </a>
                        <a class="dropdown-item" href="{{ url('search?min_rating=1.5&max_rating=3.4') }}"> potato </a>
                        <a class="dropdown-item" href="{{ url('search?max_rating=1.4') }}"> ginger </a>
                    </div>
                </li>
            {{-- <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               တန်းပလိတ် <span class="badge badge-pill badge-info"> dev</span>
             </a>
             <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="{{URL::to('/')}}/">ပင်မစာမျက်နှာ</a>
              <a class="dropdown-item" href="{{URL::to('/')}}/search">ရုပ်ရှင်စာမျက်နှာ (listing)</a>
              <a class="dropdown-item" href="{{URL::to('/')}}/movie/a-quiet-place-5b12e239d93ca">ရုပ်ရှင်စာမျက်နှာ (single)</a>
              <a class="dropdown-item" href="{{URL::to('/')}}/user">အသုံးပြုသူ ပရိုဖိုင်</a>
              <a class="dropdown-item" href="{{URL::to('/')}}/movie/a-quiet-place-5b12e239d93ca/review/create">ရီဗျုးစာမျက်နှာ</a>
              
              <div class="dropdown-divider"></div>
              
              <a class="dropdown-item" href="#">အမျိးအစား စာမျက်နှာ  <span class="badge badge-pill badge-info"> soon</span></a>              
            </div>
          </li> --}}

        </ul>

        @auth
        <div class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               {{Auth::user()->name}}
             </a>
             <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              
              <a class="dropdown-item" href="{{route('user', Auth::user()->slug)}}">Profile</a>
             
              
              <div class="dropdown-divider"></div>
              
               

              <a  class="dropdown-item" href="{{ route('logout') }}" 
                    onclick="event.preventDefault();
                    document.getElementById('logout-form').submit();">
                    <i class="fa fa-power-off"></i> Logout</a>
                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                        {{ csrf_field() }}
        </form>            
            </div>
          </div>
        
            
        @else
        
          
          <a  href="{{route('login')}}" class="btn btn-primary">၀င်ရောက်ပါ</a>
          <a  href="{{route('register')}}" class="btn btn-secondary">စတင်ပါ</a>
       
        @endif
      </div>
    </nav>
   