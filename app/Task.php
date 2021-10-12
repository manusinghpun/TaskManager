<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\Models\Activity;
use Illuminate\Database\Eloquent\SoftDeletes;



class Task extends Model
{
    use SoftDeletes;

    use LogsActivity;
    protected static $logAttributes = ['id', 'name','pdc', 'description', 'status', 'created_by'];

    protected $with = ["users"];

    protected $fillable = [
        'name', 'pdc', 'description', 'status', 'assign_to'
    ];

    public function users() {
        return $this->belongsToMany(User::class);
    }

    public function replies() {
        return $this->hasMany(Reply::class); 
    } 
    
}


