import { useParams } from "react-router-dom";
import { useFilteredOpenings } from '@/hooks/useOpenings';
import Layout from '@/components/Layout/layout'
import { Sidebar } from '@/components/Sidebar'
import SidebarContent from '@/components/Sidebar/SidebarContent/sidebarContent'
import { Product } from '@/models/product';
import ProductCard from "@/components/Sidebar/SidebarContent/productCard/productCard";
import ProductCardSkeleton from "@/components/skeleton/productCardSkeleton";

const OpeningsProducts = () => {
    const { name } = useParams();
    const { dataFiltered, isLoading } = useFilteredOpenings(name as string)
    return <Layout>
        <Sidebar>
            <SidebarContent title={name!} goBack={true} prevContentTitle='< Aberturas'>
                <div className="flex gap-2">
                    {!isLoading ?
                        dataFiltered[0]?.items.map((product: Product, index: number) =>
                            <ProductCard key={index} product={product} />
                        )
                        :
                        <>
                            <ProductCardSkeleton />
                            <ProductCardSkeleton />
                            <ProductCardSkeleton />
                        </>
                    }
                </div>
            </SidebarContent>
        </Sidebar>
    </Layout>
}

export default OpeningsProducts