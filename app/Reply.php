<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reply extends Model
{
    protected $fillable = [
        'comment',
        'reply_by',
        'task_id'
    ];

    public function task()
    {
        return $this->belongsTo(Task::class);
    }


}
