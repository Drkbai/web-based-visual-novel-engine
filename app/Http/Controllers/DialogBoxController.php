<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class DialogBoxController extends Controller
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

    public function uploadDialogBoxImages(Request $req) //$uid, $pid
    {     
          //Retrieve game title from cookies
        //$gameTitle = $req->cookie('gameTitle');
        $gameTitle = 'Hello';

        $image = $req->file('dbx_image');

        $imageFile = $image->getClientOriginalName();
        
        $firebase_storage_path = 'users/' . 'uid_1/' . 'project/' . $gameTitle . '/messageFrame' . '/'; // users/$uid/project/$pid/other
        $localfolder = public_path('firebase_temp_uploads' . '/');

        if ($image->move($localfolder, $imageFile))
        {
            $uploadedFile = fopen($localfolder.$imageFile, 'r');
            $fileName = $firebase_storage_path . $imageFile;

            $this->firebaseStorage
            ->getBucket()
            ->upload($uploadedFile, ['name' => $fileName]);
            
            //Remove file from temp storage
            unlink($localfolder . $imageFile);

            return response()->json('The image is successfully uploaded.');

        } else {
            return response()->json('The image has fail to upload.');
        }
    }

    public function getDialogBoxImages(Request $req) 
    {
        
        $directoryPrefix = 'users/uid_1/project/Hello/messageFrame/'; //users/$uid/project/$pid/other
        $storage = $this->firebaseStorage->getBucket();

        $options = ['prefix' => $directoryPrefix];

        $dLogBoxArr = array(array('filename'=>'', 'url' => '', 'path_name' => ''));
        /*
            Image array details
            ['filename' => '0', 'url' => '1', 'path_name' => '2']
        */

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
            
            $dLogBoxArr[$counter]['filename'] = $substring; //filename
            $dLogBoxArr[$counter]['url'] = $url; //url link
            $dLogBoxArr[$counter]['path_name'] = $name; //file path

            $counter++;
        }

        $req->session()->put('dialogBoxImages', $dLogBoxArr);

        $jsonData = json_encode($dLogBoxArr);

        return response()->json([$jsonData]);
    }

    public function removeDialogBox(Request $req) 
    {
        $filename = $req->input('filename');
        
        //Remove image from firebase storage
        $this->firebaseStorage
        ->getBucket()
        ->object('users/uid_1/project/Hello/messageFrame/' . $filename)
        ->delete();

        return response()->json($filename . ' has been success removed');
    }

}
