-- Crear la tabla de usuarios

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50),
  email VARCHAR(50),
  password VARCHAR(255),
  role ENUM('estudiante', 'docente')
);

-- Crear la tabla de temas
CREATE TABLE temas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50),
  descripcion VARCHAR(255),
  docente_id INT,
  FOREIGN KEY (docente_id) REFERENCES usuarios(id)
);

-- Crear la tabla de tests
CREATE TABLE tests (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50),
  tema_id INT,
  FOREIGN KEY (tema_id) REFERENCES temas(id)
);

-- Crear la tabla de preguntas
CREATE TABLE preguntas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  pregunta VARCHAR(255),
  opcion1 VARCHAR(255),
  opcion2 VARCHAR(255),
  opcion3 VARCHAR(255),
  opcion4 VARCHAR(255),
  respuesta_correcta ENUM('opcion1', 'opcion2', 'opcion3', 'opcion4'),
  test_id INT,
  FOREIGN KEY (test_id) REFERENCES tests(id)
);

-- Crear la tabla de resultados de tests
CREATE TABLE resultados_tests (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT,
  test_id INT,
  calificacion INT,
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
  FOREIGN KEY (test_id) REFERENCES tests(id)
);
