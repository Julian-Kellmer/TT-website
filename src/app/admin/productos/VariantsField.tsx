"use client";

import { useState } from "react";

type Variant = { name: string; price: string };

export default function VariantsField({
  initialVariants = [],
}: {
  initialVariants?: { name: string; price: number | null }[];
}) {
  const [variants, setVariants] = useState<Variant[]>(
    initialVariants.map((v) => ({ name: v.name, price: v.price === null ? "" : String(v.price) }))
  );

  function addVariant() {
    setVariants((prev) => [...prev, { name: "", price: "" }]);
  }

  function removeVariant(index: number) {
    setVariants((prev) => prev.filter((_, i) => i !== index));
  }

  function updateVariant(index: number, field: keyof Variant, value: string) {
    setVariants((prev) => prev.map((v, i) => (i === index ? { ...v, [field]: value } : v)));
  }

  return (
    <div className="variants-field">
      {variants.map((variant, index) => (
        <div key={index} className="variant-row">
          <input
            name="variant_name"
            placeholder="Ej: 256GB, 13 pulgadas"
            value={variant.name}
            onChange={(e) => updateVariant(index, "name", e.target.value)}
          />
          <input
            name="variant_price"
            type="number"
            step="0.01"
            min="0"
            placeholder="Precio (opcional)"
            value={variant.price}
            onChange={(e) => updateVariant(index, "price", e.target.value)}
          />
          <button type="button" onClick={() => removeVariant(index)} aria-label="Quitar variante">
            ×
          </button>
        </div>
      ))}
      <button type="button" onClick={addVariant} className="variant-add-btn">
        + Agregar variante
      </button>
      {variants.length === 0 && (
        <p style={{ fontSize: 14, color: "#666", marginTop: 4 }}>
          Sin variantes, el producto usa un único precio.
        </p>
      )}
    </div>
  );
}
