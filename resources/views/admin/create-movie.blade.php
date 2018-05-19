@extends('admin.layouts.main')

@section('title')
    <title>Add Movie</title>
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
                            <form role="form" action="{{ route('admin.movie.store') }}" method="POST">

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
                                    <label>Main Poster :</label>
                                    <input type="text" class="form-control" name="poster" value="{{ old('poster') }}">
                                </div>

                                <div class="form-group">
                                    <label>Released Date :</label>
                                    <input type="date" class="form-control" name="released_date" value="{{ old('released_date') }}">
                                </div>

                                <div class="form-group">
                                    <label>Status :</label>
                                    <input type="text" name="status" class="form-control" value="{{ old('status') }}">
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