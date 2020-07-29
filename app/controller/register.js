'use strict';

module.exports = app => {
    class RegisterController extends app.Controller {
        // 查询
        async index(){
            const { ctx, app } = this;
            const res = await app.mysql.select('ms_login',{
                where: { username:  "szj" },
                columns: ['id', 'username'],
                limit: 5,
                // offset: (pageNum - 1) * 5
            }
            );
            ctx.body = res;
        }

        // 更新
        async update(){
            const {ctx, app } = this;
            // const id = ctx.params.id;
            const data = ctx.request.body;
            const raw = {
                username: data.username,
                password: data.password
            };
            const opt = {
                where: {username: "suzhi"}
            };
            console.log(raw,888);
            const res = app.mysql.update('ms_login', raw, opt );
            ctx.body = res;
        }

        async create() {
            const { ctx, app } = this;
            const data = ctx.request.body;
            const raw = {
                username: data.username,
                password: data.password,
                phone_number: data.phone_number
            }
            const res = await app.mysql.insert('ms_login',raw);
            ctx.body = res;
        }
    }
    return RegisterController;
};