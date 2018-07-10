@extends('admin.layouts.main')

@section('title')
    <title>Reviews</title>
@endsection

@section('content')

<div id="page-wrapper">
    <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">Review</h1>
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
                                <th>Movie</th>
                                <th>Title</th>
                                <th>Body</th>
                                <th></th>
                                
                               
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
                ajax: '{!! route('admin.review.data') !!}',
                columns: [
                    { data: 'movie', name: 'movie' },
                    { data: 'title', name: 'title' },
                    { data: 'body', name: 'body' },   
                    { data: 'delete', name: 'delete' },   
                ]
            });
        });
    </script>
@endsection

