import { FETCH_POSTS,NEW_POSTS} from '../Action/type';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {createPost} from '../Action/postAction';

const intialState ={
    items:[],
    item:{}
}

export default function(state=intialState,action){
    switch(action.type){
        // eslint-disable-next-line no-undef
        case FETCH_POSTS:
        
        return {
            ...state,
            items:action.payload
        };

        case NEW_POSTS:

        return {
            ...state,
            items:action.payload
        };
          

        default:
        return state;
    }
}