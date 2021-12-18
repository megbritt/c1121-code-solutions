var $tabContainer = document.querySelector('.tab-container');
var $tabs = document.querySelectorAll('.tab');
var $views = document.querySelectorAll('.view');

function handleViewSwap(event) {
  if (!event.target.matches('.tab')) {
    return;
  }

  for (var tabIndex = 0; tabIndex < $tabs.length; tabIndex++) {
    if ($tabs[tabIndex] === event.target) {
      $tabs[tabIndex].className = 'tab active';
    } else {
      $tabs[tabIndex].className = 'tab';
    }
  }

  var viewName = event.target.getAttribute('data-view');

  for (var viewIndex = 0; viewIndex < $views.length; viewIndex++) {
    if ($views[viewIndex].className !== viewName) {
      $views[viewIndex].className = 'view hidden';
    } else {
      $views[viewIndex].className = 'view';
    }
  }
}

$tabContainer.addEventListener('click', handleViewSwap);
