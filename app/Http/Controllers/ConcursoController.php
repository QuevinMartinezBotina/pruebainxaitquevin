<?php

namespace App\Http\Controllers;

use App\Models\Concurso;
use Illuminate\Http\Request;

class ConcursoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        try {
            $participantes = Concurso::all();

            return response()->json([
                'participantes' => $participantes,
                'cantidad' => count($participantes)
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'error' => $th->getMessage()
            ], 500);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        try {
            $participante = new Concurso();
            $participante->nombre = $request->nombre;
            $participante->apellido = $request->apellido;
            $participante->cedula = $request->cedula;
            $participante->departamento = $request->departamento;
            $participante->ciudad = $request->ciudad;
            $participante->celular = $request->celular;
            $participante->email = $request->email;
            $participante->habeas = $request->habeas;
            $participante->save();

            return response()->json([
                'participante' => $participante,
                'msg' => 'Participante registrado correctamente'
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'msg' => 'Error al registrar participante, verifique que el correo no este ya inscrito',
                'error' => $th->getMessage()
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Concurso  $concurso
     * @return \Illuminate\Http\Response
     */
    public function show(Concurso $concurso)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Concurso  $concurso
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, Concurso $concurso)
    {
        $participante = Concurso::find($concurso);



        try {
            if ($participante) {
                return response()->json([
                    'participante' => $participante
                ], 200);
            }
        } catch (\Throwable $th) {
            return response()->json([
                'msg' => 'Error al actualizar participante',
                'error' => $th->getMessage()
            ], 500);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Concurso  $concurso
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Concurso $concurso)
    {

        try {
            $participante = Concurso::find($concurso->id);

            if ($participante) {
                $participante->nombre = $request->nombre;
                $participante->apellido = $request->apellido;
                $participante->cedula = $request->cedula;
                $participante->departamento = $request->departamento;
                $participante->ciudad = $request->ciudad;
                $participante->celular = $request->celular;
                $participante->email = $request->email;
                $participante->habeas = $request->habeas;
                $participante->update();


                return response()->json([
                    'participante' => $participante,
                    'msg' => 'Participante actualizado correctamente'
                ], 200);
            } else {
                return response()->json([
                    'msg' => 'Participante no encontrado'
                ], 404);
            }
        } catch (\Throwable $th) {
            return response()->json([
                'msg' => 'Error al actualizar participante',
                'error' => $th->getMessage()
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Concurso  $concurso
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, Concurso $concurso)
    {

        try {
            $participante = Concurso::find($concurso->id);

            if (!$participante) {
                return response()->json([
                    'msg' => 'Participante no encontrado'
                ], 404);
            }

            $participante->delete();
            return response()->json([
                'msg' => 'Participante eliminado correctamente'
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'msg' => 'Error al eliminar participante',
                'error' => $th->getMessage()
            ], 500);
        }
    }
}
