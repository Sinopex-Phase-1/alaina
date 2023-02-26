import SLayout, { SDes, SMain, STitle } from "../section-layout/SectionLayout";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div id="about">
      <SLayout className="lg:pb-0 ">
        <SMain>
          <div className="relative w-full overflow-hidden">
            <div className="mb-4 relative border-l-4 pl-3 lg:pl-0 border-green-700 lg:border-none flex justify-center">
              <STitle>Cleaning Services That Shine</STitle>
            </div>
          </div>
        </SMain>
      </SLayout>
    </div>
  );
}
