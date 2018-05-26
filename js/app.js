var initiaCats = [
  {
    clickCount: 0,
    name: 'Tabby',
    imgSrc: 'img/434164568_fea0ad4013_z.jpg'
  },
  {
    clickCount: 0,
    name: 'T-Bone',
    imgSrc: 'img/22252709_010df3379e_z.jpg'
  },
  {
    clickCount: 0,
    name: 'Sleepyhead',
    imgSrc: 'img/9648464288_2516b35537_z.jpg'
  },
  {
    clickCount: 0,
    name: 'Angry',
    imgSrc: 'img/4154543904_6e2428c421_z.jpg'
  }
]

var Cat = function(data){
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.catArray = ko.observableArray([data.catArray]);

  this.level = ko.computed(function() {
    if (this.clickCount() < 10) {
      return 'Newborn';
    } else if (this.clickCount() < 30){
      return 'Infant';
    } else {
      return 'Teen';
    }
  }, this);
}

var viewModel = function() {
  var self = this;
  this.catList = ko.observableArray([]);

  initiaCats.forEach(function(catItem){
    self.catList.push(new Cat(catItem));
  });

  this.currentCat = ko.observable(this.catList()[0]);

  this.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };

  this.setCurrentCat = function(clickedCat) {
    self.currentCat(clickedCat);
  };
}

ko.applyBindings(new viewModel());
