import { initialData } from "./seed"
import prisma from "../lib/prisma"

async function main() {
    const { categories } = initialData
    await prisma

}


(() => {
    if (process.env.NODE_ENV === "production") return
    main()
})()