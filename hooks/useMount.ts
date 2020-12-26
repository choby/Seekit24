import { useEffect } from "react";

export default (func: () => (void | (() => void))) => useEffect(() => func(), []);