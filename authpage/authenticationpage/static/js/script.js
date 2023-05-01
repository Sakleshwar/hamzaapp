const csrftoken = getCookie('csrftoken');
const headers = { 'X-CSRFToken': csrftoken };
const response = await fetch('/login/', {
  method: 'POST',
  headers: headers,
  body: data
});
