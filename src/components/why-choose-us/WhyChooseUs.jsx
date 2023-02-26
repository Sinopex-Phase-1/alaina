import { Button } from "@mui/material";
import React from "react";
import Container from "../layouts/Container";
import SLayout, { STitle } from "../section-layout/SectionLayout";

export default function WhyChooseUs({ children }) {
  return (
    <div>
      <div className="bg-white relative why-choose-us py-5">
        <SLayout>
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-1/3"></div>
            <div className="w-full lg:w-2/3 px-8 lg:px-8 py-4 bg-white/75 backdrop-blur-sm rounded-xl">
              <div className="flex flex-col gap-4 relative mb-4 text-center">
                <STitle>Cleaning With a Conscience</STitle>
                <div className="text-gray-500 text-xl font-bold">
                  Professional Cleaning Services for Home and Office
                </div>
                <div className="text-gray-500">
                  Cleaning can be a chore and we know you have many choices when
                  you consider hiring a maid service. Because of that, we are
                  constantly thriving to improve our already high standards to
                  have you see us as the absolute best in the industry. It’s not
                  enough to have trust in the cleaning crew that you let into
                  your home… you also have to trust that they will perform a
                  first-class cleaning job for you. Putting our employees
                  through a rigorous training program ensures each member of our
                  cleaning team understands their role and how it relates to the
                  overall performance of the team.
                </div>
                <ul className="grid grid-cols-2 justify-evenly text-start space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <i className="fa fa-check text-sky-600"></i>
                    <span>One-off, weekly or fortnightly visits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa fa-check text-sky-600"></i>
                    <span>Vetted & background-checked cleaners</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa fa-check text-sky-600"></i>
                    <span>Keep the same cleaner for every visit</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa fa-check text-sky-600"></i>
                    <span>Book, manage & pay online</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SLayout>
      </div>
      <div className="bg-sky-600 text-white py-5 lg:py-10">
        <Container>
          <div className="flex items-center justify-center flex-wrap gap-16">
            <div className="text-3xl">
              Why Our Customers Choose Us?
              <span className="font-semibold">free estimate</span>
            </div>
            <div>
              <Button
                variant="contained"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  borderRadius: "2rem",
                  color: "#555555",
                  backgroundColor: "#ffffff",
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
                    fill="currentColor"
                  ></path>
                </svg>
                <span>GET FREE ESTIMATE</span>
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
export function Row({ children, className }) {
  return (
    <div
      className={
        "flex flex-wrap lg:flex-nowrap items-start rounded-[2rem] p-3 gap-4 " +
        className
      }
    >
      {children}
    </div>
  );
}
export function Col({ children, order, className }) {
  return (
    <div
      className={
        "w-full lg:w-1/3 max-w-sm mx-auto flex flex-col justify-center " +
        className
      }
    >
      {children}
    </div>
  );
}
export function Box({ children, className }) {
  return (
    <div className={"p-5 flex flex-col gap-3 " + className}>{children}</div>
  );
}
export function Title({ children, className }) {
  return (
    <div className={"font-bold py-2 text-center " + className}>{children}</div>
  );
}
export function Image({ children, className, src }) {
  return (
    <img
      className={"text-xl font-bold " + className}
      src={"images/after-sales-services/" + src}
      alt="services"
    />
  );
}
