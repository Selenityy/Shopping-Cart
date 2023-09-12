import Button from "../../utilities/Button";

const PageSelections = ({ scrollToAd, scrollToProducts, scrollToHome }) => {
  return (
    <div id="page-selection-buttons">
      <Button
        id="home-btn"
        className="page-selection-btn"
        onClick={scrollToHome}
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
        onClick={scrollToProducts}
        label="Shop All"
      />
    </div>
  );
};

export default PageSelections;
