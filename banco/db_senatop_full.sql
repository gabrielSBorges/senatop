-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 27-Jun-2018 às 19:28
-- Versão do servidor: 10.1.26-MariaDB
-- PHP Version: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_senatop`
--
CREATE DATABASE IF NOT EXISTS `db_senatop` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `db_senatop`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `empregados`
--

CREATE TABLE `empregados` (
  `id` int(10) UNSIGNED ZEROFILL NOT NULL COMMENT 'Identificador do registro.',
  `nome` varchar(15) NOT NULL COMMENT 'Nome do empregado.',
  `classe` tinyint(3) NOT NULL COMMENT 'Classe do empregado.\n\n0 = Nerd\n1 = Descolado\n2 = Preguiçoso',
  `experiencia` smallint(6) NOT NULL COMMENT 'Experiência já adquirida pelo empregado.',
  `vontade` smallint(6) NOT NULL COMMENT 'Vontade (equivalente à HP) do empregado.',
  `sprite` varchar(255) NOT NULL COMMENT 'Avatar do empregado.',
  `habilidade1` tinyint(2) NOT NULL COMMENT 'Primeira habilidade do empregado.\nAs habilidades estarão no código e serão buscadas pelo seu ID.\n\nEx.: \n\nId habilidade: 01\nNome: Laser\nPoder: 10',
  `habilidade2` tinyint(2) NOT NULL COMMENT 'Segunda habilidade do empregado.\nAs habilidades estarão no código e serão buscadas pelo seu ID.',
  `personagens_id` int(10) UNSIGNED ZEROFILL NOT NULL COMMENT 'Identificador do personagem à qual pertence o empregado.'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Tabela que guarda os dados dos empregados contratados pelo personagem.';

--
-- Extraindo dados da tabela `empregados`
--

INSERT INTO `empregados` (`id`, `nome`, `classe`, `experiencia`, `vontade`, `sprite`, `habilidade1`, `habilidade2`, `personagens_id`) VALUES
(0000000001, 'crayton', 1, 500, 100, 'home/', 1, 2, 0000000001),
(0000000002, 'Pikachurros', 1, 650, 100, 'home/', 1, 2, 0000000002);

-- --------------------------------------------------------

--
-- Estrutura da tabela `inimigos`
--

CREATE TABLE `inimigos` (
  `id` int(10) UNSIGNED ZEROFILL NOT NULL COMMENT 'Identificador do registro.',
  `nome` varchar(30) NOT NULL COMMENT 'Nome do inimigo.',
  `tipo` tinyint(1) NOT NULL COMMENT 'Tipo do inimigo.\n\n0 = Padrão\n1 = Professor\n2 = Elite'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Tabela que guarda os dados dos inimigos cadastrados.';

--
-- Extraindo dados da tabela `inimigos`
--

INSERT INTO `inimigos` (`id`, `nome`, `tipo`) VALUES
(0000000001, 'mike', 0),
(0000000002, 'Gary', 0),
(0000000003, 'Jean Capote', 1),
(0000000004, 'Evil Jean', 2);

-- --------------------------------------------------------

--
-- Estrutura da tabela `itens`
--

CREATE TABLE `itens` (
  `id` int(10) UNSIGNED ZEROFILL NOT NULL COMMENT 'Identificador do registro.',
  `tipo` tinyint(1) NOT NULL COMMENT 'Tipo do item.\n\n0 = Salgado\n1 = Contrato',
  `nome` varchar(20) NOT NULL COMMENT 'Nome do item.'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Tabela que guarda os dados dos itens cadastrados.';

--
-- Extraindo dados da tabela `itens`
--

INSERT INTO `itens` (`id`, `tipo`, `nome`) VALUES
(0000000001, 1, 'Contrato de Bronze'),
(0000000002, 1, 'Contrato de Prata'),
(0000000003, 1, 'Contrato Padrão'),
(0000000004, 0, 'Coxinha'),
(0000000005, 0, 'Pastel');

-- --------------------------------------------------------

--
-- Estrutura da tabela `logins`
--

CREATE TABLE `logins` (
  `id` int(10) UNSIGNED ZEROFILL NOT NULL COMMENT 'Identificador do registro.',
  `data` date NOT NULL COMMENT 'Data em que o login foi realizado.',
  `hora` datetime NOT NULL COMMENT 'Horário em que o login foi realizado.',
  `usuarios_id` int(10) UNSIGNED ZEROFILL NOT NULL COMMENT 'Identificador do usuário ao qual pertence o log de entrada.'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Tabela que guardará os logs de entrada do usuário para futuras consultas.';

--
-- Extraindo dados da tabela `logins`
--

INSERT INTO `logins` (`id`, `data`, `hora`, `usuarios_id`) VALUES
(0000000001, '1999-10-24', '2014-00-00 00:00:00', 0000000001);

-- --------------------------------------------------------

--
-- Estrutura da tabela `personagens`
--

CREATE TABLE `personagens` (
  `id` int(10) UNSIGNED ZEROFILL NOT NULL COMMENT 'Identificador do registro.',
  `nome` varchar(10) NOT NULL COMMENT 'Nome do personagem.',
  `sexo` char(1) NOT NULL COMMENT 'Sexo do personagem, escolhido pelo usuário, define o sprite.\n\nm = masculino\nf = feminino',
  `experiencia` mediumint(9) NOT NULL COMMENT 'Quantidade de experiência já acumulada com o personagem.',
  `pontuacao` smallint(6) NOT NULL COMMENT 'Pontuação acumulada com o personagem, define a posição do mesmo no ranking.',
  `usuarios_id` int(10) UNSIGNED ZEROFILL NOT NULL COMMENT 'Identificador do usuário ao qual pertence o personagem.'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Tabela que guarda dados de personagens criados pelo usuário.';

--
-- Extraindo dados da tabela `personagens`
--

INSERT INTO `personagens` (`id`, `nome`, `sexo`, `experiencia`, `pontuacao`, `usuarios_id`) VALUES
(0000000001, 'leodagaita', 'm', 100, 13, 0000000001),
(0000000002, 'Janice', 'f', 0, 0, 0000000001),
(0000000003, 'Red', 'm', 0, 0, 0000000002);

-- --------------------------------------------------------

--
-- Estrutura da tabela `personagens_tem_inimigos`
--

CREATE TABLE `personagens_tem_inimigos` (
  `personagens_id` int(10) UNSIGNED ZEROFILL NOT NULL COMMENT 'Identificador do personagem que batalha com inimigos.',
  `inimigos_id` int(10) UNSIGNED ZEROFILL NOT NULL COMMENT 'Identificador do inimigo que batalha com o personagem.',
  `estado` tinyint(1) NOT NULL COMMENT 'Estado em que o inimigo se encontra.\n\n0 = Derrotado\n1 = Não derrotado'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Tabela que identifica quais inimigos o personagem já enfrentou ou não.';

--
-- Extraindo dados da tabela `personagens_tem_inimigos`
--

INSERT INTO `personagens_tem_inimigos` (`personagens_id`, `inimigos_id`, `estado`) VALUES
(0000000001, 0000000001, 0),
(0000000002, 0000000001, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `personagens_tem_itens`
--

CREATE TABLE `personagens_tem_itens` (
  `personagens_id` int(10) UNSIGNED ZEROFILL NOT NULL COMMENT 'Identificador do personagem que tem determinados itens.',
  `itens_id` int(10) UNSIGNED ZEROFILL NOT NULL COMMENT 'Identificador do item que pertence ao personagem.',
  `quantidade` tinyint(2) NOT NULL COMMENT 'Quantidade que o personagem tem de cada item.'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Tabela que identifica quanto de cada item existente o personagem tem.';

--
-- Extraindo dados da tabela `personagens_tem_itens`
--

INSERT INTO `personagens_tem_itens` (`personagens_id`, `itens_id`, `quantidade`) VALUES
(0000000001, 0000000001, 15),
(0000000001, 0000000002, 5),
(0000000002, 0000000001, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) UNSIGNED ZEROFILL NOT NULL COMMENT 'Identificador do registro.',
  `nome` varchar(40) NOT NULL COMMENT 'Nome completo do usuário.',
  `email` varchar(80) NOT NULL COMMENT 'Email do usuário.',
  `nome_usu` varchar(10) NOT NULL COMMENT 'Apelido do usuário, usado para entrar na conta.',
  `data_nasc` date NOT NULL COMMENT 'Data de nascimento do usuário.',
  `senha` char(32) NOT NULL COMMENT 'Senha do usuário, usada para entrar na conta.',
  `data_cadastro` date NOT NULL COMMENT 'Data em que o cadastro foi realizado.'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Tabela que guarda os dados da conta do usuário.';

--
-- Extraindo dados da tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `nome`, `email`, `nome_usu`, `data_nasc`, `senha`, `data_cadastro`) VALUES
(0000000001, 'Gabrielzinho Show', 'lindo@gmail.com', 'XxGataoxX', '1997-10-05', 'cachorroquente', '2018-06-19'),
(0000000002, 'Joelson', 'joel@gmail.com', 'JorEl', '1996-11-09', '123@', '2018-06-27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `empregados`
--
ALTER TABLE `empregados`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nome_UNIQUE` (`nome`),
  ADD KEY `fk_empregados_personagens1_idx` (`personagens_id`);

--
-- Indexes for table `inimigos`
--
ALTER TABLE `inimigos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nome_UNIQUE` (`nome`);

--
-- Indexes for table `itens`
--
ALTER TABLE `itens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nome_UNIQUE` (`nome`);

--
-- Indexes for table `logins`
--
ALTER TABLE `logins`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_logins_usuarios_idx` (`usuarios_id`);

--
-- Indexes for table `personagens`
--
ALTER TABLE `personagens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_personagens_usuarios1_idx` (`usuarios_id`);

--
-- Indexes for table `personagens_tem_inimigos`
--
ALTER TABLE `personagens_tem_inimigos`
  ADD PRIMARY KEY (`personagens_id`,`inimigos_id`),
  ADD KEY `fk_personagens_has_inimigos_inimigos1_idx` (`inimigos_id`),
  ADD KEY `fk_personagens_has_inimigos_personagens1_idx` (`personagens_id`);

--
-- Indexes for table `personagens_tem_itens`
--
ALTER TABLE `personagens_tem_itens`
  ADD PRIMARY KEY (`personagens_id`,`itens_id`),
  ADD KEY `fk_personagens_has_itens_itens1_idx` (`itens_id`),
  ADD KEY `fk_personagens_has_itens_personagens1_idx` (`personagens_id`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`),
  ADD UNIQUE KEY `nome_usu_UNIQUE` (`nome_usu`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `empregados`
--
ALTER TABLE `empregados`
  MODIFY `id` int(10) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT COMMENT 'Identificador do registro.', AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `inimigos`
--
ALTER TABLE `inimigos`
  MODIFY `id` int(10) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT COMMENT 'Identificador do registro.', AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `itens`
--
ALTER TABLE `itens`
  MODIFY `id` int(10) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT COMMENT 'Identificador do registro.', AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `logins`
--
ALTER TABLE `logins`
  MODIFY `id` int(10) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT COMMENT 'Identificador do registro.', AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `personagens`
--
ALTER TABLE `personagens`
  MODIFY `id` int(10) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT COMMENT 'Identificador do registro.', AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT COMMENT 'Identificador do registro.', AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `empregados`
--
ALTER TABLE `empregados`
  ADD CONSTRAINT `fk_empregados_personagens1` FOREIGN KEY (`personagens_id`) REFERENCES `personagens` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `logins`
--
ALTER TABLE `logins`
  ADD CONSTRAINT `fk_logins_usuarios` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `personagens`
--
ALTER TABLE `personagens`
  ADD CONSTRAINT `fk_personagens_usuarios1` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `personagens_tem_inimigos`
--
ALTER TABLE `personagens_tem_inimigos`
  ADD CONSTRAINT `fk_personagens_has_inimigos_inimigos1` FOREIGN KEY (`inimigos_id`) REFERENCES `inimigos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_personagens_has_inimigos_personagens1` FOREIGN KEY (`personagens_id`) REFERENCES `personagens` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `personagens_tem_itens`
--
ALTER TABLE `personagens_tem_itens`
  ADD CONSTRAINT `fk_personagens_has_itens_itens1` FOREIGN KEY (`itens_id`) REFERENCES `itens` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_personagens_has_itens_personagens1` FOREIGN KEY (`personagens_id`) REFERENCES `personagens` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
