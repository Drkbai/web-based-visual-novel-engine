<?php

namespace App\Services;

use Illuminate\Http\Request;
use Kreait\Firebase;
use Kreait\Firebase\Factory;

class FirebaseService
{
    public static function connect()
    {
        $factory = (new Factory)
            ->withServiceAccount(base_path(env('FIREBASE_CREDENTIALS')))
            ->withDatabaseUri(env("FIREBASE_DATABASE_URL"));
        
        /*
        $auth = $factory->createAuth();
        $realtimeDatabase = $factory->createDatabase();
        $cloudMessaging = $factory->createMessaging();
        $remoteConfig = $factory->createRemoteConfig();
        $cloudStorage = $factory->createStorage();
        $firestore = $factory->createFirestore();
        */

        return $factory;
    }
}