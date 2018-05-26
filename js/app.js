var viewModel = function() {
  this.clickCount = ko.observable(0);
  this.title = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
  this.catArray = ko.observableArray([
    {name: 'Tabby', imgSrc: 'img/434164568_fea0ad4013_z.jpg'},
    {name: 'Mr. T', imgSrc: 'img/22252709_010df3379e_z.jpg'},
    {name: 'T. Bone', imgSrc: 'img/1413379559_412a540d29_z.jpg'},
    {name: 'Sleepyhead', imgSrc: 'img/9648464288_2516b35537_z.jpg'},
    {name: 'Angry', imgSrc: 'img/4154543904_6e2428c421_z.jpg'}
  ]);

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };

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

ko.applyBindings(new viewModel());
