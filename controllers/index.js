var items = [
	{id: 1, name: 'product1'},
	{id: 2, name: 'product2'},
	{id: 3, name: 'product3'}
];

const index = (req, res, next) => {
	res.render('index', {
		title: 'DigitalApium'
	});
};

const getProducts = (req, res, next) => {
	res.render('products', {
		title: 'DigitalApium List of Products',
		items :items
	});
};

const addProduct = (req, res,nex) => {

	const { newItem } = req.body;
	console.log(newItem);

	items.push({
		id: items.length + 1,
		name: newItem
	});

	res.redirect('/products');
};
const reClientype = (req, res) => {
    const body = req.body; // receives {"id": "1", "message": "hello"}
	console.log("carlos"+ JSON.stringify(body));
	console.log("respuesta"+ JSON.stringify(req.headers));
	
    return res.status(200).send(body+" he recibido con exito. ");

};




module.exports = {
  index,
  getProducts,
  addProduct,
  reClientype
};
