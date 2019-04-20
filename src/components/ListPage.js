import React from 'react';
import Post from './Post';
import { createFragmentContainer, graphql } from 'react-relay';
import { Link } from 'react-router-dom';


// const mockData = [
//     {
//         node: {
//             id: "1",
//             description: "Howdy Bruh",
//             imageUrl: "http://www.cutestpaw.com/wp-content/uploads/2015/09/s-Howdy-partner.jpeg"
//         }
//     },
//     {
//         node: {
//             id: "2",
//             description: "Howdy Bruh - Remix",
//             imageUrl: "https://s-media-cache-ak0.pinimg.com/originals/b9/ba/b9/b9bab9dcacb9efde92e015af07834473.jpg"
//         }
//     }
// ]

class ListPage extends React.Component{
    render(){
        return (
            <div className="w-100 flex justify-center">
                <Link to="/create" className="fixed bg-white top-0 right-0 pa4 ttu dim black no-underline">
                    + New Post
                </Link>
                <div className="w-65 style={{ maxWidth: 400 }}">
                    {this.props.viewer.allPosts.edges.map(({node}) => <Post key={node.___id} post={node} />)}

                </div>
            </div>
        )
    }
}

export default createFragmentContainer(
    ListPage,
    graphql`
    fragment ListPage_viewer on Viewer {
        allPosts(last: 100, orderBy: createdAt_DESC) @connection(key: "ListPage_allPosts", filters: []){
            edges {
                node {
                    ...Post_post
                }
            }
        }
    }
    `,
)