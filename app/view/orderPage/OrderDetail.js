/**
 * Created by DingYuan on 2015-1-19.
 */
Ext.define(
    'Worker.view.orderPage.OrderDetail',
    {
        extend: 'Ext.Panel',
        config: {
            id: 'orderDetail',
            layout: 'vbox',
            items: [
                {
                    xtype: 'fieldset',
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
                    xtype: 'container',
                    width: '100%',
                    style: {'background-color': '#FF79BC'},
                    html: '<center>预约项目列表</center>'
                },
                {
                    xtype: 'container',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'image',
                            width:'25%',
                            src: 'resources/icons/Icon.png'
                        },
                        {
                            xtype: 'container',
                            layout: 'vbox',
                            width:'50%',
                            items: [
                                {
                                    xtype: 'label',
                                    html: '项目名称:巴厘式按摩'
                                },
                                {
                                    xtype: 'label',
                                    html: '预计时常:100分钟'
                                },
                                {
                                    xtype: 'label',
                                    html: '项目价格:59'
                                }
                            ]
                        },
                        {
                            xtype: 'button',
                            ui: 'normal',
                            width: 140,
                            height: 100,
                            text: '详情',
                            handler: function () {
                                panel = Ext.create('Worker.view.projectPage.ProjectDetail',{title:'巴厘式按摩'});
                                Ext.getCmp('mainView').push(panel);
                            }
                        }
                    ]
                },
                {
                    xtype: 'container',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'image',
                            width:'25%',
                            src: 'resources/icons/Icon.png'
                        },
                        {
                            xtype: 'container',
                            layout: 'vbox',
                            width:'50%',
                            items: [
                                {
                                    xtype: 'label',
                                    html: '项目名称:爪哇式按摩'
                                },
                                {
                                    xtype: 'label',
                                    html: '预计时常:125分钟'
                                },
                                {
                                    xtype: 'label',
                                    html: '项目价格:79'
                                }
                            ]
                        },
                        {
                            xtype: 'button',
                            ui: 'normal',
                            width: 140,
                            height: 100,
                            text: '详情',
                            handler: function () {
                                panel = Ext.create('Worker.view.projectPage.ProjectDetail',{title:'爪哇式按摩'});
                                Ext.getCmp('mainView').push(panel);
                            }
                        }
                    ]
                },
                {
                    xtype: 'container',
                    width: '100%',
                    height:100,
                    html: '预计使用产品清单：<p>-天然芳香精油</p><p>-海泥</p>'
                },
                {
                    xtype: 'container',
                    width: '100%',
                    height:100,
                    html: '用户备注：<p>敏感肌肤</p>'
                }
            ]
        }
    }
);