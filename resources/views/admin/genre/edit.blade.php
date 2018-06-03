@extends('admin.layouts.main')

@section('title')
    <title>Edit Genre</title>
@endsection

@section('content')

<div id="page-wrapper">
    <div class="row">
        <div class="col-lg-12">
            <h2 class="page-header">{{ $genre->name }}</h2>
        </div>
        <!-- /.col-lg-12 -->
    </div>

    <!-- /.row -->
    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    Edit Genre
                </div>

                <div class="panel-body">
                    <div class="row">
                        <div class="col-lg-10">
                            @include('admin.layouts.errors')

                            <form role="form" action="{{ route('admin.genre.update', $genre->id) }}" method="POST">
                                {{ method_field('PATCH') }}

                                {{  csrf_field() }}

                                <div class="form-group">
                                    <label>Name :</label>
                                    <input type="text" class="form-control" name="name" value="{{ $genre->name }}">
                                </div>


                                <button type="submit" class="btn btn-primary">Update</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection
