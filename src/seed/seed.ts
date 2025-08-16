import bcryptjs from 'bcryptjs'

interface ColoresType {
    nombre: string;
    codigo_hex: string

}
interface MarcasType {
    nombre: string;
    slug: string;
    descripcion: string
}
interface categoriaType {
    title: string;
    img: string
}
interface RoleType {
    nombre: string;
    descripcion: string
}


interface ProductoData {
    nombre: string;
    slug: string;
    descripcion: string;
    precio: number;
    precio_descuento?: number;
    generoNombre: string;
    categoriaNombre: string;
    subcategoriaNombre?: string;
    marcaNombre?: string;
    es_nuevo?: boolean;
    es_destacado?: boolean;
    atributos: {
        nombre: string;
        valor: string;
    }[];
    imagenes: string[]
    combinaciones: {
        colorNombre: string;
        tallaValor: string;
        cantidad_stock: number;
        precio?: number;
    }[];
};
export interface UsuarioType {
    nombre: string;
    apellido: string;
    correo: string;
    contrasena_hash: string;
    telefono?: string | null;
}

interface SeedData {
    producto: ProductoData[],
    generos: string[],
    colores: ColoresType[]
    marcas: MarcasType[]
    categoria: string[]
    role: RoleType[],
    usuario: UsuarioType[]
}

export const initialData: SeedData = {
    producto: [
        // -- nike ---  polos
        {
            nombre: "Polo Nike Sport",
            slug: "polo-nike-sport",
            descripcion: "Polo de algodón para deporte",
            precio: 59.90,
            generoNombre: "Hombre",
            categoriaNombre: "Ropa Hombre",
            subcategoriaNombre: "Polos Hombre",
            marcaNombre: "Nike",
            es_nuevo: true,
            atributos: [
                { nombre: "Material", valor: "Algodón 100%" },
                { nombre: "Talla", valor: "S, M, L" },
            ],
            imagenes: [
                "01-polo-nike-negro.png",
                "02-polo-nike-negro.png",
                "03-polo-nike-negro.png",

            ],
            combinaciones: [
                { colorNombre: "Negro", tallaValor: "41", cantidad_stock: 10 },
                { colorNombre: "Negro", tallaValor: "38", cantidad_stock: 15 },
                { colorNombre: "Negro", tallaValor: "39", cantidad_stock: 10 },
                { colorNombre: "Negro", tallaValor: "40", cantidad_stock: 6 },
            ],
        },
        {

            nombre: "Polo Nike Club de ropa deportiva de Nike casual",
            slug: "polo-club-nike-casual",
            descripcion: "Polo de algodón casual",
            precio: 59.90,
            generoNombre: "Hombre",
            categoriaNombre: "Ropa",
            subcategoriaNombre: "Polos Hombre",
            marcaNombre: "Nike",
            es_nuevo: true,
            atributos: [
                { nombre: "Material", valor: "Algodón 100%" },
                { nombre: "Talla", valor: "S, M, L" },
            ],
            imagenes: [
                "01-polo-nike-negro.png",
                "02-polo-nike-negro.png",
                "03-polo-nike-negro.png",

            ],
            combinaciones: [
                { colorNombre: "Amarillo", tallaValor: "S", cantidad_stock: 10 },
                { colorNombre: "Amarillo", tallaValor: "M", cantidad_stock: 15 },
                { colorNombre: "Amarillo", tallaValor: "L", cantidad_stock: 8 },
            ],
        },
        {

            nombre: "Polo Nike Club de ropa deportiva de Nike",
            slug: "polo-club-nike-sport",
            descripcion: "Polo de algodón casual",
            precio: 59.90,
            generoNombre: "Hombre",
            categoriaNombre: "Ropa",
            subcategoriaNombre: "Polos Hombre",
            marcaNombre: "Nike",
            es_nuevo: true,
            atributos: [
                { nombre: "Material", valor: "Algodón 100%" },
                { nombre: "Talla", valor: "S, M, L" },
            ],
            imagenes: [
                "01-polo-nike-negro.png",
                "02-polo-nike-negro.png",
                "03-polo-nike-negro.png",

            ],
            combinaciones: [
                { colorNombre: "Azul", tallaValor: "S", cantidad_stock: 10 },
                { colorNombre: "Azul", tallaValor: "M", cantidad_stock: 15 },
                { colorNombre: "Azul", tallaValor: "M", cantidad_stock: 8 },
            ],
        },
        {
            nombre: "Polo Nike Dri-FIT Essential",
            slug: "polo-nike-dri-fit-essential",
            descripcion: "Polo deportivo con tecnología de absorción de humedad",
            precio: 65.90,
            generoNombre: "Hombre",
            categoriaNombre: "Ropa Hombre",
            subcategoriaNombre: "Polos Hombre",
            marcaNombre: "Nike",
            es_nuevo: true,
            atributos: [
                { nombre: "Material", valor: "Poliéster 100%" },
                { nombre: "Tallas", valor: "S, M, L, XL" }
            ],
            imagenes: [
                "08-polo-nikes-negro.png",
                "07-polo-nikes-negro.png",
                "06-polo-nikes-negro.png",
                "01-polo-nikes-negro.png",

            ],
            combinaciones: [
                { colorNombre: "Negro", tallaValor: "M", cantidad_stock: 15 },
                { colorNombre: "Negro", tallaValor: "L", cantidad_stock: 10 },
                { colorNombre: "Negro", tallaValor: "XL", cantidad_stock: 10 },
                { colorNombre: "Negro", tallaValor: "XXL", cantidad_stock: 10 }

            ]
        },
        {
            nombre: "Polo Nike Club",
            slug: "polo-nike-club",
            descripcion: "Polo casual para uso diario",
            precio: 55.50,
            generoNombre: "Hombre",
            categoriaNombre: "Ropa Hombre",
            subcategoriaNombre: "Polos Hombre",
            marcaNombre: "Nike",
            es_nuevo: false,
            atributos: [
                { nombre: "Material", valor: "Algodón 100%" },
                { nombre: "Tallas", valor: "S, M, L" }
            ],
            imagenes: [
                "09-polo-nikes-blanco.png",
                "10-polo-nikes-blanco.jpg"
            ],
            combinaciones: [
                { colorNombre: "Blanco", tallaValor: "M", cantidad_stock: 15 },
                { colorNombre: "Blanco", tallaValor: "L", cantidad_stock: 10 },
                { colorNombre: "Blanco", tallaValor: "XL", cantidad_stock: 10 },
                { colorNombre: "Blanco", tallaValor: "XXL", cantidad_stock: 10 }

            ]
        },
        {
            nombre: "camisa Nike Sportswear",
            slug: "camisa-nike-sportswear",
            descripcion: "Polo deportivo con cuello en V",
            precio: 59.90,
            generoNombre: "Hombre",
            categoriaNombre: "Ropa Hombre",
            subcategoriaNombre: "Camisas Hombre",
            marcaNombre: "Nike",
            es_nuevo: true,
            atributos: [
                { nombre: "Material", valor: "Algodón 95%/Elastano 5%" },
                { nombre: "Ajuste", valor: "Regular Fit" }
            ],
            imagenes: [
                "11.camisa-nike-azul.png",
                "12-camisa-nike-azul.png"
            ],
            combinaciones: [
                { colorNombre: "Azul", tallaValor: "L", cantidad_stock: 7 },
                { colorNombre: "Azul", tallaValor: "XL", cantidad_stock: 5 }
            ]
        },
        {
            nombre: "Polo Nike Dry Academy",
            slug: "polo-nike-dry-academy",
            descripcion: "Polo para entrenamiento con tecnología Dry",
            precio: 69.90,
            generoNombre: "Hombre",
            categoriaNombre: "Ropa Deportiva",
            subcategoriaNombre: "Polos Entrenamiento",
            marcaNombre: "Nike",
            es_nuevo: true,
            atributos: [
                { nombre: "Tecnología", valor: "DRY" },
                { nombre: "Tallas", valor: "S, M, L, XL" }
            ],
            imagenes: [
                "13-polo-nike-rojo.png",
                "14-polo-nike-rojo.png"
            ],
            combinaciones: [
                { colorNombre: "Rojo", tallaValor: "M", cantidad_stock: 9 },
                { colorNombre: "Rojo", tallaValor: "L", cantidad_stock: 6 }
            ]
        },
        //    zapatillas adidas
        {
            nombre: "Zapatillas Adidas Ultraboost",
            slug: "zapatillas-adidas-ultraboost",
            descripcion: "Zapatillas deportivas con tecnología Boost",
            precio: 179.99,
            generoNombre: "Hombre",
            categoriaNombre: "Calzado Hombre",
            subcategoriaNombre: "Zapatillas Hombre",
            marcaNombre: "Adidas",
            es_nuevo: true,
            es_destacado: true,
            atributos: [
                {
                    nombre: "Material",
                    valor: "Malla transpirable y suela de goma",
                },
                {
                    nombre: "Tecnología",
                    valor: "Amortiguación Boost",
                }
            ],
            imagenes: [
                "01-zapatillas-adidas.png",
                "02-zapatillas-adidas.png",
                "03-zapatillas-adidas.png"
            ],
            combinaciones: [
                { colorNombre: "Negro", tallaValor: "41", cantidad_stock: 10 },
                { colorNombre: "Negro", tallaValor: "42", cantidad_stock: 8 },
                { colorNombre: "Negro", tallaValor: "40", cantidad_stock: 5 }
            ],
        },
        {
            nombre: "Zapatillas Adidas Running",
            slug: "zapatillas-adidas-running",
            descripcion: "Zapatillas para running con amortiguación",
            precio: 129.90,
            generoNombre: "Mujer",
            categoriaNombre: "Calzado Mujer",
            subcategoriaNombre: "Zapatillas",
            marcaNombre: "Adidas",
            es_destacado: true,
            atributos: [
                { nombre: "Material", valor: "Malla transpirable" },
                { nombre: "Suela", valor: "Goma antideslizante" },
            ],
            imagenes: [
                "04-zapatillas-adidas.png",
                "05-zapatillas-adidas.png",
            ],
            combinaciones: [
                { colorNombre: "Blanco", tallaValor: "41", cantidad_stock: 10 },
                { colorNombre: "Blanco", tallaValor: "38", cantidad_stock: 15 },
                { colorNombre: "Blanco", tallaValor: "39", cantidad_stock: 10 },
                { colorNombre: "Blanco", tallaValor: "40", cantidad_stock: 6 },
            ],
        },
        // Vestido PARA MUJER  10
        {
            nombre: "Vestido Essentials",
            slug: "vestido-essentials",
            descripcion: "Vestido deportivo de tirantes con tecnología Climalite",
            precio: 69.90,
            generoNombre: "Mujer",
            categoriaNombre: "Ropa Mujer",
            subcategoriaNombre: "Vestidos Mujer",
            es_destacado: true,
            atributos: [
                { nombre: "Material", valor: "Poliéster 95%/Elastano 5%" },
                { nombre: "Longitud", valor: "Por encima de la rodilla" },
                { nombre: "Estilo", valor: "Deportivo" }
            ],
            imagenes: [
                "03-vestido.png",
                "04-vestido.png"
            ],
            combinaciones: [
                { colorNombre: "Negro", tallaValor: "S", cantidad_stock: 15 },
                { colorNombre: "Negro", tallaValor: "M", cantidad_stock: 10 },
                { colorNombre: "Negro", tallaValor: "S", cantidad_stock: 8 }
            ]
        },
        {
            nombre: "Vestido Nike Swoosh Run",
            slug: "vestido-nike-swoosh-run",
            descripcion: "Vestido para running con tecnología Dri-FIT",
            precio: 79.90,
            generoNombre: "Mujer",
            categoriaNombre: "Ropa Mujer",
            subcategoriaNombre: "Vestidos Mujer",
            es_destacado: false,
            atributos: [
                { nombre: "Material", valor: "Poliéster 100% reciclado" },
                { nombre: "Característica", valor: "Reflectante para visibilidad" },
                { nombre: "Longitud", valor: "Mid-thigh" }
            ],
            imagenes: [
                "01-vestido.png",
                "02-vestido.png"
            ],
            combinaciones: [
                { colorNombre: "Negro", tallaValor: "XS", cantidad_stock: 6 },
                { colorNombre: "Negro", tallaValor: "S", cantidad_stock: 9 },
                { colorNombre: "Negro", tallaValor: "M", cantidad_stock: 7 }
            ]
        },
        {
            nombre: "Vestido Puma Iconic Tee",
            slug: "vestido-puma-iconic-tee",
            descripcion: "Vestido camisero con logo clásico de Puma",
            precio: 59.90,
            generoNombre: "Mujer",
            categoriaNombre: "Ropa Mujer",
            subcategoriaNombre: "Vestidos Mujer",
            // marcaNombre: "Puma",
            es_destacado: true,
            atributos: [
                { nombre: "Material", valor: "Algodón 100% orgánico" },
                { nombre: "Estilo", valor: "Regular Fit" },
                { nombre: "Longitud", valor: "Por encima de la rodilla" }
            ],
            imagenes: [
                "05-vestido.png",
                "06-vestido.png"
            ],
            combinaciones: [
                { colorNombre: "Azul", tallaValor: "S", cantidad_stock: 12 },
                { colorNombre: "Azul", tallaValor: "M", cantidad_stock: 8 },
                { colorNombre: "Azul", tallaValor: "S", cantidad_stock: 10 }
            ]
        },
        {
            nombre: "Vestido Under Armour Tech",
            slug: "vestido-under-armour-tech",
            descripcion: "Vestido de entrenamiento con tecnología anti-olor",
            precio: 84.90,
            generoNombre: "Mujer",
            categoriaNombre: "Ropa Mujer",
            subcategoriaNombre: "Vestidos Mujer",
            es_destacado: true,
            atributos: [
                { nombre: "Material", valor: "Poliéster con tecnología UA Tech" },
                { nombre: "Beneficio", valor: "Protección contra olores" },
                { nombre: "Longitud", valor: "Mid-thigh" }
            ],
            imagenes: [
                "07-vestido.png",
                "08-vestido.png"
            ],
            combinaciones: [
                { colorNombre: "Blanco", tallaValor: "S", cantidad_stock: 7 },
                { colorNombre: "Blanco", tallaValor: "M", cantidad_stock: 5 },
                { colorNombre: "Blanco", tallaValor: "S", cantidad_stock: 11 }
            ]
        },
        {
            nombre: "Vestido Reebok CrossFit",
            slug: "vestido-reebok-crossfit",
            descripcion: "Vestido para entrenamientos intensos con paneles de ventilación",
            precio: 72.50,
            generoNombre: "Mujer",
            categoriaNombre: "Ropa Mujer",
            subcategoriaNombre: "Vestidos Mujer",
            es_destacado: false,
            atributos: [
                { nombre: "Material", valor: "Mezcla de poliéster y elastano" },
                { nombre: "Ventilación", valor: "Paneles de malla estratégicos" },
                { nombre: "Longitud", valor: "Por encima de la rodilla" }
            ],
            imagenes: [
                "09-vestido.png",
                "10-vestido.png"
            ],
            combinaciones: [
                { colorNombre: "Rojo", tallaValor: "S", cantidad_stock: 6 },
                { colorNombre: "Rojo", tallaValor: "M", cantidad_stock: 4 },
                { colorNombre: "Rojo", tallaValor: "S", cantidad_stock: 9 }
            ]
        },
        {
            nombre: "Vestido Nike Yoga Luxe",
            slug: "vestido-nike-yoga-luxe",
            descripcion: "Vestido para yoga con máxima flexibilidad y confort",
            precio: 89.90,
            generoNombre: "Mujer",
            categoriaNombre: "Ropa Mujer",
            subcategoriaNombre: "Vestidos Mujer",
            // marcaNombre: "Nike",
            es_destacado: true,
            atributos: [
                { nombre: "Material", valor: "Poliéster suave con tecnología Dri-FIT" },
                { nombre: "Flexibilidad", valor: "Amplio rango de movimiento" },
                { nombre: "Longitud", valor: "Rodilla" }
            ],
            imagenes: [
                "11-vestido.png",
                "12-vestido.png"
            ],
            combinaciones: [
                { colorNombre: "Azul", tallaValor: "XS", cantidad_stock: 4 },
                { colorNombre: "Azul", tallaValor: "S", cantidad_stock: 11 },
                { colorNombre: "Azul", tallaValor: "M", cantidad_stock: 6 }
            ]
        },
        {
            nombre: "Vestido Adidas 3 Rayas",
            slug: "vestido-adidas-3rayas",
            descripcion: "Vestido clásico con las icónicas 3 rayas laterales",
            precio: 65.90,
            generoNombre: "Mujer",
            categoriaNombre: "Ropa Mujer",
            subcategoriaNombre: "Vestidos Mujer",
            // marcaNombre: "Adidas",
            es_destacado: false,
            atributos: [
                { nombre: "Material", valor: "Algodón orgánico 100%" },
                { nombre: "Diseño", valor: "3 rayas en los laterales" },
                { nombre: "Longitud", valor: "Rodilla" }
            ],
            imagenes: [
                "13-vestido.png",
                "14-vestido.png"
            ],
            combinaciones: [
                { colorNombre: "Blanco", tallaValor: "XS", cantidad_stock: 9 },
                { colorNombre: "Blanco", tallaValor: "S", cantidad_stock: 14 },
                { colorNombre: "Blaco", tallaValor: "M", cantidad_stock: 7 }
            ]
        },
        {
            nombre: "Vestido Puma DryCELL",
            slug: "vestido-puma-drycell",
            descripcion: "Vestido deportivo con tecnología de absorción de humedad",
            precio: 74.90,
            generoNombre: "Mujer",
            categoriaNombre: "Ropa Mujer",
            subcategoriaNombre: "Vestidos Mujer",
            // marcaNombre: "Puma",
            es_destacado: true,
            atributos: [
                { nombre: "Material", valor: "Poliéster 92%/Elastano 8%" },
                { nombre: "Tecnología", valor: "dryCELL para control de humedad" },
                { nombre: "Longitud", valor: "Por encima de la rodilla" }
            ],
            imagenes: [
                "15-vestido.png",
                "16-vestido.png",
                "17-vestido.png",

            ],
            combinaciones: [
                { colorNombre: "gris", tallaValor: "XS", cantidad_stock: 7 },
                { colorNombre: "gris", tallaValor: "S", cantidad_stock: 11 },
                { colorNombre: "gris", tallaValor: "M", cantidad_stock: 9 }
            ]
        },
        {
            nombre: "Vestido Nike Sportswear Essential",
            slug: "vestido-nike-sportswear-essential",
            descripcion: "Vestido versátil para deporte y uso casual",
            precio: 69.90,
            generoNombre: "Mujer",
            categoriaNombre: "Ropa Mujer",
            subcategoriaNombre: "Vestidos Mujer",
            // marcaNombre: "Nike",
            es_destacado: false,
            atributos: [
                { nombre: "Material", valor: "Algodón 60%/Poliéster 40%" },
                { nombre: "Ajuste", valor: "Relajado" },
                { nombre: "Longitud", valor: "Rodilla" }
            ],
            imagenes: [
                "18-vestido.png",
                "18-vestido.png",
                "20-vestido.png",
            ],
            combinaciones: [
                { colorNombre: "Gris", tallaValor: "S", cantidad_stock: 14 },
                { colorNombre: "Gris", tallaValor: "M", cantidad_stock: 9 },
                { colorNombre: "Gris", tallaValor: "S", cantidad_stock: 11 }
            ]
        },
        {
            nombre: "Vestido Adidas Aeroready",
            slug: "vestido-adidas-aeroready",
            descripcion: "Vestido con tecnología que mantiene la frescura todo el día",
            precio: 79.90,
            generoNombre: "Mujer",
            categoriaNombre: "Ropa Mujer",
            subcategoriaNombre: "Vestidos Mujer",
            // marcaNombre: "Adidas",
            es_destacado: true,
            atributos: [
                { nombre: "Material", valor: "Poliéster reciclado" },
                { nombre: "Tecnología", valor: "AEROREADY para confort" },
                { nombre: "Longitud", valor: "Rodilla" }
            ],
            imagenes: [
                "21-vestido.png",
                "22-vestido.png",
                "23-vestido.png",
            ],
            combinaciones: [
                { colorNombre: "Azul", tallaValor: "S", cantidad_stock: 9 },
                { colorNombre: "Azul", tallaValor: "M", cantidad_stock: 7 },
                { colorNombre: "Azul", tallaValor: "S", cantidad_stock: 13 }
            ]
        },


        // PANTALONES JEANS HOMBRES
        {
            nombre: "Jeans Levi's 501 Original",
            slug: "jeans-levis-501-original",
            descripcion: "Jeans clásico corte recto en denim premium",
            precio: 89.90,
            generoNombre: "Hombre",
            categoriaNombre: "Ropa Hombre",
            subcategoriaNombre: "Jeans Hombre",
            // marcaNombre: "Levi's",
            es_destacado: true,
            atributos: [
                { nombre: "Material", valor: "Denim 100% algodón" },
                { nombre: "Corte", valor: "Recto" },
                { nombre: "Tiro", valor: "Medio" }
            ],
            imagenes: [
                "24-pantalon-jeans.png",
                "25-pantalon-jeans.png",
                "26-pantalon-jeans.png"
            ],
            combinaciones: [
                { colorNombre: "Azul", tallaValor: "30", cantidad_stock: 15 },
                { colorNombre: "Azul", tallaValor: "32", cantidad_stock: 12 },
                { colorNombre: "Azul", tallaValor: "32", cantidad_stock: 8 }
            ]
        },
        {
            nombre: "Pantalón Wrangler Regular Fit",
            slug: "pantalon-wrangler-regular",
            descripcion: "Jeans resistente con tecnología anti-rozaduras",
            precio: 74.90,
            generoNombre: "Hombre",
            categoriaNombre: "Ropa Hombre",
            subcategoriaNombre: "Jeans Hombre",
            // marcaNombre: "Wrangler",
            es_destacado: false,
            atributos: [
                { nombre: "Material", valor: "98% algodón, 2% elastano" },
                { nombre: "Corte", valor: "Regular" },
                { nombre: "Bolsillos", valor: "5 bolsillos" }
            ],
            imagenes: [
                "27-pantalon-jeans.png",
                "28-pantalon-jeans.png",
                "29-pantalon-jeans.png"
            ],
            combinaciones: [
                { colorNombre: "Azul", tallaValor: "31", cantidad_stock: 10 },
                { colorNombre: "Azul", tallaValor: "33", cantidad_stock: 7 },
                { colorNombre: "Azul", tallaValor: "32", cantidad_stock: 5 }
            ]
        },
        {
            nombre: "Jeans Básico Clásico",
            slug: "jeans-basico-clasico",
            descripcion: "Jeans genérico de calidad premium",
            precio: 49.90,
            generoNombre: "Hombre",
            categoriaNombre: "Ropa Hombre",
            subcategoriaNombre: "Jeans Hombre",
            // marcaNombre: null,
            es_destacado: false,
            atributos: [
                { nombre: "Material", valor: "100% algodón" },
                { nombre: "Corte", valor: "Recto clásico" },
                { nombre: "Lavado", valor: "Medio" }
            ],
            imagenes: [
                "30-pantalon-jeans.png",
                "31-pantalon-jeans.png",
                "32-pantalon-jeans.png"
            ],
            combinaciones: [
                { colorNombre: "Azul", tallaValor: "30", cantidad_stock: 20 },
                { colorNombre: "Azul", tallaValor: "32", cantidad_stock: 18 },
                { colorNombre: "Azul", tallaValor: "34", cantidad_stock: 12 }
            ]
        },
        {
            nombre: "Jeans Diesel Slim Fit",
            slug: "jeans-diesel-slim",
            descripcion: "Jeans de diseño italiano con corte ajustado",
            precio: 119.90,
            generoNombre: "Hombre",
            categoriaNombre: "Ropa Hombre",
            subcategoriaNombre: "Jeans Hombre",
            // marcaNombre: "Diesel",
            es_destacado: true,
            atributos: [
                { nombre: "Material", valor: "Algodón con elastano" },
                { nombre: "Corte", valor: "Slim Fit" },
                { nombre: "Detalles", valor: "Costuras contrastantes" }
            ],
            imagenes: [
                "33-pantalon-jeans.png",
                "34-pantalon-jeans.png"
            ],
            combinaciones: [
                { colorNombre: "Negro", tallaValor: "31", cantidad_stock: 8 },
                { colorNombre: "Negro", tallaValor: "33", cantidad_stock: 6 },
                { colorNombre: "Negro", tallaValor: "32", cantidad_stock: 7 }
            ]
        },
        {
            nombre: "Pantalón Jean Relaxed Fit",
            slug: "pantalon-jean-relaxed",
            descripcion: "Jeans cómodo para uso diario",
            precio: 44.90,
            generoNombre: "Hombre",
            categoriaNombre: "Ropa Hombre",
            subcategoriaNombre: "Jeans Hombre",
            // marcaNombre: null,
            es_destacado: false,
            atributos: [
                { nombre: "Material", valor: "Algodón 98%, Elastano 2%" },
                { nombre: "Corte", valor: "Relajado" },
                { nombre: "Tiro", valor: "Alto" }
            ],
            imagenes: [
                "35-pantalon-jeans.png",
                "36-pantalon-jeans.png",
                "37-pantalon-jeans.png"

            ],
            combinaciones: [
                { colorNombre: "Negro", tallaValor: "32", cantidad_stock: 15 },
                { colorNombre: "Negro", tallaValor: "34", cantidad_stock: 10 },
                { colorNombre: "Negro", tallaValor: "33", cantidad_stock: 8 }
            ]
        },
        {
            nombre: "Jeans Lee Extreme Motion",
            slug: "jeans-lee-extreme-motion",
            descripcion: "Jeans con máxima flexibilidad para movimiento",
            precio: 79.90,
            generoNombre: "Hombre",
            categoriaNombre: "Ropa Hombre",
            subcategoriaNombre: "Jeans Hombre",
            // marcaNombre: "Lee",
            es_destacado: true,
            atributos: [
                { nombre: "Material", valor: "Algodón 90%, Elastano 10%" },
                { nombre: "Tecnología", valor: "Extreme Motion" },
                { nombre: "Corte", valor: "Ajustado" }
            ],
            imagenes: [
                "38-pantalon-jeans.png",
                "39-pantalon-jeans.png",
            ],
            combinaciones: [
                { colorNombre: "Blanco", tallaValor: "30", cantidad_stock: 9 },
                { colorNombre: "Blanco", tallaValor: "32", cantidad_stock: 7 },
                { colorNombre: "Blanco", tallaValor: "31", cantidad_stock: 6 }
            ]
        },
        {
            nombre: "Jeans Básico Slim Fit",
            slug: "jeans-basico-slim",
            descripcion: "Jeans genérico con corte moderno",
            precio: 39.90,
            generoNombre: "Hombre",
            categoriaNombre: "Ropa Hombre",
            subcategoriaNombre: "Jeans Hombre",
            // marcaNombre: null,
            es_destacado: false,
            atributos: [
                { nombre: "Material", valor: "Algodón 98%, Elastano 2%" },
                { nombre: "Corte", valor: "Slim" },
                { nombre: "Bolsillos", valor: "5 bolsillos clásicos" }
            ],
            imagenes: [
                "40-pantalon-jeans.png",
                "41-pantalon-jeans.png",
            ],
            combinaciones: [
                { colorNombre: "Azul", tallaValor: "30", cantidad_stock: 18 },
                { colorNombre: "Azul", tallaValor: "32", cantidad_stock: 15 },
                { colorNombre: "Azul", tallaValor: "34", cantidad_stock: 10 }
            ]
        },
        {
            nombre: "Jeans Guess Distressed",
            slug: "jeans-guess-distressed",
            descripcion: "Jeans con efecto desgastado de diseñador",
            precio: 109.90,
            generoNombre: "Hombre",
            categoriaNombre: "Ropa Hombre",
            subcategoriaNombre: "Jeans Hombre",
            // marcaNombre: "Guess",
            es_destacado: true,
            atributos: [
                { nombre: "Material", valor: "Denim premium" },
                { nombre: "Estilo", valor: "Desgastado" },
                { nombre: "Corte", valor: "Slim Straight" }
            ],
            imagenes: [
                "42-pantalon-jeans.png",
                "43-pantalon-jeans.png",
                "44-pantalon-jeans.png",
                "45-pantalon-jeans.png"

            ],
            combinaciones: [
                { colorNombre: "Negro", tallaValor: "31", cantidad_stock: 6 },
                { colorNombre: "Negro", tallaValor: "33", cantidad_stock: 4 },
                { colorNombre: "Negro", tallaValor: "32", cantidad_stock: 5 }
            ]
        },
        {
            nombre: "Pantalón Jean Bootcut",
            slug: "pantalon-jean-bootcut",
            descripcion: "Jeans corte bootcut para calzar sobre botas",
            precio: 54.90,
            generoNombre: "Hombre",
            categoriaNombre: "Ropa Hombre",
            subcategoriaNombre: "Jeans Hombre",
            // marcaNombre: null,
            es_destacado: false,
            atributos: [
                { nombre: "Material", valor: "100% algodón" },
                { nombre: "Corte", valor: "Bootcut" },
                { nombre: "Tiro", valor: "Medio" }
            ],
            imagenes: [
                "46-pantalon-jeans.png",
                "47-pantalon-jeans.png",
                "48-pantalon-jeans.png"
            ],
            combinaciones: [
                { colorNombre: "Verde", tallaValor: "32", cantidad_stock: 12 },
                { colorNombre: "Verde", tallaValor: "34", cantidad_stock: 9 },
                { colorNombre: "Verde", tallaValor: "33", cantidad_stock: 7 }
            ]
        },
        {
            nombre: "Jeans Calvin Klein Straight",
            slug: "jeans-calvinklein-straight",
            descripcion: "Jeans de corte recto con etiqueta de diseñador",
            precio: 99.90,
            generoNombre: "Hombre",
            categoriaNombre: "Ropa Hombre",
            subcategoriaNombre: "Jeans Hombre",
            // marcaNombre: "Calvin Klein",
            es_destacado: true,
            atributos: [
                { nombre: "Material", valor: "Algodón 98%, Elastano 2%" },
                { nombre: "Corte", valor: "Recto" },
                { nombre: "Detalles", valor: "Logotipo en la cintura" }
            ],
            imagenes: [
                "49-pantalon-jeans.png",
                "50-pantalon-jeans.png",
                "51-pantalon-jeans.png",

            ],
            combinaciones: [
                { colorNombre: "Verde", tallaValor: "30", cantidad_stock: 7 },
                { colorNombre: "Verde", tallaValor: "32", cantidad_stock: 5 },
                { colorNombre: "Verde", tallaValor: "31", cantidad_stock: 6 }
            ]
        },
    ],
    generos: ['Hombre', 'Mujer', 'Niño', 'Niña', 'Unisex'],
    colores: [
        { nombre: "Negro", codigo_hex: "#000000" },
        { nombre: "Blanco", codigo_hex: "#FFFFFF" },
        { nombre: "Rojo", codigo_hex: "#FF0000" },
        { nombre: "Verde", codigo_hex: "#008000" },
        { nombre: "Azul", codigo_hex: "#0000FF" },
        { nombre: "Amarillo", codigo_hex: "#FFFF00" },
        { nombre: "Cian", codigo_hex: "#00FFFF" },
        { nombre: "Magenta", codigo_hex: "#FF00FF" },
        { nombre: "Gris", codigo_hex: "#808080" },
        { nombre: "Gris claro", codigo_hex: "#D3D3D3" },
        { nombre: "Gris oscuro", codigo_hex: "#A9A9A9" },
        { nombre: "Naranja", codigo_hex: "#FFA500" },
        { nombre: "Rosa", codigo_hex: "#FFC0CB" },
        { nombre: "Púrpura", codigo_hex: "#800080" },
        { nombre: "Marrón", codigo_hex: "#A52A2A" },
        { nombre: "Oliva", codigo_hex: "#808000" },
        { nombre: "Verde lima", codigo_hex: "#00FF00" },
        { nombre: "Aguamarina", codigo_hex: "#7FFFD4" },
        { nombre: "Coral", codigo_hex: "#FF7F50" },
        { nombre: "Turquesa", codigo_hex: "#40E0D0" }
    ],
    marcas: [
        { nombre: "Nike", slug: "nike", descripcion: "Ropa y calzado deportivo." },
        { nombre: "Adidas", slug: "adidas", descripcion: "Ropa y zapatillas deportivas." },
        { nombre: "Puma", slug: "puma", descripcion: "Calzado y ropa deportiva." },
    ],
    categoria: ["Ropa", "Calzado", "Accesorios"],
    role: [
        { nombre: 'admin', descripcion: 'Administrador del sistema' },
        { nombre: 'usuario', descripcion: 'Usuario que compra productos' },
    ],
    usuario: [
        {
            nombre: "Carlos",
            apellido: "Martínez",
            correo: "carlos.martinez@example.com",
            contrasena_hash: bcryptjs.hashSync("12345"),
            telefono: "987654321"
        },
        {
            nombre: "wildor",
            apellido: "julca ccachay",
            correo: "wilo@gmail.com",
            contrasena_hash: bcryptjs.hashSync("12345"),
            telefono: '923778300'
        }
    ],

}





