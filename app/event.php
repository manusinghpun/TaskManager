<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\Activitylog\Models\Activity;
use Illuminate\Database\Eloquent\SoftDeletes;

class event extends Model
{
    use SoftDeletes;

    use LogsActivity;
    protected static $logAttributes = ['id', 'topic','start_time', 'finish_time', 'comments', 'venue', 'dressCode', 'fullDay', 'author'];

    protected $fillable = [
        'id', 'topic','start_time', 'finish_time', 'comments', 'venue', 'dressCode', 'fullDay', 'author'
    ];

    protected $with = [
        'category'
    ]; 

    public function category()
    {
        return $this->belongsTo('App\Category','category_id')->withDefault(["name"=>"No events"]);
    }

}
