<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(NormalUserSeeder::class);
        // $this->call(ReviewSeeder::class);
        // $this->call(ReplySeeder::class);
    }
}
