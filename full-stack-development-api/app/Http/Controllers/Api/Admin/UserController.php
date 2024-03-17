<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Interfaces\UserInterface;

use Auth;

class UserController extends Controller
{
    protected $userRepo;

    function __construct(UserInterface $userRepo) {
        $this->user = $userRepo;
    }

    public function save(Request $request) {
        // return $request->all();
        $status = false;
        $isUserExists = $this->user->isUserExists($request->username,$request->email);
        if ($isUserExists) {
            $msg = 'This user already exists';
        } else {
            $data_array = array(
                'user_role_id' => 4,
                'name' => $request->name,
                'user_name' => $request->userName,
                'email' => $request->email,
                'password' => bcrypt($request->password),
            );
            $result = $this->user->saveUser($data_array);

            $msg = 'Something Wrong! Save Unsuccessful';
            if ($result) {
                $status = true;
                $msg = 'User Saved Successfully';
            }
        }
        return response()->json(['status'=>$status,'message'=>$msg],200);
    }
}
