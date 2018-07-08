<?php

use App\User;
use Illuminate\Database\Seeder;

class NormalUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();

        for ($i = 0; $i < 20; $i++) {
            $name = $faker->name;
            User::create([
                'name' => $name,
                'slug' => $name . "-" . uniqid(),
                'email' => $faker->email,
                'password' => bcrypt('123456'),
                'role_id' => 2,
                'is_banned' => 0,
                'img' => 'default-user.png',
                'bio' => $faker->text,
            ]);
        }

    }
}
