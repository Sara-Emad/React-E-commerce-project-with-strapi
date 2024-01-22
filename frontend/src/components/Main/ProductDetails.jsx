/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Stack, Typography } from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";


const ProductDetails = () => {
  return (
    <Box display={"flex"} alignItems={"center"} sx={{ gap: 3 , flexDirection:{xs:"column" , sm:"row"} }}>
      <Box display={"flex"}>
        <img width={300} src="src/images/banner-15.jpg" alt="" />
      </Box>

      <Box sx={{textAlign:{xs:"center" , sm:"left"}}}>
        <Typography variant="h5"> WOMAN'S FASHION </Typography>
        <Typography sx={{ my: 0.4, fontSize: 22, color: "crimson" }}>
          $12.99
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          dolore, repellat vitae ab sint sequi nobis iure libero. Distinctio!
        </Typography>

        <Stack  direction={"row"} sx={{ gap: 1, my: 2 , justifyContent:{xs:"center" , sm:"left"}}}>
          {["src/images/banner-15.jpg", "src/images/banner-16.jpg"].map(
            (item) => {
              return (
                <img
                  width={90}
                  height={100}
                  style={{ borderRadius: 3 }}
                  key={item}
                  src={item}
                  alt=""
                />
              );
            }
          )}
        </Stack>

        <Button sx={{marginBottom:{xs:1 , sm:2}, textTransform: "capitalize" }} variant="contained">
          <AddShoppingCartOutlinedIcon sx={{ mr: 1 }} fontSize="small" />
          Buy Now
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetails;
