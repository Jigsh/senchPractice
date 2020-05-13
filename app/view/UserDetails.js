
Ext.define('MyApp.view.UserDetails',{
    extend: 'Ext.panel.Panel',

    requires: [
        'MyApp.view.UserDetailsController',
        'MyApp.view.UserDetailsModel'
    ],

    controller: 'userdetails',
    viewModel: {
        type: 'userdetails'
    },

    html: 'Hello, World!!'
});
