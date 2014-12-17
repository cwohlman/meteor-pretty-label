var selectors = [
  'input'
  , 'textarea'
  , 'select'
  // in case the developer is implementing a custom input
  , '.pretty-input'
];

Template.prettyLabel.helpers({
  labelFor: function () {
    var tmpl = Template.instance();
    return this.labelFor || tmpl.elementVars.get().name;
  }
  , activeClass: function () {
    var tmpl = Template.instance();
    return /*tmpl.elementIsActive.get() || */(
        this.value ||
        tmpl.elementHasData.get()
      ) ?
      'active' :
      '';
  }
  , wrapperClass: function () {
    var tmpl = Template.instance();
    return this.wrapperClass || '';
  }
  , labelClass: function () {
    var tmpl = Template.instance();
    return this.labelClass || '';
  }
  , labelText: function () {
    var tmpl = Template.instance();
    return this.label || tmpl.elementVars.get().placeholder;
  }
});

var handlers = {
  'focus': function (e, tmpl) {
    tmpl.elementIsActive.set(true);
  }
  , 'blur': function (e, tmpl) {
    tmpl.elementIsActive.set(false);
  }
  , 'keyup': function (e, tmpl) {
    tmpl.elementHasData.set(!!e.currentTarget.value);
  }
  , 'change': function (e, tmpl) {
    tmpl.elementHasData.set(!!e.currentTarget.value);
  }
};
var events = {};
_.each(handlers, function (fn, key) {
  events[_.map(selectors, function (a) {
    return key + " " + a;
  }).join(', ')] = fn;
});
Template.prettyLabel.events(events);

Template.prettyLabel.rendered = function () {
  var input = this.find(selectors.join(', '));
  if (input) {
    this.elementVars.set({
      'name': input.name
      , 'placeholder': input.placeholder
    });
    this.elementHasData.set(!!input.value);
  }
};

Template.prettyLabel.created = function () {
  this.elementVars = new ReactiveVar({});
  this.elementIsActive = new ReactiveVar();
  this.elementHasData = new ReactiveVar();
};
