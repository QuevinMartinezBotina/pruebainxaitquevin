<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <!--  Datatables  -->
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css" />

    <!--  extension responsive  -->
    <link rel="stylesheet" type="text/css"
        href="https://cdn.datatables.net/responsive/2.2.3/css/responsive.dataTables.min.css">
    <title></title>

</head>

<body style="background-color: #e5e5e5;">
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


    <div class="row">
        <div class="col-5">
            <label for="departamento"><strong>DEPARTAMENTO</strong></label>
            <select class="form-control" id="usp-custom-departamento-de-institucion" name="departamento" required>
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
                <option value="san_andrés_y_providencia">San Andrés y Providencia</option>
                <option value="santander">Santander</option>
                <option value="sucre">Sucre</option>
                <option value="tolima">Tolima</option>
                <option value="valle_del_cauca">Valle del Cauca</option>
                <option value="vaupés">Vaupés</option>
                <option value="vichada">Vichada</option>
            </select>
        </div>

        <div class="col-5">
            <select class="form-control" name="" id="usp-custom-municipio-ciudad-institucion">
                <option value="">Seleccione Ciudad</option>
            </select>
        </div>
    </div>




    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous">
    </script>

    <!--   Datatables-->
    <script type="text/javascript" src="https://cdn.datatables.net/v/bs4/dt-1.10.20/datatables.min.js"></script>

    <!-- extension responsive -->
    <script src="https://cdn.datatables.net/responsive/2.2.3/js/dataTables.responsive.min.js"></script>

    {{-- Axios --}}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.24.0/axios.min.js"
        integrity="sha512-u9akINsQsAkG9xjc1cnGF4zw5TFDwkxuc9vUp5dltDWYCSmyd0meygbvgXrlc/z7/o4a19Fb5V0OUE58J7dcyw=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>


    {{-- CDN para reportes excerl --}}
    <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/2.2.3/js/dataTables.buttons.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"></script>
    <script src="https://cdn.datatables.net/buttons/2.2.3/js/buttons.html5.min.js"></script>
    <script src="https://cdn.datatables.net/buttons/2.2.3/js/buttons.print.min.js"></script>

    {{-- SweetAlert --}}
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    {{-- JS --}}
    <script src="{{ asset('ciudades-departamentos.js') }}"></script>


</body>

</html>
