import { AppPage } from './app.po';
import {browser, by, element, logging} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('front app is running!');
  });
  it('should display cart popup.', () => {
    page.navigateTo();
    let cartMenu = element(by.css('.header-cart'));
    let cartPopup = element(by.tagName("carrito-popup"));
    cartMenu.click();
    expect(cartPopup.isDisplayed());
  });
  it('should be able to add productoInterface to cart from image hover button.', () => {
    page.navigateTo();
    let cartButton = element.all(by.cssContainingText('.button','Add To Carrito')).first();
    let cartMenu = element(by.css('.header-cart'));
    cartButton.click();
    cartMenu.click();
    let cartPopup = element.all(by.css(".pop-cart-item"));
    expect(cartPopup.count()).toEqual(1);
  });
  it('should be able to remove productoInterface from cart popup.', () => {
    page.navigateTo();
    let cartButton = element.all(by.cssContainingText('.button','Add To Carrito')).first();
    let cartMenu = element(by.css('.header-cart'));
    cartButton.click();
    cartMenu.click();
    let removeButton = element.all(by.css('.cart-remove'));
    removeButton.click();
    let cartPopup = element.all(by.css(".pop-cart-item"));
    expect(cartPopup.count()).toEqual(0);
  });
  it('should be able to navigate to cart page from cart popup.', () => {
    page.navigateTo();
    let cartButton = element.all(by.cssContainingText('.button','Añadir To Carrito')).first();
    let cartMenu = element(by.css('.header-cart'));
    cartButton.click();
    cartMenu.click();
    let goCartButton = element.all(by.cssContainingText('.button','Ver Carrito')).first();
    goCartButton.click();
    expect(browser.getCurrentUrl()).toEqual('http://localhost:49152/cart');
  });
  it('should be able to add productoInterface to cart from productoInterface page.', () => {
    page.navigateToProducto();
    let cartButton = element(by.cssContainingText('.productoInterface-cart-button','Add to cart'));
    cartButton.click();
    let cartMenu = element(by.css('.header-cart'));
    cartMenu.click();
    let cartPopup = element.all(by.css(".pop-cart-item"));
    expect(cartPopup.count()).toEqual(1);
  });
  it('should be able to remove productoInterface from cart page.', () => {
    page.navigateToProducto();
    element(by.cssContainingText('.productoInterface-cart-button','Añadir a carrito')).click();
    page.navigateToCarrito();
    let removeButton = element.all(by.css('.item-remove'));
    removeButton.click();
    let cartText = element(by.css(".cart-page-content h4"));
    expect(cartText.getText()).toEqual('Carrito vacío.');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
