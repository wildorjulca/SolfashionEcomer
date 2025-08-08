// app/gender/[name]/page.tsx
import shopData from "@/components/Shop/shopData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import MainContent from "@/components/Shop/product/MainContent";

export default function GenderPage({ params }: { params: { name: string } }) {
  // Filtrar los productos según el género (params.name)
//   const filteredProducts = shopData.filter((product) =>
//     product.gender.toLowerCase() === params.name.toLowerCase()
//   );

  return (
    <>
      <Breadcrumb
        title={`Explorar Productos para ${params.name}`}
        pages={["tienda", "/", `tienda/${params.name.toLowerCase()}`]}
      />
      <MainContent products={shopData} />
    </>
  );
}

export async function generateStaticParams() {
  const genders = ["Men", "Women", "Unisex"];
  return genders.map((gender) => ({
    name: gender.toLowerCase(),
  }));
}