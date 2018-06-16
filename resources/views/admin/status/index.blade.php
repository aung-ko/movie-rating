@extends('admin.layouts.main')

@section('title')
    <title>Movie Status</title>
@endsection

@section('content')

<div id="page-wrapper">
    <div class="row">
        <div class="col-lg-12">
            <h2 class="page-header">Movie Status</h2>
        </div>
        <!-- /.col-lg-12 -->
    </div>

    <!-- /.row -->
    <div class="row">
        <div class="col-lg-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    Status
                </div>

                <div class="panel-body">
                    <div class="row">
                        <div class="col-lg-10">
                            @include('admin.layouts.errors')
                            
                            <div class="panel-body">
                                <div class="list-group">
                                    <ul id="genre-list">
                                        @foreach ($status as $stat)
                                            <li class="list-group-item"> {{ $stat->name }} 
                                                <span class="pull-right text-muted small">

                                                    <form class="form" role="form" method="POST" action="{{ route('admin.status.delete', $stat->id) }}"
                                                        style="float: right">
                                                        <input type="hidden" name="_method" value="DELETE">
                                                        {{ csrf_field() }}
                            
                                                        <input class="btn btn-sm btn-danger" Onclick="return ConfirmDelete();" type="submit" value="Delete">
                            
                                                    </form>
                                                </span>
                                            </li>
                                        @endforeach
                                    </ul>

                                    <label for="add-status"> Add New Status </label>
                                    <ul>
                                        <li class="list-group-item">
                                            <form role="form" action="{{ route('admin.status.store') }}" method="POST">
                                                    {{ csrf_field() }}

                                                <div class="form-group"> 
                                                    <input type="text" name="name" id="add-status" class="form-control">
                                                </div>
                                                <div class="form-group">
                                                    <button class="btn btn-sm btn-primary" type="submit" class="pull-right">Add</button>
                                                </div>
                                            </form>
                                        </li>
                                    </ul>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection

@section('scripts')
<script>
    function ConfirmDelete()
    {
        return confirm("Are you sure you want to delete?");
    }
</script>
@endsection