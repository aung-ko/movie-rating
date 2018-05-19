@extends('admin.layouts.main')

@section('title')
    <title>Edit Movie</title>
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
                                    <input class="form-control" value="{{ $movie->name }}">
                                </div>

                                <div class="form-group">
                                    <label>Director :</label>
                                    <input class="form-control" value="{{ $movie->director_name }}">
                                </div>

                                <div class="form-group">
                                    <label>Description :</label>
                                    <textarea class="form-control" rows="3">{{ $movie->description }}</textarea>
                                </div>

                                <div class="form-group">
                                    <label>Main Poster :</label>
                                    <input class="form-control" value="{{ $movie->poster }}">
                                </div>

                                <div class="form-group">
                                    <label>Released Date :</label>
                                    <input type="date" class="form-control" value="{{ $movie->released_date }}">
                                </div>

                                <div class="form-group">
                                    <label>Status :</label>
                                    <input class="form-control" value="{{ $movie->status }}">
                                </div>

                                <button type="submit" class="btn btn-default">Update</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection