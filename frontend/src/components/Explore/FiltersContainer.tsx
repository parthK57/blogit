import { useDispatch, useSelector } from "react-redux";

// COMPONENTS
import { BiSearchAlt } from "react-icons/bi";
import { useState } from "react";
import { BsGlobeAmericas } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

// SLICES
import { clearFilter, setFilters } from "../../slices/FiltersSlice";

const FiltersContainer = () => {
  // TODO: Trigger Filter On Enter Key
  const [publicFilter, setPublicFilter] = useState(true);
  const [followersFilter, setFollowersFilter] = useState(false);
  const [tag, setTag] = useState("");
  const dispatch = useDispatch();
  const filters: string[] = useSelector((state: any) => state.filters.value);

  // SET FILTERS
  const setTagsFilter = () => {
    const filtersArray = tag.replaceAll(" ", "").split(",");
    dispatch(setFilters(filtersArray));
  };

  return (
    <>
      <div className="w-[90%] overflow-hidden rounded bg-blue-100 shadow-sm">
        <div className="flex flex-col items-center gap-3">
          <div className="flex w-[100%] items-center justify-between bg-blue-300 px-4 py-3 text-xl shadow">
            Filters <BiSearchAlt className="text-2xl text-white" />
          </div>
          <div className="mb-2 flex h-[140px] w-[100%] flex-col justify-center gap-2 overflow-y-scroll bg-blue-100 px-2">
            <div className="relative mt-2 flex w-[100%] flex-col">
              <label className="mt-2">Tags:</label>
              <input
                type="text"
                className="mt-1 w-[100%] py-1 pl-4 pr-8"
                onChange={(e: any) => setTag(e.target.value)}
              />
              <FaSearch
                onClick={setTagsFilter} // SET TAGS
                className="absolute right-0 bottom-0 mr-2 mb-2 cursor-pointer text-lg text-blue-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="public"
                id="public"
                value="public"
                onClick={() => setPublicFilter(!publicFilter)}
              />
              <label
                htmlFor="public"
                className="flex w-[100%] items-center justify-between"
              >
                Public Blogs
                <BsGlobeAmericas className="text-green-400" />
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="followers"
                id="followers"
                value="followers"
                onClick={() => setFollowersFilter(!followersFilter)}
              />
              <label
                htmlFor="followers"
                className="flex w-[100%] items-center justify-between"
              >
                Followers Blogs
                <AiFillHeart className="text-lg text-red-500" />
              </label>
            </div>
            <div className="flex w-[100%] flex-col items-center gap-2">
              {filters?.map(
                (filter: string | null | undefined, index: number) => {
                  if (filter)
                    return (
                      <span
                        key={index}
                        onClick={() => dispatch(clearFilter(filter))}
                        className="w-[100%] rounded-br-xl rounded-tl-xl bg-blue-200 px-3 py-1 transition-all ease-in-out hover:scale-105"
                      >
                        {filter}
                      </span>
                    );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FiltersContainer;
