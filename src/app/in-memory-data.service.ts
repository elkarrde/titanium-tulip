import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      { id: 11, name: 'Premium Zataar Spice', price: 22.5, vendor: 'SpiceMarket, Zagreb', category: 'spice' },
      { id: 12, name: 'Premium Zataar Spice', price: 23.3, vendor: 'UltraGoodDeal, Zagreb', category: 'spice' },
      { id: 13, name: 'Ordinary Zataar Plus', price: 21.4, vendor: 'SpiceMarket, Zagreb', category: 'spice' },
      { id: 14, name: 'Ordinary Zataar Plus', price: 22.1, vendor: 'UltraGoodDeal, Zagreb', category: 'spice' },

      { id: 21, name: 'VeryFine Couscous, 500g', price: 31.9, vendor: 'UltraGoodDeal, Zagreb', category: 'food' },
      { id: 22, name: 'VeryFine Couscous, 500g', price: 31.9, vendor: 'Fine Foods Everywhere, Zagreb', category: 'food' },
      { id: 23, name: 'JustGood Couscous, 250g', price: 17.9, vendor: 'UltraGoodDeal, Zagreb', category: 'food' },
      { id: 24, name: 'JustGood Couscous, 250g', price: 16.9, vendor: 'Fine Foods Everywhere, Zagreb', category: 'food' },

      { id: 31, name: 'Super 95', price: 10.3, vendor: 'INA, Zagreb', category: 'fuel' },
      { id: 32, name: 'Super 95', price: 10.4, vendor: 'LukOil, Zagreb', category: 'fuel' },
      { id: 33, name: 'Super 95', price: 10.2, vendor: 'Crodux, Zagreb', category: 'fuel' },
      { id: 33, name: 'Super 95', price: 10.4, vendor: 'Petrol, Zagreb', category: 'fuel' }
    ];
    return { products };
  }
}