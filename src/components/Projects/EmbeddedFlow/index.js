// import { Button } from "@mui/material";
// import React, { useEffect } from "react";
// import { FacebookProvider } from "react-facebook";
// import ReactPixel from "react-facebook-pixel";

// const EmbeddedFlow = () => {
//   const handleResponse = (response) => {
//     if (response) {
//       const code = response.code;
//       // Transmit the code to your backend for further processing
//       console.log(code, "code");
//     } else {
//       console.log("User cancelled login or did not fully authorize.");
//     }
//   };

//   const launchWhatsAppSignup = () => {
//     // Conversion tracking code
//     ReactPixel.trackCustom("WhatsAppOnboardingStart", {
//       appId: "1485720048670214",
//       feature: "whatsapp_embedded_signup",
//     });
//   };

//   return (
//     <FacebookProvider appId="1485720048670214">
//       <Button
//         onClick={() => {
//           launchWhatsAppSignup();
//         }}
//       >
//         Connect to Facebook
//       </Button>
//     </FacebookProvider>
//   );
// };

// export default EmbeddedFlow;
// import { Button } from "@mui/material";
// import React from "react";
// import { FacebookProvider, LoginButton } from "react-facebook";
// import ReactPixel from "react-facebook-pixel";

// // Function to handle Facebook login response
// const handleResponse = (response) => {
//   if (response && response.code) {
//     const code = response.code;
//     // Transmit the code to your backend for further processing
//     console.log(code, "code");
//   } else {
//     console.log("User cancelled login or did not fully authorize.");
//   }
// };

// // Function to launch WhatsApp signup and track custom event
// const launchWhatsAppSignup = () => {
//   try {
//     // Conversion tracking code
//     ReactPixel.trackCustom("WhatsAppOnboardingStart", {
//       appId: "1485720048670214",
//       feature: "whatsapp_embedded_signup",
//     });
//   } catch (error) {
//     console.error("Error tracking custom event:", error);
//   }
// };

// const EmbeddedFlow = () => {
//   return (
//     <FacebookProvider appId="1485720048670214">
//       <LoginButton
//         scope="public_profile,email"
//         // onResponse={handleResponse}
//         onSuccess={launchWhatsAppSignup}
//         onError={(error) => console.error("Error:", error)}
//       >
//         Connect to Facebook
//       </LoginButton>
//     </FacebookProvider>
//   );
// };

// export default EmbeddedFlow;
import { Box, Button } from "@mui/material";
import React from "react";
import { FacebookProvider, LoginButton } from "react-facebook";
import ReactPixel from "react-facebook-pixel";

const EmbeddedFlow = () => {
  const handleResponse = (response) => {
    if (response && response.authResponse) {
      const code = response.authResponse.code;
      // Transmit the code to your backend for further processing
      console.log(code, "code");
    } else {
      console.log("User cancelled login or did not fully authorize.");
    }
  };
  const launchWhatsAppSignup = () => {
    try {
      // Conversion tracking code
      ReactPixel.trackCustom("WhatsAppOnboardingStart", {
        appId: "1485720048670214",
        feature: "whatsapp_embedded_signup",
      });
    } catch (error) {
      console.error("Error tracking custom event:", error);
    }
  };

  return (
    <FacebookProvider appId="1485720048670214">
      <LoginButton
        scope="public_profile,email"
        onSuccess={handleResponse}
        onError={(error) => console.error("Error:", error)}
      >
        <Box
          onClick={() => {
            launchWhatsAppSignup();
          }}
        >
          Connect to Facebook
        </Box>
      </LoginButton>
    </FacebookProvider>
  );
};

export default EmbeddedFlow;
