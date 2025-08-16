import React from 'react'

import accesorio from '/public/images/categories/accesorio-mujer.png'
import calzado from '/public/images/categories/calzado-mujer.png'
import ropa from '/public/images/categories/ropa-mujer.png'
import vestido from '/public/images/categories/vestido.png'
import conjuntos from '/public/images/categories/conjuntos.png'





 function Example() {
    return (

      <>
        <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        
            * {
                font-family: 'Poppins', sans-serif;
            }
        `}</style>
        
        <h1 className="text-3xl font-medium text-slate-800 text-center">Meet Our Team</h1>
        <p className="text-slate-500 text-center">The people behind the product, passionate about what they do.</p>
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
            <div className="max-w-80 bg-black text-white rounded-2xl">
                <div className="relative -mt-px overflow-hidden rounded-2xl">
                    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=600" alt="" className="h-[270px] w-full rounded-2xl hover:scale-105 transition-all duration-300 object-cover object-top" />
                    <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-black to-transparent"></div>
                </div>
                <div className="px-4 pb-6 text-center">
                    <p className="mt-4 text-lg">John Doe</p>
                    <p className="text-sm font-medium bg-gradient-to-r from-[#8B5CF6] via-[#9938CA] to-[#E0724A] text-transparent bg-clip-text">Content Marketing</p>
                </div>
            </div>
            <div className="max-w-80 bg-black text-white rounded-2xl">
                <div className="relative -mt-px overflow-hidden rounded-2xl">
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=600" alt="" className="h-[270px] w-full rounded-2xl hover:scale-105 transition-all duration-300 object-cover object-top" />
                    <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-black to-transparent"></div>
                </div>
                <div className="px-4 pb-6 text-center">
                    <p className="mt-4 text-lg">John Doe</p>
                    <p className="text-sm font-medium bg-gradient-to-r from-[#8B5CF6] via-[#9938CA] to-[#E0724A] text-transparent bg-clip-text">Content Marketing</p>
                </div>
            </div>
            <div className="max-w-80 bg-black text-white rounded-2xl">
                <div className="relative -mt-px overflow-hidden rounded-2xl">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&h=600&auto=format&fit=crop" alt="" className="h-[270px] w-full rounded-2xl hover:scale-105 transition-all duration-300 object-cover object-top" />
                    <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-black to-transparent"></div>
                </div>
                <div className="px-4 pb-6 text-center">
                    <p className="mt-4 text-lg">John Doe</p>
                    <p className="text-sm font-medium bg-gradient-to-r from-[#8B5CF6] via-[#9938CA] to-[#E0724A] text-transparent bg-clip-text">Content Marketing</p>
                </div>
            </div>
        </div>
      </>

    );
};
const pageGender = () => {
  const categories = [
    { name: 'Ropa', image: ropa },
    { name: 'Conjuntos', image: conjuntos },
    { name: 'Vestido', image: vestido },
    { name: 'Accessories', image: accesorio },
    { name: 'Calzado', image: calzado },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-200 to-gray-400">
      <section className="overflow-hidden relative pb-20 pt-5 lg:pt-20 xl:pt-[210px]">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white bg-gradient-to-r from-black to-gray-400 p-2 rounded-lg">Shop by Category</h2>
              <a href="#" className="text-purple-600 hover:underline">Browse all categories &gt;</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
              {categories.map((category, index) => (
                <div key={index} className="relative bg-gray-2 rounded-lg overflow-hidden shadow-md">
                  <img src={category.image.src} alt={category.name} className="w-full h-72 object-center" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-xl text-center text-">{category.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <Example />
        
      </section>
    </div>
  )
}

export default pageGender