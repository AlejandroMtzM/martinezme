<?php
try {
    include "conexion.php";
    //utf
    $conexion->query("SET NAMES 'UTF8'");
    $consulta = $conexion->prepare("SELECT * FROM empleado");
    $consulta -> execute();
    if (!$consulta) {
        echo 'Error al ejecutar la consulta';
    }else {
        $resultado = $consulta->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($resultado);
    }
} catch (PDOException $ex) {
    echo $ex -> getMessage();
}
?>