<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro</title>
</head>
<body>
    <form action="agregar_usuario.php" method="POST">
    
        <input type="text" name="nombre_usuario" placeholder="Nombre Usuario">
        <input type="text" name="contrasena" placeholder="Contraseña">
        <input type="text" name="contrasena2" placeholder="Repetir contraseña">
        <button type="submit">Guardar</button>
    </form>
</body>
</html>