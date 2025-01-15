import { Footer } from "./components/footer";
import { SearchInputWithKbdDemo } from "./components/search";
import { CarouselDemo } from "./components/carousel";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <SearchInputWithKbdDemo />
        <CarouselDemo />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
