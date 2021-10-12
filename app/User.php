<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyuser_id;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use Notifiable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'user_id', 'password','role'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    
    public function groups()
    {
        return $this->belongsToMany(Group::class, 'group_user');
    }

    public function taks()
    {
        return $this->belongsToMany(Task::class);
    }
    
}
