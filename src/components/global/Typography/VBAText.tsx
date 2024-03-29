import { Text, TextProps } from "@chakra-ui/react";

interface Props extends TextProps {
  variant?: "H3b" | "H5b" | "H6" | "H7" | "H8" | "navbar";
}

function VBAText({ variant = "H6", children, ...rest }: Props) {
  const getFontFace = () => {
    switch (variant) {
      case "H3b":
        return {
          fontWeight: 400,
          fontSize: { base: "28px", md: "32px" },
          lineHeight: "42px",
        };
      case "H5b":
        return {
          fontWeight: 600,
          fontSize: { base: "16px", md: "18px" },
          lineHeight: "24px",
        };
      case "H6":
        return {
          fontWeight: 400,
          fontSize: { base: "14px", md: "16px" },
          lineHeight: "21px",
        };
      case "H7":
        return {
          fontWeight: 400,
          fontSize: { base: "12px", md: "14px" },
          lineHeight: "19px",
        };
      case "H8":
        return {
          fontWeight: 400,
          fontSize: { base: "10px", md: "12px" },
          lineHeight: "16px",
        };
      case "navbar":
        return {
          fontWeight: 600,
          fontSize: { base: "14px", md: "16px" },
          lineHeight: "21px",
        };
      default:
        return {
          fontWeight: 400,
          fontSize: { base: "14px", md: "16px" },
          lineHeight: "21px",
        };
    }
  };

  return (
    <Text {...getFontFace()} color="light.500" {...rest}>
      {children}
    </Text>
  );
}

export default VBAText;
