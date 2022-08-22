<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('concursos', function (Blueprint $table) {
            $table->id();
            $table->string('nombre')->required();
            $table->string('apellido')->required();
            $table->string('cedula')->required();
            $table->string('departamento')->required();
            $table->string('ciudad')->required();
            $table->string('celular')->required();
            $table->string('email')->unique()->required();
            $table->boolean('habeas')->required();

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
        Schema::dropIfExists('concursos');
    }
};
