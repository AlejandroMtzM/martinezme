<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	
	<link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">

	<title>Login exitoso</title>
</head>
<body>

	<div class="header">
        <h1>Bienvenido desarrollador:</h1>
    </div>

	<?php 
	session_start();
      echo $_SESSION["Usuario"];
    ?></h2>

	<div class="text">
			<div class="Contenido">
			<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <form class="form-inline" action="/action_page.php">
              <input class="form-control mr-sm-2" type="text" placeholder="Buscar">
              <button class="btn btn-success" type="submit">Ingresar</button>
            </form>
            <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" href="#">Registro Mercancia</a>
                  </li>
                  <li class="nav-item">
                        <a class="nav-link" href="#">Bodega</a>
                  </li>
                  <li class="nav-item">
                        <a class="nav-link" href="#">Facturas</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Pedimentos</a>
                  </li>
            </ul>
      </nav> 
			</div>
	</div>
    <div class="Contenido">
     
    </div>

	<div class="hoover">

	<form action = "Salir.php" method = "post">
	<h2>Salir de la sesion: <input type ="submit" value ="Salir">  </h2>

	</div>
	
</body>
<footer>
      <div class="container">
        <div class="row">
            <div class="col-xs-12 col-md-6">
                <h6 class="text-muted lead">CONTACTO:</h6>
                <h6 class="text-muted">
                TEC 8h No. 166-71 Local 2<br>
                REFORMA 2899.<br>
                Teléfonos: 123456789 – 987654321.<br>
                </h6>
            </div>
            <div class="col-xs-12 col-md-6">
            <div class="pull-right">
            <h6 class="text-muted lead">CONTACTANOS EN LAS REDES SOCIALES</h6>
                  <div class="redes-footer">
                      <a href="https://www.facebook.com/"><img src="https://st2.depositphotos.com/1144386/7770/v/600/depositphotos_77705004-stock-illustration-original-square-with-round-corners.jpg" style="width:48px;height:48px;"></a>
                      <a href="https://twitter.com/"><img src="https://img.freepik.com/iconos-gratis/twitter-circulo_318-10749.jpg?size=338&ext=jpg" style="width:48px;height:48px;"></a>
                      <a href="https://www.instagram.com/"><img src="https://www.seekpng.com/png/detail/792-7927016_insta-icon-logo-instagram-negro-fondo-transparente-png.png" style="width:48px;height:48px;"></a>
                  </div>
            </div>
            <div class="row"> <p class="text-muted small text-right">Marcos Alejandro Martinez Mendoza @2021.<br> Todos los derechos reservados.</p></div>
        </div>
      </div>  
    </div>
    </footer>
</html>