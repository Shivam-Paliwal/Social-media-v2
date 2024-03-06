import {useContext, useRef} from "react";
import {PostList} from "../Store/post-list-store";
const CreatePost=()=>{
  const {addPost}=useContext(PostList);

  const userIdElement = useRef();
  const postTitelElement = useRef();
  const postBodyElement = useRef();
  const reactionElement = useRef();
  const tagsElement = useRef();

  const handelSubmit=(event)=>{
    event.preventDefault();
    const userId=userIdElement.current.value;
    const postTitel=postTitelElement.current.value;
    const postBody=postBodyElement.current.value;
    const reaction=reactionElement.current.value;
    const tags=tagsElement.current.value.split(' ');


    userIdElement.current.value="";
    postTitelElement.current.value="";
    postBodyElement.current.value="";
    reactionElement.current.value="";
    tagsElement.current.value="";
    
    addPost(userId, postTitel, postBody, reaction, tags);
  };

    return (
      <form className="create-post" onSubmit={handelSubmit}>
          <div className="mb-3 ">
            <label htmlFor="userId" className="form-label" id="userId">eMail</label>
            <input type="text" ref={userIdElement} className="form-control" id="userId" placeholder="Enter your mail"/>
          </div>

          <div className="mb-3 ">
            <label htmlFor="titel" className="form-label" id="titel">Post Title</label>
            <input type="text" ref={postTitelElement} className="form-control" id="titel" placeholder="How are you feeling today"/>
          </div>

          <div className="mb-3 ">
            <label htmlFor="body" className="form-label" id="body">Post content</label>
            <textarea type="text" ref={postBodyElement} row="4" className="form-control" id="body" placeholder="Tell us more about it"/>
          </div>

          <div className="mb-3 ">
            <label htmlFor="reactions" className="form-label" id="reactions">No. of reactions</label>
            <input type="text" ref={reactionElement} className="form-control" id="reactions" placeholder="How many people reacted on this post"/>
          </div>

          <div className="mb-3 ">
            <label htmlFor="tags" className="form-label" id="tags">Enter your Hashtag here</label>
            <input type="text" ref={tagsElement} className="form-control" id="tags" placeholder="Please enter tags using space"/>
          </div>

          <button type="submit" className="btn btn-primary">Post</button>
</form>
    );
}
export default CreatePost;