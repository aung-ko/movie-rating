<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Yajra\Datatables\Datatables;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('admin.user.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function banUser(User $user)
    {
        $user->is_banned = 1;
        $user->save();
        session()->flash('message', 'User has been banned');
        return back();
    }

    public function UnBanUser(User $user)
    {
        $user->is_banned = 0;
        $user->save();
        session()->flash('message', 'User has been accepted back');
        return back();
    }

    public function userData()
    {
        $users = User::where('role_id', 2)->get();
        return Datatables::of($users)
            ->addColumn("role", function ($model) {
                $data = $model->role->role;
                return $data;
            })
            ->addColumn("action", function ($model) {
                $data = '';
                if (!$model->isAdmin()) {
                    if (!$model->isBanned()) {
                        $data = '<form action="' . route('admin.ban.user', $model->slug) . '" method="POST">' .
                        csrf_field() .
                            '<button type="submit" class="btn btn-danger">Ban</button>' .
                            '</form>';
                        return $data;
                    }
                    $data = '<form action="' . route('admin.unban.user', $model->slug) . '" method="POST">' .
                    csrf_field() .
                        '<button type="submit" class="btn btn-success">Unban</button>' .
                        '</form>';
                    return $data;
                }
            })
            ->rawColumns(['role', 'action'])
            ->make(true);
    }
}
