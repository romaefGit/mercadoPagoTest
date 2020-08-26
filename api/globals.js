exports.getVars = function () {
    var beta = {
        "port": 3000,
        "hostname": "localhost",
        "api": "http://localhost:" + this.port,
        "db_connect": {
            "host": "localhost",
            "port": 3306,
            "db_user": "root",
            "db_password": "",
            "db_name": "mercadopago",
            "db_dialect": "mysql"
        },
        "actions": {
            // if its true, this create the sql necessary to create the tables into the database. 
            //  It works for the  or update only if there is a new table without relations with others models created before
            "syncronyzeModel": false,
            "force": false // to force the changes in a database created after with data on it tables

        }
    }

    return beta;
}