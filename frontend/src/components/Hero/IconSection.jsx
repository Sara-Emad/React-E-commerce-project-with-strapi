import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

const IconSection = () => {

  const theme =useTheme()
  return (
    <Container sx={{ bgcolor:  theme.palette.mode === "dark" ? "#000" : "#fff" , mt:3  }}>
      <Stack
        divider={
          useMediaQuery("(min-width:600px)") ? (
            <Divider orientation="vertical" flexItem />
          ) : null
        }
        sx={{ flexWrap: "wrap" }}
        direction={"row"}
        alignItems={"center"}
      >
        <MyBox
          icon={<ElectricBoltIcon fontSize="large" />}
          title={"Fast Delivery"}
          subtitle={"Start from $10"}
        />
        <MyBox
          icon={<CreditScoreIcon fontSize="large" />}
          title={"Money Guarantee"}
          subtitle={"7 Days Back"}
        />
        <MyBox
          icon={<WorkspacePremiumIcon fontSize="large" />}
          title={"365 Days"}
          subtitle={"For free return "}
        />
        <MyBox
          icon={<AccessAlarmIcon fontSize="large" />}
          title={"payment"}
          subtitle={"secure system"}
        />
      </Stack>
    </Container>
  );
};

export default IconSection;

// eslint-disable-next-line react/prop-types
const MyBox = ({ icon, title, subtitle }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "200px",
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        gap: 3,
        py: 1,
        my: 2,
        // لجعل البوكس في الشمال للشاشات الصغيرة 
        justifyContent:useMediaQuery('(min-width:600px)') ? "center" :"left"}
      }
    >
      {icon}
      <Box>
        <Typography variant="body2">{title}</Typography>
        <Typography
          sx={{ fontWeight: 400, color: theme.palette.text.secondary }}
        >
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};
