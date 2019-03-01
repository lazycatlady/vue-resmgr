const Base = require('./base.js');
import util from '../../utils/util'

module.exports = class extends Base {
    async indexAction() {
        return 'hahah'
    }

    async queryTableDataByIdAction() {
        try {
            let tableId = this.get('tableId')

            let table = await this.model('resource_table').getTableInfo(tableId)
            const data = await this.model(table.table_name).where({
                id: this.get('id')
            }).find()
            return this.success(data)
        } catch (err) {
            return this.fail(err)
        }
    }
    // 根据配置查询某表的数据
    async queryTableDataAction() {
        try {
            let tableId = this.get('tableId')
            let pageSize = this.get('pageSize')
            let pageNumber = this.get('pageNumber')

            let queryColumn = this.get('queryColumn')
            let queryKey = this.get('queryKey')
            let whereObj = {}
            if (!!queryColumn) {
                if(queryKey.includes(',')){
                    whereObj[`${queryColumn}`] = ['IN', `${queryKey}`]
                } else {
                    whereObj[`${queryColumn}`] = ['like', `%${queryKey}%`]
                }
            }
            let table = await this.model('resource_table').getTableInfo(tableId);
            let displayColumn = await this.model('resource_table_column').getColumnList(tableId);
            let queryColumns = []
            displayColumn.map(item => {
                switch (item.property_type) {
                    case '1': // 文本框形式不需要翻译
                        queryColumns.push(item.column_name)
                        break;
                    case '2': // 有外键关系,需要翻译
                        queryColumns.push(`(SELECT NAME FROM (${item.typesql}) tras WHERE tras.id=${item.column_name}) ${item.column_name}`)
                        break;
                    case '4':
                        queryColumns.push(item.column_name)
                        break;
                    case '3': // 日期
                    case '5':
                        queryColumns.push(item.column_name)
                        break;
                    default:
                        queryColumns.push(item.column_name)
                        break;
                }
            })
            const data = await this.model(table.table_name)
                .field(queryColumns.join(',')).page(pageNumber, pageSize).where(whereObj).countSelect();
            return this.success(data)
        } catch (err) {
            return this.fail(err)
        }
    }

    // 添加资源
    async addAction() {
        try {
            let tableId = this.post('tableId')
            let form = this.post('form')
            // 获取主键
            let primaryKey = await this.model('resource_table_column').getPrimaryKey(tableId)
            let sql = 'select ' + primaryKey.typesql + ' Id from dual'
            let primaryKeyValue = ''
            if(primaryKey.typesql != ''){
                let tData = await this.model('resource_table_column').getTypeSqlData(sql)
                primaryKeyValue = tData[0].Id
            } else {
                primaryKeyValue =  util.getUUId()
            }
            form[primaryKey.column_name.toLowerCase()] = primaryKeyValue
            let table = await this.model('resource_table').getTableInfo(tableId)
            let affectedRows = await this.model(table.table_name).add(form);
            return this.success(affectedRows)
        }catch(ex) {
            return this.fail(ex)
        }
    }

    // 修改资源
    async editAction() {
        try {
            let tableId = this.post('tableId')
            let updateInfo = this.post('form')
            let primaryKey = this.post('primaryKey')
            let table = await this.model('resource_table').getTableInfo(tableId)
            
            let affectedRows = await this.model(table.table_name).where(
                `${primaryKey.name}=${primaryKey.value}`
            ).update(updateInfo);
            return this.success(affectedRows)
        }catch(ex) {
            return this.fail(ex)
        }

    }

    async deleteAction() {
        try {
            let tableId = this.post('tableId')
            let updateInfo = this.post()
            delete updateInfo.tableId;
            let table = await this.model('resource_table').getTableInfo(tableId)
            let affectedRows = await this.model(table.table_name).where(updateInfo).delete();
            return this.success(affectedRows)
        }catch(ex) {
            return this.fail(ex)
        }
    }
};