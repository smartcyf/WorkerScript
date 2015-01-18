Ext.define('H5Test.view.Main', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',

    ],
    config: {
        id: 'mainView',
        fullscreen: true,
        tabBarPosition: 'bottom',

        ui:'light',

        tabBar:
        {
            ui:'light',
            //选项卡居中
            layout:{
                pack:'center'
            }
        },


        items: [
            {
                iconCls:'home',
                title: 'home'
            },
            {
                iconCls:'home',
                title: 'home'
            }
        ]
    }
});
