Ext.define('Worker.view.Main', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.main',
    requires: [
        'Ext.TitleBar',
        'Worker.view.mainPage.Main',
        'Worker.view.schedulePage.ScheduleDetail',
        'Worker.view.userPage.UserInfo',
        'Worker.view.messagePage.MessageMain',
        'Worker.view.accountPage.AccountMain'
    ],
    config: {
        fullscreen: true,
        tabBarPosition: 'bottom',
        activeItem: 2,
        ui: 'light',
        tabBar: {
            ui: 'light',
            //选项卡居中
            layout: {
                pack: 'center'
            }
        },
        items: [
            {
                xtype: 'schedule',
                iconCls: 'home',
                title: '日期安排'
            },
            {
                xtype: 'messageMain',
                iconCls: 'home',
                title: '平台资讯'
            },
            {
                xtype: 'mainPage',
                iconCls: 'home',
                title: '主页'
            },
            {
                xtype: 'accountMain',
                iconCls: 'home',
                title: '个人账户'
            },
            {
                xtype: 'userInfo',
                iconCls: 'home',
                title: '个人信息'
            }

        ]
    }
});
