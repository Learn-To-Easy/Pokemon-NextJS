import Logo from "../components/logo";
import SearchBar from "../components/searchBar";
import List from "../components/list";

export default function Home() {
  return (
    <>
      <div className="bg-red-bg">
        <Logo />
        <SearchBar />
        <List />
      </div>
    </>
  );
}
