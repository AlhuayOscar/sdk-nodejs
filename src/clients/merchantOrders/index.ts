import create from './create';
import get from './get';
import update from './update';
import search from './search';

import type { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import type { MerchantOrderResponse } from './commonTypes';
import type { MerchantOrderCreateData } from './create/types';
import type { MerchantOrderUpdateData } from './update/types';
import type { MerchantOrderSearchData, MerchantOrderSearchResultsPage } from './search/types';
import type { MerchantOrderGetData } from './get/types';

/**
 * Mercado Pago Merchant Order.
 *
 * @see {@link https://www.mercadopago.com/developers/en/reference/merchant_orders/_merchant_orders/post Documentation }.
 */
export class MerchantOrder {
	private config: MercadoPagoConfig;

	constructor(mercadoPagoConfig: MercadoPagoConfig) {
		this.config = mercadoPagoConfig;
	}

	/**
	 * Mercado Pago Merchant Order create.
	 *
	 * @see {@link https://github.com/mercadopago/sdk-nodejs/blob/master/src/examples/merchantOrders/create.ts Usage Example  }.
	 */
	create({ body, requestOptions }: MerchantOrderCreateData): Promise<MerchantOrderResponse> {
		this.config.options = { ...this.config.options, ...requestOptions };
		return create({ body, config: this.config });
	}

	/**
	 * Mercado Pago Merchant Order get.
	 *
	 * @see {@link https://github.com/mercadopago/sdk-nodejs/blob/master/src/examples/merchantOrders/get.ts Usage Example  }.
	 */
	get({ merchantOrderId, requestOptions }: MerchantOrderGetData): Promise<MerchantOrderResponse> {
		this.config.options = { ...this.config.options, ...requestOptions };
		return get({ merchantOrderId, config: this.config });
	}

	/**
	 * Mercado Pago Merchant Order update.
	 *
	 * @see {@link https://github.com/mercadopago/sdk-nodejs/blob/master/src/examples/merchantOrders/update.ts Usage Example  }.
	 */
	update({ merchantOrderId, body, requestOptions }: MerchantOrderUpdateData): Promise<MerchantOrderResponse> {
		this.config.options = { ...this.config.options, ...requestOptions };
		return update({ merchantOrderId, body, config: this.config });
	}

	/**
	 * Mercado Pago Merchant Order search.
	 *
	 * @see {@link https://github.com/mercadopago/sdk-nodejs/blob/master/src/examples/merchantOrders/search.ts Usage Example  }.
	 */
	search(MerchantOrderSearchOptions: MerchantOrderSearchData = {}): Promise<MerchantOrderSearchResultsPage> {
		const { filters, requestOptions } = MerchantOrderSearchOptions;
		this.config.options = { ...this.config.options, ...requestOptions };
		return search({ filters, config: this.config });
	}
}
