import { ReactComponent as SearchOutlinedIcon } from "../../assets/search-03.svg";
import { ReactComponent as LogoIcon } from "../../assets/logo-02.svg";
import HeaderRow from "../common/HeaderRow";
import { scrollToTop } from "../../utils/convert";

const MainHeaderRow = ({ handleOpenSearchBar }) => {
  return (
    <HeaderRow>
      <div className="flex justify-between items-center w-full px-1">
        <button onClick={scrollToTop} aria-label="순수웨딩 로고">
          <div className="">
            <LogoIcon className="my-auto h-[15px] w-[80px]" />
          </div>
        </button>
        <button onClick={handleOpenSearchBar} aria-label="검색 버튼">
          <SearchOutlinedIcon className="w-[18px] h-[18px]" />
        </button>
      </div>
    </HeaderRow>
  );
};

export default MainHeaderRow;
