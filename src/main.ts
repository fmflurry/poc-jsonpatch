import { Address } from "./address.model";
import { Person } from "./person.model";
import { compare } from "fast-json-patch";

const address: Address = {
  street: "123 Main St",
  city: "Anytown",
  state: "CA",
  zip: "12345",
};

const newAddress: Address = {
  street: "456 Elm St",
  city: "Randomtown",
  state: "FL",
  zip: "67890",
};

const john: Person = {
  name: "John Doe",
  age: 30,
  address: address,
};

const patch = compare({}, john);

console.log("👨‍💻 John : ", john);
console.log(" --- ");
console.log("📦 Patch : ", patch);

const updatedJohn = {
  ...john,
  address: newAddress,
};

console.log("〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️");
console.log("👨‍💻 Updated John : ", updatedJohn);
console.log(" --- ");
console.log("📦 Updated Patch : ", compare(john, updatedJohn));
