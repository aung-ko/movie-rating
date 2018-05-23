<?php

use Illuminate\Database\Seeder;
use App\Video;
class VideoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $faker = Faker\Factory::create();

        
        	 Video::create([
        	'name' => $faker->name,
        	'director_name' => $faker->name,
        	'released_date' => $faker->date($format = 'Y-m-d', $max = 'now'),
        	'rating' => $faker->biasedNumberBetween($min = 10, $max = 20, $function = 'sqrt')
        ]);
        
       
    }
}
