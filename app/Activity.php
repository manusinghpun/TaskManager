<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    protected $table = 'activity_log';

    protected $with = [
        'userRelation'
    ];

    public function userRelation()
    {
        return $this->belongsTo('App\User','causer_id')->withDefault(["name"=>"No user"]);
    }

}

