import Container from "../layouts/Container";
import { SDes, STitle } from "../section-layout/SectionLayout";
import { Col, Image, Row, Title } from "../what-we-provide/WhatWeProvide";
import SLayout from "../section-layout/SectionLayout";

export default function HowItWorks() {
  return (
    <Container className="pt-10 pb-20">
      <div className="flex flex-col items-center pt-10 text-center">
        <STitle>How It Works</STitle>
        <SDes className="max-w-5xl mx-auto mt-3">
          Taking the stress out of any aspect of cleaning is what we specialise
          in. We will come to your premises and offer a free quote, so you know
          exactly what you’ll be spending
        </SDes>
      </div>
      <Row>
        <Col>
          <div className="w-24 h-24 lg:w-28 lg:h-28 text-50 bg-teal-400 flex justify-center items-center text-white text-2xl font-semibold rounded-full mt-10 mb-3 shadow-lg">
            1
          </div>
          <Title>Book online in 60 seconds</Title>
          <SDes className="text-center">
            Book & pay online. We’ll match you with a trusted, experienced house
            cleaner
          </SDes>
        </Col>
        <Col>
          <div className="w-24 h-24 lg:w-28 lg:h-28 text-50 bg-sky-400 flex justify-center items-center text-white text-2xl font-semibold rounded-full mt-10 mb-3 shadow-lg">
            2
          </div>
          <Title>Get a 5 star cleaner</Title>
          <SDes className="text-center">
            Every cleaner is friendly and reliable. They’ve been
            background-checked & rated 5-stars
          </SDes>
        </Col>
        <Col>
          <div className="w-24 h-24 lg:w-28 lg:h-28 text-50 bg-blue-400 flex justify-center items-center text-white text-2xl font-semibold rounded-full mt-10 mb-3 shadow-lg">
            3
          </div>
          <Title>Manage everything online</Title>
          <SDes className="text-center">
            Add visits, skip visits, leave notes, and book extra services
            laundry, fridge and oven cleaning
          </SDes>
        </Col>
      </Row>
    </Container>
  );
}
