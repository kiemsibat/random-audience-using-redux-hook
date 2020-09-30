import React from 'react';
import{useDispatch,useSelector} from 'react-redux'
import {addAudience,DELAudience} from '../redux/actions/Audience';
import faker from 'faker';
const ListItem = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.ListAudience.list);
    console.log(user);
    const randomAudience = () => {
        const random = {
            id:faker.address.zipCode(),
            name:faker.name.findName(),
        }
        const action = addAudience(random);
        dispatch(action);
        console.log(random);
    }
    const handleDelete = (id) => {
        const updated = DELAudience(id);
        dispatch(updated);
    }
    return(
        <>
            <div>
            <button onClick={randomAudience}>Add random audience</button>
                <ul>
                    {user.map(({id,name}) => {
                        return (
                            <div key={id}>{name} <button onClick={() => handleDelete(id)}>x</button></div>
                        )
                    })}
                </ul>
            </div>
         
        </>
    )
}

export default ListItem;