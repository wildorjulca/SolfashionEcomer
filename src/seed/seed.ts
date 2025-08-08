
interface categories {
    title: string;
    img: string
}

interface SeedData {
    categories: categories[]
}

export const initialData: SeedData = {
    categories: [
        {
            title: "Televisions",
            img: "/images/categories/categories-01.png",
        },
        {
            title: "Laptop & PC",
            img: "/images/categories/categories-02.png",
        },
        {
            title: "Mobile & Tablets",
            img: "/images/categories/categories-03.png",
        },
        {
            title: "Games & Videos",
            img: "/images/categories/categories-04.png",
        },
        {
            title: "Home Appliances",
            img: "/images/categories/categories-05.png",
        },
        {
            title: "Health & Sports",
            img: "/images/categories/categories-06.png",
        },
        {
            title: "Watches",
            img: "/images/categories/categories-07.png",
        },
        {
            title: "Televisions",
            img: "/images/categories/categories-04.png",
        },
    ]


}