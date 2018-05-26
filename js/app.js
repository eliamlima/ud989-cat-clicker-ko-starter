var viewModel = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
  //this.level = ko.observable('Newborn');

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
