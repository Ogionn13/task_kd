<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [

            'title' => "Задача: " . $this->faker->realText(mt_rand(25, 50)),
            'description' => $this->faker->realText(mt_rand(150, 400)),
            'category_id' => Category::inRandomOrder()->first()->id

        ];
    }
}
