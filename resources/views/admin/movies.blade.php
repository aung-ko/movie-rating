@extends('admin.layouts.main')

@section('title')
    <title>All Movies</title>
@endsection

@section('content')

<div id="page-wrapper">
    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">Movies</h1>
        </div>
        <!-- /.col-lg-12 -->
    </div>
    <!-- /.row -->

    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    All Movies in detail
                </div>
                <!-- /.panel-heading -->
                <div class="panel-body">
                    <table width="100%" class="table table-striped table-bordered table-hover" id="movie-table">
                        <thead class="thead-dark">
                            <tr>
                                <th>Name</th>
                                <th>Director</th>
                                <th>Description</th>
                                <th>Poster</th>
                                <th>Released Date</th>
                                <th>Status</th>
                                <th>Slug</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('scripts')
    <script>
        $(function() {
            $('#movie-table').DataTable({
                processing: true,
                serverSide: true,
                responsive: true,
                ajax: '{!! route('admin.movies.data') !!}',
                columns: [
                    { data: 'name', name: 'name' },
                    { data: 'director_name', name: 'director_name' },
                    { data: 'description', name: 'description' },
                    { data: 'poster', name: 'poster' },
                    { data: 'released_date', name: 'released_date' },
                    { data: 'status', name: 'slug' },
                    { data: 'slug', name: 'slug' }
                ]
            });
        });
    </script>
@endsection

