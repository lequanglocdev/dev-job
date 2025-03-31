// import { GoogleLogin, CredentialResponse } from "@react-oauth/google";

export const Home = () => {
  // const handleLoginSuccess = async (credentialResponse: CredentialResponse) => {
  //   if (!credentialResponse.credential) {
  //     console.error("Không nhận được token từ Google");
  //     return;
  //   }

  //   try {
  //     const res = await fetch("http://localhost:8080/v1/auth/google", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ token: credentialResponse.credential }),
  //     });

  //     const data = await res.json();
  //     console.log("Login success:", data);

  //     // Lưu token vào localStorage hoặc context
  //     localStorage.setItem("accessToken", data.accessToken);
  //   } catch (error) {
  //     console.error("Lỗi khi gửi token lên server:", error);
  //   }
  // };

  // return (
  //   <div>
  //     <GoogleLogin
  //       onSuccess={handleLoginSuccess}
  //       onError={() => {
  //         console.error("Login Failed");
  //       }}
  //     />
  //   </div>
  // );
  return(
    <div>Home</div>
  )
};
