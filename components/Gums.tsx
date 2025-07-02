"use client"

import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Gums = () => {
  return (
    <div className="w-full bg-gray-50 py-12 mt-14">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary mb-4">Gums and Resins</h1>
        <hr className="border-2 border-primary w-1/3 mx-auto" />
      </div>

      {/* Section 1: Introduction to Gum Arabic */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <Card className="flex flex-col md:flex-row items-center bg-secondary shadow-accent shadow-lg">
          <div className="md:w-1/2 p-6">
            <img
              src="/gum 2.jpg"
              alt="Gum Arabic from Acacia trees"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          <div className="md:w-1/2 p-6">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-primary">
                What is Gum Arabic?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-justify">
                Gum Arabic is a natural exudate from the barks of <em>Acacia senegal</em> or <em>Acacia seyal</em>, both belonging to the Mimosaceous Legumes family. <em>Acacia senegal</em> produces 'hard gum,' while <em>Acacia seyal</em> yields 'flaky gum.' It ranges from pale to orange-brown in color and forms a vitreous substance when ruptured. High-quality gum arabic is round or tear-shaped, with a non-glossy surface. When crushed, it reveals paler, vitreous fragments. Unlike other plant-based gums, gum arabic dissolves easily in water (up to 50%) and has a low viscosity (16ml/g on average for <em>Acacia senegal</em>). It forms a colorless, tasteless solution and is largely non-reactive with other chemical compounds.
              </p>
            </CardContent>
          </div>
        </Card>
      </div>

      {/* Section 2: Properties of Gum Arabic */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <Card className="flex flex-col md:flex-row-reverse items-center bg-secondary shadow-accent shadow-lg">
          <div className="md:w-1/2 p-6">
            <img
              src="/table.png"
              alt="Acacia tree producing gum arabic"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          <div className="md:w-1/2 p-6">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-primary">
                Properties of Gum Arabic
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-justify">
                Gum Arabic is valued for its unique properties, making it a versatile substance in various industries. It dissolves readily in water, creating a stable, colorless, and tasteless solution. Its low viscosity and non-reactive nature make it ideal for applications where stability and compatibility are essential. The gum's ability to form a vitreous, non-glossy surface when dried adds to its appeal in both industrial and food applications.
              </p>
            </CardContent>
          </div>
        </Card>
      </div>

      {/* Section 3: Uses of Gum Arabic */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <Card className="flex flex-col md:flex-row items-center bg-border shadow-accent shadow-lg">
          <div className="md:w-1/2 p-6">
            <img
              src="/gum 1.jpeg"
              alt="Applications of Gum Arabic"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          <div className="md:w-1/2 p-6">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-primary">
                Uses of Gum Arabic
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-justify mb-4">
                Gum Arabic is widely used in various industries and local practices, including:
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Manufacturing ink and adhesives</li>
                <li>Crafts and cosmetic products</li>
                <li>Confectionery and foodstuff, including special meals and chewing gum</li>
                <li>Dietary product with less than 1 calorie per gram, ideal for human consumption</li>
              </ul>
              <p className="text-gray-700 text-justify mt-4">
                In traditional contexts, communities like the Hottentots in southern Africa rely on gums for sustenance, surviving for days on gum alone. Similarly, Moorish populations in northern Africa consume up to 170g daily. Other Acacia species, such as <em>A. gerrardii</em> in Oman and various species in the Kalahari, are also consumed for their nutritional value.
              </p>
            </CardContent>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Gums;