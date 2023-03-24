import Currency from "3-currency"

export default class Pricing{
  constructor(amount, Currency){
    if(typeof(amount) !== "number"){
      throw new TypeError("number must be number");
    }
    
    this._amount = amount;
    this._currency = new Currency;
  }
  
  get amount(){
    return this._amount;
  }
  
  get currency(){
    return this._currency;
  }
  
  set amount(amount){
    if(typeof(amount) !== "number"){
      throw new TypeError("number must be number");
    }
    this._amount = amount;
  }
  
  set currency(currency){
    if(typeof(currency) !== "number"){
      throw new TypeError("currency must be number");
    }
    this._currency = amount;
  }
  
  displayFullPrice(){
    return `${this._amount} (${this._currency._name}) (${this._currency._code})`
  }
  
  static convertPrice(amount, conversionRate){
    return amount * conversionRate;
  }
}
