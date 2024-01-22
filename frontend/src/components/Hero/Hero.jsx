import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";
import IconSection from "./IconSection";


// arry for repate (map) element
// repate element التكرار, use array with map and not forget key

const mySlider = [
  { text: "MEN", link: "src/images/banner-15.jpg" },
  { text: "WOMEN", link: "src/images/banner-25.jpg" },
];

const Hero = () => {
  const theme = useTheme();
  return (
    <Container>
    <Box  sx={{pt:2, mt: 2.5, display: "flex", alignItems: "center", gap: 2 }}>
        <Swiper
          loop={true}
          className=" mySwiper"
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
        >
          {mySlider.map((item) => {
            return (
              <SwiperSlide key={item.link} className="parent-slider">
                <img src={item.link} alt="" />
                <Box
                  // اكواد ميديا كويري لجعل هذة الخصائص عند الشاشات الاكبر من سمول نحضرها من
                  // material ui ' custmization ' breakpoints
                  sx={{
                    [theme.breakpoints.up("sm")]: {
                      position: "absolute",
                      textAlign: "left",
                      left: "10%",
                    },
                    [theme.breakpoints.down("sm")]: {
                      pt: 4,
                      pb: 6,
                    },
                    [theme.breakpoints.down("md")]: {
                      left: "5%",
                    },
                  }}
                >
                  <Typography variant="h5" sx={{ color: "#222" }}>
                    LIFE STYLE COLLECTION
                  </Typography>
      
                  <Typography
                    variant="h4"
                    sx={{ color: "#222", fontWeight: 400, my: 2 }}
                  >
                    {item.text}
                  </Typography>
      
                  <Stack
                    sx={{ justifyContent: { xs: "center", sm: "left" } }}
                    direction={"row"}
                    alignItems={"center"}
                  >
                    <Typography variant="h5" sx={{ color: "#333", mr: 1 }}>
                      SALE UP TO
                    </Typography>
                    <Typography variant="h5" sx={{ color: "#D23F57" }}>
                      30% OFF
                    </Typography>
                  </Stack>
      
                  <Typography
                    variant="body1"
                    sx={{ color: "#000", my: 1, fontWeight: 300 }}
                  >
                    Get Free shopping on orders over $99.00
                  </Typography>
                  <Button
                    sx={{
                      mx: 5,
                      py: 1,
                      mt: 2,
                      bgcolor: "#222",
                      boxShadow: "0px 4px 16px rgba(43, 52 ,69 , 0.1)",
                      color: "#fff",
                      borderRadius: "1px",
                      "&:hover": {
                        bgcolor: "#151515",
                        boxShadow: "0px 4px 16px rgba(43, 52 ,69 , 0.1)",
                      },
                    }}
                    variant="contained"
                  >
                    {" "}
                    Shop now
                  </Button>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      
        {/* xs:"none" في حالة الشاشات الصغيرة  ========  md:"block" في حالة الشاشات الميديم */}
        <Box sx={{ display: { xs: "none", md: "block", minWidth: "26.6%" } }}>
          <Box sx={{ position: "relative" }}>
            <img width={"100%"} src="src/images/banner-17.jpg" />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                left: 31,
                transform: "translateY(-50%)",
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: "#2B3445", fontSize: "18px" }}
              >
                NEW ARRIVALS
              </Typography>
      
              <Typography
                variant="h6"
                sx={{ color: "#2B3445", lineHeight: "1px", mt: 1 }}
              >
                SUMMER
              </Typography>
              <Typography variant="h6" sx={{ color: "#2B3445" }}>
                SALE 20% OFF
              </Typography>
      
              <Link
                sx={{
                  color: "#2B3445",
                  gap: "5px",
                  display: "flex",
                  alignItems: "center",
                  transition: "0.2s",
                  "&:hover": { color: "#D23F57" },
                }}
                underline="none"
                href="#"
              >
                Shop Now
                <ArrowForwardIcon sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
          <Box sx={{ position: "relative" }}>
            <img width={"100%"} src="src/images/banner-16.jpg" />
            <Stack
              sx={{
                position: "absolute",
                top: "45%",
                left: 28,
                transform: "translateY(-50%)",
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: "#2B3445", fontSize: "18px" }}
              >
                NEW ARRIVALS
              </Typography>
      
              <Typography
                variant="h6"
                sx={{ color: "#2B3445", lineHeight: "1px", mt: 1 }}
              >
                SUMMER
              </Typography>
              <Typography variant="h6" sx={{ color: "#2B3445" }}>
                SALE 20% OFF
              </Typography>
      
              <Link
                sx={{
                  color: "#2B3445",
                  gap: "5px",
                  display: "flex",
                  alignItems: "center",
                  transition: "0.2s",
                  "&:hover": { color: "#D23F57" },
                }}
                underline="none"
                href="#"
              >
                Shop Now
                <ArrowForwardIcon sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
        </Box>
    </Box>

      <IconSection/>
    </Container>
  );
};

export default Hero;
