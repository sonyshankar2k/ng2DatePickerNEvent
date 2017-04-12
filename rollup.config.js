export default {
    entry: 'npmdist/dist/index.js',
    dest: 'npmdist/bundles/ng2datepickernevent.umd.js',
    format: 'umd',
    moduleName: 'ng2datepickernevent',
    sourceMap: true,
    globals: {
        '@angular/core': 'ng.core',
        '@angular/common': 'ng.common',
        '@angular/forms': 'ng.forms',
        '@angular/compiler': 'ng.compiler',
        '@angular/platform-browser': 'ng.platformBrowser',
        '@angular/platform-browser-dynamic': 'ng.platformBrowserDynamic'
    },
    context: 'window',
    external: ['@angular/core', '@angular/forms', '@angular/common']
}