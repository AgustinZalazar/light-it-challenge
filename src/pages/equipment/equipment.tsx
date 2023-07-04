import Layout from '@/components/Layout/layout'
import { Sidebar } from '@/components/Sidebar'
import ItemContent from '@/components/Sidebar/SidebarContent/itemContent/itemContent'
import SidebarContent from '@/components/Sidebar/SidebarContent/sidebarContent'
import { useEquipment } from '@/hooks/useEquipment'
import { Category } from '@/models/category'

const Equipment = () => {
    const { data, isLoading } = useEquipment()
    return <Layout>
        <Sidebar>
            <SidebarContent title='Equipamiento' goBack={false}>
                {!isLoading ?
                    data?.data.map((equipment: Category, index: number) => <ItemContent key={index} text={equipment.name} url={equipment.name.toLocaleLowerCase() + '/productos'} />)
                    :
                    <div role="status" className="max-w-sm animate-pulse">
                        <div className="h-3 bg-[#a8a8a8] rounded-full w-64 mb-4"></div>
                        <div className="h-3 bg-[#a8a8a8] rounded-full w-64 mb-4"></div>
                    </div>
                }
            </SidebarContent>
        </Sidebar>
    </Layout>
}

export default Equipment