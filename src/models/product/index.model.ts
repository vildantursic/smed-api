import mongoose from 'mongoose';
import productSchema from './index.schema';

const Product = mongoose.model('Product', productSchema);
export default Product;
