import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setProducts } from "./slice";
import { Product, ProductInquiry } from "../../../lib/types/product";
import { createSelector } from "reselect";
import { retrieveProducts } from "./selector";
import ProductService from "../../services/ProdcutService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import { serverApi } from "../../../lib/config";
import { useHistory } from "react-router-dom";
import { CartItem } from "../../../lib/types/search";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)),
});

const productsRetriever = createSelector(retrieveProducts, (products) => ({
  products,
}));

// BASKET LOGIC
interface ProductsProps {
  onAdd: (item: CartItem) => void;
}

export default function Products(props: ProductsProps) {
  const { onAdd } = props;
  // 1
  const { setProducts } = actionDispatch(useDispatch());
  const { products } = useSelector(productsRetriever);
  // 2
  const [productSearch, setProductSearch] = useState<ProductInquiry>({
    page: 1,
    limit: 12,
    order: "createdAt",
    productCollection: ProductCollection.SUIT,
    search: "",
  });

  const [searchText, setSearchText] = useState<string>("");
  const history = useHistory();

  useEffect(() => {
    const product = new ProductService();
    product
      .getProducts(productSearch)
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, [productSearch]);

  useEffect(() => {
    if (searchText === "") {
      productSearch.search = "";
      setProductSearch({ ...productSearch });
    }
  }, [searchText]);

  /** HANDLERS **/

  // Handler 1 (Collection)
  const searchCollectionHandler = (collection: ProductCollection) => {
    productSearch.page = 1;
    productSearch.productCollection = collection;
    setProductSearch({ ...productSearch });
  };

  // Handler 2 (Order)
  const searchOrderHandler = (order: string) => {
    productSearch.page = 1;
    productSearch.order = order;
    setProductSearch({ ...productSearch });
  };

  // Handler 3 (Search input)
  const searchProductHandler = () => {
    productSearch.search = searchText;
    setProductSearch({ ...productSearch });
  };

  // Handler 4 (Pagination)
  const paginationHandler = (e: ChangeEvent<any>, value: number) => {
    productSearch.page = value;
    setProductSearch({ ...productSearch });
  };

  // Handler 5 (choosenProduct)
  const choosenDishHandler = (id: string) => {
    history.push(`/products/${id}`);
  };
  return (
    <div className="products">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack className={"avatar-big-box"}>
            <Box className="top-title">Cavalier Collection</Box>
            <Box className="search-box">
              <input
                type="search"
                placeholder={"Type here"}
                className={"search-input"}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") searchProductHandler();
                }}
              />
              <Button
                className={"search-btn"}
                variant="contained"
                endIcon={<SearchIcon />}
                onClick={searchProductHandler}
              >
                Search
              </Button>
            </Box>
          </Stack>

          <Stack className={"list-category-section"}>
            <Stack className={"product-category"}>
              <div className="category-main">
                <Button
                  className="btn"
                  variant={"contained"}
                  color={
                    productSearch.productCollection === ProductCollection.SUIT
                      ? "primary"
                      : "secondary"
                  }
                  onClick={() =>
                    searchCollectionHandler(ProductCollection.SUIT)
                  }
                >
                  Suit
                </Button>
                <Button
                  className="btn"
                  variant={"contained"}
                  color={
                    productSearch.productCollection === ProductCollection.SHIRT
                      ? "primary"
                      : "secondary"
                  }
                  onClick={() =>
                    searchCollectionHandler(ProductCollection.SHIRT)
                  }
                >
                  Shirt
                </Button>
                <Button
                  className="btn"
                  variant={"contained"}
                  color={
                    productSearch.productCollection ===
                    ProductCollection.OUTERWEAR
                      ? "primary"
                      : "secondary"
                  }
                  onClick={() =>
                    searchCollectionHandler(ProductCollection.OUTERWEAR)
                  }
                >
                  Outer
                </Button>
                <Button
                  className="btn"
                  variant={"contained"}
                  color={
                    productSearch.productCollection ===
                    ProductCollection.TROUSER
                      ? "primary"
                      : "secondary"
                  }
                  onClick={() =>
                    searchCollectionHandler(ProductCollection.TROUSER)
                  }
                >
                  Trouser
                </Button>
                <Button
                  className="btn"
                  variant={"contained"}
                  color={
                    productSearch.productCollection === ProductCollection.SHOES
                      ? "primary"
                      : "secondary"
                  }
                  onClick={() =>
                    searchCollectionHandler(ProductCollection.SHOES)
                  }
                >
                  Shoes
                </Button>
                <Button
                  className="btn"
                  variant={"contained"}
                  color={
                    productSearch.productCollection ===
                    ProductCollection.ACCESORY
                      ? "primary"
                      : "secondary"
                  }
                  onClick={() =>
                    searchCollectionHandler(ProductCollection.ACCESORY)
                  }
                >
                  Accesory
                </Button>
                <Button
                  className="btn"
                  variant={"contained"}
                  color={
                    productSearch.productCollection ===
                    ProductCollection.UNDERWEAR
                      ? "primary"
                      : "secondary"
                  }
                  onClick={() =>
                    searchCollectionHandler(ProductCollection.UNDERWEAR)
                  }
                >
                  Essentials
                </Button>
                <FormControl
                  variant="outlined"
                  size="small"
                  sx={{ minWidth: 140 }}
                >
                  <InputLabel id="sort-label">Sort By</InputLabel>
                  <Select
                    labelId="sort-label"
                    id="sort-select"
                    value={productSearch.order}
                    label="Sort By"
                    onChange={(e) => searchOrderHandler(e.target.value)}
                  >
                    <MenuItem value="createdAt">New</MenuItem>
                    <MenuItem value="productPrice">Price</MenuItem>
                    <MenuItem value="productViews">View</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </Stack>

            <Stack className={"product-wrapper"}>
              {products.length !== 0 ? (
                products.map((product: Product) => {
                  const imagePath = `${serverApi}/${product.productImages[0]}`;
                  const sizeVolume =
                    product.productCollection === ProductCollection.OUTERWEAR
                      ? product.productVolume + " litre"
                      : product.productSize + " size";
                  return (
                    <Stack
                      key={product._id}
                      className={"product-card"}
                      onClick={() => choosenDishHandler(product._id)}
                    >
                      <Stack
                        className={"product-img"}
                        sx={{ backgroundImage: `url(${imagePath})` }}
                      >
                        {/* <div className={"product-sale"}>{sizeVolume}</div> */}
                        <Box className={"shop-view"}>
                          <Button
                            className={"shop-btn"}
                            // BASKET LOGIC
                            onClick={(e) => {
                              onAdd({
                                _id: product._id,
                                quantity: 1,
                                name: product.productName,
                                price: product.productPrice,
                                image: product.productImages[0],
                              });
                              e.stopPropagation();
                            }}
                          >
                            <img
                              // src={"/icons/shopping-cart.svg"}
                              style={{ display: "flex" }}
                            />{" "}
                            ADD TO CARD
                          </Button>
                          <Button
                            className={"view-btn"}
                            sx={{
                              minWidth: 0,
                              width: "45px",
                              height: "35px",
                              padding: 0,
                            }}
                          >
                            <Badge
                              badgeContent={product.productViews}
                              sx={{
                                "& .MuiBadge-badge": {
                                  fontSize: "11px",
                                  height: "17px",
                                  minWidth: "17px",
                                  backgroundColor: "#ccc",
                                },
                              }}
                            >
                              <RemoveRedEyeIcon
                                sx={{
                                  color:
                                    product.productViews === 0
                                      ? "#cccc"
                                      : " #ffffff",
                                }}
                              />
                            </Badge>
                          </Button>
                        </Box>
                      </Stack>
                      <Box className={"product-desc"}>
                        <span className={"product-title"}>
                          {product.productName}
                        </span>
                        <div className={"product-desc1"}>
                          ${product.productPrice}
                        </div>
                      </Box>
                    </Stack>
                  );
                })
              ) : (
                <Box className="no-data">
                  Stay tuned for upcoming collections
                </Box>
              )}
            </Stack>
          </Stack>

          <Stack className={"pagination-section"}>
            <Pagination
              count={
                products.length !== 0
                  ? productSearch.page + 1
                  : productSearch.page
              }
              page={productSearch.page}
              renderItem={(item) => (
                <PaginationItem
                  components={{
                    previous: ArrowBackIcon,
                    next: ArrowForwardIcon,
                  }}
                  {...item}
                  color={"secondary"}
                />
              )}
              onChange={paginationHandler}
            />
          </Stack>
        </Stack>
      </Container>

      <div className={"brands-logo"}>
        <div className="logo-title">Family Brands</div>
        <Stack className={"logo-box"}>
          <Box className={"logo-img"}></Box>
          <Box className={"logo-img"}></Box>
          <Box className={"logo-img"}></Box>
          <Box className={"logo-img"}></Box>
        </Stack>
      </div>

      <div className={"address"}>
        <Container>
          <Stack className={"address-area"}>
            <Box className={"add-box"}>
              <Box className={"title"}>Store Location</Box>
            </Box>
            <div className={"map-address"}>
              <strong>Address:</strong> COEX Mall, 513 Yeongdong-daero,
              Gangnam-gu, Seoul, South Korea
            </div>
            <iframe
              className={"map"}
              style={{ marginTop: "10px" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.693251160848!2d127.05780537591898!3d37.51156612845108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca1589b469d67%3A0x9ec21b0595b103f0!2sCOEX%20Mall!5e0!3m2!1sen!2skr!4v1722870656824!5m2!1sen!2skr"
              width="1320"
              height="500"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Stack>
        </Container>
      </div>
    </div>
  );
}
