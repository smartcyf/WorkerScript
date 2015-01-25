/**
 * Created by DingYuan on 2015-1-21.
 */
Ext.define(
    'Worker.view.messagePage.MessageMain',
    {
        extend: 'Ext.Panel',
        alias: 'widget.MessageMain',
        config: {
            layout: 'vbox',
            items: [
                {
                    xtype: 'titlebar',
                    docked: 'top',
                    title: 'JOY',
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
                                    html: '培训信息'
                                },
                                {
                                    xtype: 'label',
                                    html: '<p>xxxxxxxxxxxxxxxxx</p><p>sdfsdfsdfdfdsfsd</p><p>sdfsdfsdfdfdsfsd</p>'
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
                                    html: '培训信息'
                                },
                                {
                                    xtype: 'label',
                                    html: '<p>xxxxxxxxxxxxxxxxx</p><p>sdfsdfsdfdfdsfsd</p><p>sdfsdfsdfdfdsfsd</p>'
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
