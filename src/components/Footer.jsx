import Card from "./Card";
import { Link } from "react-router";

export default function Footer() {
  const cardData = [
    { title: "Space", linkTo: "/space" },
    { title: "Desert", linkTo: "/desert" },
    { title: "Zoo", linkTo: "/zoo" },
    { title: "Sky", linkTo: "/sky" },
    { title: "Qassim Dates", linkTo: "/qassim-dates" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/80 p-4 flex justify-center gap-4 flex-wrap z-[1000] backdrop-blur-sm shadow-lg">
      {cardData.map((data, index) => (
        <Link
          key={index}
          to={data.linkTo}
          className="hover:scale-105 transition-transform duration-200"
        >
          <Card title={data.title} />
        </Link>
      ))}
    </div>
  );
}