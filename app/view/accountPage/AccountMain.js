/**
 * Created by DingYuan on 2015-1-25.
 */
Ext.define(
    'Worker.view.accountPage.AccountMain',
    {
        extend: 'Ext.Panel',
        alias: 'widget.accountMain',
        config: {
            layout: 'vbox',
            scrollable: {
                        direction: 'vertical',
                        directionLock: true
                    },
            items: [
                {
                    xtype: 'titlebar',
                    docked: 'top',
                    title: 'JOY',
                    ui: 'light',
                    margin : '20 0 0 0',
                    items: [
                        {
                            iconMask: true,
                            iconCls: 'locate',
                            hidden: false,
                            text: '报警电话',
                            ui: 'forward',
                            id: 'sos',
                            align: 'left'
                        },
                        {
                            iconMask: true,
                            iconCls: 'star',
                            hidden: false,

                            text: '客服电话',
                            id: 'serviceNum',
                            ui: 'action-round',
                            align: 'right'
                        }
                    ]
                },
                {
                    xtype: 'container',
                    border: 1,
                    style: 'border-color: black; border-style: solid;',
                    layout: 'vbox',
                    items: [
                        {
                            xtype: 'textfield',
                            label: '结算周期',
                            labelAlign: 'top',
                            value: '2015-1-25 至 2015-2-26',
                            disabled: true
                        },
                        {
                            xtype: 'textfield',
                            label: '账户余额',
                            labelAlign: 'top',
                            value: '58961.13元',
                            disabled: true
                        }
                    ]
                },
                {
                    xtype: 'container',
                    border: 1,
                    style: 'border-color: black; border-style: solid;',
                    layout: 'vbox',
                    items: [
                        {
                            xtype: 'label',
                            html:'用户评价'
                        },
                        {
                            xtype:'container',
                            border: 1,
                            style: 'border-color: black; border-style: solid;',
                            layout: 'vbox',
                            items:[
                                {
                                    xtype:'label',
                                    html:'订单号：121212'
                                },
                                {
                                    xtype:'label',
                                    html:'用户名：刘德华'
                                },
                                {
                                    xtype:'label',
                                    html:'评价内容：很满意'
                                }
                            ]
                        },
                        {
                            xtype:'container',
                            border: 1,
                            style: 'border-color: black; border-style: solid;',
                            layout: 'vbox',
                            items:[
                                {
                                    xtype:'label',
                                    html:' 订单号：121212'
                                },
                                {
                                    xtype:'label',
                                    html:' 用户名：刘德华'
                                },
                                {
                                    xtype:'label',
                                    html:' 评价内容：很满意'
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
);