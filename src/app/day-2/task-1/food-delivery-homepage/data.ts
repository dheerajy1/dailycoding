export type MenuItem = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export type Restaurant = {
  id: number;
  name: string;
  category: string;
  image: string;
  menu: MenuItem[];
};

export const DATA: Restaurant[] = [
  {
    id: 1,
    name: "Biryani House",
    category: "Indian",
    image:
      "https://plus.unsplash.com/premium_photo-1694141252774-c937d97641da?q=80&w=688&auto=format&fit=crop",
    menu: [
      {
        id: "r1-m1",
        name: "Special Chicken Biryani",
        price: 299,
        image:
          "https://plus.unsplash.com/premium_photo-1694141252774-c937d97641da?q=80&w=688&auto=format",
      },
      {
        id: "r1-m2",
        name: "Mutton Dum Biryani",
        price: 399,
        image:
          "https://plus.unsplash.com/premium_photo-1694141252774-c937d97641da?q=80&w=688&auto=format",
      },
    ],
  },
  {
    id: 2,
    name: "Pizza Corner",
    category: "Fast Food",
    image:
      "https://plus.unsplash.com/premium_photo-1673439304183-8840bd0dc1bf?q=80&w=687&auto=format",
    menu: [
      {
        id: "r2-m1",
        name: "Cheese Burst Pizza",
        price: 249,
        image:
          "https://plus.unsplash.com/premium_photo-1673439304183-8840bd0dc1bf?q=80&w=687&auto=format",
      },
      {
        id: "r2-m2",
        name: "Pepperoni Delight",
        price: 319,
        image:
          "https://plus.unsplash.com/premium_photo-1673439304183-8840bd0dc1bf?q=80&w=687&auto=format",
      },
    ],
  },
  {
    id: 3,
    name: "Tandoori Hub",
    category: "Indian",
    image:
      "https://images.unsplash.com/photo-1727280376746-b89107a5b0df?q=80&w=735&auto=format",
    menu: [
      {
        id: "r3-m1",
        name: "Butter Chicken",
        price: 279,
        image:
          "https://images.unsplash.com/photo-1727280376746-b89107a5b0df?q=80&w=735&auto=format",
      },
      {
        id: "r3-m2",
        name: "Tandoori Roti combo",
        price: 149,
        image:
          "https://images.unsplash.com/photo-1727280376746-b89107a5b0df?q=80&w=735&auto=format",
      },
    ],
  },
  {
    id: 4,
    name: "Burger Point",
    category: "Fast Food",
    image:
      "https://plus.unsplash.com/premium_photo-1683619761468-b06992704398?q=80&w=665&auto=format",
    menu: [
      {
        id: "r4-m1",
        name: "Crispy Chicken Burger",
        price: 129,
        image:
          "https://plus.unsplash.com/premium_photo-1683619761468-b06992704398?q=80&w=665&auto=format",
      },
      {
        id: "r4-m2",
        name: "Veggie Supreme Burger",
        price: 99,
        image:
          "https://plus.unsplash.com/premium_photo-1683619761468-b06992704398?q=80&w=665&auto=format",
      },
    ],
  },
  {
    id: 5,
    name: "Healthy Bowl",
    category: "Healthy",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1170&auto=format",
    menu: [
      {
        id: "r5-m1",
        name: "Avocado Salad Bowl",
        price: 199,
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1170&auto=format",
      },
      {
        id: "r5-m2",
        name: "Quinoa Protein Mix",
        price: 229,
        image:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1170&auto=format",
      },
    ],
  },
];
