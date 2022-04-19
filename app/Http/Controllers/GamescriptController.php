<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class GamescriptController extends Controller
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

    public function index() 
    {
        return view('createGame');
    }

    public function getProjectName(Request $req) 
    {
        
        $gameTitle = $req->input('gameTitle');
        $response = 'The game title is ' . $gameTitle;
        
        $this->realtimeDatabase
        ->getReference('users/1/project/pid_1') // ('users/' . $uid . '/' . $pid . '/') 
        ->set([
            'gameTitle' => $gameTitle,
        ]);

        return response()
            ->json($response)
            ->withCookie(cookie()->forever('gameTitle', $gameTitle));
    }

    public function saveScript(Request $req) {

        //If stringify, do not use loop to retrieve stringify array athough after decode, 
        //because it is not array but an object
        //so it recommended to use foreach to loop each object
        
        $contentArr = $req->input('scriptArray');

        $jsonDecode = json_decode($contentArr);

        
        if (Storage::exists('gamescript.txt')) {

            Storage::delete('gamescript.txt');
        }

        foreach ($jsonDecode as $line){
            Storage::append('gamescript.txt', $line);
        }

        if (Storage::exists('gamescript.txt')) {
            $getFile = Storage::get('gamescript.txt');

            $gameTitle = 'Hello';
            $firebase_storage_path = 'users/' . 'uid_1/' . 'project/' . $gameTitle . '/' . 'gamescript.txt'; // users/$uid/project/$pid/background
            
            $this->firebaseStorage
            ->getBucket()
            ->upload($getFile, ['name' => $firebase_storage_path ]);

            $publicPath = public_path('firebase_temp_uploads' . '/');
            $publicFolder = $publicPath . 'gamescript.txt';

            //Storage::delete('gamescript.txt');
        }


        return response()->json('The text file is successfully uploaded.');

    }

    public function getScript(Request $req) {

        $gameScriptURL = '';

        $bgArr = array(array('filename'=>'', 'url' => '', 'path_name' => ''));
        $dLogBoxArr = array(array('filename'=>'', 'url' => '', 'path_name' => ''));
        $charArr = array(array('filename'=>'', 'url' => '', 'path_name' => ''));
        $audioArr = array(array('filename'=>'', 'url' => '', 'path_name' => ''));
        
        //Background Bucket
            $directoryPrefix = 'users/uid_1/project/Hello/background/'; //users/$uid/project/$pid/background
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
                
                $bgArr[$counter]['filename'] = $substring; //filename
                $bgArr[$counter]['url'] = $url; //url link
                $bgArr[$counter]['path_name'] = $name; //file path

                $counter++;
            }
        //--------------------------------------------------------------

        //Dialog Bucket
            $directoryPrefix = 'users/uid_1/project/Hello/messageFrame'; //users/$uid/project/$pid/other
            $storage = $this->firebaseStorage->getBucket();

            $options = ['prefix' => $directoryPrefix];

            $dLogBoxArr = array(array('filename'=>'', 'url' => '', 'path_name' => ''));

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
        //--------------------------------------------------------------

        //Character Bucket
            $directoryPrefix = 'users/uid_1/project/Hello/character/'; //users/$uid/project/$pid/character
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
                
                $charArr[$counter]['filename'] = $substring; //filename
                $charArr[$counter]['url'] = $url; //url link
                $charArr[$counter]['path_name'] = $name; //file path

                $counter++;
            }
        //--------------------------------------------------------------

        //Audio Bucket
            $directoryPrefix = 'users/uid_1/project/Hello/audio/'; //users/$uid/project/$pid/character
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

        //Gamescript Bucket
            $directoryPrefix = 'users/uid_1/project/Hello/gamescript.txt'; //users/$uid/project/$pid/character
            $storage = $this->firebaseStorage->getBucket();

            $options = ['prefix' => $directoryPrefix];

            foreach ($storage->objects($options) as $object) {
                $gameScriptURL = $object->signedUrl(       
                    new \DateTime('1 days'),
                    [
                        'version' => 'v4',
                    ]
                );
            }
        //--------------------------------------------------------------


        $req->session()->put('gameScript', $gameScriptURL);
        $req->session()->put('backgroundList', $bgArr);
        $req->session()->put('characterList', $charArr);
        $req->session()->put('dialogBoxList', $dLogBoxArr);
        $req->session()->put('audioList', $audioArr);
        

        return view('playGame');
    } 

}