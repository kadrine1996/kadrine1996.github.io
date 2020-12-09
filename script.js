/*util*/

window.picturesData = [
  {
    name: 'Going Nowhere',
    category: 'Abandoned Series',
    imageUrl: 'images/item-1.jpg',
    description:
      'Fascinated by Windsor being a border city, imaged is a photograph of a common transport area.',
    price: 20
  },
  {
    name: 'Going Nowhere in Black and White',
    category: 'Abandoned Series',
    imageUrl: 'images/item-2.jpg',
    description:
      'Fascinated by Windsor being a border city, imaged is a photograph of a common transport area.',
    price: 20
  },
  {
    name: 'Chickadee',
    category: 'Nature Series',
    imageUrl: 'images/item-3.jpg',
    description: 'Taken in Objibway park, a provincial nature reserve in Windsor, Ontario, Canada.',
    price: 15
  },

  {
    name: 'Under the Bridge',
    category: 'Water Series',
    imageUrl: 'images/item-22.jpg',
    description:
      'Taken in in Windsor, Ontario, Canada. Captured is the essence of Windsor, being a border city there is constant transport to and from Detroit everyday. There is an approximate of 10,000 trucks and hundreds of ships transporting cargo each day.',
    price: 30
  },

  {
    name: 'Lost Dreams',
    category: 'Water Series',
    imageUrl: 'images/item-9.jpg',
    description:
      'Taken in Windsor, Ontario, Canada. Windsor is a border city, each day cargo is transported in the Detroit River. The Detroit river remains heavily polluted, and is still not totally safe to swim in.',
    price: 30
  },
  {
    name: 'Mary',
    category: 'Detroit Series',
    imageUrl: 'images/item-11.JPG',
    description:
      'Taken in Detroit, Michigan, USA. The striking accents of red with the lighting made it impossible not to capture the true essence of this statue.',
    price: 20
  },
  {
    name: 'Palm Trees',
    category: 'Detroit Series',
    imageUrl: 'images/item-12.jpg',
    description: 'Taken in Detroit, Michigan, USA at the Belle Isle Observatory.',
    price: 30
  },
  {
    name: 'Cactus',
    category: 'Detroit Series',
    imageUrl: 'images/item-13.jpg',
    description: 'Taken in Detroit, Michigan, USA at the Belle Isle Observatory.',
    price: 30
  },
  {
    name: 'Untitled Masterpiece',
    category: 'Graffiti Series',
    imageUrl: 'images/item-14.jpg',
    description: 'Taken in an abandoned park in Windsor, Ontario, Canada.',
    price: 30
  },
  {
    name: 'Untitled Masterpiece Too',
    category: 'Graffiti Series',
    imageUrl: 'images/item-15.jpg',
    description: 'Taken in an abandoned park in Windsor, Ontario, Canada.',
    price: 30
  },
  {
    name: 'Untitled Masterpiece Three',
    category: 'Graffiti Series',
    imageUrl: 'images/item-16.jpg',
    description:
      'Taken in Windsor, Ontario, Canada. The graffiti series aims to highlight the many areas in Windsor with incredible artists.',
    price: 30
  },
  {
    name: 'Abandoned Growth',
    category: 'Development Series',
    imageUrl: 'images/item-17.jpg',
    description:
      'Taken in Vaughan, Ontario, Canada. This picture symbolizes nature taking over an abandoned space, before new development.',
    price: 25
  },
  {
    name: 'Abandoned Growth Too',
    category: 'Development Series',
    imageUrl: 'images/item-18.jpg',
    description: 'Taken in Vaughan, Ontario, Canada. A tree grows in an abandoned space.',
    price: 25
  },
  {
    name: 'Abandoned Growth Three',
    category: 'Development Series',
    imageUrl: 'images/item-19.jpg',
    description:
      'Taken in Vaughan, Ontario, Canada. I was astounded at the beauty this old shed captured with growing flowers and weeds.',
    price: 25
  },
  {
    name: 'Abandoned Spaces',
    category: 'Development Series',
    imageUrl: 'images/item-20.jpg',
    description:
      'Taken in Vaughan, Ontario, Canada. This abandoned space is soon to be torn down for new development.',
    price: 25
  },
  {
    name: 'Zipper',
    category: 'Exhibition Series',
    imageUrl: 'images/item-21.jpg',
    description: 'Taken in Toronto, Ontario, Canada. At the Canadian National Exibition.',
    price: 30
  }
];

/* util*/

const util = {
  formatNumberForLanguage(number) {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'CAD' }).format(number);
  },

  getProducts: function(pictures) {
    var newObj = {
      name: '',
      category: '',
      imageUrl: '',
      description: '',
      price: '$ '
    };
    newObj.name = pictures.name;
    newObj.category = pictures.category;
    newObj.imageUrl = pictures.imageUrl;
    newObj.description = pictures.description;
    newObj.price = this.formatNumberForLanguage(pictures.price, 'en');
    return newObj;
  },

  getArrays: function() {
    var validCategory = [];

    for (var i = 0; i < window.picturesData.length; i++) {
      var category = this.getProducts(window.picturesData[i]);
      validCategory.push(category);
    }
    return validCategory;
  },

  getCategory: function(category) {
    var categoryArray = [];
    var categoryList = this.getArrays();

    for (var i = 0; i < categoryList.length; i++) {
      if (categoryList[i].category === category) {
        categoryArray.push(categoryList[i]);
      }
    }
    return categoryArray;
  }
};


