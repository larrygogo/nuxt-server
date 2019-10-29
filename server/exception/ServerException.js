import Exception from '../lib/Exception'

export default class ServerException extends Exception{
    constructor({status, msg}) {
        super()
        this.status = status
        this.message = msg
    }
}