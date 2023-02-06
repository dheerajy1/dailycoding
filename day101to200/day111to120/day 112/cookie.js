documents.cookie = "key1 = value1; key2 = value2; expires =date";

function delete_cookie(name) {
  document.cookie = name + "=; Path = /;Expires = Thu,01 Jan 2025 00:00:01 GMT";
}
