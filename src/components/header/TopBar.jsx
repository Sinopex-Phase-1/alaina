import Logo from "./logo/Logo";
import { Container } from "../layouts/Layout";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header({ children }) {
  return (
    <div className="bg-white py-4 border-b-4 border-sky-600">
      <Container>
        <div className={"w-full flex justify-between items-center "}>
          <Logo />
          <div className="hidden lg:block">We are Cleaning Experts!</div>
          <div className="hidden lg:flex gap-2 items-center">
            <i className="fa fa-clock text-sky-600 text-2xl"></i>
            <div>
              8:00am - 10:00pm <br /> Mon - Sun
            </div>
          </div>
          <div className="hidden lg:flex flex-col items-end">
            <div>Call us on:</div>
            <div className="text-2xl font-medium">800-123-4567</div>
          </div>
          <div className="hidden">
            <Link
              className="text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:ring-sky-900/25 font-medium rounded-lg text-sm px-4 py-2 lg:px-4 lg:py-2.5 focus:outline-none capitalize flex items-center gap-2 order-3"
              to="/appointments"
            >
              <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.625 5H0.375C0.167906 5 0 4.83209 0 4.625V3.5C0 2.67156 0.671562 2 1.5 2H3V0.375C3 0.167906 3.16791 0 3.375 0H4.625C4.83209 0 5 0.167906 5 0.375V2H9V0.375C9 0.167906 9.16791 0 9.375 0H10.625C10.8321 0 11 0.167906 11 0.375V2H12.5C13.3284 2 14 2.67156 14 3.5V4.625C14 4.83209 13.8321 5 13.625 5ZM0.375 6H13.625C13.8321 6 14 6.16791 14 6.375V14.5C14 15.3284 13.3284 16 12.5 16H1.5C0.671562 16 0 15.3284 0 14.5V6.375C0 6.16791 0.167906 6 0.375 6ZM10.7905 8.99834L9.91022 8.11091C9.76438 7.96387 9.52694 7.96291 9.37991 8.10878L6.06625 11.3958L4.62937 9.94728C4.48353 9.80025 4.24606 9.79928 4.09903 9.94516L3.21162 10.8255C3.06459 10.9713 3.06363 11.2087 3.2095 11.3558L5.79078 13.9579C5.93662 14.105 6.17406 14.1059 6.32109 13.9601L10.7884 9.52866C10.9354 9.38281 10.9364 9.14537 10.7905 8.99834Z"
                  fill="white"
                ></path>
              </svg>
              <span className="">Get a quote</span>
            </Link>
          </div>
          <Box sx={{ display: "flex", gap: { xs: "0.5rem", sm: "1rem" } }}>
            <Button
              variant="contained"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                borderRadius: "2rem",
                px: { xs: "1rem", sm: "1.5rem" },
                py: { xs: "0rem", sm: "1rem" },
              }}
            >
              <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.625 5H0.375C0.167906 5 0 4.83209 0 4.625V3.5C0 2.67156 0.671562 2 1.5 2H3V0.375C3 0.167906 3.16791 0 3.375 0H4.625C4.83209 0 5 0.167906 5 0.375V2H9V0.375C9 0.167906 9.16791 0 9.375 0H10.625C10.8321 0 11 0.167906 11 0.375V2H12.5C13.3284 2 14 2.67156 14 3.5V4.625C14 4.83209 13.8321 5 13.625 5ZM0.375 6H13.625C13.8321 6 14 6.16791 14 6.375V14.5C14 15.3284 13.3284 16 12.5 16H1.5C0.671562 16 0 15.3284 0 14.5V6.375C0 6.16791 0.167906 6 0.375 6ZM10.7905 8.99834L9.91022 8.11091C9.76438 7.96387 9.52694 7.96291 9.37991 8.10878L6.06625 11.3958L4.62937 9.94728C4.48353 9.80025 4.24606 9.79928 4.09903 9.94516L3.21162 10.8255C3.06459 10.9713 3.06363 11.2087 3.2095 11.3558L5.79078 13.9579C5.93662 14.105 6.17406 14.1059 6.32109 13.9601L10.7884 9.52866C10.9354 9.38281 10.9364 9.14537 10.7905 8.99834Z"
                  fill="white"
                ></path>
              </svg>
              <span>Get a quote</span>
            </Button>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, display: { sm: "none" }, margin: 0 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </div>
      </Container>
    </div>
  );
}
