# Skip Size Selector Component

This project is a responsive React component designed to help users choose skip sizes for waste removal services. It dynamically retrieves real-time data from an external API and displays it in an engaging, card-based interface.

## Tech Stack

- **React** (Functional Components + Hooks)
- **CSS** (custom, no external libraries)
- **Fetch API** for async data retrieval


## Features

- Fetches skip size data dynamically from a public API.
- Displays the data as a set of interactive cards.
- Visually distinguishes selected cards with styling and icons.
- Shows a footer with total price and navigation buttons once a card is selected.
- Fully responsive layout for screens:
  - Below 522px
  - Between 522px – 768px
  - 768px – 1024px
- Warns users when skips are not allowed on public roads.


### Component Structure - `CardComponent.jsx`

#### State Management

- `data`: Holds the fetched skip data.
- `selectedIndex`: Tracks the index of the currently selected card.

#### Lifecycle

- `useEffect` is used to fetch data from the API on component mount.

#### Rendering Logic

- If `data` is empty, shows a loading circle.
- Otherwise, maps over the skip data and renders a card for each entry.
- Displays a `Selected` state and checkmark icon when a card is selected.
- A warning icon appears on skips restricted to private property.
- The bottom sticky footer appears only when a skip is selected.


## Styling (`CardComponent.css`)

### Color

- Consistent use of font sizes and color variables like `#2a2a2a`, `#a38517`.
- Warning text and UI elements use `#c28324` and `#e8d8d8`.

#### Responsive Design

- Cards shrink and stack vertically under 768px and 522px.
- Media queries ensure that margins, font sizes, and footer buttons adapt to smaller screens.
- `.image` has `width: 100%` with `object-fit: cover` to prevent overflow and maintain aspect ratio.
