import React, { Component } from 'react';

class SearchBtn extends Component {
    render() {
        return (
            <div className="d-flex">
      <div className="justify-content-start">
        <div class="dropdown">
          <button
            class="btn btn-myapp dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Liên quan
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">
              Mới nhất
            </a>
            <a class="dropdown-item" href="#">
              Nổi bật
            </a>
          </div>
        </div>
        </div>
        <div className="ml-auto">
        </div>
      </div>
        );
    }
}

export default SearchBtn;