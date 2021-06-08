<?php
$Usuario = $_POST['Usuario'];
$Contraseña = $_POST['Contraseña'];

//Inicio de sesion para mandar el nombre de usuario
session_start();
$_SESSION['Usuario'] = $Usuario;

//conexion a la bd
$Conexion=mysqli_connect("localhost", "root", "", "loginempresa");
$Consulta="SELECT * FROM desarrollador WHERE login='$Usuario' and password='$Contraseña'";
$Resultado=mysqli_query($Conexion, $Consulta);


$Filas=mysqli_num_rows($Resultado);


if($Filas>0)
{
    header("location:home.php");
}
else
{
    echo "Error con la autentificacion, Usuario/Clave invalida, intente de nuevo.";
}
mysqli_free_result($Resultado);
mysqli_close($Conexion);
?>