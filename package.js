Package.describe({
  name: 'cwohlman:pretty-label',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');
  api.addFiles('cwohlman:pretty-label.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('cwohlman:pretty-label');
  api.addFiles('cwohlman:pretty-label-tests.js');
});
