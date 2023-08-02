export default class ProductService {
    async getProductsSmall() {
        return await fetch('http://127.0.0.1:8000/api/hoteles/listar')
            .then((res) => res.json())
            .then((d) => d);
    }

    async getProductsCity(ciudad) {
        return await fetch(`http://127.0.0.1:8000/api/hoteles/listar/${ciudad}/`)
            .then((res) => res.json())
            .then((d) => d);
    }


    getProducts() {
        return fetch('demo/data/products.json')
            .then((res) => res.json())
            .then((d) => d.data);
    }

    getProductsWithOrdersSmall() {
        return fetch('demo/data/products-orders-small.json')
            .then((res) => res.json())
            .then((d) => d.data);
    }


  
  

    async   getProduct(id) {
        let data = {}
        await fetch(`http://127.0.0.1:8000/api/hoteles/listar/id/${id}`)
                .then((res) => res.json())
                .then((d) => data=d);
            
                
                return data
        }
    
    async   getNews() {
     
            return await fetch('http://127.0.0.1:8000/api/new')
                .then((res) => res.json())
                .then((d) => d);
    }
    

}

