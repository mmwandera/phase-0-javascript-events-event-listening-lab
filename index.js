// Function that binds an event listener in addingEventListener()
function addingEventListener() {
  const input = document.getElementById('input');

  function clickAlert() {
    alert("I'm graduating tomorrow. Look Mama I made it!");
  }

  input.addEventListener('click', clickAlert);
}