<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="../"><img src="{{ asset('img/logo.png') }}"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="{{URL::to('/')}}">{{ __('messages.pages.home')}}<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ __('messages.pages.genre')}}
        </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="{{URL::to('/')}}/search?genre_id=1">Action</a>
          </div>
      </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> တန်းပလိတ် <span class="badge badge-pill badge-info"> dev</span>
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="{{URL::to('/')}}/">{{ __('messages.pages.home')}}</a>
        <a class="dropdown-item" href="{{URL::to('/')}}/search">{{ __('messages.pages.search')}}</a>
        <a class="dropdown-item" href="{{URL::to('/')}}/movie/a-quiet-place-5b12e239d93ca">{{ __('messages.pages.movie-detail')}}</a>
        <a class="dropdown-item" href="{{URL::to('/')}}/user">{{ __('messages.pages.user-profile')}}</a>
        <a class="dropdown-item" href="{{URL::to('/')}}/movie/a-quiet-place-5b12e239d93ca/review/create">{{ __('messages.pages.review-detail')}}</a>
          <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">အမျိးအစား စာမျက်နှာ  <span class="badge badge-pill badge-info"> soon</span></a>              
          </div>
      </li>
    </ul>
  @auth
    <ul class="navbar-nav">   
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{Auth::user()->name}}
      </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item mr-5" href="{{route('user', Auth::user()->slug)}}">{{ __('messages.profile')}}</a>
            <div class="dropdown-divider"></div>
              <a  class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                <i class="fa fa-power-off"></i> {{ __('messages.action.logout')}}
              </a>
              <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                {{ csrf_field() }}
              </form>            
        </div>
    </li>
    <ul>

  @else
    <a  href="{{route('login')}}" class="btn btn-outline-secondary"> <i class="fa fa-comments"></i> {{ __('messages.action.chatting')}}</a>
    <a  href="{{route('login')}}" class="btn btn-primary btn-movie">{{ __('messages.action.login')}}</a>
    <a  href="{{route('register')}}" class="btn btn-secondary">{{ __('messages.action.account-open')}}</a>
  @endif
  </div>
</nav>
