Ext.define('Worker.view.Main', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video',
        'Worker.view.mainPage.Main'
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
                xtype:'mainPage',
                iconCls:'home',
                title: '主页'
            },
            {
                iconCls:'home',
                title: 'home'
            }
        ]
    }
});
