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
                            <form role="form" action="{{ route('admin.movie.update', $movie->slug) }}" method="POST">
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
                                    <label>Main Poster :</label>
                                    <input type="text" class="form-control" name="poster" value="{{ $movie->poster }}">
                                </div>

                                <div class="form-group">
                                    <label>Released Date :</label>
                                    <input type="date" class="form-control" name="released_date" value="{{ $movie->released_date }}">
                                </div>

                                <div class="form-group">
                                    <label>Status :</label>
                                    <input type="text" name="status" class="form-control" value="{{ $movie->status }}">
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
    function ConfirmDelete()
    {
        return confirm("Are you sure you want to delete?");
    }
</script>
@endsection