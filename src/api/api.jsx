import axios from 'axios';

export async function ProductsData(){
    const Products=await axios.get(
        "http://fakestoreapiserver.vercel.app/amazonproducts"
    );
    return Products;
}