<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        $faker = Faker::create();

        foreach (range(1, 500) as $index) {
                        
            DB::table('backgroundImages')->insert([
                'imgTitle' => Str::random(10),
                'imgSrc' => "https://source.unsplash.com/random",
            ]);
        }
    }
}
