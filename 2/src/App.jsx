import Button from "./button.jsx"

function App() {
  function clicker(){
    console.log("Button Clicked");
  }

  return (
    <>
      <Button text="Click" onclick={clicker}/>
    </>
  )
}

export default App
