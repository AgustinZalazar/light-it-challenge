import { useParams } from 'react-router-dom'
import { useFilteredEquipment } from '@/hooks/useEquipment'
import { Product } from '@/models/product'
import Layout from '@/components/Layout/layout'
import { Sidebar } from '@/components/Sidebar'
import ProductCard from '@/components/Sidebar/SidebarContent/productCard/productCard'
import SidebarContent from '@/components/Sidebar/SidebarContent/sidebarContent'
import ProductCardSkeleton from '@/components/skeleton/productCardSkeleton'

const EquipmentProducts = () => {
    const { name } = useParams();
    const { filteredData, isLoading } = useFilteredEquipment(name as string)
    return <Layout>
        <Sidebar>
            <SidebarContent title='Equipamiento' goBack={true} prevContentTitle='< Equipamiento'>
                <div className="flex gap-2">
                    {!isLoading ?
                        filteredData[0].items.map((product: Product, index: number) =>
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

export default EquipmentProducts