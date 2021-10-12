<?php

use Illuminate\Database\Seeder;
use App\User;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       // User::truncate();

        $users = [
            [
                'name' => '',
                'user_id' => '',
                'password' => bcrypt(''),
                'role' => 'administrator',
                ],
                

        ];

        User::insert($users);
    }
}
