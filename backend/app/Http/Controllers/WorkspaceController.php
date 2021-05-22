<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Models\Workspace;

class WorkspaceController extends Controller
{
    // ================[function for to add data into database]=======================
    function addWorkspaceData(Request $req){
        $workspaceItem = new Workspace;
                        // database       =     postman
        $workspaceItem->workspace_name = $req->name;
        $workspaceItem->workspace_type = $req->type;
        $workspaceItem->workspace_desc = $req->desc;

        $result = $workspaceItem->save();
        if($result){
            //return $workspaceItem;
            return ["result"=>"Data inserted successfully"];
        }else{
            return ["result"=>"Operation failed"];
        }

        return ["result"=>"done"];
    }
    // =================[function for to view data from database]=======================
    function viewWorkspaceData(){
        return Workspace::all();
    }
    //==================[function for to get data from users table from database]=======
    function viewUsersData(){
        return User::all();
    }
}
