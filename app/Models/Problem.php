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

    //protected $dateFormat = 'd/m/Y';

    protected $casts = [
        'created_at'  => 'date:d/m/Y',
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }
}
