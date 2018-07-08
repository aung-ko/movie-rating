@extends('admin.layouts.main')

@section('title')
    <title>Admin Profile</title>
@endsection

@section('css')
{{-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> --}}

<style>
.profile-container {
    width: 100%;
    margin: 0 auto;
    padding: 40px;
    background: #eaeaea;
}
.card {
    max-width: 300px;
    margin: auto;
    text-align: center;
}

.card-modal {
    max-width: 500px;
    margin: auto;
}

.profile-img-preview{
    margin-top: 4%;
    margin-left: 10%;
    margin-bottom: 4%;
    width: 150px;
    height: auto;
    border: thin solid black;
}

</style>
@endsection

@section('content')

<div id="page-wrapper">
    <div class="profile-container">
        <div class="card">
            <img src="{{ asset('storage/users/' . $user->img) }}" style="width:100px; height: auto;">

            <h1>{{ $user->name }}</h1>
            <p class="title">Joined Date - {{ $user->created_at->toFormattedDateString() }}</p>

            <p>{{ $user->bio }}</p>

            @can('edit-profile', $user)
            <button type="button" class="btn btn-link" data-toggle="modal" data-target="#profileModal"><i class="fa fa-edit"></i></button>
            @endcan

        </div>
        
    </div>

   

</div>
@can('edit-profile', $user)
<div class="modal fade" id="profileModal" tabindex="-1" role="dialog" aria-labelledby="profileModalLabel" aria-hidden="true" >

    <div class="container">    
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="profileModalLabel">Edit Your Profile</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            
                <div class="modal-body">
                    <div class="card-modal">
                    
                    <form action="{{route('profile.update', $user)}}" method="POST" class="form-horizontal form-bordered" enctype="multipart/form-data">

                        {{ method_field('PATCH') }}
                        {{csrf_field()}}

                        <div class="form-body">
                            <div class="form-group">
                                <label>Profile Image : </label>
                                <img src="{{ asset('storage/users/' . $user->img) }}" class="profile-img-preview" id="profile-image">
                                <input type="file" class="form-control" name="img" id="profile-image-input">
                                @if ($errors->has('img'))
                                    <span class="help-block text-danger" id="error-message">
                                        <strong>{{ $errors->first('img') }}</strong>
                                    </span>
                                @endif
                            </div>

                            <div class="form-group">
                                <label for="name">အမည် : </label>
                                <input type="text" class="form-control" name="name" value="{{ $user->name }}" autofocus>
                                @if ($errors->has('name'))
                                    <span class="help-block text-danger" id="error-message">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
                                @endif
                            </div>

                            <div class="form-group">
                                <label for="name">မိမိအကြောင်း : </label>
                                <textarea class="form-control" name="bio" rows="3" autofocus>{{ $user->bio }}</textarea>
                            </div>

                        </div>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary">Save</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endcan

@endsection

@section('scripts')
<script>
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#profile-image').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
}

$("#profile-image-input").change(function(){
    readURL(this);
});

@if (count($errors) > 0)
    $('#profileModal').modal('show');
@endif

</script>
@endsection