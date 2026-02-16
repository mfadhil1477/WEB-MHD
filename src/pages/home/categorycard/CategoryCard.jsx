import { Link } from "react-router-dom";
import "./Category.css"

export default function CategoryCard({ data }) {
  return (
    <Link to={data.path} className="category-card">
      <div className="icon">{data.icon}</div>
      <h3>{data.title}</h3>
      <p>{data.subtitle}</p>
    </Link>
  );
}
