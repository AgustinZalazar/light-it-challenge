import { Product } from '@/models/product'
import { FC } from 'react'
import noImage from '../../../../assets/no-image.png'

interface Props {
    product: Product
}

const ProductCard: FC<Props> = ({ product }): JSX.Element => {
    return <div className="text-center">
        <img src={product.img ? product.img : noImage} alt={`image-${product.name}`} width={120} />
        <p className='mt-2'>{product.name}</p>
    </div>
}

export default ProductCard