/**
 * Created by DingYuan on 2015-1-21.
 */
Ext.define(
    'Worker.view.schedulePage.ScheduleDetail',
    {
        extend: 'Ext.Panel',
        requires: ['Ext.List'],
        alias: 'widget.schedule',
        config:{
            layout: 'hbox',
            items:[
                {
                    xtype: 'container',
                    width:100,
                    initialize: function () {
                        var list = Ext.create('Ext.List', {
                            itemTpl: '{title}',
                            width: '100%',
                            height: 400,
                            data: [
                                {title: '今天'},
                                {title: '明天'},
                                {title: '后天'},
                                {title: curreny(3)},
                                {title: curreny(4)},
                                {title: curreny(5)},
                                {title: curreny(6)}
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
                    width:'80%',
                    id:'tempShow'
                }
            ]
        }
    }
);
function curreny(day){
    var now = new Date(Date.parse(new Date()) + (86400000 * day));
    return now.getMonth()+1+'.'+now.getDate();
}

function showDetail( obj, index, target, record, e, eOpts ){
    var list = Ext.create('Ext.List', {
        itemTpl: '<p>{title}</p><tpl if="status==0"><p>状态：空闲</p></tpl><tpl if="status==1"><p>状态：已预约</p></tpl>',
        width: '100%',
        height: 400,
        data: [
            {title: '10:00 - 12:00',status:'1'},
            {title: '12:00 - 14:00',status:'1'},
            {title: '14:00 - 16:00',status:'0'},
            {title: '16:00 - 18:00',status:'1'},
            {title: '18:00 - 20:00',status:'1'}
        ]
    });
    Ext.getCmp('tempShow').removeAll();
    Ext.getCmp('tempShow').hide();
    Ext.getCmp('tempShow').add(list);
    Ext.getCmp('tempShow').show({type:'slideOut',direction:'right'});
}