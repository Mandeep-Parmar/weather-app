import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SunnyIcon from "@mui/icons-material/Sunny";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  let HOT_URL = import.meta.env.VITE_HOT_URL;
  let COLD_URL = import.meta.env.VITE_COLD_URL;
  let RAIN_URL = import.meta.env.VITE_RAIN_URL;

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                  ? HOT_URL
                  : COLD_URL
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city.toUpperCase()}{" "}
              {info.humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 15 ? (
                <SunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "text.secondary" }}
              component={"div"}
              style={{ color: "white", marginTop: "10px" }}
            >
              <p>
                <b>Temperature:</b> {info.temp}&deg;C
              </p>
              <p>
                <b>Humidity:</b> {info.humidity}%
              </p>
              <p>
                <b>Min Temp:</b> {info.tempMin}&deg;C
              </p>
              <p>
                <b>Max Temp:</b> {info.tempMax}&deg;C
              </p>
              <p>
                <b>Weather:</b> <i>{info.weather}</i> (feels like {info.feelsLike}°C)
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
