import { Heading, HeadingProps } from "@chakra-ui/react";

interface Props extends HeadingProps {
  variant?: "H1" | "H2" | "H3" | "H4" | "H5";
}

function VBAHeading({ variant = "H5", children, ...rest }: Props) {
  const getFontFace = () => {
    switch (variant) {
      case "H1":
        return { fontWeight: 700, fontSize: "56px", lineHeight: "74px" };
      case "H2":
        return { fontWeight: 700, fontSize: "48px", lineHeight: "64px" };
      case "H3":
        return { fontWeight: 600, fontSize: "32px", lineHeight: "42px" };
      case "H4":
        return { fontWeight: 500, fontSize: "24px", lineHeight: "140%" };
      case "H5":
        return { fontWeight: 500, fontSize: "18px", lineHeight: "24px" };
      default:
        return { fontWeight: 500, fontSize: "18px", lineHeight: "24px" };
    }
  };

  return (
    <Heading {...getFontFace()} color="light.500" {...rest}>
      {children}
    </Heading>
  );
}

export default VBAHeading;
