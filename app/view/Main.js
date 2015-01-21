Ext.define('Worker.view.Main', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.main',
    requires: [
        'Ext.TitleBar',
        'Worker.view.mainPage.Main',
        'Worker.view.schedulePage.ScheduleDetail'
    ],
    config: {
        fullscreen: true,
        tabBarPosition: 'bottom',
        activeItem: 2,
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
                xtype:'schedule',
                iconCls:'home',
                title: '日期安排'
            },
            {
                xtype:'mainPage',
                iconCls:'home',
                title: '主页'
            }

        ]
    }
});
