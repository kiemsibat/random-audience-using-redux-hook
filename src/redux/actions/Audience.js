export const addAudience = payload => {
    return {
        type:'ADD_RANDOM',
        payload: payload,
    }
}

export const DELAudience = id => {
    return {
        type:'DEL',
        payload: id,
    }
}