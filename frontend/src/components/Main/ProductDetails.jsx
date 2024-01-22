/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Stack, Typography } from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const ProductDetails = ({ clickedProduct }) => {
  const [alignment, setAlignment] = useState(0);

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const [selectedImg, setselectedImg] = useState(0);
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      sx={{ gap: 3, flexDirection: { xs: "column", sm: "row" } }}
    >
      <Box display={"flex"}>
        <img
          width={330}
          src={`${clickedProduct.attributes.productimg.data[selectedImg].attributes.url}`}
          alt=""
        />
      </Box>

      <Box sx={{ py:2 ,textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">
          {" "}
          {clickedProduct.attributes.productTitle}{" "}
        </Typography>
        <Typography sx={{ my: 0.4, fontSize: 22, color: "crimson" }}>
          ${clickedProduct.attributes.productPrice}
        </Typography>
        <Typography variant="body1">
          {clickedProduct.attributes.productDescription}
        </Typography>

        <Stack
          direction={"row"}
          sx={{ gap: 1, my: 2, justifyContent: { xs: "center", sm: "left" } }}
        >
          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            sx={{
              ".Mui-selected": {
                border: "1px solid royalblue !important",
                borderRadius: "5px !important",
                bgcolor: "initial",
                opacity: "1",
              },
            }}
          >
            {clickedProduct.attributes.productimg.data.map((item, index) => {
              return (
                <ToggleButton
                  key={item.id}
                  value={index}
                  sx={{
                    width: "110px",
                    height: "110px",
                    mx: 1,
                    p: "0",
                    opacity: "0.5",
                  }}
                >
                  <img
                    onClick={() => {
                      setselectedImg(index);
                    }}
                    width={"100%"}
                    height={"100%"}
                    style={{ borderRadius: 3 }}
                    src={item.attributes.url}
                    alt=""
                  />
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>
        </Stack>

        <Button
          sx={{ marginBottom: { xs: 1, sm: 2 }, textTransform: "capitalize" }}
          variant="contained"
        >
          <AddShoppingCartOutlinedIcon sx={{ mr: 1 }} fontSize="small" />
          Buy Now
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
