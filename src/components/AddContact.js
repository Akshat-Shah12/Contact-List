import "tailwindcss/tailwind.css";
import React, { setState } from "react";
import { render } from "@testing-library/react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };
  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      alert("Please fill all the details");
      return;
    }

    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
    console.log(this.state);
  };
  render() {
    return (
      <div className="p-6 max-w-sm mx-auto items-center">
        <h2>Add Contacts</h2>
        <form onSubmit={this.add}>
          <label className="flex">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="ml-5"
            width="200"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          ></input>
          <label className="flex">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="ml-5"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          ></input>
          <br />
          <button className="ml-1 mt-3 w-20 bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ">
            Add
          </button>
        </form>
      </div>
    );
  }
}
export default AddContact;
