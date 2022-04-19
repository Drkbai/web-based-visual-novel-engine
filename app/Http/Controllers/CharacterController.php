<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class CharacterController extends Controller
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

    //$extension = $image->getClientOriginalExtension();
    //$filename = $image . '.' . $extension;

    public function uploadCharacter(Request $req) //$uid, $pid
    {
        
        //Retrieve game title from cookies
        //$gameTitle = $req->cookie('gameTitle');

        $image = $req->file('char_image');

        $imageFile = $image->getClientOriginalName();
        
        $firebase_storage_path = 'users/' . 'uid_1/' . 'project/' . 'Hello' . '/character' . '/'; // users/$uid/project/$pid/character
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

    //Another ways to get Images: Download image to Storage
    //$destination = storage_path('app/firebase/firebase_temp_download/backgrounds/');
    //$this->firebaseStorage->getBucket()->object($name)->downloadToFile($destination . $substring);

    public function getCharacterList(Request $req) 
    {      
        $directoryPrefix = 'users/uid_1/project/Hello/character/'; //users/$uid/project/$pid/character
        $storage = $this->firebaseStorage->getBucket();

        $charArr = array(array('filename'=>'', 'url' => '', 'path_name' => ''));
        /*
            Image array details
            ['filename' => '0', 'url' => '1', 'path_name' => '2']
        */

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
            
            $charArr[$counter]['filename'] = $substring; //filename
            $charArr[$counter]['url'] = $url; //url link
            $charArr[$counter]['path_name'] = $name; //file path

            $counter++;
        }
        
        $req->session()->put('characterImages', $charArr);

        $jsonData = json_encode($charArr);

        return response()->json([$jsonData]);
    }

    public function removeCharacter(Request $req) 
    {
        $filename = $req->input('filename');
        
        //Remove image from firebase storage
        $this->firebaseStorage
        ->getBucket()
        ->object('users/uid_1/project/Hello/character/' . $filename)
        ->delete();

        return response()->json($filename . ' has been success removed');
    }
}
