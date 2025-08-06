import React, { useState } from "react";
import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Divider from "../../components/divider";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveNewDishes } from "./selector";
import { Product } from "../../../lib/types/product";
import { serverApi } from "../../../lib/config";
import { ProductCollection } from "../../../lib/enums/product.enum";
import CardCover from "@mui/joy/CardCover";

/** REDUX SLICE & SELECTOR **/

const newDishesRetriever = createSelector(retrieveNewDishes, (newDishes) => ({
  newDishes,
}));

function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false);

  const imagePath = hovered
    ? `${serverApi}/${product.productImages[1] ?? product.productImages[0]}`
    : `${serverApi}/${product.productImages[0]}`;

  const sizeVolume =
    product.productCollection === ProductCollection.OUTERWEAR
      ? product.productVolume + "l"
      : product.productSize + " size";

  return (
    <CssVarsProvider>
      <Card
        className={"card"}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Box className="card-box">
          <CardCover className="image-wrapper">
            <img
              src={`${serverApi}/${product.productImages[0]}`}
              className="image front"
              alt=""
            />
            <img
              src={`${serverApi}/${
                product.productImages[1] ?? product.productImages[0]
              }`}
              className="image back"
              alt=""
            />
          </CardCover>
        </Box>

        <Box className="product-detail">
          <Stack className="info">
            <Stack flexDirection={"row"} alignItems="center">
              <Typography className={"title"}>{product.productName}</Typography>
              <Divider width="2" height="24" className="divider" />
              <Typography className={"price"}>
                ${product.productPrice}
              </Typography>
            </Stack>
            <Stack>
              <Typography className={"views"}>
                {product.productViews}
                <VisibilityIcon sx={{ fontSize: 20, marginLeft: "5px" }} />
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Card>
    </CssVarsProvider>
  );
}

export default function NewDishes() {
  const { newDishes } = useSelector(newDishesRetriever);

  return (
    <div className="new-products-frame">
      <Container>
        <Stack className="new-products-section">
          <Box className="category-title">Latest Collection</Box>
          <Stack className="cards-frame">
            {newDishes.length !== 0 ? (
              newDishes.map((product: Product) => (
                <ProductCard key={product._id} product={product} />
              ))
            ) : (
              <Box className="no-data">New products are not available</Box>
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
