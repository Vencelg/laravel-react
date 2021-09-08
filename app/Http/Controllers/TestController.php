<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Test {
    public $kokot1 = 'Ahoj';
    public $kokot2 = 'Pepa';
    public $kokot3 = 'Franta';
}

class TestController extends Controller
{

    public function index() {
        
        
        $testjakpica = new Test;
        return response()->json([
            'status' => 200,
            'message' => 'Kokot'
        ]);
    }
}
