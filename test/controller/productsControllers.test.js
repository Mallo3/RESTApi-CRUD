const {
    getProducts,
    getProductById,
    createProduct
} = require('../../controllers/productsControllers');

const mockData = require('../mock/controllerMock.json')

const productsServices = require('../../services/productsServices');
jest.mock('../../services/productsServices')


beforeEach(() => {
    jest.clearAllMocks();
});

afterEach(() => {
    jest.clearAllMocks();
});


//Get All Products
describe('Get All Products', () => {

    it('Should throw 200 status code if get all products', async () => {
        
        const mReq = {
            
        };

        const mRes = {
            //end: function () { },
            status: function(s) {this.statusCode = s; return this; },
            send: function (s) { this.send = s; return this; } 
        };

        jest.spyOn(productsServices, 'getAllProductsService').mockResolvedValueOnce();
        await getProducts(mReq, mRes);
        expect(mRes.send.status).toBe(200);
    });

});

// Get Product by Id
describe('Get Product by ID', () => {

    it('Should throw 200 status code if get product', async () => {
        
        const mReq = {
        };

        const mRes = {
            //end: function () { },
            status: function(s) {this.statusCode = s; return this; },
            send: function (s) { this.send = s; return this; } 
        };

        jest.spyOn(productsServices, 'getProductByIdService').mockResolvedValueOnce(mockData.ProductId._id);
        let result = await getProductById(mReq, mRes);
        //console.log(result);
        expect(mRes.send.status).toBe(200);
    });

    // it('Should throw 400 status code if product id wrong', async () => {
        
    //     const mReq = {
    //     };

    //     const mRes = {
    //         end: function () { },
    //         status: 500,
    //         send: function (s) { this.send = s; return this; } 
    //     };

    //     jest.spyOn(productsServices, 'getProductByIdService').mockResolvedValueOnce(mockData.error400);
    //     await getProducts(mReq, mRes);
    //     expect(mRes.send.status).toBe(400);
    // });

});

//create Product
describe('Create Product', () => {

    it('Should throw 200 status code if get all products', async () => {
        
        const mReq = {
            body: mockData.productData
        };

        const mRes = {
            //end: function () { },
            status: function(s) {this.statusCode = s; return this; },
            send: function (s) { this.send = s; return this; } 
        };

        jest.spyOn(productsServices, 'createProductService').mockResolvedValueOnce();
        await createProduct(mReq, mRes);
        expect(mRes.send.status).toBe(200);
    });

})