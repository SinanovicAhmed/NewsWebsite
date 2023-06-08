import { dateFormat } from "../../helpers/dateFormat";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

const styles = {
  color: "white",
  "&:hover": { color: "gray" },
  cursor: "pointer",
};

export const Statusbar: React.FC = () => {
  const date = new Date();
  const formatedDate = dateFormat(date);

  return (
    <div className="w-full h-6 bg-[#222222] px-[20px] md:px-[100px]">
      <div className="w-full h-full max-w-[1200px] flex justify-between items-center mx-auto">
        <p className="font-bolt text-white">-4.5 c New York</p>
        <p className="font-bolt text-white">{formatedDate}</p>
        <div className="hidden md:flex gap-3">
          <FacebookIcon sx={{ ...styles }} />
          <InstagramIcon sx={{ ...styles }} />
          <TwitterIcon sx={{ ...styles }} />
          <YouTubeIcon sx={{ ...styles }} />
        </div>
      </div>
    </div>
  );
};
