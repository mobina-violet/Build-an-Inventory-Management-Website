"use client";

import dynamic from "next/dynamic";

const ProductsChart = dynamic(() => import("./Products-chart"), {
  loading: () => <div className="h-48 animate-pulse bg-gray-100 rounded" />,
  ssr: false,
});

export default ProductsChart;