import Exception from "../lib/Exception";

export const ExceptionHandler = (app) => {
    app.use(async (ctx, next) => {
        try {
            await next()
        } catch (e) {
            ctx.status = e.status || 500;
            let message = e.message || '服务器错误';
            if (e instanceof Exception) {
                return (ctx.body = {
                    success: false,
                    msg: message
                });
            } else if (e instanceof Error){
                console.error(e)
                return (ctx.body = {
                    success: false,
                    msg: '[-1]服务器内部错误'
                });
            }
        }
    })
}
