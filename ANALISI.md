# Anàlisi del projecte Mini Pokédex

## Arquitectura de components i serveis
- **HomePage**: pàgina principal amb header, barra de cerca, filtres de tipus i zona de renderitzat de pokémons.
- **Header**: selector entre "All" i "Favorites".
- **SearchBar**: input de cerca amb filtre en temps real.
- **TypeLabels**: botons per filtrar per tipus de Pokémon.
- **RenderZone**: mostra les cartes de Pokémon, aplica filtres i gestiona l'estat de carregament.
- **PokemonCard**: targeta individual de Pokémon amb nom, imatge, tipus i botó de detalls.
- **ProgressBar**: component reutilitzable per mostrar progressos (ex. stats de Pokémon).
- **Spinner**: component de càrrega mentre s’esperen dades de l’API.
- **Serveis/API**: `getPokemons` crida a la PokéAPI per obtenir dades dels primers 50 Pokémon.

## Decisions tècniques preses
- **Gestió de l’estat**:  
  - `useState` i `useEffect` per controlar el filtre de cerca, tipus seleccionat i dades carregades.  
  - Components controlats i estat elevat fins a HomePage quan cal passar-lo a diversos fills.
- **Estils**:  
  - Tailwind CSS per estil ràpid i responsive.  
  - Layout amb **posicionament `relative` i `absolute`** per fer que tot el contingut s’adapti a la imatge de la Pokedex de fons.
- **Routing**:  
  - `react-router-dom` amb `Routes` i `Route`.  
  - Ús de `Outlet` per renderitzar components fills dins del layout principal.
- **Testing**:  
  - `@testing-library/react` amb tests per components bàsics: renderitzat, interacció amb input, filtratge, progress bar, etc.  
  - Mock dels components fills per simplificar els tests de pàgina.

## Possibles millores o funcionalitats futures
- Implementar paginació o lazy loading per més de 50 Pokémon.  
- Afegir favorits persistents amb localStorage o backend.  
- Millorar l’UI amb animacions i detalls visuals.  
- Afegir estadístiques del Pokémon amb la ProgressBar.  
 
