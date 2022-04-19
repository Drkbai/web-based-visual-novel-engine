<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use App\Models\User;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'username' => 'required|min:6',
            'email' => 'required|regex:^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$^',
            'password' => 'required|regex: ^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$^|min: 8',
            'confirm_password' => 'required|same:password',
        ];
    }

    public function messages(){
        return [
            'username.required' => 'Please fill in the username.',
            'username.min' => 'Username must at least 6 character.',
            'username.unique' => 'The username has been used',

            'email.required' => 'Please fill in the email address.',
            'email.unique' => 'The email has been used.',
            'email.regex' => 'Please fill in the correct email.',
            
            'password.required' => 'Please fill in the password.',
            'password.min' => 'Password must at least 8 characters.',
            'password.regex' => 'Password must include one letter and one number.',
            
            'confirm_password.required' => 'Please fill in the confirm password.',
            'confirm_password.same' => 'The password is not match.',
        ];
    }
}
