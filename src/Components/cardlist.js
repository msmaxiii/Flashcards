
import React from "react";
import Flashcard from "./Flashcard";

function Cardlist({ flashcard }) {
  console.log(flashcard);
  return (
    <>
      <h2>Letters: Α Β Γ Δ Ε Ζ Η Θ Ι Κ Λ Μ Ν Ξ Ο Π Ρ Σ Τ Υ Φ Χ Ψ Ω </h2>

      <section className="card-grid">
        {flashcard.map((flashcard) => {
          return <Flashcard flashcard={flashcard} key={flashcard.id} />;
        })}
      </section>
    </>
  );
}

export default Cardlist;