<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMoviesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('movies', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('director_name');
            $table->longText('description');
            $table->string('poster');
            $table->string('background');
            $table->string('thumb');
            $table->string('trailer_id');
            $table->date('released_date');
            $table->integer('status_id');
            $table->float('rating', 2, 1)->default(0.0);
            $table->integer('rating_count')->default(0);
            $table->integer('review_count')->default(0);
            $table->string('slug')->unique();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('movies');
    }
}
