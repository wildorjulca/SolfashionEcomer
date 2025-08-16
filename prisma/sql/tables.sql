-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS ecommerce;
USE ecommerce;

-- Tabla: marcas
CREATE TABLE marcas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL,
    descripcion TEXT,
    creado_en DATETIME DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_marcas_slug (slug)
);

-- Tabla: roles
CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    descripcion TEXT
);

-- Tabla: usuarios
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    correo VARCHAR(100) UNIQUE NOT NULL,
    contrasena_hash VARCHAR(255) NOT NULL,
    telefono VARCHAR(20),
    rol_id INT,
    creado_en DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (rol_id) REFERENCES roles(id),
    INDEX idx_usuarios_correo (correo)
);

-- Tabla: direcciones
CREATE TABLE direcciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    calle VARCHAR(255) NOT NULL,
    ciudad VARCHAR(100),
    estado VARCHAR(100),
    codigo_postal VARCHAR(20),
    pais VARCHAR(100),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Tabla: metodos_pago
CREATE TABLE metodos_pago (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT
);

-- Tabla: tipos_productos
CREATE TABLE tipos_productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL,
    es_fisico BOOLEAN DEFAULT TRUE,
    INDEX idx_tipos_productos_slug (slug)
);

-- Tabla: tipos_tallas
CREATE TABLE tipos_tallas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    tipo_producto_id INT,
    FOREIGN KEY (tipo_producto_id) REFERENCES tipos_productos(id)
);

-- Tabla: tallas
CREATE TABLE tallas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo_talla_id INT,
    valor VARCHAR(50) NOT NULL,
    FOREIGN KEY (tipo_talla_id) REFERENCES tipos_tallas(id),
    UNIQUE INDEX idx_tallas_unica (tipo_talla_id, valor)
);

-- Tabla: categorias
-- Soporta jerarquía de categorías (categorías y subcategorías) mediante una relación recursiva
CREATE TABLE categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL,
    INDEX idx_categorias_slug (slug)
);

-- Tabla: productos
CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    slug VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10, 2) NOT NULL,
    precio_descuento DECIMAL(10, 2) DEFAULT NULL,
    marca_id INT,
    tipo_producto_id INT,
    categoria_id INT,
    genero VARCHAR(50),
    creado_en DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (marca_id) REFERENCES marcas(id),
    FOREIGN KEY (tipo_producto_id) REFERENCES tipos_productos(id),
    FOREIGN KEY (categoria_id) REFERENCES categorias(id),
    INDEX idx_productos_slug (slug)
);
-- Tabla: atributos_productos
CREATE TABLE atributos_productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    producto_id INT,
    nombre_atributo VARCHAR(100) NOT NULL,
    valor_atributo VARCHAR(255) NOT NULL,
    FOREIGN KEY (producto_id) REFERENCES productos(id)
);

-- Tabla: combinaciones_productos
CREATE TABLE combinaciones_productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    producto_id INT,
    color VARCHAR(50),
    talla_id INT,
    tipo_talla_id INT,
    precio DECIMAL(10, 2) DEFAULT NULL,
    cantidad_stock INT DEFAULT 0,
    sku VARCHAR(100) UNIQUE NOT NULL,
    FOREIGN KEY (producto_id) REFERENCES productos(id),
    FOREIGN KEY (tipo_talla_id) REFERENCES tipos_tallas(id),
    FOREIGN KEY (talla_id) REFERENCES tallas(id)
);

-- Tabla: imagenes
CREATE TABLE imagenes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    producto_id INT,
    combinacion_id INT DEFAULT NULL,
    url_imagen VARCHAR(255) NOT NULL,
    es_principal BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (producto_id) REFERENCES productos(id),
    FOREIGN KEY (combinacion_id) REFERENCES combinaciones_productos(id)
);

-- Tabla: pedidos
CREATE TABLE pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    direccion_id INT,
    metodo_pago_id INT,
    fecha_pedido DATETIME DEFAULT CURRENT_TIMESTAMP,
    subtotal DECIMAL(10, 2),
    igv DECIMAL(10, 2),
    monto_total DECIMAL(10, 2),
    estado ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled') NOT NULL,
    estado_pago ENUM('pending', 'completed', 'failed') NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (direccion_id) REFERENCES direcciones(id),
    FOREIGN KEY (metodo_pago_id) REFERENCES metodos_pago(id)
);

-- Tabla: detalles_pedidos
CREATE TABLE detalles_pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pedido_id INT,
    producto_id INT,
    combinacion_id INT,
    cantidad INT NOT NULL,
    precio_unitario DECIMAL(10, 2) NOT NULL,
    descuento_aplicado DECIMAL(10, 2) DEFAULT 0.00,
    subtotal DECIMAL(10, 2),
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
    FOREIGN KEY (producto_id) REFERENCES productos(id),
    FOREIGN KEY (combinacion_id) REFERENCES combinaciones_productos(id)
);

-- Tabla: reseñas
CREATE TABLE resenas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    producto_id INT,
    usuario_id INT,
    calificacion INT NOT NULL CHECK (calificacion >= 1 AND calificacion <= 5),
    comentario TEXT,
    creado_en DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (producto_id) REFERENCES productos(id),
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- Insertar datos de ejemplo (Seed)

-- Marcas
INSERT INTO marcas (nombre, slug, descripcion) VALUES
('Nike', 'nike', 'Marca líder en ropa y calzado deportivo'),
('Apple', 'apple', 'Marca de tecnología innovadora'),
('Samsung', 'samsung', 'Marca de electrónica y dispositivos móviles'),
('Generic', 'generic', 'Productos genéricos y servicios');

-- Roles
INSERT INTO roles (nombre, descripcion) VALUES
('admin', 'Administrador del sistema'),
('cliente', 'Usuario que compra productos');

-- Usuarios
INSERT INTO usuarios (nombre, apellido, correo, contrasena_hash, telefono, rol_id, creado_en) VALUES
('Juan', 'Pérez', 'admin@example.com', 'hashed_password_1', '987654321', 1, '2025-08-09 12:00:00'),
('María', 'Gómez', 'cliente@example.com', 'hashed_password_2', '912345678', 2, '2025-08-09 12:00:00');

-- Direcciones
INSERT INTO direcciones (usuario_id, calle, ciudad, estado, codigo_postal, pais) VALUES
(2, 'Av. Principal 123', 'Lima', 'Lima', '15001', 'Perú');

-- Métodos de pago
INSERT INTO metodos_pago (nombre, descripcion) VALUES
('Tarjeta de Crédito', 'Pago con tarjeta Visa o Mastercard'),
('Transferencia Bancaria', 'Pago mediante transferencia bancaria'),
('PayPal', 'Pago mediante PayPal');

-- Tipos de productos
INSERT INTO tipos_productos (nombre, slug, es_fisico) VALUES
('Polos', 'polos', TRUE),
('Zapatos', 'zapatos', TRUE),
('Laptops', 'laptops', TRUE),
('Celulares', 'celulares', TRUE),
('Servicios', 'servicios', FALSE);

-- Tipos de tallas
INSERT INTO tipos_tallas (nombre, tipo_producto_id) VALUES
('Ropa', 1),
('Calzado', 2),
('Almacenamiento', 3),
('Almacenamiento', 4);


-- Tallas
INSERT INTO tallas (tipo_talla_id, valor) VALUES
(1, 'S'), (1, 'M'), (1, 'L'),
(2, '38'), (2, '39'), (2, '40'),
(3, '256GB'), (3, '512GB'),
(4, '128GB'), (4, '256GB');

-- Categorías
INSERT INTO categorias (nombre, slug, padre_id) VALUES
('Tienda', 'tienda', NULL),
('Ropa', 'ropa', 1),
('Tecnología', 'tecnologia', 1),
('Celulares', 'celulares', 3),
('Laptops', 'laptops', 3),
('Accesorios', 'accesorios', 1),
('Servicios', 'servicios', 1);

-- Productos (con precio_descuento)
INSERT INTO productos (nombre, slug, descripcion, precio, precio_descuento, marca_id, tipo_producto_id, categoria_id, genero, creado_en) VALUES
('Polo Básico', 'polo-basico', 'Polo de algodón de alta calidad', 29.99, 24.99, 1, 1, 2, 'Hombre', '2025-08-09 12:00:00'),
('Zapato Deportivo', 'zapato-deportivo', 'Zapato cómodo para deportes', 59.99, NULL, 1, 2, 2, 'Unisex', '2025-08-09 12:00:00'),
('MacBook Air', 'macbook-air', 'Laptop ligera con chip M2', 999.99, 949.99, 2, 3, 5, NULL, '2025-08-09 12:00:00'),
('iPhone 14', 'iphone-14', 'Smartphone con cámara avanzada', 799.99, NULL, 2, 4, 4, NULL, '2025-08-09 12:00:00'),
('Samsung Galaxy S23', 'galaxy-s23', 'Smartphone con alto rendimiento', 699.99, 649.99, 3, 4, 4, NULL, '2025-08-09 12:00:00'),
('Reparación de Pantalla', 'reparacion-pantalla', 'Servicio de reparación de pantalla de celular', 99.99, NULL, 4, 5, 7, NULL, '2025-08-09 12:00:00');

-- Atributos de productos
INSERT INTO atributos_productos (producto_id, nombre_atributo, valor_atributo) VALUES
(1, 'Material', 'Algodón 100%'),
(3, 'Procesador', 'Apple M2'),
(3, 'RAM', '16GB'),
(4, 'Cámara', '48MP'),
(5, 'Cámara', '50MP'),
(6, 'Duración', '2 horas');

-- Combinaciones de productos (con precio)
INSERT INTO combinaciones_productos (producto_id, color, talla_id, tipo_talla_id, precio, cantidad_stock, sku) VALUES
(1, 'Azul', 2, 1, 29.99, 10, 'POL-NIKE-AZU-M-H'),
(1, 'Azul', 3, 1, 29.99, 8, 'POL-NIKE-AZU-L-H'),
(1, 'Verde', 1, 1, 29.99, 12, 'POL-NIKE-VER-S-H'),
(1, 'Amarillo', 2, 1, 29.99, 5, 'POL-NIKE-AMA-M-H'),
(2, 'Negro', 4, 2, 59.99, 6, 'ZAP-NIKE-NIK-38-U'),
(2, 'Negro', 5, 2, 59.99, 4, 'ZAP-NIKE-NEG-39-U'),
(2, 'Blanco', 6, 2, 59.99, 7, 'ZAP-NIKE-BLA-40-U'),
(3, 'Plata', 8, 3, 999.99, 5, 'MAC-APPLE-PLA-512'),
(3, 'Gris', 7, 3, 899.99, 3, 'MAC-APPLE-GRI-256'),
(4, 'Negro', 9, 4, 799.99, 10, 'IPH-APPLE-NEG-128'),
(4, 'Blanco', 10, 4, 849.99, 8, 'IPH-APPLE-BLA-256'),
(5, 'Azul', 10, 4, 699.99, 6, 'GAL-SAMSUNG-AZU-256');

-- Imágenes
INSERT INTO imagenes (producto_id, combinacion_id, url_imagen, es_principal) VALUES
(1, 1, 'polo_nike_azul_hombre_m.jpg', TRUE),
(1, 3, 'polo_nike_verde_hombre_s.jpg', FALSE),
(2, 5, 'zapato_nike_negro_unisex_39.jpg', TRUE),
(2, 6, 'zapato_nike_blanco_unisex_40.jpg', FALSE),
(3, NULL, 'macbook_air_plata.jpg', TRUE),
(4, NULL, 'iphone_14_negro.jpg', TRUE),
(5, NULL, 'galaxy_s23_azul.jpg', TRUE),
(6, NULL, 'reparacion_pantalla.jpg', TRUE);

-- Pedidos
INSERT INTO pedidos (usuario_id, direccion_id, metodo_pago_id, fecha_pedido, subtotal, igv, monto_total, estado, estado_pago) VALUES
(2, 1, 1, '2025-08-09 12:30:00', 874.97, 157.49, 1032.46, 'pending', 'pending');

-- Detalles de pedidos
INSERT INTO detalles_pedidos (pedido_id, producto_id, combinacion_id, cantidad, precio_unitario, descuento_aplicado, subtotal) VALUES
(1, 1, 1, 3, 24.99, 0.00, 74.97),
(1, 4, 10, 1, 799.99, 0.00, 799.99);

-- Reseñas
INSERT INTO resenas (producto_id, usuario_id, calificacion, comentario, creado_en) VALUES
(1, 2, 4, 'Buen polo, cómodo pero la talla M es un poco ajustada', '2025-08-09 12:45:00'),
(4, 2, 5, 'Excelente teléfono, la cámara es increíble', '2025-08-09 12:50:00');
```