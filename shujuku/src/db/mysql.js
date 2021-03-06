let mysql = require('mysql');

//创建连接池
let pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'qq',
    multipleStatements: true
});

module.exports = (sql) => {
    return new Promise((resolve, reject) => {
        pool.query(sql, function (error, data) {
            if (error) {
                reject(error)
            }
            resolve(data); // 改变promise状态Resolved
        });
    })

}