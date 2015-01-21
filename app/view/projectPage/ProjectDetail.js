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
                    html: '<center>HD钻石蓝宝石面部护理</center>'
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
                                {title: '流程1'},
                                {title: '流程2'},
                                {title: '流程3'},
                                {title: '流程4'}
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
                            height: 189,
                            data: [
                                {title: '产品1'},
                                {title: '产品2'},
                                {title: '产品3'},
                                {title: '产品4'}
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




