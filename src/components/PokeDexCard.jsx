import React, { useState, useEffect } from "react";
import axios from "axios";
import PokeCard from "./PokeCard";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";

export default function PokeDex({
  count,
  setCount,
  addCount,
  shuffle,
  shuffleTarget,
  setShuffleTarget
}) {
  const [cards, setCards] = useState([]);
  const [type, setType] = React.useState("Legendary");
  const legendary = [
    "articuno",
    "zapdos",
    "moltres",
    "mewtwo",
    "lugia",
    "ho-oh",
    "raikou",
    "entei",
  ];
  const fire = [
    "typhlosion",
    "arcanine",
    "charizard",
    "magcargo",
    "rapidash",
    "houndoom",
    "flareon",
    "blaziken",
  ];
  const water = [
    "gyarados",
    "starmie",
    "vaporeon",
    "blastoise",
    "totodile",
    "quagsire",
    "tentacruel",
    "kingdra",
  ];
  const ground = [
    "golem",
    "onix",
    "rhydon",
    "donphan",
    "groudon",
    "garchomp",
    "claydol",
    "trapinch",
  ];

  

  const handleChange = (e) => {
    setType(e.target.value);
  };

  useEffect(() => {
    const getPokemon = async (pokemon) => {
    const fetchedCards = [];
      for (let i = 0; i < pokemon.length; i++) {
        try {
          const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${pokemon[i]}/`
          );
          let obj = {
            identifier: response.data.id,
            name: response.data.name,
            type: response.data.types[0].type.name,
            img: response.data.sprites.front_default,
          };

          fetchedCards.push(obj);
        } catch (error) {
          console.error(`Error fetching ${pokemon[i]}:`, error);
        }
      }
      setCards(fetchedCards);
      shuffle(fetchedCards);
      setShuffleTarget(fetchedCards)
    };

    switch (type) {
      case "Legendary":
        getPokemon(legendary);
        setCount(0);
        console.log("Legendary case called");
        break;

      case "Fire":
        getPokemon(fire);
        setCount(0);
        break;

      case "Water":
        getPokemon(water);
        setCount(0);
        break;

      case "Ground":
        getPokemon(ground);
        setCount(0);
        break;
    }
  }, [type]);

  return (
    <>
      <Grid sx={{ maxWidth: '1900px'}}container spacing={2}>
        {cards.map((card) => (
          <>
            <Grid size={4}>
              <PokeCard
                key={card.identifier}
                count={count}
                addCount={addCount}
                setCount={setCount}
                type={card.type}
                name={card.name}
                img={card.img}
              />
            </Grid>
          </>
        ))}
      </Grid>

      <Box sx={{ maxWidth: 140, marginTop: "20px", color: "white" }}>
        <FormControl fullWidth>
          <InputLabel id="typeSelectorLabel">Type</InputLabel>
          <Select
            labelId="typeSelectorLabels"
            id="typeSelector"
            value={type}
            defaultValue="Legendary"
            label="Type"
            onChange={handleChange}
          >
            <MenuItem value={"Legendary"}>Legendary</MenuItem>
            <MenuItem value={"Fire"}>Fire</MenuItem>
            <MenuItem value={"Water"}>Water</MenuItem>
            <MenuItem value={"Ground"}>Ground</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
}
