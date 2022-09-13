import React from "react";

export default function Project({ title }) {
  return (
    <div>
      <h3>{title || "Sample Project"}</h3>{" "}
      <img
        src="https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Project Image"
        style={{ width: "400px" }}
      />
      <details>
        <summary>Learn More</summary>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
          placeat repellat reprehenderit totam dolor voluptatum assumenda,
          suscipit reiciendis omnis deserunt doloremque quae ipsum nostrum quas
          cumque iste maxime odio voluptate?
        </p>
      </details>
    </div>
  );
}
