import { useEffect, useState } from "react";
import { api } from "../api/api";

export default function Shop() {
  const [items, setItems] = useState([]);

  async function load() {
    const { data } = await api.get("/shop");
    setItems(data);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Loja do Dia</h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
        {items.map((s: any) => (
          <div key={s.id} style={{ border: "1px solid #ccc", padding: 10 }}>
            <img src={s.cosmetic.imageUrl} width={100} />
            <h3>{s.cosmetic.name}</h3>
            <p>{s.featured ? "⭐ Destaque" : "Item comum"}</p>
            <b>Preço: R$ {s.price}</b>
          </div>
        ))}
      </div>
    </div>
  );
}
