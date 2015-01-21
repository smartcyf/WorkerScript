/**
 * Created by DingYuan on 2015-1-21.
 */
Ext.define(
    'Worker.view.projectPage.ProcessDetail',
    {
        extend: 'Ext.Panel',
        alias: 'widget.processDetail',
        style: {'background-color': '#FF79BC'},
        config: {
            id: 'processDetail',

            layout: {
                type: 'vbox',
                align: 'middle'
            },
            items: [
                {
                    xtype: 'image',
                    width:'50%',
                    height:'50%',
                    src: 'resources/loading/Default-LandscapeLeft~ipad.png'
                },
                {
                    html:'手法技术特点',
                    height:100
                },
                {
                    html:'预期效果',
                    height:100
                },
                {
                    html:'持续时间',
                    height:100
                }
            ]
        }
    }
);