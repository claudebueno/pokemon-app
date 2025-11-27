// Interface définissant la structure des données Pokémon

export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    other: any;
    front_default: string;
  };
  types: Array<{
    type: {
      name: string;
    };
  }>;
}
