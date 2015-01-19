/**
 * Created by DingYuan on 2015-1-19.
 */
Ext.define(
    'Worker.view.orderPage.OrderDetail',
    {
        extend: 'Ext.Panel',
        config: {
            id: 'orderDetail',
            title: '12121212',
            layout: 'vbox',
            items: [
                {
                    xtype: 'container',
                    layout: 'vbox',
                    width: '100%',
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
                                    html: '项目名称:大保健'
                                },
                                {
                                    xtype: 'label',
                                    html: '预计时常:100'
                                },
                                {
                                    xtype: 'label',
                                    html: '项目价格:100'
                                }
                            ]
                        },
                        {
                            xtype: 'button',
                            ui: 'decline',
                            width: 140,
                            height: 100,
                            text: '详情'
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
                                    html: '项目名称:大保健'
                                },
                                {
                                    xtype: 'label',
                                    html: '预计时常:100'
                                },
                                {
                                    xtype: 'label',
                                    html: '项目价格:100'
                                }
                            ]
                        },
                        {
                            xtype: 'button',
                            ui: 'decline',
                            width: 140,
                            height: 100,
                            text: '详情'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    width: '100%',
                    height:100,
                    html: '预计使用产品清单：'
                },
                {
                    xtype: 'container',
                    width: '100%',
                    height:100,
                    html: '用户备注：'
                }
            ]
        }
    }
);