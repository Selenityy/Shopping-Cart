import Button from "../../utilities/Button";

const PageSelections = ({ scrollToAd }) => {
  return (
    <>
      <Button
        id="home-btn"
        className="page-selection-btn"
        onClick={handleHomeButtonClick}
        label="Home"
      />
      <Button
        id="collections-btn"
        className="page-selection-btn"
        onClick={scrollToAd}
        label="Collections"
      />
      <Button
        id="shop-btn"
        className="page-selection-btn"
        onClick={handleShopButtonClick}
        label="Shop All"
      />
    </>
  );
};

export default PageSelections;
