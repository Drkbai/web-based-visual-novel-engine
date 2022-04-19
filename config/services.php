<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
        'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net'),
    ],

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

    'firebase' => [
        'api_key' => '	AAAAdCm9TNg:APA91bFxSr_sb3jD_UybRuurUVjdk3Eui3aCcqbGx7bDI0WwybmzeNKEIlrAURtpIDLzV7gNeI_rLenIIGpSYbcNFR35M72tTL1i91S0OG80fwzjbc97Sa54D8sNu8wMCvEnUDfaQdgK ',
        'auth_domain' => 'https://visual-novel-engine-web.firebaseapp.com',
        'database_url' => 'https://visual-novel-engine-web-default-rtdb.asia-southeast1.firebasedatabase.app',
        'secret' => '064uBixnriV8R2O5LUCifffu9X04PkjY4cSknO6i',
        'storage_bucket' => 'gs://visual-novel-engine-web.appspot.com',
    ]
];
