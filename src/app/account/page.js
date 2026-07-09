// app/login/page.jsx

import MobileNavbar from "@/components/common/MobileNavbar/MobileNavbar";
import SidebarLeft from "@/components/common/SidebarLeft/SidebarLeft";
import Account from "@/components/layout/Account/Accout";



export const metadata = {
    title: "Login",
    description: "Login to your account",
};

export default function LoginPage() {
    return (
        <>
            <style
                dangerouslySetInnerHTML={{
                    __html: `
        html, body {
          margin: 0;
          padding: 0;
          height: 100vh;
          width: 100vw;
          overflow: hidden;
          background: #ffffff;
        }

        .app-grid-wrapper {
          display: flex;
          flex-direction: row;
          height: 100vh;
          width: 100vw;
          overflow: hidden;
        }

        .app-grid-wrapper > *:first-child {
          width: 240px;
          flex-shrink: 0;
        }

        /* FIXED: Set vertical scrolling here so the sign-up form is accessible on any screen height */
        .main-content-stream {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: flex-start; /* Aligns to top if layout overflows, otherwise centers via padding */
          background: #ffffff;
          overflow-y: auto;          /* Enables native scroll context for the form */
          height: 100%;
          padding: 00px 0;           /* Gives breathing space at the top and bottom during scrolling */
          box-sizing: border-box;
        }

        /* Fallback alignment helper to keep it perfectly centered if screen real estate allows */
        @media (min-height: 850px) {
          .main-content-stream {
            align-items: center;
          }
        }

        .login-placeholder {
          text-align: center;
          padding: 40px;
        }

        .login-placeholder h1 {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 12px;
          color: #111827;
        }

        .login-placeholder p {
          font-size: 16px;
          color: #6b7280;
        }

        @media (max-width: 768px) {
          .app-grid-wrapper {
            flex-direction: column;
          }

          .app-grid-wrapper > *:first-child {
            display: none !important;
          }

          .main-content-stream {
            height: calc(100vh - 60px);
          }
        }
      `,
                }}
            />

            <div className="app-grid-wrapper">
                <SidebarLeft page="login" />

                <main className="main-content-stream">
                    <Account />
                </main>

                <MobileNavbar />
            </div>
        </>
    );
}