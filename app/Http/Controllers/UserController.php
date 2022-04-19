<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\RegisterRequest;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    private $factory;
    private $realtimeDatabase;

    public function __construct()
    {
        $factory = \App\Services\FirebaseService::connect();
        $this->realtimeDatabase = $factory->createDatabase();

    }   


    public function show($id) {
        
        $users = $this->realtimeDatabase
        ->getReference('users/')
        ->getValue();
    }

    public function index() {

        return view('register');
    }

    public function create(RegisterRequest $req) {
       //dd(openssl_get_cert_locations());
       
        $this->realtimeDatabase
        ->getReference('users/' . $req['username'])
        ->set([
            'username' => $req['username'],
            'email' => $req['email'],
            'password' => $req['password'],
        ]);

        return redirect('homepage');
    }

    public function edit() {

        /*
        $this->realtimeDatabase
        ->getReference('users' . $request['username'])
        ->update([
            'username' => $request['username'],
            'password' => Hash::make($request['password'])
        ]);
        */
    }

    public function delete(Request $request) {
        /*
        $this->realtimeDatabase
        ->getReference('users' . $request['username'])
        ->remove();
        */
        
    }

}
