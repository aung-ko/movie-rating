@extends('admin.layouts.main')

@section('title')
    <title>Add Movie</title>
@endsection

@section('css')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.3/css/select2.min.css">
@endsection

@section('content')

<div id="page-wrapper">
    <div class="row">
        <div class="col-lg-12">
            <h2 class="page-header">Add New Movie</h2>
        </div>
        <!-- /.col-lg-12 -->
    </div>

    <!-- /.row -->
    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    Fill out following details
                </div>

                <div class="panel-body">
                    <div class="row">
                        <div class="col-lg-10">
                            @include('admin.layouts.errors')
                            
                            <form role="form" action="{{ route('admin.movie.store') }}" method="POST" enctype="multipart/form-data">

                                {{  csrf_field() }}

                                <div class="form-group">
                                    <label>Name :</label>
                                    <input type="text" class="form-control" name="name" value="{{ old('name') }}">
                                </div>

                                <div class="form-group">
                                    <label>Director :</label>
                                    <input type="text" class="form-control" name="director_name" value="{{ old('director_name') }}">
                                </div>

                                <div class="form-group">
                                    <label>Description :</label>
                                    <textarea type="text" class="form-control" name="description" rows="3">{{ old('description') }}</textarea>
                                </div>

                                <div class="form-group">
                                    <label>Trailer Video ID :</label>
                                    <input type="text" class="form-control" name="trailer_id" value="{{ old('trailer_id') }}">
                                </div>

                                <div class="form-group">
                                    <label>Main Poster :</label>
                                    <input type="file" class="form-control" name="poster">
                                </div>

                                <div class="form-group">
                                    <label>Background Image :</label>
                                    <input type="file" class="form-control" name="background" >
                                </div>

                                <div class="form-group">
                                    <label>Thumbnail :</label>
                                    <input type="file" class="form-control" name="thumb">
                                </div>

                                <div class="form-group">
                                    <label>Released Date :</label>
                                    <input type="date" class="form-control" name="released_date" value="{{ old('released_date') }}">
                                </div>

                                <div class="form-group">
                                    <label>Status :</label>
                                    <select name="status_id" class="form-control">
                                        @foreach($statuses as $status)
                                            <option value="{{ $status->id }}">{{ $status->name }}</option>
                                        @endforeach
                                    </select>
                                </div>
                                
                                <div class="form-group">
                                    <label for="genres">Select genre:</label>
                                    <select name="genres[]" id="genres" class="form-control" multiple="multiple">
                                        @foreach($genres as $key => $genre)
                                            <option value="{{ $key }}">{{ $genre }}</option>
                                        @endforeach
                                    </select>
                                </div>

                                <button type="submit" class="btn btn-primary">Save</button>

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

@endsection