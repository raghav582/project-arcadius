const jsonServer = require('json-server');
const middleware = jsonServer.defaults();
const server = jsonServer.create();

server.use(middleware);
server.use(jsonServer.bodyParser);

const purchaseOrderData = require('../server')

server.get('/get/purchaseorders', (req, res) => {
    res.status(200).send(purchaseOrderData.getPurchaseOrder);
})

server.post('/add/purchaseorder', (req, res) => {
    console.log(req.body);
    let purchaseOrder = {};
    purchaseOrder.name = req.body.name;
    
    let products = [];
    for(let product of req.body.products) {
        let data = {};
        data.name = product.name;
        data.palletRows = product.palletRows;
        data.palletCols = product.palletCols;
        
        let pallets = [];
        let quantity = product.quantities;
        let count = 1;
        let palletCapacity = data.palletRows*data.palletCols;
        while(quantity > palletCapacity) {
            pallets.push({"number": count, "box": palletCapacity});
            quantity = quantity - palletCapacity;
            count = count + 1;
        }

        if(quantity > 0) {
            pallets.push({"number": count, "box": quantity})
        }

        data.pallets = pallets;
        products.push(data);
    }
    purchaseOrder.products = products;

    console.log("PurchaseOrder:", JSON.stringify(purchaseOrder));
    purchaseOrderData.getPurchaseOrder.push(purchaseOrder);
    res.status(200).send();
})

server.listen(3000, () => {
    console.log('JSON server listening on 3000');
})