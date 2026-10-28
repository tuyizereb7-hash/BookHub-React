function Navbar() {
  return (
    <nav>
      <h1> 📚 📖   BookHub</h1>

      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Categories</a></li>
        <li><a href="#">About</a></li>
      </ul>

 <input 
        type="text"
        placeholder="Search books..."
      />


      <button>Add Book</button>
    </nav>
  );
}

export default Navbar;