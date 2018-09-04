<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <link rel="icon" href="imgs/icone.png"/>
        <link rel="stylesheet" href="css/bootstrap.css">
        <link rel="stylesheet" href="css/signin.css"/>
        <link rel="stylesheet" href="css/style.css">
        <meta charset="UTF-8">

        <title>SENATOP</title>

        <script src="js/bootstrap.js"></script>
    </head>

    <body>

    <?php
        session_start();

    ;?>

    <div class="container col-5 float-left" >
        <table class="table table-striped table-dark">
            <thead>
            <tr>
                    <th>Ranking</th>
            </tr>  
            <tr>
                <th scope="col">#</th>
                <th scope="col">E-MAIL</th>
                <th scope="col">NOME</th>
                <th scope="col">PONTOS</th>
            </tr>
            </thead>

            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td><?php echo $_SESSION['email'];?></td>
                    <td>DaMassa</td>
                    <td>1000000</td>
                </tr>

                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>5000</td>
                </tr>

                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>4861</td>
                </tr>

                <tr>
                    <th scope="row">4</th>
                    <td>Lucas</td>
                    <td>Mike</td>
                    <td>4800</td>
                </tr>

                <tr>
                    <th scope="row">5</th>
                    <td>Larry</td>
                    <td>Tretas</td>
                    <td>4700</td>
                </tr>

                <tr>
                    <th scope="row">6</th>
                    <td>Masquenada</td>
                    <td>Ulquiorra</td>
                    <td>4600</td>
                </tr>

                <tr>
                    <th scope="row">7</th>
                    <td>Um</td>
                    <td>Mafagafo</td>
                    <td>4500</td>
                </tr>

                <tr>
                    <th scope="row">8</th>
                    <td>Fofo</td>
                    <td>Fifi</td>
                    <td>4400</td>
                </tr>

                <tr>
                    <th scope="row">9</th>
                    <td>Michaelis</td>
                    <td>Jordan</td>
                    <td>4300</td>
                </tr>
                
                <tr>
                    <th scope="row">10</th>
                    <td>Yrral</td>
                    <td>the Chick</td>
                    <td>4200</td>
                </tr>
            </tbody>
        </table>
    </div>
   
    <div class="container col-5">
    
    <button type="button" onclick="window.location.href='Senatop-Teste/Senatop-Inicio.html';" class="btn btn-primary btn-lg btn-block">JOGAR AGORA</button>
    <button type="button" onclick="window.location.href='perfil.php';" class="btn btn-primary btn-lg btn-block">Perfil</button>
    <button type="button" onclick="window.location.href='index.php';" class="btn btn-secondary btn-lg btn-block">Sair</button>

   
    </div>
    </body>
</html>