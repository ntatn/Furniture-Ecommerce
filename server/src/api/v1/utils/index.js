import _ from 'lodash'

const getIntoData = ({fileds = [], object = {}}) => {
    return _.pick(object, fileds)
}

const getSelectData = (select = []) =>{
    return Object.fromEntries(select.map(el => [el, 1]))
}

export {getIntoData, getSelectData}