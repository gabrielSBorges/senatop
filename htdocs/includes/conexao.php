<?php
	$conexao = mysqli_connect("localhost", "root", "", "db_senatop");


	function select($pQuery){
		global $conexao;

		$dados = mysqli_query($conexao, $pQuery) or die("A query retornou um erro");

		$arraySelect = array();
		if ($dados->num_rows > 0) {

			while($row = $dados -> fetch_assoc()) {
				$arraySelect[] = $row;
			}
		}
		else {
			return 0;
		}

		mysqli_close($conexao);

		return $arraySelect;
	}

	function php_insert($pQuery){

		global $conexao;

		$dados = mysqli_query($conexao,$pQuery) or die("Erro ao realizar o insert");

		mysqli_close($conexao);

		return $dados;
	}

	function sql_delete_update($pQuery){

		global $conexao;

		$dados = mysqli_query($conexao,$pQuery) or die("Erro ao executar a query");

		$atualizadas = mysqli_affected_rows($conexao);

		if($atualizadas > 0){
			return $atualizadas." Registro(s) alterado(s)/deletado(s) com sucesso"."<br>";
		}else {
			return "Nenhum registro foi atualizado/deletado"."<br>";
		}

	}
?>
