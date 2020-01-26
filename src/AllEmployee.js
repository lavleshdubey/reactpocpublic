import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Employee';
import EditEmployee from './EditEmployee';
class AllEmployee extends Component {
render() {
return (
<div>
  <h1 className="post_heading">Employee List</h1>
  {this.props.posts.map((post) => (
  <div key={post.id}>
    {post.editing ? <EditEmployee post={post} key={post.id} /> : <Post post={post}
    key={post.id} />}
  </div>
))}
</div>
);
}
}

const mapStateToProps = (state) => {
return {
posts: state
}
}
export default connect(mapStateToProps)(AllEmployee);