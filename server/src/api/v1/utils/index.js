import _ from 'lodash'

const getIntoData = ({fileds = [], object = {}}) => {
    return _.pick(object, fileds)
}

export {getIntoData}