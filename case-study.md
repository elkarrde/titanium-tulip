# Project Titanium Tulip

## Problem
Imagine you're planning a dinner for your friends. You're planning to cook some middle-eastern-style meals, and you need some ingredients for your dinner. Let's say, you need some zataar spice and some couscous. So you take a detour on your way from work to a nearby shop to buy those missing pieces. But once there, suspicion rises onece you see the prices - can it be that your zataar spice was full 1ø cheaper here than in your favourite shop? Is it possible that couscous here is more expensive? But hey, there's no way to know for certain, and you buy the stuff. Next week you're shopping in your favourite shop, you see the those things you bought but can't really remember what ws the price. If only there was an app for that!

## Solution
Build an webpage that can save basic information about products. Basic information consists of product name, price, vendor name and location and category. Every user should be able to add their own products to their list and compare with other items of the same category they entered previously. Make sure it works across the devices -- it should be fully usable both on mobile devices, as well as on the desktops.

## Requirements
An app should have following screens:

- Landing screen -- a screen with a list of previously entered products, and an ability/link to add new one;
- Add-new screen -- a screen where users could add their products;
- Single product screen -- a screen where users could see all entered information about one product, a way to edit and delete it;
- Compare screen -- a screen where users could compare a product with others from the same category.

## Execution
Employ Angular to build an interactive webpage. For the sake of simplicity, use mocked data and store user data in the browser local storage.

## Application screen contents
1. Landing screen
  - list of entered products,
  - add new button.
2. Add-new screen
  - input fields for product information,
  - add button,
  - clear all fields button,
  - close/back button.
3. Single product screen
  - product overview areas,
  - compare button,
  - close/back button.
4. Compare screen
  - area for information about main product,
  - area for a list of comparable products,
  - close/back button.

## Data description
Product:
- name,
- price,
- vendor name and location,
- category.

```
{
    "name": "Premium Zataar Spice",
    "price": 22,
    "vendor": "SpiceMarket, Zagreb",
    "category": "food"
}
```
