const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
    get appetizers() {
      return this._courses.appetizers;
    },
    set appetizers(appetizers) {
      this._courses.appetizers = 'appetizers';
    },
    get mains() {
      return this._courses.mains;
    },
    set mains(mains) {
      this._courses.mains = 'mains';
    },
    get desserts() {
      return this._courses.desserts;
    },
    set desserts(desserts) {
      this._courses.desserts = 'desserts';
    },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      };
    },
    addDishToCourse (courseName, dishName, dishPrice) {
     const dish = {
        name: dishName,
        price: dishPrice
     }
     this._courses[courseName].push(dish);
  },
   getRandomDishFromCourse: function (courseName) {
    const dishes = this._courses[courseName];
    let index = Math.floor(Math.random() * dishes.length);
    return dishes[index];
  },
    generateRandomMeal () {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}.. the price is $${totalPrice}.`;
      
    } 
  };
  
  menu.addDishToCourse('appetizers', 'Salad', 4.00);
  menu.addDishToCourse('mains', 'tofu', 8.00);
  menu.addDishToCourse('desserts', 'flan', 5.00);
  
  const meal = menu.generateRandomMeal();
  
  console.log(meal);