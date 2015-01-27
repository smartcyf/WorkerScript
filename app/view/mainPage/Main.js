/**
 * Created by DingYuan on 2015-1-19.
 */
Ext.define('Worker.view.mainPage.Main', {
    extend: 'Ext.NavigationView',
    alias: 'widget.mainPage',
    config: {
        id:'mainView',
        navigationBar : {
                ui: 'light',
                margin : '20 0 0 0',
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
        items: [
            {
            items: [
                {
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
                                    xtype: 'fieldset',
                                    width: '75%',
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            label: '订单号',
                                            value:'1132452',
                                            disabled: true
                                        },
                                        {
                                            xtype: 'textfield',
                                            label: '预约时间',
                                            value:'2014-12-12 10:00:00',
                                            disabled: true
                                        },
                                        {
                                            xtype: 'textfield',
                                            label: '预约持续时间',
                                            value:'100',
                                            disabled: true
                                        },
                                        {
                                            xtype: 'textfield',
                                            label: '用户地址',
                                            value:'海淀区苏州街公寓15-2-305',
                                            disabled: true
                                        }
                                    ]
                                },
                                {
                                    xtype: 'button',
                                    ui: 'normal',
                                    text: '订单详情',
                                    handler: function () {
                                        panel = Ext.create('Worker.view.orderPage.OrderDetail',{title:'1132452'});
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
                                    xtype: 'fieldset',
                                    width: '75%',
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            label: '订单号',
                                            value:'1008611',
                                            disabled: true
                                        },
                                        {
                                            xtype: 'textfield',
                                            label: '预约时间',
                                            value:'2014-12-14 14:00:00',
                                            disabled: true
                                        },
                                        {
                                            xtype: 'textfield',
                                            label: '预约持续时间',
                                            value:'120',
                                            disabled: true
                                        },
                                        {
                                            xtype: 'textfield',
                                            label: '用户地址',
                                            value:'石景山鲁谷路瑞达大厦21-1003',
                                            disabled: true
                                        }
                                    ]
                                },
                                {
                                    xtype: 'button',
                                    ui: 'normal',
                                    text: '订单详情',
                                    handler: function () {
                                        panel = Ext.create('Worker.view.orderPage.OrderDetail',{title:'1008611'});
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