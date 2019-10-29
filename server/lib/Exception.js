/**
 * 全局异常基类
 */
export default class Exception {
    constructor() {
        this.status  = 500
        this.message = '服务器内部错误'
    }
}
