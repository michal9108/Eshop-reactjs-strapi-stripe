import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            KENVO
          </Typography>
          <div>
            Voda, ktorá obmýva naše pobrežia, teplo jej svetla a radosť našich
            ľudí. V KENVO sa chceme podeliť o to najlepšie zo stredomorskej
            esencie, ktorú pestujeme už viac ako 35 rokov. Chuť pre pomalý život
            a zmysel pre detail, ktorý z našich kolekcií pretavujeme do
            nadčasových dizajnov, ktoré sú šetrné k životnému prostrediu.
            Prírodný a súčasný štýl, ktorý nás spája aj pôžitkom z kultúry vo
            všetkých jej podobách.
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            O nás
          </Typography>
          <Typography mb="30px">Kariéra</Typography>
          <Typography mb="30px">Naše obchody</Typography>
          <Typography mb="30px">Obchodné podmienky</Typography>
          <Typography mb="30px">Zásada ochrany osobných údajov</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Služby zákazníkom
          </Typography>
          <Typography mb="30px">Help Centrum</Typography>
          <Typography mb="30px">Sledujte svoju objednávku</Typography>
          <Typography mb="30px">Firemné a hromadné objednávky</Typography>
          <Typography mb="30px">Vrátenie a výmena</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Kontaktujte nás
          </Typography>
          <Typography mb="30px">
            Lužických srbov 1, 974 01 Banská Bystrica
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            Email: info@kenvo.com
          </Typography>
          <Typography mb="30px">(+421)333-4444</Typography>
        </Box>
        <p>© 2022 Made with ❤️| miskokdesi.sk.</p>
      </Box>
     
    </Box>
  );
}

export default Footer;
