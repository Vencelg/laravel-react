<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Problem extends Model
{
    use HasFactory;

    public $fillable = [
        'name',
        'description',
        'room',
        'user_id',
        'fixed',
        'fix_time'
    ];
    
    public function user() {
        return $this->belongsTo(User::class);
    }
}
