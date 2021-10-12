<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('category_id')->index();
            $table->datetime('start_time')->index();
            $table->datetime('finish_time')->index();
            $table->longText('topic');
            $table->longText('comments')->nullable();
            $table->string('venue')->nullable();
            $table->string('dressCode')->nullable();
            $table->boolean('fullDay')->nullable()->default(false);
            $table->string('author');
            $table->timestamps(); 
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('events');
    }
}
