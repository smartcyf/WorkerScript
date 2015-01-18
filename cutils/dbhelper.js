/**
 * Created by Ares on 15/1/15.
 */
function insert(tbname, sqlData) {
    if(fgDB != null){
        var now = new Date();
        sqlData.dateCreated = Ext.Date.format(now, "Y-m-d H:i:s");

        fgDB.insert(tbname, sqlData, function(insertId) {
            //Ext.Msg.alert('成功', "插入成功！", Ext.emptyFn);
        }, function(er) {
            console.log('error with executeSql', er);
            Ext.Msg.alert('错误', "插入失败！", Ext.emptyFn);
        });
    }
}

function update(tbname, sqlData) {
    if(fgDB != null){
        var now = new Date();
        sqlData.dateCreated = Ext.Date.format(now, "Y-m-d H:i:s");

        fgDB.update(tbname, sqlData, "itemhash=?",
            [sqlData.itemhash], function(count) {
                //Ext.Msg.alert('成功', "修改成功！", Ext.emptyFn);
            }, function(er) {
                console.log('error with executeSql', er);
                Ext.Msg.alert('错误', "修改失败！", Ext.emptyFn);
            });
    }
}

function del(tbname, itemhash) {
    if(fgDB != null) {
        fgDB.del(tbname, "itemhash=?",[itemhash], function(count) {
            //Ext.Msg.alert('成功', "删除成功！", Ext.emptyFn);
        }, function(er) {
            console.log('error with executeSql', er);
            Ext.Msg.alert('错误', "删除失败！", Ext.emptyFn);
        });
    }
}