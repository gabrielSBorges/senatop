<!DOCTYPE html>
<html lang="pt-br">
<head>

    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/signin.css"/>
    <link rel="stylesheet" href="css/style.css">
    <meta charset="UTF-8">
    <title>DASH</title>
    <script src="js/bootstrap.js"></script>
    <script src="js/script.js"></script>
</head>
<?php
include_once ("includes/conexao.php");

?>

<body>
<br>
<div class="text-center container">
    <?php
    if(isset($_GET['msg'])){ ?>
    <div class="text-center alerta-<?php echo $_GET['status'] ?>" role="alert">
        <?php echo $_GET['msg'];?>
    </div>
    <?php } ?>
    <div class="caixa text-center container col-4">
        <form name="frmLogin" id="frmLogin" onsubmit="return validaForm(this);" method="POST" action="includes/processa_login.php">
            <h1 class="display-4">Login</h1>
            <div class="form-group">
                <input type="email" name="inputEmail" class="form-control" id="inputEmail" placeholder="E-mail">
            </div>
            <div class="form-group">
                <input type="password" name="inputSenha" class="form-control" id="inputSenha" placeholder="Senha">
            </div>
            <button type="submit" name="btnLogar" id="btnLogar" class=" btn-block btn btn-primary">Entrar</button>
        </form>
        <div class="text-center container">
            <a href="cadastro.php" class="m-2 badge badge-success">Cadastre-se</a>
        </div>
    </div>
</div>

</body>
</html>