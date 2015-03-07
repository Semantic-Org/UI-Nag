
Package.describe({
  name    : 'semantic:ui-nag',
  summary : 'Semantic UI - Nag: Single component release',
  version : '1.11.4',
  git     : 'git://github.com/Semantic-Org/UI-Nag.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'nag.css',
    'nag.js'
  ], 'client');
});
