import { initialData } from "./seed"
import prisma from "../lib/prisma"
import { Prisma } from "@prisma/client"

async function main() {

   const { colores, marcas, categoria, role, usuario, producto } = initialData


   await prisma.carrito.deleteMany();
   await prisma.detallePedido.deleteMany();
   await prisma.resena.deleteMany();
   await prisma.atributoProducto.deleteMany();
   await prisma.imagen.deleteMany();
   await prisma.combinacionProducto.deleteMany();
   await prisma.producto.deleteMany();


   // ...existing code...
   for (const item of producto) {
      // Busca IDs de genero, marca, categoria, subcategoria
      const genero = await prisma.genero.findUnique({ where: { nombre: item.generoNombre } });

      console.log({ genero })
      const marca = await prisma.marca.findUnique({ where: { nombre: item.marcaNombre } });

      console.log({ marca })
      const categoria = await prisma.categoria.findUnique({ where: { nombre: item.categoriaNombre } });
      console.log({ categoria })
      const subcategoria = item.subcategoriaNombre
         ? await prisma.subcategoria.findUnique({ where: { nombre: item.subcategoriaNombre } })
         : null;

      // Prepara combinaciones con IDs
      const combinacionesData = [];
      let contador = 0
      for (const comb of item.combinaciones) {
         contador += 1
         const color = await prisma.color.findUnique({ where: { nombre: comb.colorNombre } });
         const talla = await prisma.talla.findFirst({ where: { valor: comb.tallaValor } });
         if (color && talla) {
            combinacionesData.push({
               colorId: color.id,
               tallaId: talla.id,
               cantidad_stock: comb.cantidad_stock,
               precio: comb.precio,
               sku: `${item.marcaNombre?.substring(0, 3).toUpperCase()}-${item.nombre?.substring(0, 3).toUpperCase()}-${comb.colorNombre?.substring(0, 3).toUpperCase()}-${comb.tallaValor}-${contador}-${Date.now()}`
            });
         }
      }

      // ...existing code...
      if (!genero?.id || !marca?.id || !categoria?.id) {
         throw new Error('Faltan IDs requeridos para crear el producto');
      }


      await prisma.producto.create({
         data: {
            nombre: item.nombre,
            slug: item.slug,
            descripcion: item.descripcion,
            precio: item.precio,
            precio_descuento: item.precio_descuento,
            generoId: genero?.id,
            marcaId: marca?.id,
            categoriaId: categoria?.id,
            subcategoriaId: subcategoria?.id,
            es_nuevo: item.es_nuevo,
            es_destacado: item.es_destacado,
            imagenes: {
               create: item.imagenes.map((url, idx) => ({
                  url_imagen: url,
                  es_principal: idx === 0,
               })),
            },
            combinaciones: {
               create: combinacionesData,
            },
            atributos: {
               create: item.atributos,
            },
         },
      });
   }
   // ...existing code...






   console.log("Seed ejecutado correctamente!.")




}


(async () => {
   if (process.env.NODE_ENV === "production") return
   try {
      await main()
   } catch (error) {
      console.error(error)
      process.exit(1)
   } finally {
      await prisma.$disconnect()
   }
})()