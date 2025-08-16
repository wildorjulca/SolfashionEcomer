'use server'

import prisma from "@/lib/prisma"



export const getProductPagination = async () => {
    try {
        const products = await prisma.producto.findMany()
        console.log(products)
        return products

    } catch (error) {
        console.log(error)
    }

}