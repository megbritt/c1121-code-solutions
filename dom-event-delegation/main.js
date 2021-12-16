function handleClick(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName', event.target.tagName);

  if (event.target.tagName === 'BUTTON') {
    var close = event.target.closest('.task-list-item');
    console.log('closest .task-list-item', close);
    close.remove();
  }
}

var $click = document.querySelector('.task-list');
$click.addEventListener('click', handleClick);
