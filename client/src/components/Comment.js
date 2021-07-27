import React from 'react';

function Comment() {

    return(
      <div className='commentbody'>
        
        <div className="comments">
          <h1 style={{color: 'white'}}>Comment Design Options</h1>
          <form className="forms">
            <input
              className="inputs"
              type="text"
              placeholder="User"
            ></input>
            <input
              className="inputs"
              type="text"
              placeholder="Title"
            ></input>
            <textarea
              className="commentstextarea"
              placeholder="Comments/Notes"
            ></textarea>
            <button className="commentbutton" type="submit" value="">
              Post
            </button>
          </form>
        </div>

      </div>
    );
};

export default Comment;