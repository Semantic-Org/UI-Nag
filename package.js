var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-nag',
  summary : 'Semantic UI - Nag (official): Single component release of nag',
  version : '1.9.2',
  git     : 'git://github.com/Semantic-Org/UI-Nag.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    
  ], where);
});
