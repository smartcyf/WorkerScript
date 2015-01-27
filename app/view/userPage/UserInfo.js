/**
 * Created by DingYuan on 2015-1-22.
 */
Ext.define(
    'Worker.view.userPage.UserInfo',
    {
        extend: 'Ext.Panel',
        requires: ['Ext.Video'],
        alias: 'widget.userInfo',
        config: {
            defaults:{
                width: '100%'
            },
            layout: {
                type: 'vbox',
                align: 'middle'
            },
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
                    xtype: 'video',
                    width: "100%",
                    height: 300,
                    url: "resources/movie/movie2.mov",
                    flex: 2,
                    border: 1,
                    id: 'videoctl',
                    style: 'border-color: black; border-style: solid;',
                    initialize: function () {
                        this.play();
                        
                    }
                },
                {
                    flex: 1,
                    xtype: 'textfield',
                    label: '姓名',
                    labelAlign: 'top',
                    value: '桂纶镁',
                    border: 1,
                    disabled: true
                },
                {
                    xtype: 'container',
                    border: 1,
                    flex: 2,
                    width:'100%',
                    layout: {
                        type: 'hbox'
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            label: '用户积分',
                            labelAlign: 'top',
                            value: '5,030',
                            disabled: true,
                            flex: 1
                        },
                        {
                            xtype: 'textfield',
                            label: '用户等级',
                            labelAlign: 'top',
                            value: 'lv22',
                            disabled: true,
                            flex: 1
                        }
                    ]
                },
                {
                    flex: 1,
                    xtype: 'textfield',
                    label: '平台技能认证等级',
                    labelAlign: 'top',
                    value: 'lv10',
                    border: 1,
                    disabled: true
                }
            ]
        },
        listeners: {
            deactivate: function(){
                Ext.getCmp('videoctl').stop();
            }
        }

    }
);