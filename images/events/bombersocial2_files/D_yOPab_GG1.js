/*!CK:2468485458!*//*1414378573,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["SWuxu"]); }

__d("ProfileNavRef",["LinkController","Parent","URI"],function(a,b,c,d,e,f,g,h,i){var j='pnref',k='data-'+j;f.track=function(){g.registerHandler(function(l){var m=h.byAttribute(l,k),n=m&&m.getAttribute(k);if(n)l.href=new i(l.href).addQueryData(j,n).toString();});};},null);