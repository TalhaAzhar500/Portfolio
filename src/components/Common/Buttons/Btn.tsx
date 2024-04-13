import { Button } from "@mui/material";

interface ButtonProps {
  text: string;
  onClick: () => void;
  marginRight?: string;
  marginLeft?: string;
  color?: string;
}

const Btn: React.FC<ButtonProps> = ({
  text,
  onClick,
  marginRight,
  marginLeft,
  color,
}) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        border: "none",
        marginRight: marginRight,
        marginLeft: marginLeft,
        marginBottom: "10px",
        fontWeight: "600",
        fontSize: "14px",
        lineHeight: "19.6px",
        height: "40px",
        width: "auto",
        borderRadius: "28px",
        padding: "10px 25px",
        backgroundColor: color,
        color: "#fff",
        "&:hover": {
          backgroundColor: "#fff",
          color: color,
          border: `1px solid ${color}`,
        },
        flexGrow: 1,
        textTransform: "none",
      }}
    >
      {text}
    </Button>
  );
};

export default Btn;
