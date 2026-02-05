import Navigation from "./components/Navigation/Navigation";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  return (
    <>
      <Navigation />       {/* Left logo + Right Home About Contact */}
      <main className="main_container">
        <ContactHeader />     {/* CONTACT US heading + paragraph */}
         <ContactForm /> 
      </main>      {/* Via Support Chat + MD MESSAGE icon */}
    </>
  );
}
export default App;