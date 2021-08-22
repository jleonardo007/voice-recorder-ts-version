import { v4 as uuid } from "uuid";

export default function generateKey() {
  return uuid();
}
