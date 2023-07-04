import { useParams } from 'react-router-dom'
import { Product } from '@/models/product'
import Layout from '@/components/Layout/layout'
import { Sidebar } from '@/components/Sidebar'
import ProductCard from '@/components/Sidebar/SidebarContent/productCard/productCard'
import SidebarContent from '@/components/Sidebar/SidebarContent/sidebarContent'
import { useFilteredEndings } from '@/hooks/useEndings'
import ProductCardSkeleton from '@/components/skeleton/productCardSkeleton'

const EndingsProducts = () => {
    const { name } = useParams();
    const { dataFiltered, isLoading } = useFilteredEndings(name as string)
    return <Layout>
        <Sidebar>
            <SidebarContent title={name!} goBack={true} prevContentTitle='< Terminaciones'>
                <div className="flex gap-4">
                    {!isLoading ?
                        dataFiltered[0].items.map((product: Product, index: number) =>
                            <ProductCard key={index} product={product} />)

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

export default EndingsProducts