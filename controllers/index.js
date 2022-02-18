var items = [
	{id: 1, name: 'product1'},
	{id: 2, name: 'product2'},
	{id: 3, name: 'product3'}
];
var items_recibidos = [{}];

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
const proClientype = (req, res,nex) => {
    const body = req.body;
	items_recibidos.push({
		id: items_recibidos.length + 1,
		cliente: JSON.stringify(body),
		cabecera : JSON.stringify(req.headers)
	});
	res.redirect('/webhook1');
};
const reClientype = (req, res, next) => {
	res.render('webhook1', {
		title: 'DigitalApium clientes modificados',
		items_recibidos:items_recibidos
	});
};

module.exports = {
  index,
  getProducts,
  addProduct,
  reClientype,
  proClientype
};
