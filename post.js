/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from 'react'
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchPost} from '../Action/postAction';
 class Post extends Component {

     //WARNING! To be deprecated in React v17. Use componentDidMount instead.
     componentWillMount() {
         this.props.fetchPosts();
     }
     
     componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost)
        } 
     }
  
  render() {
      const postItems=this.props.posts.map ((post=>(
          <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          </div>
      )));
    return (
      <div>
        <h1> posts </h1>
        {postItems}
      </div>
    );
  }
}

Post.propTypes = {
    
    fetchPosts:propTypes.func.isRequired,
    posts: propTypes.array.isRequired,
    newPost:propTypes.object
};

const mapStateToProps =state =>({
    posts:state.posts.items,
    newPost:state.posts.item
})

export default connect(mapStateToProps,{fetchPost})(Post);
