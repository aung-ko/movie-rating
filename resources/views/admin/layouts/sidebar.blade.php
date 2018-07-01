<div class="navbar-default sidebar" role="navigation">
    <div class="sidebar-nav navbar-collapse">
        <ul class="nav" id="side-menu">
            <li class="sidebar-search">
                <div class="input-group custom-search-form">
                    <input type="text" class="form-control" placeholder="Searchadmin.">
                    <span class="input-group-btn">
                    <button class="btn btn-default" type="button">
                        <i class="fa fa-search"></i>
                    </button>
                </span>
                </div>
                <!-- /input-group -->
            </li>
            <li>
                <a href="{{ route('admin.dashboard') }}"><i class="fa fa-dashboard fa-fw"></i> Dashboard</a>
            </li>
            <li>
                <a href="{{ route('admin.movies') }}"><i class="fa fa-film fa-fw"></i> Movies</a>
            </li>
            <li>
                <a href="{{ route('admin.genres') }}"><i class="fa fa-list-ul fa-fw"></i> Genres</a>
            </li>
            <li>
                <a href="{{ route('admin.status') }}"><i class="glyphicon glyphicon-tower"></i> Statuses</a>
            </li>
            <li>
                <a href="{{ route('admin.users') }}"><i class="fa fa-users fa-fw"></i> Users</a>
            </li>
            
           
        </ul>
    </div>
    <!-- /.sidebar-collapse -->
</div>
<!-- /.navbar-static-side -->