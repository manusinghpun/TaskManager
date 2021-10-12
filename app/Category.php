<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\Models\Activity;

class Category extends Model
{
    use LogsActivity;

    protected $fillable = [
        'name', 'color'
    ];

    protected static $logAttributes = ['name', 'color'];
}
