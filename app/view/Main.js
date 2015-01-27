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
                xtype: 'mainPage',
                iconCls: 'home',
                title: '主页'
                
            },
            {
                xtype: 'schedule',
                iconCls: 'maps',
                title: '日期安排'
                
            },
            {
                xtype: 'userInfo',
                iconCls: 'star',
                title: '个人信息'
            },
            {
                xtype: 'messageMain',
                iconCls: 'info',
                title: '平台资讯'
                
            },
            {
                xtype: 'accountMain',
                iconCls: 'team',
                title: '个人账户'
            }

        ]
    }
});
