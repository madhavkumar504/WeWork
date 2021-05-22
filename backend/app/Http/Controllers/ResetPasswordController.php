<?php

namespace App\Http\Controllers;

use App\Mail\ResetPasswordMail;
use Illuminate\Http\Request;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Str;

class ResetPasswordController extends Controller
{
    public function sendEmail(Request $request){

        if(!$this->validateEmail($request->email)){
            return $this->failedResponse();
        }
        $this->send($request->email);
        return $this->successResponse();
    }

    public function send($email){
        $token = $this->createToken($email);
        Mail::to($email)->send(new ResetPasswordMail($token));
    }

    // ====== [if old token exist they return old token otherwise it create new one]=========================
    public function createToken($email){
        $oldToken = DB::table('password_resets')->where('email',$email)->first();
        if($oldToken){
            return $oldToken->token;// because they return only token from database. return token
        }
        $token = Str::random(60);
        $this->saveToken($token, $email);
        return $token;
    }

    public function saveToken($token, $email){
        DB::table('password_resets')->insert([
            'email'     =>      $email,
            'token'     =>      $token,
            'created_at'=>      Carbon::now()
        ]);
    }



    public function validateEmail($email){
        return !!User::where('email', $email)->first();
    }

    public function failedResponse(){
        return response()->json([
            'error'     =>  'Email doesn\'t found on our Database'
        ], Response:: HTTP_NOT_FOUND);
    }
    public function successResponse(){
        return response()->json([
            'error'     =>  'Reset Email is send successfully, please check your inbox.'
        ], Response:: HTTP_OK);
    }
}
