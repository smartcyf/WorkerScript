/**
 * Created by DingYuan on 2015-1-20.
 */
Ext.define(
    'Worker.view.projectPage.ProjectDetail',
    {
        extend: 'Ext.Panel',
        requires: ['Ext.List'],
        config: {
            id: 'projectDetail',
            layout: 'vbox',
            items: [
                {
                    xtype: 'container',
                    html: '<center>巴厘式按摩</center>'
                },
                {
                    xtype: 'container',
                    width: '100%',
                    height: 20,
                    style: {'background-color': '#FF79BC'}
                },
                {
                    xtype: 'container',
                    initialize: function () {
                        var list = Ext.create('Ext.List', {
                            itemTpl: '{title}',
                            width: '100%',
                            height: 189,
                            data: [
                                {title: '双足享受花瓣沐浴'},
                                {title: '全身精油按摩'},
                                {title: '脸部及头部放松按摩'},
                                {title: '享受精致花草姜茶'}
                            ],
                            listeners:{
                                itemtap:showDetail
                            }
                        });
                        this.add(list);
                    }
                },
                {
                    xtype: 'container',
                    width: '100%',
                    height: 20,
                    style: {'background-color': '#FF79BC'}
                },
                {
                    xtype: 'container',
                    initialize: function () {
                        var list = Ext.create('Ext.List', {
                            itemTpl: '{title}',
                            width: '100%',
                            height: 143,
                            data: [
                                {title: '芳香精油'},
                                {title: '花瓣'},
                                {title: '花草姜茶'}
                            ]
                        });
                        this.add(list);
                    }
                },
                {
                    xtype: 'container',
                    layout:{
                        type: 'vbox',
                        align: 'right'
                    },
                    items:[
                        {

                            html:'预计时常：100'
                        },
                        {

                            html:'价格：100'
                        }
                    ]
                }
            ]
        }
    }
);
function showDetail( obj, index, target, record, e, eOpts ){
    panel = Ext.create('Worker.view.projectPage.ProcessDetail',{title:record.data.title});
    Ext.getCmp('mainView').push(panel);
}




