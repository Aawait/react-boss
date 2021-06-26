/*

   包含n个工具类函数的文件
*/

/*  用户主界面的路由   /boss   /staff
   
    用户完善信息路由：/bossinfo  /staffinfo
    判断是否完善信息？user.header 是否有值
    判断用户类型？ type === '大神' || type === '老板'
*/

export function getRedirectTo(type,header){
    
    let path;
    if(type === '老板'){
        path = '/boss'
    }else {
        path = '/staff'
    }
    // 没有头像就去完善信息界面
    if(!header){
        path += 'info'
    }

    return path
}