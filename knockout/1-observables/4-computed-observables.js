// Computed Observables
// an observable that is dependant at least one other observable
// will automatically update when dependencies change

function viewModel() {
  this.firstName = ko.observable("John")
  this.lastName = ko.observable("Doe")

  // computed observable
  this.fullName = ko.computed(function() {
    return this.firstName() + " " + this.lastName()
  }, this);

  // simplify managing 'this'
  var self = this;
  self.fullName2 = ko.computed(function() {
    return self.firstName() + " " + self.lastName()
  })

  // pureComputed observables
  // must not directly modify other objects or state
  this.fullName3 = ko.pureComputed(function() {
    return this.firstName() + " " + this.lastName()
  }, this);

  // Notifying subscribers
  // usually, a computed observable only notifies it's dependencies when the return value changes
  // this can be changed using the notify extender
  this.fullName4 = ko.pureComputed(function() {
    return this.firstName() + " " + this.lastName()
  }, this).extend({notify: 'always'});

  // Rate Limiting
  // ensure that updates to dependencies are sent no more than once per 50 millisecond period
  this.fullName4.extend({rateLimit: 50})

  // Testing for computed observable
  ko.isComputed(self.fullName2)   //true


  // If computed observable is ONLY used in UI
  // <span data-bind="text: fullName5()"></span>
  // knockout will create a computed observable automatically
  this.fullName5 = function() {
    return this.firstName() + " " + this.lastName()
  }
}
