class Cart {
    constructor(source, container = '#cart'){
        this.source = source;
        this.container = container;
        this.countGoods = 0; // Общее кол-во товаров в корзине
        this.amount = 0; // Общая стоимость товаров в корзине
        this.cartItems = []; // Все товары
        this._init();
    }
    _init(){
        this._render();
        fetch(this.source)
            .then(result => result.json())
            .then(data => {
                for (let product of data.contents){
                    this.cartItems.push(product);
                    this._renderItem(product);
                }
                this.countGoods = data.countGoods;
                this.amount = data.amount;
                this._renderSum();
            })
    }
    _render(){
        let $cartItemsDiv = $('<div/>', {
            class: 'cart-items-wrap'
        });
        let $totalGoods = $('<div/>', {
            class: 'cart-summary sum-goods'
        });
        let $totalPrice = $('<div/>', {
            class: 'cart-summary sum-price'
        });
        $(this.container).text('Корзина');
        $cartItemsDiv.appendTo($(this.container));
        $totalGoods.appendTo($(this.container));
        $totalPrice.appendTo($(this.container));
    }
    _renderItem(product){
        let $container = $('<div/>', {
            class: 'cart-item',
            'data-product': product.id_product,
        });
        $container.append($(`<p class="product-name">${product.product_name}</p>`));
        $container.append($(`<p class="product-quantity">${product.quantity}</p>`));
        $container.append($(`<p class="product-price">${product.price} руб.</p>`));
        $container.append($(`<button class="remove" data-product=${product.id_product}>Удалить</button>`))
            .click(e => {
                //console.log(e.target);
                this._remove(e.target);
            });
        $container.appendTo($('.cart-items-wrap'));
    }

    _renderSum(){
        $('.sum-goods').text(`Всего товаров в корзине: ${this.countGoods}`);
        $('.sum-price').text(`Общая сумма: ${this.amount} руб.`);
    }
    _updateCart(product){
        let $container = $(`div[data-product="${product.id_product}"]`);
        $container.find('.product-quantity').text(product.quantity);
        $container.find('.product-price').text(`${product.quantity*product.price} руб.`);
    }
    addProduct(element) {
        let productId = +$(element).data('id');
        let find = this.cartItems.find(product => product.id_product === productId);
        //console.log(find);
        if(find){
            find.quantity++;
            this.countGoods++;
            this.amount += find.price;
            this._updateCart(find);
            console.log(this.cartItems);
        } else {
            let product = {
                id_product: productId,
                product_name: $(element).data('name'),
                price: +$(element).data('price'),
                quantity: 1
            };
            this.cartItems.push(product);
            this._renderItem(product);
            this.amount += product.price;
            this.countGoods += product.quantity;
        }
        this._renderSum();
    }

    _remove(id){
        let $productId = +$(id).data('product');
        //console.log($productId);
        let find = this.cartItems.find(product => product.id_product === $productId);
        //console.log(find);

        if (find.quantity > 1) {
            find.quantity--;
            this.countGoods--;
            this.amount -= find.price;
            this._renderSum();
        } else {
            $(`.cart-item[data-product=${$productId}]`).remove();
            //$(`div[data-product=${$productId}]`).remove();
            find.quantity--;
            this.countGoods--;
            this.amount -= find.price;
            this._renderSum();
            $.each(this.cartItems, (index, value) => {
                console.log(value);
                console.log(value.id_product);
                if (value.id_product = $productId) {
                    console.log('URAAA')
                }
            })
            //this.cartItems.find(product => product.id_product === $productId).splice(1,2)
        }

    }
}