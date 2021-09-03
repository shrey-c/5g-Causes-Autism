import React from "react";
import { Link } from "react-router-dom";

export default function LogOut() {
  return (
    <>
      <h1>Log Out</h1>
      <button type="submit" className="btn btn-primary btn-block">
        <Link to="/">Log Out</Link>
      </button>
    </>
  );
}
