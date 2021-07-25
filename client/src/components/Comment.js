import React from 'react';
import Footer from './Footer'

function Comment() {

    return(
        <div className="comments">
        <h1 style={{color: 'black'}}>Comment Design Options</h1>
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

            <div className="footer">
                <Footer />
            </div>
        </div>
    );
};

export default Comment;