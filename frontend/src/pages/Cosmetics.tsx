import { useEffect, useState } from "react";
import { api } from "../api/api";

export default function Cosmetics() {
  const [items, setItems] = useState([]);

  async function load() {
    const { data } = await api.get("/cosmetics?limit=100");
    setItems(data.items);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Cosméticos</h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
        {items.map((c: any) => (
          <div key={c.id} style={{ border: "1px solid #ccc", padding: 10 }}>
            <img src={c.imageUrl} width={100} />
            <h3>{c.name}</h3>
            <p>{c.rarity}</p>
            <p><b>R$ {c.price}</b></p>
          </div>
        ))}
      </div>
    </div>
  );
}
