tailwind.config = {
  theme: {
    extend: {
      colors: {
        brand: "var(--color-primary)",
        "brand-hover": "var(--color-primary-hover)",
        success: "var(--color-success)",
        danger: "var(--color-danger)",
        surface: "var(--color-bg)",
        card: "var(--color-card)",
        "txt-main": "var(--color-text-main)",
        "txt-muted": "var(--color-text-muted)",
        borderline: "var(--color-border)",
      },
      borderRadius: {
        main: "var(--radius-main)",
        input: "var(--radius-input)",
      },
      boxShadow: {
        subtle: "var(--shadow-subtle)",
      },
    },
  },
};
