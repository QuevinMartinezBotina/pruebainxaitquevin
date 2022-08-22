<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Hello, world!</title>

    <style>
        body {
            background-color: #e5e5e5;
        }

        .card {
            background-color: #ffffff30;
        }

        .card-title {
            color: #46A5F2;
        }

        .card-form {
            background-color: white;
            border-radius: 20px 20px 0px 0px;
        }

        .form-select {
            color: #6C757D;
        }

        .tratamiento {
            font-size: 13px;

        }

        .accordion {
            height: 20px;
        }

        h1 {
            font-size: 20px;


        }
    </style>
</head>

<body>

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="{{ route('concurso.index') }}">MENU</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="{{ route('concurso.index') }}">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('concurso.sorteo') }}">Sorteo</a>
                    </li>

                </ul>
            </div>
        </div>
    </nav>


    <div class="container mt-5 d-flex justify-content-center">
        <div class="card shadow-lg rounded" style="width: 30rem;">
            <div class="animacion d-flex justify-content-center">
                <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_ielrevno.json"
                    background="transparent" speed="1" style="width: 300px; height: 300px;"
                    class="d-flex justify-content-center" loop autoplay> </lottie-player>
            </div>






            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">

                            <h1>Click para participar</h1>
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <div class="container card-form">
                                <div class="card-body">
                                    <h5 class="card-title d-flex justify-content-center">Inscribete!!</h5>
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">nombre</label>
                                        <input type="string" oninput="this.value = this.value.replace(/[^aA-zA]/,'')"
                                            class="form-control" id="nombre" placeholder="Example" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">apellido</label>
                                        <input type="string" oninput="this.value = this.value.replace(/[^aA-zA]/,'')"
                                            class="form-control" id="apellido" placeholder="Example" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">cedula</label>
                                        <input type="string" oninput="this.value = this.value.replace(/[^Z0-9]/,'')"
                                            class="form-control" id="cedula" placeholder="10021744578" required>

                                    </div>
                                    <div class="depto d-flex gap-2">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1"
                                                class="form-label">Departamento</label>

                                            <select class="form-select" id="departamento" name="departamento" required>
                                                <option value="">Seleccione departamento</option>
                                                <option value="amazonas">Amazonas</option>
                                                <option value="antioquía">Antioquia</option>
                                                <option value="arauca">Arauca</option>
                                                <option value="atlántico">Atlántico</option>
                                                <option value="bogotá">Bogota</option>
                                                <option value="bolívar">Bolívar</option>
                                                <option value="boyacá">Boyacá</option>
                                                <option value="caldas">Caldas</option>
                                                <option value="caquetá">Caquetá</option>
                                                <option value="casanare">Casanare</option>
                                                <option value="cauca">Cauca</option>
                                                <option value="cesar">Cesar</option>
                                                <option value="chocó">Chocó</option>
                                                <option value="córdoba">Córdoba</option>
                                                <option value="cundinamarca">Cundinamarca</option>
                                                <option value="guainía">Guainía</option>
                                                <option value="guaviare">Guaviare</option>
                                                <option value="huila">Huila</option>
                                                <option value="la_guajira">LA Guajira</option>
                                                <option value="magdalena">Magdalena</option>
                                                <option value="meta">Meta</option>
                                                <option value="nariño">Nariño</option>
                                                <option value="norte_de_santander">Norte de Santander</option>
                                                <option value="putumayo">Putumayo</option>
                                                <option value="quindio">Quindío</option>
                                                <option value="risaralda">Risaralda</option>
                                                <option value="san_andrés_y_providencia">San Andrés y Providencia
                                                </option>
                                                <option value="santander">Santander</option>
                                                <option value="sucre">Sucre</option>
                                                <option value="tolima">Tolima</option>
                                                <option value="valle_del_cauca">Valle del Cauca</option>
                                                <option value="vaupés">Vaupés</option>
                                                <option value="vichada">Vichada</option>
                                            </select>

                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Lugar</label>
                                            <select id="ciudad" class="form-select"
                                                aria-label="Default select example" required>

                                            </select>

                                        </div>
                                    </div>
                                    <div class="contacto d-flex gap-2">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">celular</label>
                                            <input type="string"
                                                oninput="this.value = this.value.replace(/[^Z0-9]/,'')"
                                                class="form-control" id="celular"placeholder="3206689410" required>
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">email</label>
                                            <input type="string"
                                                oninput="this.value = this.value.replace(/[^a-zA-Z0-9-@.]/,'')"
                                                class="form-control" id="email" placeholder="example@gmail.com"
                                                required>
                                        </div>
                                    </div>

                                    <div class="form-check mt-3">
                                        <div class="form-check">
                                            <input class="form-check-input is-invalid" type="checkbox" value=""
                                                id="habeas" aria-describedby="invalidCheck3Feedback" required>
                                            <label class="form-check-label" for="invalidCheck3">
                                                <span class="tratamiento"> <i>Autorizo el tratamiento de mis datos de
                                                        acuerdo con la
                                                        finalidad establecida en la política de protección de datos
                                                        personales</i>
                                                </span>
                                            </label>
                                        </div>
                                        <!-- <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                        <span class="tratamiento"> <i>Autorizo el tratamiento de mis datos de acuerdo con la
                            finalidad establecida en la política de protección de datos personales</i> </span>
                    </label> -->
                                    </div>
                                    <div class="c-footer d-flex justify-content-center">
                                        <button onclick="crear()" class="btn btn-primary mt-3" type="submit">Submit
                                            form</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="container mt-5">

                    </div>
                </div>
            </div>
        </div>

    </div>








    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
    </script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
        integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
        integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous">
    </script>
    -->

    {{-- jquery --}}
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

    {{-- Axios --}}
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

    {{-- SweetAlert --}}
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    {{-- JS --}}
    <script src="{{ asset('ciudades-departamentos.js') }}"></script>


    <script>
        const base_url = "http://localhost:8000/api/";

        function crear() {

            let nombre = document.getElementById('nombre').value;
            let apellido = document.getElementById('apellido').value;
            let cedula = document.getElementById('cedula').value;
            let celular = document.getElementById('celular').value;
            let email = document.getElementById('email').value;
            let departamento = document.getElementById('departamento').value;
            let ciudad = document.getElementById('ciudad').value;
            let habeas = document.getElementById('habeas').value;

            if (!$('#habeas').prop('checked')) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Debe aceptar los terminos y condiciones',
                })
                return false;
            }

            if (!apellido || !nombre || !cedula || !celular || !email || !departamento || !ciudad) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Todos los campos son obligatorios!',
                })
                return;
            }

            let myHeaders = new Headers();
            myHeaders.append("nombre", "asddasd");
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

            let participante = new URLSearchParams();
            participante.append("nombre", nombre);
            participante.append("apellido", apellido);
            participante.append("cedula", cedula);
            participante.append("departamento", departamento);
            participante.append("ciudad", ciudad);
            participante.append("celular", celular);
            participante.append("email", email);
            participante.append("habeas", "1");

            let requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: participante,
                redirect: 'follow'
            };

            fetch("http://localhost:8000/api/concurso", requestOptions)
                .then(response => response.json())
                .then(result => swal.fire({
                        title: 'Registro exitoso',
                        text: result.msg,
                        icon: 'success',
                        confirmButtonText: 'Aceptar'
                    })

                )
                .catch(error => console.log('error', error));

        }
    </script>

</body>

</html>
