<?php
$host='localhost';
$database='martinezme';
$username='root';
$password='';

try {
      $conexion = new PDO("mysql:host=$host;dbname=$database",$username,$password);
      $consultaSql = "select  * from empleado";
      $query = $conexion -> prepare($consultaSql);
      $query -> execute();
      $resultado = $query->fetchAll(PDO::FETCH_ASSOC);

  
      var_dump($resultado);
      print "<br>";

      printf("<pre>");
      printf("<b>nombre    = </b> ".$resultado[0]['idUsuario']."<br>");
      printf("<b>apPaterno  = </b> ".$resultado[0]['nombre']."<br>");
      printf("<b>apMaterno  = </b> ".$resultado[0]['apPaterno']."<br>");
      printf("<b>area     = </b> ".$resultado[0]['apMaterno']."<br>");
      printf("<b>RFC  = </b> ".$resultado[0]['area']."<br>");
      printf("</pre>");

      echo json_encode($resultado);
      $query->closeCursor();
} catch(PDOException $e) {
      echo "Algo a salido mal en la conexion.";
      echo $e->getMessage();
      exit();
}

$conexion->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

?>