/**
 * Created by DingYuan on 2015-1-21.
 */
Ext.define(
    'Worker.view.messagePage.MessageMain',
    {
        extend: 'Ext.Panel',
        alias: 'widget.messageMain',
        config: {
            layout: 'vbox',
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
                    layout: 'hbox',
                    border: 1,
                    style: 'border-color: black; border-style: solid;',
                    items: [
                        {
                            xtype: 'image',
                            flex: 1,
                            src: 'resources/icons/Icon.png'
                        },
                        {
                            xtype: 'container',
                            layout: 'vbox',
                            flex: 3,
                            items: [
                                {
                                    xtype: 'label',
                                    html: '注射去皱,去纹培训'
                                },
                                {
                                    xtype: 'label',
                                    html: '<p>美容师的职业道德及个人形象，美容院的服务流程。人际关系的沟通，专业医学常识，皮肤的结构及分类，骨骼，肌肉，经络与穴位分布，皮肤深层保养</p>'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            layout: 'vbox',
                            flex: 1,
                            items: [
                                {
                                    xtype: 'spacer',
                                    height: 20
                                },
                                {
                                    xtype: 'button',
                                    ui: 'decline',
                                    height: 30,
                                    text: '设置提醒'
                                }, {
                                    xtype: 'spacer',
                                    height: 20
                                },
                                {
                                    xtype: 'button',
                                    ui: 'decline',
                                    height: 30,
                                    text: '详细信息'
                                },
                                {
                                    xtype: 'spacer',
                                    height: 20
                                }
                            ]
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
                            xtype: 'image',
                            flex: 1,
                            src: 'resources/icons/Icon.png'
                        },
                        {
                            xtype: 'container',
                            layout: 'vbox',
                            flex: 3,
                            items: [
                                {
                                    xtype: 'label',
                                    html: '芳香美疗SPA'
                                },
                                {
                                    xtype: 'label',
                                    html: '<p>香薰法的概念，香薰从业人员的职业道德礼仪，芳香产品的认识SPA馆经典疗法，精油的功效，特性，用途。基础油的作用，复发精油的调配，使用方法</p>'
                                }
                            ]
                        },
                        {
                            xtype: 'container',
                            layout: 'vbox',
                            flex: 1,
                            items: [
                                {
                                    xtype: 'spacer',
                                    height: 20
                                },
                                {
                                    xtype: 'button',
                                    ui: 'decline',
                                    height: 30,
                                    text: '设置提醒'
                                }, {
                                    xtype: 'spacer',
                                    height: 20
                                },
                                {
                                    xtype: 'button',
                                    ui: 'decline',
                                    height: 30,
                                    text: '详细信息'
                                },
                                {
                                    xtype: 'spacer',
                                    height: 20
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
);
