Package.describe({
  name: 'cwohlman:pretty-label',
  summary: ' /* Fill me in! */ ',
  version: "0.2.2",
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');
  api.use('underscore');
  api.use('reactive-var');
  api.use('templating');

  api.addFiles('prettyLabel.html', ['client']);
  api.addFiles('prettyLabel.css', ['client']);
  api.addFiles('prettyLabel.js', ['client']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('cwohlman:pretty-label');
  api.addFiles('prettyLabel-tests.js');
});
