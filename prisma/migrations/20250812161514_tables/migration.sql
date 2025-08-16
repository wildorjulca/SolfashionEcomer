-- CreateTable
CREATE TABLE `Genero` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(20) NOT NULL,
    `slug` VARCHAR(20) NOT NULL,
    `imagen` VARCHAR(255) NULL,
    `estado` BOOLEAN NULL DEFAULT false,
    `creado_en` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `Genero_nombre_key`(`nombre`),
    UNIQUE INDEX `Genero_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categoria` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(50) NOT NULL,
    `slug` VARCHAR(50) NOT NULL,
    `descripcion` TEXT NULL,
    `imagen` VARCHAR(255) NULL,
    `generoId` INTEGER NOT NULL,
    `destacado` BOOLEAN NULL DEFAULT false,
    `creado_en` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `Categoria_nombre_key`(`nombre`),
    UNIQUE INDEX `Categoria_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Subcategoria` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(50) NOT NULL,
    `slug` VARCHAR(50) NOT NULL,
    `imagen` VARCHAR(255) NULL,
    `categoriaId` INTEGER NOT NULL,

    UNIQUE INDEX `Subcategoria_nombre_key`(`nombre`),
    UNIQUE INDEX `Subcategoria_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Producto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,
    `slug` VARCHAR(100) NOT NULL,
    `referencia` VARCHAR(50) NULL,
    `descripcion` TEXT NULL,
    `descripcion_corta` VARCHAR(255) NULL,
    `precio` DECIMAL(10, 2) NOT NULL,
    `precio_descuento` DECIMAL(10, 2) NULL,
    `porcentaje_descuento` INTEGER NULL DEFAULT 0,
    `en_oferta` BOOLEAN NULL DEFAULT false,
    `es_nuevo` BOOLEAN NULL DEFAULT true,
    `es_destacado` BOOLEAN NULL DEFAULT false,
    `marcaId` INTEGER NULL,
    `generoId` INTEGER NOT NULL,
    `categoriaId` INTEGER NOT NULL,
    `subcategoriaId` INTEGER NULL,
    `tags` VARCHAR(255) NULL,
    `rating_promedio` DOUBLE NULL DEFAULT 0.0,
    `total_vendidos` INTEGER NULL DEFAULT 0,
    `creado_en` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `actualizado_en` DATETIME(0) NULL,

    UNIQUE INDEX `Producto_slug_key`(`slug`),
    INDEX `Producto_slug_idx`(`slug`),
    INDEX `Producto_marcaId_idx`(`marcaId`),
    INDEX `Producto_generoId_idx`(`generoId`),
    INDEX `Producto_categoriaId_idx`(`categoriaId`),
    INDEX `Producto_subcategoriaId_idx`(`subcategoriaId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Marca` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(50) NOT NULL,
    `slug` VARCHAR(50) NOT NULL,
    `imagen` VARCHAR(255) NULL,
    `estado` BOOLEAN NULL DEFAULT false,
    `creado_en` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `Marca_nombre_key`(`nombre`),
    UNIQUE INDEX `Marca_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CombinacionProducto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `productoId` INTEGER NOT NULL,
    `colorId` INTEGER NULL,
    `tallaId` INTEGER NULL,
    `precio` DECIMAL(10, 2) NULL,
    `cantidad_stock` INTEGER NULL DEFAULT 0,
    `sku` VARCHAR(100) NOT NULL,
    `codigo_barras` VARCHAR(50) NULL,
    `peso` DECIMAL(10, 2) NULL,
    `ancho` DECIMAL(10, 2) NULL,
    `alto` DECIMAL(10, 2) NULL,
    `profundidad` DECIMAL(10, 2) NULL,

    UNIQUE INDEX `CombinacionProducto_sku_key`(`sku`),
    INDEX `CombinacionProducto_productoId_idx`(`productoId`),
    INDEX `CombinacionProducto_colorId_idx`(`colorId`),
    INDEX `CombinacionProducto_tallaId_idx`(`tallaId`),
    INDEX `CombinacionProducto_sku_idx`(`sku`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Color` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(50) NOT NULL,
    `slug` VARCHAR(50) NOT NULL,
    `codigo_hex` VARCHAR(7) NULL,

    UNIQUE INDEX `Color_nombre_key`(`nombre`),
    UNIQUE INDEX `Color_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Talla` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(50) NOT NULL,
    `valor` VARCHAR(20) NOT NULL,
    `tipoTallaId` INTEGER NOT NULL,
    `orden` INTEGER NULL DEFAULT 0,

    UNIQUE INDEX `Talla_tipoTallaId_valor_key`(`tipoTallaId`, `valor`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TipoTalla` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,
    `slug` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `TipoTalla_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Imagen` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `productoId` INTEGER NOT NULL,
    `combinacionId` INTEGER NULL,
    `url_imagen` VARCHAR(255) NOT NULL,
    `orden` INTEGER NULL DEFAULT 0,
    `es_principal` BOOLEAN NULL DEFAULT false,
    `creado_en` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `Imagen_productoId_idx`(`productoId`),
    INDEX `Imagen_combinacionId_idx`(`combinacionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AtributoProducto` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `productoId` INTEGER NOT NULL,
    `nombre` VARCHAR(100) NOT NULL,
    `valor` VARCHAR(255) NOT NULL,
    `orden` INTEGER NULL DEFAULT 0,
    `es_especificacion` BOOLEAN NULL DEFAULT false,

    INDEX `AtributoProducto_productoId_idx`(`productoId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,
    `apellido` VARCHAR(100) NOT NULL,
    `correo` VARCHAR(100) NOT NULL,
    `contrasena_hash` VARCHAR(255) NOT NULL,
    `telefono` VARCHAR(20) NULL,
    `avatar` VARCHAR(255) NULL,
    `verificado` BOOLEAN NULL DEFAULT false,
    `rolId` INTEGER NOT NULL,
    `creado_en` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `actualizado_en` DATETIME(0) NULL,
    `token_recuperacion` VARCHAR(255) NULL,
    `token_expiracion` DATETIME(0) NULL,

    UNIQUE INDEX `Usuario_correo_key`(`correo`),
    INDEX `Usuario_correo_idx`(`correo`),
    INDEX `Usuario_rolId_idx`(`rolId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Rol` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(50) NOT NULL,
    `nivel` INTEGER NOT NULL DEFAULT 1,
    `descripcion` TEXT NULL,

    UNIQUE INDEX `Rol_nombre_key`(`nombre`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Direccion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuarioId` INTEGER NOT NULL,
    `alias` VARCHAR(50) NOT NULL,
    `nombres` VARCHAR(100) NOT NULL,
    `apellidos` VARCHAR(100) NOT NULL,
    `direccion` VARCHAR(255) NOT NULL,
    `ciudad` VARCHAR(100) NOT NULL,
    `provincia` VARCHAR(100) NOT NULL,
    `codigo_postal` VARCHAR(20) NOT NULL,
    `pais` VARCHAR(100) NOT NULL,
    `telefono` VARCHAR(20) NOT NULL,
    `es_principal` BOOLEAN NULL DEFAULT false,
    `notas` VARCHAR(255) NULL,
    `creado_en` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `Direccion_usuarioId_idx`(`usuarioId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pedido` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `codigo` VARCHAR(20) NOT NULL,
    `usuarioId` INTEGER NOT NULL,
    `direccionId` INTEGER NOT NULL,
    `metodoPagoId` INTEGER NOT NULL,
    `fecha_pedido` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `fecha_envio` DATETIME(0) NULL,
    `fecha_entrega` DATETIME(0) NULL,
    `subtotal` DECIMAL(12, 2) NOT NULL,
    `envio` DECIMAL(10, 2) NOT NULL,
    `descuento` DECIMAL(10, 2) NULL DEFAULT 0.00,
    `igv` DECIMAL(10, 2) NOT NULL,
    `monto_total` DECIMAL(12, 2) NOT NULL,
    `estado` ENUM('PENDIENTE', 'PROCESANDO', 'ENVIADO', 'ENTREGADO', 'CANCELADO', 'DEVUELTO') NOT NULL,
    `estado_pago` ENUM('PENDIENTE', 'COMPLETADO', 'REEMBOLSADO', 'RECHAZADO', 'PARCIAL') NOT NULL,
    `tracking` VARCHAR(100) NULL,
    `notas` TEXT NULL,

    UNIQUE INDEX `Pedido_codigo_key`(`codigo`),
    INDEX `Pedido_usuarioId_idx`(`usuarioId`),
    INDEX `Pedido_direccionId_idx`(`direccionId`),
    INDEX `Pedido_metodoPagoId_idx`(`metodoPagoId`),
    INDEX `Pedido_codigo_idx`(`codigo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DetallePedido` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pedidoId` INTEGER NOT NULL,
    `productoId` INTEGER NOT NULL,
    `combinacionId` INTEGER NULL,
    `cantidad` INTEGER NOT NULL,
    `precio_unitario` DECIMAL(10, 2) NOT NULL,
    `descuento_aplicado` DECIMAL(10, 2) NULL DEFAULT 0.00,
    `subtotal` DECIMAL(10, 2) NOT NULL,

    INDEX `DetallePedido_pedidoId_idx`(`pedidoId`),
    INDEX `DetallePedido_productoId_idx`(`productoId`),
    INDEX `DetallePedido_combinacionId_idx`(`combinacionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MetodoPago` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NOT NULL,
    `slug` VARCHAR(100) NOT NULL,
    `descripcion` TEXT NULL,
    `icono` VARCHAR(255) NULL,
    `activo` BOOLEAN NULL DEFAULT true,

    UNIQUE INDEX `MetodoPago_nombre_key`(`nombre`),
    UNIQUE INDEX `MetodoPago_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TransaccionPago` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pedidoId` INTEGER NOT NULL,
    `metodoPagoId` INTEGER NOT NULL,
    `codigo` VARCHAR(100) NULL,
    `monto` DECIMAL(10, 2) NOT NULL,
    `estado` VARCHAR(50) NOT NULL,
    `respuesta` TEXT NULL,
    `fecha` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `TransaccionPago_pedidoId_idx`(`pedidoId`),
    INDEX `TransaccionPago_metodoPagoId_idx`(`metodoPagoId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HistorialPedido` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pedidoId` INTEGER NOT NULL,
    `estado` VARCHAR(50) NOT NULL,
    `notas` TEXT NULL,
    `creado_en` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `usuarioId` INTEGER NULL,

    INDEX `HistorialPedido_pedidoId_idx`(`pedidoId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Resena` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `productoId` INTEGER NOT NULL,
    `usuarioId` INTEGER NOT NULL,
    `pedidoId` INTEGER NULL,
    `calificacion` INTEGER NOT NULL DEFAULT 5,
    `titulo` VARCHAR(100) NULL,
    `comentario` TEXT NULL,
    `respuesta` TEXT NULL,
    `aprobado` BOOLEAN NULL DEFAULT false,
    `creado_en` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `Resena_productoId_idx`(`productoId`),
    INDEX `Resena_usuarioId_idx`(`usuarioId`),
    INDEX `Resena_pedidoId_idx`(`pedidoId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Carrito` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuarioId` INTEGER NOT NULL,
    `productoId` INTEGER NOT NULL,
    `combinacionId` INTEGER NULL,
    `cantidad` INTEGER NOT NULL DEFAULT 1,
    `creado_en` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `actualizado_en` DATETIME(0) NULL,

    INDEX `Carrito_usuarioId_idx`(`usuarioId`),
    INDEX `Carrito_productoId_idx`(`productoId`),
    INDEX `Carrito_combinacionId_idx`(`combinacionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Categoria` ADD CONSTRAINT `Categoria_generoId_fkey` FOREIGN KEY (`generoId`) REFERENCES `Genero`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Subcategoria` ADD CONSTRAINT `Subcategoria_categoriaId_fkey` FOREIGN KEY (`categoriaId`) REFERENCES `Categoria`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Producto` ADD CONSTRAINT `Producto_marcaId_fkey` FOREIGN KEY (`marcaId`) REFERENCES `Marca`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Producto` ADD CONSTRAINT `Producto_generoId_fkey` FOREIGN KEY (`generoId`) REFERENCES `Genero`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Producto` ADD CONSTRAINT `Producto_categoriaId_fkey` FOREIGN KEY (`categoriaId`) REFERENCES `Categoria`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Producto` ADD CONSTRAINT `Producto_subcategoriaId_fkey` FOREIGN KEY (`subcategoriaId`) REFERENCES `Subcategoria`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CombinacionProducto` ADD CONSTRAINT `CombinacionProducto_productoId_fkey` FOREIGN KEY (`productoId`) REFERENCES `Producto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CombinacionProducto` ADD CONSTRAINT `CombinacionProducto_colorId_fkey` FOREIGN KEY (`colorId`) REFERENCES `Color`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CombinacionProducto` ADD CONSTRAINT `CombinacionProducto_tallaId_fkey` FOREIGN KEY (`tallaId`) REFERENCES `Talla`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Talla` ADD CONSTRAINT `Talla_tipoTallaId_fkey` FOREIGN KEY (`tipoTallaId`) REFERENCES `TipoTalla`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Imagen` ADD CONSTRAINT `Imagen_productoId_fkey` FOREIGN KEY (`productoId`) REFERENCES `Producto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Imagen` ADD CONSTRAINT `Imagen_combinacionId_fkey` FOREIGN KEY (`combinacionId`) REFERENCES `CombinacionProducto`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AtributoProducto` ADD CONSTRAINT `AtributoProducto_productoId_fkey` FOREIGN KEY (`productoId`) REFERENCES `Producto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_rolId_fkey` FOREIGN KEY (`rolId`) REFERENCES `Rol`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Direccion` ADD CONSTRAINT `Direccion_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pedido` ADD CONSTRAINT `Pedido_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pedido` ADD CONSTRAINT `Pedido_direccionId_fkey` FOREIGN KEY (`direccionId`) REFERENCES `Direccion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pedido` ADD CONSTRAINT `Pedido_metodoPagoId_fkey` FOREIGN KEY (`metodoPagoId`) REFERENCES `MetodoPago`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetallePedido` ADD CONSTRAINT `DetallePedido_pedidoId_fkey` FOREIGN KEY (`pedidoId`) REFERENCES `Pedido`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetallePedido` ADD CONSTRAINT `DetallePedido_productoId_fkey` FOREIGN KEY (`productoId`) REFERENCES `Producto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DetallePedido` ADD CONSTRAINT `DetallePedido_combinacionId_fkey` FOREIGN KEY (`combinacionId`) REFERENCES `CombinacionProducto`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TransaccionPago` ADD CONSTRAINT `TransaccionPago_pedidoId_fkey` FOREIGN KEY (`pedidoId`) REFERENCES `Pedido`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TransaccionPago` ADD CONSTRAINT `TransaccionPago_metodoPagoId_fkey` FOREIGN KEY (`metodoPagoId`) REFERENCES `MetodoPago`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HistorialPedido` ADD CONSTRAINT `HistorialPedido_pedidoId_fkey` FOREIGN KEY (`pedidoId`) REFERENCES `Pedido`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HistorialPedido` ADD CONSTRAINT `HistorialPedido_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Resena` ADD CONSTRAINT `Resena_productoId_fkey` FOREIGN KEY (`productoId`) REFERENCES `Producto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Resena` ADD CONSTRAINT `Resena_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Resena` ADD CONSTRAINT `Resena_pedidoId_fkey` FOREIGN KEY (`pedidoId`) REFERENCES `Pedido`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Carrito` ADD CONSTRAINT `Carrito_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Carrito` ADD CONSTRAINT `Carrito_productoId_fkey` FOREIGN KEY (`productoId`) REFERENCES `Producto`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Carrito` ADD CONSTRAINT `Carrito_combinacionId_fkey` FOREIGN KEY (`combinacionId`) REFERENCES `CombinacionProducto`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
