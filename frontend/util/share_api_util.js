export const fetchInShare = id => (
  $.ajax({
    method: "GET",
    url: `api/user/shares/${id}`
  })
);

export const fetchInShares = () => (
  $.ajax({
    method: "GET",
    url: "api/user/shares"
  })
);

export const deleteShare = id => (
  $.ajax({
    method: "DELETE",
    url: `api/charts/${id}`
  })
);

export const createShare = sharee_id => (
  $.ajax({
    method: "POST",
    url: `api/user/shares`,
    data: { sharee_id }
  })
);
