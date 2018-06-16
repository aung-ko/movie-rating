@extends('layouts.app')

@section('content')
    <div class="container">
        <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Director</th>
                    <th>Description</th>
                    <th>Poster</th>
                    <th>Released Date</th>
                    <th>Status</th>
                    <th>slug</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($movies as $movie)
                <tr>
                    <td>{{ $movie->name }}</td>
                    <td>{{ $movie->director_name }}</td>
                    <td>{{ $movie->description }}</td>
                    <td>{{ $movie->poster }}</td>
                    <td>{{ $movie->released_date }}</td>
                    <td>{{ $movie->status }}</td>
                    <td>{{ $movie->slug }}</td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection