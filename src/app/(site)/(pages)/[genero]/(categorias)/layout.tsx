
import { getProductPagination } from '@/actions'
import Sidebar from '@/components/Shop/sidebar/Sidebar'
import React from 'react'

interface Props {
    children: React.ReactNode
}
const RootLayoutCategory =  async ({ children }: Props) => {

    // const products = await getProductPagination()
    // console.log(products)


    return (
        <div className="min-h-screen bg-[#f3f4f6]">
            <section className="overflow-hidden relative pb-20 pt-5 lg:pt-20 xl:pt-[210px]">
                <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
                    <div className="flex gap-7.5">
                        {/* Sidebar */}
                        <Sidebar />
                        {/* Contenido principal */}
                        <div className="xl:max-w-[870px] w-full">
                            {children}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RootLayoutCategory