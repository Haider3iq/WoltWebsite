
import { Link } from "react-router-dom";
import "../../css/searchComponent.css"

import { IoSearchOutline } from "react-icons/io5";

export default function SearchComponent ({searchText}) {

    return(
          <div className="customSearchComponent">

            <input
              type="text"
              className="customTextInput"
              placeholder={searchText ? searchText : "Search here..."}
            />
           
                <Link to="#">
                  <IoSearchOutline className="searchIcon"/>
                </Link>
         
          </div>

    )
}