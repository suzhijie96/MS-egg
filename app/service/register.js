'use strict';
module.exports = app => {
    class RegisterService extends app.Service {
        async insert(){           
        const res = await this.app.mysql.insert('ms_login', {username: "szj", password: "123"});
        return { res };
        }
    }
    return RegisterService;
};
