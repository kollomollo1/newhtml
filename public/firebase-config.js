const dbURL = "https://gallery3modifiedjsless-default-rtdb.europe-west1.firebasedatabase.app/images";

async function fetchImages(pendingOnly = false) {
  const res = await fetch(`${dbURL}.json`);
  const data = await res.json();
  if (!data) return [];
  return Object.entries(data)
    .map(([key, val]) => ({ ...val, key }))
    .filter(img => !pendingOnly || img.pending === true);
}

async function uploadImage(imgObj) {
  imgObj.pending = true;
  const res = await fetch(`${dbURL}.json`, {
    method: "POST",
    body: JSON.stringify(imgObj)
  });
  return res.json();
}

async function updateImage(key, updates) {
  return fetch(`${dbURL}/${key}.json`, {
    method: "PATCH",
    body: JSON.stringify(updates)
  });
}

async function deleteImage(key) {
  return fetch(`${dbURL}/${key}.json`, {
    method: "DELETE"
  });
}
