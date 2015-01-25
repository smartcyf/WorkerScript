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
                    width: '50%',
                    height: '50%',
                    src: 'resources/loading/Default-LandscapeLeft~ipad.png'
                },
                {
                    xtype: 'fieldset',
                    width: '100%',
                    items: [
                        {
                            xtype: 'textareafield',
                            label: '手法技术特点',
                            labelAlign: 'top',
                            value: '运用天然芳香精油进行按摩,属于油压的一种,首先芳疗师从头到脚先按摩一遍，利用手掌和手指推拿、指压身体的穴道，揉搓、推滚表层和深层肌肉，以帮助血液循环、放松紧张的肌肉',
                            disabled: true
                        },

                        {
                            xtype: 'textareafield',
                            label: '预期效果',
                            labelAlign: 'top',
                            value: '促进血液循环，同时，可以消除精神上的疲乏',
                            disabled: true
                        },
                        {
                            xtype: 'textareafield',
                            label: '持续时间',
                            labelAlign: 'top',
                            value: '20分钟',
                            disabled: true
                        }
                    ]
                }
            ]
        }
    }
);