<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AudioController extends Controller
{
    private $factory;
    private $firebaseStorage;
    private $realtimeDatabase;
    private $projectName;

    public function __construct() 
    {  
        $factory = \App\Services\FirebaseService::connect();
        $this->firebaseStorage = $factory->createStorage();
        $this->realtimeDatabase = $factory->createDatabase();
    }

    public function uploadAudio(Request $req) //$uid, $pid
    {
       
        //Retrieve game title from cookies
        //$gameTitle = $req->cookie('gameTitle');
        $gameTitle = 'Hello';

        $audio = $req->file('audio');

        $audioFile = $audio->getClientOriginalName();

        $firebase_storage_path = 'users/' . 'uid_1/' . 'project/' . $gameTitle . '/audio' . '/'; // users/$uid/project/$pid/audio
        $localfolder = public_path('firebase_temp_uploads' . '/');

        if ($audio->move($localfolder, $audioFile))
        {
            
            $uploadedFile = fopen($localfolder.$audioFile, 'r');
            $fileName = $firebase_storage_path . $audioFile;

            $this->firebaseStorage
            ->getBucket()
            ->upload($uploadedFile, ['name' => $fileName]);

            //Remove file from temp storage
            unlink($localfolder . $audioFile);

            return response()->json('Audio has success upload !');

        } else {
            return response()->json('Fail to upload audio.');
        }
    }

    public function getAudioList(Request $req) //$uid, $pid 
    {
        
        $audioArr = array(array('filename'=>'', 'url' => '', 'path_name' => ''));
       
        $directoryPrefix = 'users/uid_1/project/Hello/audio/'; //users/$uid/project/$pid/background
        $storage = $this->firebaseStorage->getBucket();

        $options = ['prefix' => $directoryPrefix];
        
        $counter = 0;

        foreach ($storage->objects($options) as $object) { 

            $info = $object->info();
            $name = $info['name'];

            $lastIndexOf = strripos($name , '/') + 1;
            $substring = substr($name, $lastIndexOf);

            $url = $object->signedUrl(       
                new \DateTime('1 days'),
                [
                    'version' => 'v4',
                ]
            );
            
            $audioArr[$counter]['filename'] = $substring; //filename
            $audioArr[$counter]['url'] = $url; //url link
            $audioArr[$counter]['path_name'] = $name; //file path

            $counter++;
        }

        $req->session()->put('audio', $audioArr);

        $jsonData = json_encode($audioArr);

        return response()->json([$jsonData]);
    }

    public function removeAudio(Request $req) 
    {
        $filename = $req->input('filename');
        
        //Remove image from firebase storage
        $this->firebaseStorage
        ->getBucket()
        ->object('users/uid_1/project/Hello/audio/' . $filename)
        ->delete();

        return response()->json($filename . ' has been success removed');
    }
}
