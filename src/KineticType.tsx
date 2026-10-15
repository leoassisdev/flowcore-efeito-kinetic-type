// Adaptado por FlowCore Soluções LTDA · flowcoresolucoes.com.br/codigos
// Original: inspirado em Codrops (Kinetic Typography). Mantenha este crédito.

// Kinetic Type Page Transition — adaptado pela FlowCore Soluções
// Texto cinético com letras voando + transição entre frases.
import { useEffect, useState } from "react";

const PHRASES = ["FlowCore", "Engenharia", "Sistemas", "Resultado"];

const KineticType = () => {
  const [idx, setIdx] = useState(0);
  useEffect(() => { const id = setInterval(() => setIdx((i) => (i + 1) % PHRASES.length), 2200); return () => clearInterval(id); }, []);
  const text = PHRASES[idx];
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#020617", borderRadius: 12, overflow: "hidden", perspective: 1000 }}>
      <h2 key={idx} style={{ display: "flex", gap: 6, fontFamily: "Impact, sans-serif", fontSize: "clamp(48px, 11vw, 110px)", fontWeight: 900, color: "#3FB5FF", margin: 0, lineHeight: 1, textTransform: "uppercase", letterSpacing: "0.02em" }}>
        {text.split("").map((ch, i) => (
          <span key={i} style={{
            display: "inline-block",
            animation: `kt-in 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.05}s both`,
          }}>{ch}</span>
        ))}
      </h2>
      <style>{`@keyframes kt-in{from{opacity:0;transform:translateY(60px) rotateX(-90deg)}to{opacity:1;transform:translateY(0) rotateX(0)}}`}</style>
    </div>
  );
};

export default KineticType;
