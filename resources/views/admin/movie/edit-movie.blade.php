@extends('admin.layouts.main')

@section('title')
    <title>Edit Movie</title>
@endsection

@section('css')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/css/select2.min.css">
@endsection

@section('content')

<div id="page-wrapper">
    <div class="row">
        <div class="col-lg-12">
            <h2 class="page-header">{{ $movie->name }}</h2>
        </div>
        <!-- /.col-lg-12 -->
    </div>

    <!-- /.row -->
    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    Edit Details
                </div>

                <div class="panel-body">
                    <div class="row">
                        <div class="col-lg-10">
                            @include('admin.layouts.errors')

                            <form role="form" action="{{ route('admin.movie.update', $movie->slug) }}" method="POST" enctype="multipart/form-data">
                                {{ method_field('PATCH') }}

                                {{  csrf_field() }}

                                <div class="form-group">
                                    <label>Name :</label>
                                    <input type="text" class="form-control" name="name" value="{{ $movie->name }}">
                                </div>

                                <div class="form-group">
                                    <label>Director :</label>
                                    <input type="text" class="form-control" name="director_name" value="{{ $movie->director_name }}">
                                </div>

                                <div class="form-group">
                                    <label>Description :</label>
                                    <textarea type="text" class="form-control" name="description" rows="3">{{ $movie->description }}</textarea>
                                </div>

                                <div class="form-group">
                                    <label>Trailer Id :</label>
                                    <input type="text" class="form-control" name="trailer_id" value="{{ $movie->trailer_id }}">
                                </div>

                                <div class="form-group">
                                    <label>Main Poster :</label>
                                    <img src="{{ asset('storage/movies/' . $movie->slug . '/' . $movie->poster) }}" width="250px" height="auto">
                                    <input type="file" class="form-control" name="poster" src="{{ asset('storage/movies/' . $movie->slug . '/' . $movie->poster) }}">
                                </div>

                                <div class="form-group">
                                    <label>Background Image :</label>
                                    <img src="{{ asset('storage/movies/' . $movie->slug . '/' . $movie->background) }}" width="500px" height="auto">
                                    <input type="file" class="form-control" name="background" src="{{ asset('storage/movies/' . $movie->slug . '/' . $movie->background) }}">
                                </div>

                                <div class="form-group">
                                    <label>Thumbnail :</label>
                                    <img src="{{ asset('storage/movies/' . $movie->slug . '/' . $movie->thumb) }}" width="250px" height="auto">
                                    <input type="file" class="form-control" name="thumb" src="{{ asset('storage/movies/' . $movie->slug . '/' . $movie->thumb) }}">
                                </div>

                                <div class="form-group">
                                    <label>Released Date :</label>
                                    <input type="date" class="form-control" name="released_date" value="{{ $movie->released_date }}">
                                </div>

                                <div class="form-group">
                                    <label>Status :</label>
                                    <select name="status_id" class="form-control">
                                        @foreach($statuses as $status)
                                            @if ($status->id == $movie->status_id)
                                                <option value="{{ $status->id}}" selected>{{ $status->name }}</option>
                                            @else
                                                <option value="{{ $status->id }}">{{ $status->name }}</option>
                                            @endif
                                        @endforeach
                                    </select>
                                </div>
                                
                                <div class="form-group">
                                    <label for="genres">Select genre:</label>
                                    <select name="genres[]" id="genres" class="form-control" multiple="multiple">
                                        @foreach($genres as $key => $genre)
                                            @if (array_key_exists($key, $movie_genre_ids))
                                                <option value="{{ $key }}" selected>{{ $genre }}</option>
                                            @else
                                                <option value="{{ $key }}">{{ $genre }}</option>
                                            @endif
                                        @endforeach
                                    </select>
                                </div>

                                <button type="submit" class="btn btn-primary">Update</button>

                            </form>

                            <form class="form" role="form" method="POST" action="{{ route('admin.movie.delete', $movie->slug) }}"
                                style="float: right">
                                <input type="hidden" name="_method" value="DELETE">
                                {{ csrf_field() }}
    
                                <input class="btn btn-danger" Onclick="return ConfirmDelete();" type="submit" value="Delete">
    
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection

@section('scripts')
<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/js/select2.min.js"></script>
<script>
    $(document).ready(function(){
        $('#genres').select2({
            tags: true
        });
    });  
</script>
<script>
    function ConfirmDelete()
    {
        return confirm("Are you sure you want to delete?");
    }
</script>
@endsection