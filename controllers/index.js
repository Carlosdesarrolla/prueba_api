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

module.exports = {
  index,
  getProducts,
  addProduct
};
