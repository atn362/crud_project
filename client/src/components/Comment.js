import React from 'react';

function Comment() {

    return(
        <div className="comments">
        <h1 style={{color: 'black'}}>Comment Section</h1>
        <form>
            <input
              className="comment-input"
              type="text"
              placeholder="User"
            ></input>
            <input
              className="comment-input"
              type="text"
              placeholder="Title"
            ></input>
            <textarea
              className="textarea"
              placeholder="Comments/Notes"
            ></textarea>
            <button className="commentbutton" type="submit" value="">
              Post
            </button>
          </form>

        </div>
    );
};

export default Comment;