<?php

use Illuminate\Database\Seeder;
use App\User;
class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        
        User::create([
        	'name' => 'Admin',
            'slug' => 'admin' . "-" . uniqid(),
        	'email' => 'admin@gmail.com',
        	'password' => bcrypt('123456'),
        	'role_id' => 1,

        ]);
    }
}
