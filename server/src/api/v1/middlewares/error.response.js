
const StatusCode = {
    FORBIDDEN: 403,
    CONFLICT: 409
}

const ReasonStatusCode = {
    FORBIDDEN: 'Bad Request',
    CONFLICT: 'Conflict Error',
}

class ErrorResponse extends Error {

    constructor(message, status){
        super(message)
        this.status = status
    }
}

class ConflictRequestError extends ErrorResponse {

    constructor(message = ReasonStatusCode.CONFLICT, statusCode = StatusCode.CONFLICT){
        super(message, statusCode)
    }
}

class BadRequestError extends ErrorResponse {

    constructor(message = ReasonStatusCode.FORBIDDEN, statusCode = StatusCode.FORBIDDEN){
        super(message, statusCode)
    }
}


export { BadRequestError, ConflictRequestError}