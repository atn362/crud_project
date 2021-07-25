import React from "react";

function Search() {
  return (
    <div className='searchbody'>
        <div className='searchcontent'>
          <h1 className='searchtitle'>Search Design Options</h1>

          <div className='form'>
              <form>
                <input className='searchinput' type="City" placeholder="City"></input>
                <input className='searchinput' type="State" placeholder="State"></input>  


                <p className='choicesprompt'>Please select which of the following you would like you see in results.</p>
                <div className='choices'>
                  <label class="container">Crime
                    <input type="checkbox"></input>
                    <span class="custombox"></span>
                  </label>
                  <label class="container">Popular spots
                    <input type="checkbox"></input>
                    <span class="custombox"></span>
                  </label>
                  <label class="container">Hotels
                    <input type="checkbox"></input>
                    <span class="custombox"></span>
                  </label>
                </div>

                <button className='searchbutton' type="submit" value="">Search</button>

              </form>
          </div>
        </div>
    </div>
  );
}

export default Search;
