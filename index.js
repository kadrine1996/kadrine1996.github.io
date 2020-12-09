/*global util*/

const allCategories = function() {
  let images = util.getArrays();
  let output = '';
  for (let i = 0; i < images.length; i++) {
    output += `
      <div class="product-container">
          <div class="p-box">
              <img src="${images[i].imageUrl}">
              <h1 >${images[i].name}</h1>
              <h3>${images[i].price}</h3>
              <h3>${images[i].category}</h3>
              <p>${images[i].description}</p>
          </div>
      </div>`;
  }

  document.getElementById('products').innerHTML = output;
};

(function() {
  allCategories();
})();

document.getElementById('abandoned_series').addEventListener('click', function() {
  let images = util.getCategory('Abandoned Series');
  let output = '';
  for (let i = 0; i < images.length; i++) {
    output += `
  <div class="product-container">
  <div class="p-box">
  <img src="${images[i].imageUrl}">
  <h1 >${images[i].name}</h1>
  <h3>${images[i].price}</h3>
  <h3>${images[i].category}</h3>
  <p>${images[i].description}</p>
    </div>
    </div>`;
  }

  document.getElementById('products').innerHTML = output;
});

document.getElementById('development_series').addEventListener('click', function() {
  let images = util.getCategory('Development Series');
  let output = '';
  for (let i = 0; i < images.length; i++) {
    output += `
  <div class="product-container">
  <div class="p-box">
  <img src="${images[i].imageUrl}">
  <h1 >${images[i].name}</h1>
  <h3>${images[i].price}</h3>
  <h3>${images[i].category}</h3>
  <p>${images[i].description}</p>
  </div>
    </div>`;
  }

  document.getElementById('products').innerHTML = output;
});

document.getElementById('detroit_series').addEventListener('click', function() {
  let images = util.getCategory('Detroit Series');
  let output = '';
  for (let i = 0; i < images.length; i++) {
    output += `
  <div class="product-container">
  <div class="p-box">
  
  <img src="${images[i].imageUrl}">
  <h1 >${images[i].name}</h1>
  <h3>${images[i].price}</h3>
  <h3>${images[i].category}</h3>
  <p>${images[i].description}</p>
  </div>
    </div>`;
  }

  document.getElementById('products').innerHTML = output;
});

document.getElementById('graffiti_series').addEventListener('click', function() {
  let images = util.getCategory('Graffiti Series');
  let output = '';
  for (let i = 0; i < images.length; i++) {
    output += `
  <div class="product-container">
  <div class="p-box">
  
  <img src="${images[i].imageUrl}">
  <h1 >${images[i].name}</h1>
  <h3>${images[i].price}</h3>
  <h3>${images[i].category}</h3>
  <p>${images[i].description}</p>
  </div>
    </div>`;
  }

  document.getElementById('products').innerHTML = output;
});

document.getElementById('nature_series').addEventListener('click', function() {
  let images = util.getCategory('Nature Series');
  let output = '';
  for (let i = 0; i < images.length; i++) {
    output += `
  <div class="product-container">
    <div class="p-box">
    <img src="${images[i].imageUrl}">
    <h1 >${images[i].name}</h1>
    <h3>${images[i].price}</h3>
    <h3>${images[i].category}</h3>
    <p>${images[i].description}</p>
    </div>
  </div>`;
  }

  document.getElementById('products').innerHTML = output;
});

document.getElementById('water_series').addEventListener('click', function() {
  let images = util.getCategory('Water Series');
  let output = '';
  for (let i = 0; i < images.length; i++) {
    output += `
  <div class="product-container">
  <div class="p-box">
  <img src="${images[i].imageUrl}">
  <h1 >${images[i].name}</h1>
  <h3>${images[i].price}</h3>
  <h3>${images[i].category}</h3>
  <p>${images[i].description}</p>
  </div>
    </div>`;
  }

  document.getElementById('products').innerHTML = output;
});

document.getElementById('exhibition_series').addEventListener('click', function() {
  let images = util.getCategory('Exhibition Series');
  let output = '';
  for (let i = 0; i < images.length; i++) {
    output += `
    <div class="product-container">
    <div class="p-box">
    <img src="${images[i].imageUrl}">
    <h1 >${images[i].name}</h1>
    <h3>${images[i].price}</h3>
    <h3>${images[i].category}</h3>
    <p>${images[i].description}</p>
    </div>
      </div>`;
  }

  document.getElementById('products').innerHTML = output;
});

function orderNumber() {
  var chkYes = document.getElementById('gridRadios3');
  var orderNo = document.getElementById('orderNo');
  orderNo.style.display = chkYes.checked ? 'block' : 'none';
}


