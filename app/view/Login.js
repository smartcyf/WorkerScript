/**
 * Created by DingYuan on 2015-1-18.
 */
Ext.define(
    'Worker.view.Login',
    {
        extend: 'Ext.form.Panel',
        alias: 'widget.loginMian',
        requires: ['Worker.view.Main'],
        config: {
            id: 'loginView',
            centered: true,
            height: 500,
            width: '90%',
            modal: true,
            padding: '200 20 0 20',
            layout: {type: 'vbox', align: 'center'},
            items: [
                {
                    xtype: 'container',
                    layout: 'hbox',
                    items: [
                        {
                            xtype: 'button',
                            width: 140,
                            height: 40,
                            id: 'sms',
                            ui: 'action-round',
                            iconCls: 'user',
                            iconMask: true,
                            text: '短信验证 ',
                            handler: function () {
                                Ext.getCmp('passwordDiv').hide();
                                Ext.getCmp('smsDiv').show();
                            }
                        }, {
                            xtype: 'spacer',
                            width: 10
                        },
                        {
                            xtype: 'button',
                            width: 140,
                            height: 40,
                            id: 'password',
                            ui: 'decline-round',
                            iconCls: 'user',
                            iconMask: true,
                            text: '密码验证 ',
                            handler: function () {
                                Ext.getCmp('smsDiv').hide();
                                Ext.getCmp('passwordDiv').show();
                            }
                        }
                    ]
                }, {
                    xtype: 'container',
                    layout: 'vbox',
                    items: [
                        {
                            xtype: 'fieldset',
                            border: 1,
                            id: 'smsDiv',
                            style: 'border-color: black; border-style: solid;',
                            items: [
                                {
                                    xtype: 'container',
                                    layout: 'hbox',
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            name: 'phoneNum',
                                            width: '70%',
                                            id: 'phoneNum',
                                            label: '手机号',
                                            required: true
                                        },
                                        {
                                            xtype: 'button',
                                            width: '30%',
                                            height: 40,
                                            id: 'getSms',
                                            ui: 'action-round',
                                            iconCls: 'action',
                                            iconMask: true,
                                            text: '获取验证码 ',
                                            handler: function () {
                                                this.disable();
                                                var task = Ext.create('Ext.util.DelayedTask', function () {
                                                    countdown(20); //设置120秒的倒计时时间
                                                });
                                                task.delay(1000);
                                            }
                                        }
                                    ]
                                },
                                {
                                    xtype: 'container',
                                    layout: 'hbox',
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            name: 'verCode',
                                            id: 'verCode',
                                            label: '验证码',
                                            required: true
                                        },
                                        {
                                            xtype: 'label',
                                            id: 'countdown'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'fieldset',
                            border: 1,
                            id: 'passwordDiv',
                            hidden: true,
                            style: 'border-color: black; border-style: solid;',
                            items: [
                                {
                                    xtype: 'textfield',
                                    name: 'username',
                                    id: 'username',
                                    label: '用户名',
                                    required: true
                                },
                                {
                                    xtype: 'passwordfield',
                                    name: 'password',
                                    id: 'password',
                                    label: '密码',
                                    required: true
                                }
                            ]
                        },
                        {
                            xtype: 'button',
                            width: '100%',
                            height: 40,
                            id: 'btnLogin',
                            ui: 'decline',
                            iconCls: 'user',
                            iconMask: true,
                            text: ' 登录系统 ',
                            handler: function () {
                                var usernameProxy = Ext.getCmp('username').getValue();
                                var passwordProxy = Ext.getCmp('password').getValue();
                                if (usernameProxy == '') {
                                    Ext.Msg.alert("错误信息", "用户名不能为空.");
                                    return;
                                } else if (passwordProxy == '') {
                                    Ext.Msg.alert("错误信息", "密码不能为空.");
                                    return;
                                }

                                if (usernameProxy == "admin" && passwordProxy == "admin") {
                                    Ext.getCmp('loginView').hide();
                                    Ext.Viewport.add(Ext.create('Worker.view.Main'));
                                }
                            }
                        }
                    ]
                }
            ]

        }

    }
);

function countdown(num) {
    Ext.getCmp('countdown').setHtml(num - 1);
    var task = Ext.create('Ext.util.DelayedTask',
        function () {
            this.countdown(num - 1); //调用updateClock函数本身
        });
    if (num <= 1) {
        task.cancel(); //当倒数到0时停止
        Ext.getCmp('getSms').enable();
        Ext.getCmp('countdown').setHtml('<font style="color: #ff0000">失败，重新获取</font>');
    } else {
        task.delay(1000);
    }
}