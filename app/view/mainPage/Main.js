/**
 * Created by DingYuan on 2015-1-19.
 */
Ext.define('Worker.view.mainPage.Main', {
    extend: 'Ext.NavigationView',
    alias: 'widget.mainPage',
    config: {
<<<<<<< HEAD
        id:'mainView',
        items: [
            {
            items: [
                {
                    xtype: 'titlebar',
                    docked: 'top',
                    title: 'JOY',
                    items: [
                        {
                            iconMask : true,
                            iconCls : 'locate',
                            hidden : false,
                            text: '报警电话',
                            ui: 'forward',
                            id: 'sos',
                            align: 'left'
                        },
                        {
                            iconMask : true,
                            iconCls : 'star',
                            hidden : false,

                            text: '客服电话',
                            id: 'serviceNum',
                            ui: 'action-round',
                            align: 'right'
                        }
                    ]
                },
                {
=======
        
        navigationBar: {
            ui: 'light',
            margin : '20 0 0 0',
            items: [
                {
                    iconMask : true,
                    iconCls : 'locate',
                    hidden : false,
                    text: '报警电话',
                    ui: 'forward',
                    id: 'sos',
                    align: 'left'
                },
                {
                    iconMask : true,
                    iconCls : 'star',
                    hidden : false,

                    text: '客服电话',
                    id: 'serviceNum',
                    ui: 'action-round',
                    align: 'right'
                }
            ]
        },
        items: [
            {
            title: 'JOY',
            items: [
                {
>>>>>>> origin/master
                    xtype: 'container',
                    layout: 'vbox',
                    items: [
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            border: 1,
                            style: 'border-color: black; border-style: solid;',
                            items: [
                                {
                                    xtype: 'container',
                                    layout: 'vbox',
                                    width: '70%',
                                    items: [
                                        {
                                            xtype: 'label',
                                            html: '订单号:1212121212'
                                        },
                                        {
                                            xtype: 'label',
                                            html: '预约时间:2014-12-12'
                                        },
                                        {
                                            xtype: 'label',
                                            html: '预约持续时间:100'
                                        },
                                        {
                                            xtype: 'label',
                                            html: '用户地址:xxxxxxxxxxxxxx'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'button',
                                    ui: 'decline',
                                    width: 140,
                                    height: 100,
                                    text: '订单详情',
                                    handler: function () {
                                        panel = Ext.create('Worker.view.orderPage.OrderDetail',{title:'12121212'});
                                        Ext.getCmp('mainView').push(panel);
                                    }
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            border: 1,
                            style: 'border-color: black; border-style: solid;',
                            items: [
                                {
                                    xtype: 'container',
                                    layout: 'vbox',
                                    width: '70%',
                                    items: [
                                        {
                                            xtype: 'label',
                                            html: '订单号:23232323'
<<<<<<< HEAD
                                        },
                                        {
                                            xtype: 'label',
                                            html: '预约时间:2014-12-12'
                                        },
                                        {
                                            xtype: 'label',
=======
                                        },
                                        {
                                            xtype: 'label',
                                            html: '预约时间:2014-12-12'
                                        },
                                        {
                                            xtype: 'label',
>>>>>>> origin/master
                                            html: '预约持续时间:180'
                                        },
                                        {
                                            xtype: 'label',
                                            html: '用户地址:xxxxxxxxxxxxxx'
                                        }
                                    ]
                                },
                                {
                                    xtype: 'button',
                                    ui: 'decline',
                                    width: 140,
                                    height: 100,
                                    text: '订单详情',
                                    handler: function () {
                                        panel = Ext.create('Worker.view.orderPage.OrderDetail',{title:'23232323'});
                                        Ext.getCmp('mainView').push(panel);
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]

            }
        ]
    }
});