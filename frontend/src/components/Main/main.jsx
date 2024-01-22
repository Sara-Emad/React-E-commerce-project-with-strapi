import { useTheme } from "@emotion/react";
import {
  Box,
  CircularProgress,
  Container,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import Dialog from "@mui/material/Dialog";
import { Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";
import { useGetproductByNameQuery } from "../../Redux/product";
import { AnimatePresence, motion } from "framer-motion";

const Main = () => {
  const handleAlignment = (event, newValue) => {
    if (newValue !== null) {
      setmyData(newValue);
    }
  };

  const them = useTheme();

  // ========== for dialog in mat ui
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const allProductsAPI = "products?populate=*";
  const menCategoryAPI =
    "products?populate=*&filters[productCategory][$eq]=MEN";
  const womenCategoryAPI =
    "products?populate=*&filters[productCategory][$eq]=WOMEN";

  const [myData, setmyData] = useState(allProductsAPI);

  const { data, error, isLoading } = useGetproductByNameQuery(myData);

  const [clickedProduct, setclickedProduct] = useState({});

  if (data) {
    console.log(data.data);
  }

  if (isLoading) {
    return (
      <Box sx={{ py: 11, textAlign: "center" }}>
        <CircularProgress color="inherit" />
      </Box>
    );
  }

  if (error) {
    return (
      <Container sx={{ py: 11, textAlign: "center" }}>
        <Typography variant="h6">Please Try Again Later</Typography>
      </Container>
    );
  }

  if (data) {
    return (
      <Container sx={{ py: 9 }}>
        <Stack
          direction={"row"}
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            mt: 9,
            flexWrap: "wrap",
            gap: 3,
          }}
        >
          <Box>
            <Typography variant="h6">Selected Products</Typography>
            <Typography variant="body1" fontWeight={300}>
              All Our New Arrivals in exclusive brand selection
            </Typography>
          </Box>

          <ToggleButtonGroup
            color="error"
            value={myData}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              ".Mui-selected": {
                border: "1px solid rgba(233, 69 ,96 , 0.5) !important",
                color: "#e94560",
                bgcolor: "initial",
              },
            }}
          >
            <ToggleButton
              // @ts-ignore
              sx={{ color: them.palette.text.primary }}
              className="myButton"
              value={allProductsAPI}
              aria-label="left aligned"
            >
              All Products
            </ToggleButton>
            <ToggleButton
              // @ts-ignore
              sx={{ mx: "16px !important", color: them.palette.text.primary }}
              className="myButton"
              value={menCategoryAPI}
              aria-label="centered"
            >
              MEN Category
            </ToggleButton>
            <ToggleButton
              className="myButton"
              value={womenCategoryAPI}
              aria-label="right aligned"
              // @ts-ignore
              sx={{ color: them.palette.text.primary }}
            >
              WOMEN Category
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>

        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
        >
          <AnimatePresence>
            {data.data.map((item) => {
              return (
                <Card
                  component={motion.section}
                  layout
                  initial={{ transform: "scale(0)" }}
                  animate={{ transform: "scale(1)" }}
                  transition={{ duration: 1.6, type: "spring", stiffness: 50 }}
                  key={item.id}
                  sx={{
                    maxWidth: 360,
                    my: 6,
                    ":hover .MuiCardMedia-root": {
                      rotate: "1deg",
                      scale: "1.1",
                      transition: "0.35s",
                    },
                  }}
                >
                  <CardMedia
                    sx={{ height: 277 }}
                    // @ts-ignore
                    image={`${item.attributes.productimg.data[0].attributes.url}`}
                    title="green iguana"
                  />
                  <CardContent>
                    <Stack
                      direction={"row"}
                      sx={{
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography gutterBottom variant="h6" component="div">
                        {item.attributes.productTitle}
                      </Typography>
                      <Typography variant="subtitle1" component="p">
                        ${item.attributes.productPrice}
                      </Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary">
                      {item.attributes.productDescription}
                    </Typography>
                  </CardContent>

                  <CardActions sx={{ justifyContent: "space-between" }}>
                    <Button
                      // variant="outlined"
                      onClick={() => {
                        handleClickOpen();
                        setclickedProduct(item);
                      }}
                      size="large"
                      sx={{ textTransform: "capitalize" }}
                    >
                      <AddShoppingCartOutlinedIcon
                        sx={{ mr: 1 }}
                        fontSize="small"
                      />
                      Add to cart
                    </Button>
                    <Rating
                      name="read-only"
                      value={item.attributes.productRating}
                      precision={0.5}
                      readOnly
                    />
                  </CardActions>
                </Card>
              );
            })}
          </AnimatePresence>
        </Stack>

        <Dialog
          sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <IconButton
            sx={{
              "&:hover": { rotate: "180deg", transition: "0.3s", color: "red" },
              position: "absolute",
              top: 0,
              right: 10,
            }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>
          <ProductDetails clickedProduct={clickedProduct} />
        </Dialog>
      </Container>
    );
  }
};

export default Main;
